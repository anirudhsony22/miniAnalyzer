// 
// a02.js
// Anirudha Soni (asoni@arizona.edu)
//




//////////////////////////////////////////////////////////////////////////////
// Global variables, preliminaries to draw the grid

//Comment out one of the following two lines to select a dataset
// let data = iris;
let data = abalone;
// let data = penguins;
// let data = scores;

const width = 950;
const height = width;
const padding = 30;
let attribs = Object.keys(data[0]).filter(d => typeof data[0][d] === "number");
let columns = attribs;
const size = (width - (columns.length + 1) * padding) / columns.length + padding;
const ticks = 20/attribs.length;

const color = d3.scaleOrdinal()
    .domain(data.map(d => d.species))  // Assuming 'species' is a categorical variable
    .range(d3.schemeCategory10);  // You can use other D3 color schemes

data.forEach(d => {
  d.filters = {};
  columns.forEach((x,i) => {
      columns.forEach((y, j) => {
          d.filters[`${i}_${j}`] = true;
      });
  });
});


//const x, y = defining the scale functions for each row/col
//const axisx, const axisy = defining the axis and 
const x = columns.map(c => d3.scaleLinear()
        .domain(d3.extent(data, d => d[c]))
        .rangeRound([padding / 2, size - padding / 2]));

const y = x.map(x => x.copy().range([size - padding / 2, padding / 2]));

const axisx = d3.axisBottom()
      .ticks(ticks)
      .tickSize(size * columns.length);
const axisy = d3.axisLeft()
      .ticks(ticks)
      .tickSize(-size * columns.length);
const xAxis = g => g.selectAll("g").data(x).join("g")
      .attr("transform", (d, i) => `translate(${i * size},0)`)
      .each(function(d) { return d3.select(this).call(axisx.scale(d)); })
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"));
const yAxis = g => g.selectAll("g").data(y).join("g")
      .attr("transform", (d, i) => `translate(0,${i * size})`)
      .each(function(d) { return d3.select(this).call(axisy.scale(d)); })
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"));

const svg = d3.select("#splom").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-padding, 0, width, height])
    .style("border", "1px solid black");

svg.append("style")
    .text(`circle.hidden { fill: #000; fill-opacity: 1; r: 1px; }`);

svg.append("g")
    .call(xAxis);

svg.append("g")
    .call(yAxis);


const cell = svg.append("g")
    .selectAll("g")
    .data(d3.cross(d3.range(columns.length), d3.range(columns.length)))
    .join("g")
    .attr("transform", ([i, j]) => `translate(${i * size},${j * size})`);

cell.append("rect")
    .attr("fill", "none")
    .attr("stroke", "#aaa")
    .attr("x", padding / 2 + 0.5)
    .attr("y", padding / 2 + 0.5)
    .attr("width", size - padding)
    .attr("height", size - padding);

cell.each(function(d, i) {
  const [col, row] = d;  // Destructure the data array
  d3.select(this).call(makeScatterplot, [columns[col], columns[row]], col, row);
});

//Title only for Diagonal Elements
svg.append("g")
    .style("font", "bold 10px sans-serif")
    .style("pointer-events", "none")
    .selectAll("text")
    // .data(columns) // For diagonal ones
    .data(d3.cross(d3.range(columns.length), d3.range(columns.length))) //For all columns
    .join("text")
    .attr("transform", ([i, j]) => `translate(${i * size + padding},${j * size + padding})`)
//     .attr("transform", (d, i) => `translate(${i * size},${i * size})`)
//     .attr("x", padding)
//     .attr("y", padding)
    .attr("dy", ".71em")
    .text(([i, j]) => `${columns[i]} vs ${columns[j]}`);
//     .text(d => d); //For diagonal ones

    


//TODO:DONE: replace with code to create the SVG canvas


//TODO:DONE: add to this code to create the groups and do a data join  
// let groups = cell.selectAll("g")

//TODO:DONE: call makeScatterplot() once per group
// groups.each(function(attrib_pair) {
//   makeScatterplot(d3.select(this), attrib_pair);
// })




//////////////////////////////////////////////////////////////////////////////
// Function to make the scatteplots

function makeScatterplot(selection, attrib_pair, i, j) {
  let [xAttr, yAttr] = attrib_pair;
  let xScale = x[columns.indexOf(xAttr)];
  let yScale = y[columns.indexOf(yAttr)];

  selection.selectAll("circle")
      .data(data.filter(d => !isNaN(d[xAttr]) && !isNaN(d[yAttr])))
      .join("circle")
      .attr("cx", d => xScale(d[xAttr]))
      .attr("cy", d => yScale(d[yAttr]))
      .attr("r", 3.5)
      .attr("fill-opacity", 0.7)
      .attr("fill", d => color(d.species));

  // TODO:DONE For Part 4, you'll have to insert code to define a brush 

  let brush = d3.brush()
    .extent([[padding / 2, padding / 2], [size - padding / 2, size - padding / 2]])
    // .on("start", updateBrush())
    .on("brush", function(event) {updateBrush(event, i, j, xScale, yScale)})
    .on("end", function(event) {brushEnded(event, i, j)});
  
  selection.append("g")
    .attr("class", "brush")
    .call(brush);
  
  //TODO:DONE For Part 2, complete this selection to draw the one circle per
  //data point

  // cell.each(function(d, index) {
  //   const [col, row] = d; // Destructure column and row from the data array
  //   d3.select(this).call(brush);
  // });
}



//////////////////////////////////////////////////////////////////////////////
// Function to for the brush interactions

function redrawPlots() {
  d3.selectAll("circle")
      .classed("hidden", d => !Object.values(d.filters).every(f => f));
}

function updateBrush(event, i, j) {
  if(!event || !event.selection) return;
    if (event.selection) {
      const [[x0, y0], [x1, y1]] = event.selection;
      data.forEach(d => {
        d.filters[`${i}_${j}`] = (
            x0 < x[i](d[columns[i]]) &&
            x1 > x[i](d[columns[i]]) &&
            y0 < y[j](d[columns[j]]) &&
            y1 > y[j](d[columns[j]])
          );
      });
    }
    redrawPlots();
}

function brushEnded(event, i, j) {
  if (!event.selection) {
    data.forEach(d => {
      d.filters[`${i}_${j}`] = true;
    });
    d3.selectAll("circle")
      .classed("hidden", d => !Object.values(d.filters).every(f => f));
    cell.property("value", []).dispatch("input");
    redrawPlots();
  }
}

function onBrush() {
  function isSelected(d) {
    let selected = false;
    //TODO: update the variable "selected" to return true for any circle in
    //the selected ranges
    return selected;
  }

  let allCircles = d3.select("body").selectAll("circle");
  
  //TODO: update the style for selected circles
  let selected = allCircles
    .filter(isSelected)

  //TODO: also filter to update the style for the non-selected circles
}