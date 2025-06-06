// 
// scores.js
// Joshua A. Levine <josh@arizona.edu>
//
// This file includes a Javascript array that contains standardized
// scores for all Calvin College 2004 seniors that have taken both the
// ACT and the SAT, together with their GPAs. There are 271 data points
// and 4 dimensions. 
//
// Originally from: Carlos Scheidegger who
// converted from http://www.calvin.edu/~stob/data/srsatact.csv


// Per point: SATM,SATV,ACT,GPA
var scores = [
 { SATM:430, SATV:470, ACT:15, GPA: 2.239 },
 { SATM:560, SATV:350, ACT:16, GPA: 2.488 },
 { SATM:400, SATV:330, ACT:17, GPA: 2.982 },
 { SATM:410, SATV:450, ACT:17, GPA: 2.155 },
 { SATM:430, SATV:460, ACT:17, GPA: 2.712 },
 { SATM:430, SATV:370, ACT:18, GPA: 1.913 },
 { SATM:440, SATV:450, ACT:18, GPA: 2.953 },
 { SATM:550, SATV:410, ACT:18, GPA: 2.664 },
 { SATM:570, SATV:320, ACT:18, GPA: 2.932 },
 { SATM:370, SATV:480, ACT:19, GPA: 2.67 },
 { SATM:440, SATV:450, ACT:19, GPA: 2.08 },
 { SATM:510, SATV:520, ACT:19, GPA: 2.798 },
 { SATM:540, SATV:470, ACT:19, GPA: 2.796 },
 { SATM:490, SATV:540, ACT:20, GPA: 3.365 },
 { SATM:490, SATV:460, ACT:20, GPA: 2.913 },
 { SATM:490, SATV:500, ACT:20, GPA: 3.044 },
 { SATM:510, SATV:540, ACT:20, GPA: 2.608 },
 { SATM:530, SATV:280, ACT:20, GPA: 1.789 },
 { SATM:510, SATV:460, ACT:21, GPA: 3.202 },
 { SATM:520, SATV:480, ACT:21, GPA: 3.244 },
 { SATM:540, SATV:430, ACT:21, GPA: 3.442 },
 { SATM:560, SATV:430, ACT:21, GPA: 2.716 },
 { SATM:620, SATV:530, ACT:21, GPA: 2.208 },
 { SATM:690, SATV:350, ACT:21, GPA: 3.366 },
 { SATM:410, SATV:600, ACT:22, GPA: 3.153 },
 { SATM:470, SATV:500, ACT:22, GPA: 2.097 },
 { SATM:560, SATV:580, ACT:22, GPA: 3.316 },
 { SATM:580, SATV:490, ACT:22, GPA: 2.507 },
 { SATM:590, SATV:620, ACT:22, GPA: 2.665 },
 { SATM:600, SATV:480, ACT:22, GPA: 3.26 },
 { SATM:650, SATV:490, ACT:22, GPA: 3.409 },
 { SATM:450, SATV:530, ACT:23, GPA: 2.963 },
 { SATM:470, SATV:480, ACT:23, GPA: 2.92 },
 { SATM:480, SATV:570, ACT:23, GPA: 3.025 },
 { SATM:490, SATV:500, ACT:23, GPA: 3.465 },
 { SATM:510, SATV:540, ACT:23, GPA: 3.262 },
 { SATM:520, SATV:530, ACT:23, GPA: 2.075 },
 { SATM:520, SATV:530, ACT:23, GPA: 2.673 },
 { SATM:550, SATV:650, ACT:23, GPA: 3.657 },
 { SATM:550, SATV:590, ACT:23, GPA: 3.326 },
 { SATM:560, SATV:540, ACT:23, GPA: 3.463 },
 { SATM:560, SATV:520, ACT:23, GPA: 3.315 },
 { SATM:570, SATV:570, ACT:23, GPA: 3.183 },
 { SATM:580, SATV:550, ACT:23, GPA: 3.667 },
 { SATM:610, SATV:560, ACT:23, GPA: 3.452 },
 { SATM:610, SATV:630, ACT:23, GPA: 2.528 },
 { SATM:410, SATV:470, ACT:24, GPA: 2.496 },
 { SATM:500, SATV:630, ACT:24, GPA: 2.978 },
 { SATM:520, SATV:630, ACT:24, GPA: 3.19 },
 { SATM:520, SATV:560, ACT:24, GPA: 3.311 },
 { SATM:520, SATV:610, ACT:24, GPA: 3.039 },
 { SATM:540, SATV:560, ACT:24, GPA: 3.487 },
 { SATM:540, SATV:560, ACT:24, GPA: 1.704 },
 { SATM:550, SATV:590, ACT:24, GPA: 3.659 },
 { SATM:580, SATV:520, ACT:24, GPA: 3.441 },
 { SATM:590, SATV:500, ACT:24, GPA: 2.829 },
 { SATM:620, SATV:600, ACT:24, GPA: 3.684 },
 { SATM:630, SATV:490, ACT:24, GPA: 3.319 },
 { SATM:640, SATV:480, ACT:24, GPA: 2.607 },
 { SATM:420, SATV:440, ACT:25, GPA: 2.031 },
 { SATM:480, SATV:520, ACT:25, GPA: 3.564 },
 { SATM:490, SATV:560, ACT:25, GPA: 3.371 },
 { SATM:490, SATV:640, ACT:25, GPA: 3.672 },
 { SATM:510, SATV:520, ACT:25, GPA: 3.698 },
 { SATM:580, SATV:620, ACT:25, GPA: 3.399 },
 { SATM:600, SATV:670, ACT:25, GPA: 3.594 },
 { SATM:620, SATV:560, ACT:25, GPA: 3.146 },
 { SATM:710, SATV:600, ACT:25, GPA: 3.061 },
 { SATM:720, SATV:590, ACT:25, GPA: 3.317 },
 { SATM:730, SATV:600, ACT:25, GPA: 3.613 },
 { SATM:780, SATV:560, ACT:25, GPA: 2.852 },
 { SATM:480, SATV:530, ACT:26, GPA: 2.732 },
 { SATM:490, SATV:560, ACT:26, GPA: 3.522 },
 { SATM:520, SATV:600, ACT:26, GPA: 3.1 },
 { SATM:520, SATV:610, ACT:26, GPA: 3.471 },
 { SATM:520, SATV:640, ACT:26, GPA: 3.631 },
 { SATM:530, SATV:520, ACT:26, GPA: 2.199 },
 { SATM:530, SATV:510, ACT:26, GPA: 3.803 },
 { SATM:550, SATV:700, ACT:26, GPA: 3.48 },
 { SATM:560, SATV:610, ACT:26, GPA: 2.989 },
 { SATM:580, SATV:550, ACT:26, GPA: 3.621 },
 { SATM:580, SATV:550, ACT:26, GPA: 2.784 },
 { SATM:580, SATV:580, ACT:26, GPA: 3.485 },
 { SATM:580, SATV:660, ACT:26, GPA: 3.016 },
 { SATM:580, SATV:540, ACT:26, GPA: 3.695 },
 { SATM:590, SATV:580, ACT:26, GPA: 2.496 },
 { SATM:590, SATV:570, ACT:26, GPA: 3.638 },
 { SATM:620, SATV:570, ACT:26, GPA: 3.03 },
 { SATM:620, SATV:560, ACT:26, GPA: 3.686 },
 { SATM:630, SATV:700, ACT:26, GPA: 3.145 },
 { SATM:630, SATV:610, ACT:26, GPA: 3.222 },
 { SATM:660, SATV:560, ACT:26, GPA: 3.751 },
 { SATM:660, SATV:570, ACT:26, GPA: 3.128 },
 { SATM:690, SATV:600, ACT:26, GPA: 2.513 },
 { SATM:470, SATV:710, ACT:27, GPA: 3.625 },
 { SATM:530, SATV:640, ACT:27, GPA: 3.804 },
 { SATM:540, SATV:630, ACT:27, GPA: 3.105 },
 { SATM:540, SATV:610, ACT:27, GPA: 2.275 },
 { SATM:550, SATV:630, ACT:27, GPA: 3.479 },
 { SATM:560, SATV:520, ACT:27, GPA: 3.222 },
 { SATM:570, SATV:610, ACT:27, GPA: 3.41 },
 { SATM:580, SATV:560, ACT:27, GPA: 3.77 },
 { SATM:600, SATV:540, ACT:27, GPA: 3.646 },
 { SATM:610, SATV:540, ACT:27, GPA: 3.735 },
 { SATM:610, SATV:570, ACT:27, GPA: 3.618 },
 { SATM:610, SATV:670, ACT:27, GPA: 3.167 },
 { SATM:610, SATV:630, ACT:27, GPA: 3.015 },
 { SATM:620, SATV:570, ACT:27, GPA: 3.618 },
 { SATM:620, SATV:570, ACT:27, GPA: 3.254 },
 { SATM:620, SATV:600, ACT:27, GPA: 3.407 },
 { SATM:630, SATV:490, ACT:27, GPA: 3.327 },
 { SATM:650, SATV:600, ACT:27, GPA: 3.204 },
 { SATM:650, SATV:630, ACT:27, GPA: 3.324 },
 { SATM:650, SATV:570, ACT:27, GPA: 3.126 },
 { SATM:670, SATV:540, ACT:27, GPA: 3.58 },
 { SATM:670, SATV:570, ACT:27, GPA: 3.83 },
 { SATM:670, SATV:620, ACT:27, GPA: 3.475 },
 { SATM:670, SATV:460, ACT:27, GPA: 2.048 },
 { SATM:670, SATV:700, ACT:27, GPA: 3.83 },
 { SATM:690, SATV:580, ACT:27, GPA: 3.284 },
 { SATM:720, SATV:650, ACT:27, GPA: 3.934 },
 { SATM:720, SATV:680, ACT:27, GPA: 3.78 },
 { SATM:520, SATV:600, ACT:28, GPA: 3.413 },
 { SATM:530, SATV:560, ACT:28, GPA: 3.502 },
 { SATM:550, SATV:580, ACT:28, GPA: 3.605 },
 { SATM:550, SATV:660, ACT:28, GPA: 3.563 },
 { SATM:570, SATV:590, ACT:28, GPA: 3.127 },
 { SATM:580, SATV:650, ACT:28, GPA: 3.765 },
 { SATM:590, SATV:730, ACT:28, GPA: 3.792 },
 { SATM:590, SATV:720, ACT:28, GPA: 3.847 },
 { SATM:600, SATV:710, ACT:28, GPA: 2.453 },
 { SATM:600, SATV:590, ACT:28, GPA: 3.287 },
 { SATM:600, SATV:660, ACT:28, GPA: 2.452 },
 { SATM:600, SATV:580, ACT:28, GPA: 3.441 },
 { SATM:600, SATV:710, ACT:28, GPA: 3.821 },
 { SATM:610, SATV:530, ACT:28, GPA: 2.976 },
 { SATM:610, SATV:590, ACT:28, GPA: 3.75 },
 { SATM:610, SATV:650, ACT:28, GPA: 2.972 },
 { SATM:610, SATV:630, ACT:28, GPA: 3.647 },
 { SATM:630, SATV:620, ACT:28, GPA: 3.424 },
 { SATM:630, SATV:570, ACT:28, GPA: 3.457 },
 { SATM:660, SATV:630, ACT:28, GPA: 3.66 },
 { SATM:710, SATV:670, ACT:28, GPA: 3.877 },
 { SATM:730, SATV:590, ACT:28, GPA: 3.534 },
 { SATM:540, SATV:630, ACT:29, GPA: 3.594 },
 { SATM:570, SATV:570, ACT:29, GPA: 3.5 },
 { SATM:580, SATV:570, ACT:29, GPA: 3.575 },
 { SATM:580, SATV:620, ACT:29, GPA: 3.03 },
 { SATM:600, SATV:650, ACT:29, GPA: 3.301 },
 { SATM:610, SATV:680, ACT:29, GPA: 2.94 },
 { SATM:610, SATV:650, ACT:29, GPA: 2.738 },
 { SATM:610, SATV:660, ACT:29, GPA: 2.943 },
 { SATM:610, SATV:610, ACT:29, GPA: 2.121 },
 { SATM:620, SATV:630, ACT:29, GPA: 3.665 },
 { SATM:640, SATV:660, ACT:29, GPA: 2.864 },
 { SATM:640, SATV:620, ACT:29, GPA: 3.712 },
 { SATM:640, SATV:690, ACT:29, GPA: 3.319 },
 { SATM:640, SATV:670, ACT:29, GPA: 3.929 },
 { SATM:640, SATV:640, ACT:29, GPA: 3.838 },
 { SATM:650, SATV:630, ACT:29, GPA: 3.649 },
 { SATM:650, SATV:490, ACT:29, GPA: 3.528 },
 { SATM:650, SATV:620, ACT:29, GPA: 2.828 },
 { SATM:660, SATV:640, ACT:29, GPA: 3.464 },
 { SATM:680, SATV:680, ACT:29, GPA: 3.538 },
 { SATM:680, SATV:630, ACT:29, GPA: 3.919 },
 { SATM:690, SATV:620, ACT:29, GPA: 2.827 },
 { SATM:700, SATV:670, ACT:29, GPA: 3.677 },
 { SATM:700, SATV:610, ACT:29, GPA: 2.645 },
 { SATM:710, SATV:640, ACT:29, GPA: 3.898 },
 { SATM:710, SATV:590, ACT:29, GPA: 3.854 },
 { SATM:770, SATV:610, ACT:29, GPA: 2.01 },
 { SATM:550, SATV:650, ACT:30, GPA: 3.134 },
 { SATM:560, SATV:670, ACT:30, GPA: 3.947 },
 { SATM:570, SATV:720, ACT:30, GPA: 3.662 },
 { SATM:570, SATV:670, ACT:30, GPA: 2.983 },
 { SATM:590, SATV:640, ACT:30, GPA: 3.544 },
 { SATM:620, SATV:600, ACT:30, GPA: 2.586 },
 { SATM:640, SATV:600, ACT:30, GPA: 3.707 },
 { SATM:640, SATV:580, ACT:30, GPA: 3.768 },
 { SATM:660, SATV:710, ACT:30, GPA: 3.527 },
 { SATM:660, SATV:680, ACT:30, GPA: 3.344 },
 { SATM:670, SATV:630, ACT:30, GPA: 3.407 },
 { SATM:680, SATV:690, ACT:30, GPA: 3.406 },
 { SATM:680, SATV:670, ACT:30, GPA: 2.925 },
 { SATM:690, SATV:630, ACT:30, GPA: 3.877 },
 { SATM:700, SATV:670, ACT:30, GPA: 3.992 },
 { SATM:700, SATV:760, ACT:30, GPA: 3.975 },
 { SATM:720, SATV:700, ACT:30, GPA: 3.987 },
 { SATM:730, SATV:610, ACT:30, GPA: 3.8 },
 { SATM:730, SATV:730, ACT:30, GPA: 3.989 },
 { SATM:750, SATV:650, ACT:30, GPA: 3.33 },
 { SATM:750, SATV:650, ACT:30, GPA: 3.469 },
 { SATM:590, SATV:660, ACT:31, GPA: 3.236 },
 { SATM:600, SATV:670, ACT:31, GPA: 3.812 },
 { SATM:610, SATV:650, ACT:31, GPA: 3.593 },
 { SATM:640, SATV:710, ACT:31, GPA: 3.745 },
 { SATM:640, SATV:700, ACT:31, GPA: 3.178 },
 { SATM:640, SATV:720, ACT:31, GPA: 3.76 },
 { SATM:660, SATV:780, ACT:31, GPA: 3.737 },
 { SATM:660, SATV:710, ACT:31, GPA: 3.61 },
 { SATM:660, SATV:630, ACT:31, GPA: 3.618 },
 { SATM:660, SATV:610, ACT:31, GPA: 3.794 },
 { SATM:660, SATV:560, ACT:31, GPA: 2.857 },
 { SATM:680, SATV:700, ACT:31, GPA: 3.483 },
 { SATM:690, SATV:750, ACT:31, GPA: 3.811 },
 { SATM:690, SATV:680, ACT:31, GPA: 3.791 },
 { SATM:690, SATV:660, ACT:31, GPA: 3.813 },
 { SATM:690, SATV:630, ACT:31, GPA: 3.954 },
 { SATM:700, SATV:630, ACT:31, GPA: 3.62 },
 { SATM:700, SATV:760, ACT:31, GPA: 3.493 },
 { SATM:700, SATV:640, ACT:31, GPA: 3.912 },
 { SATM:700, SATV:680, ACT:31, GPA: 3.485 },
 { SATM:710, SATV:700, ACT:31, GPA: 3.763 },
 { SATM:720, SATV:630, ACT:31, GPA: 2.707 },
 { SATM:730, SATV:750, ACT:31, GPA: 3.947 },
 { SATM:760, SATV:590, ACT:31, GPA: 3.887 },
 { SATM:770, SATV:650, ACT:31, GPA: 3.988 },
 { SATM:620, SATV:760, ACT:32, GPA: 3.593 },
 { SATM:630, SATV:650, ACT:32, GPA: 3.598 },
 { SATM:650, SATV:720, ACT:32, GPA: 3.941 },
 { SATM:660, SATV:740, ACT:32, GPA: 2.456 },
 { SATM:660, SATV:730, ACT:32, GPA: 3.909 },
 { SATM:660, SATV:690, ACT:32, GPA: 3.909 },
 { SATM:670, SATV:650, ACT:32, GPA: 3.288 },
 { SATM:670, SATV:620, ACT:32, GPA: 3.91 },
 { SATM:690, SATV:700, ACT:32, GPA: 3.78 },
 { SATM:690, SATV:720, ACT:32, GPA: 3.851 },
 { SATM:690, SATV:680, ACT:32, GPA: 3.764 },
 { SATM:690, SATV:750, ACT:32, GPA: 3.823 },
 { SATM:690, SATV:680, ACT:32, GPA: 3.676 },
 { SATM:700, SATV:640, ACT:32, GPA: 2.721 },
 { SATM:700, SATV:700, ACT:32, GPA: 3.942 },
 { SATM:710, SATV:680, ACT:32, GPA: 4 },
 { SATM:710, SATV:750, ACT:32, GPA: 3.943 },
 { SATM:710, SATV:740, ACT:32, GPA: 2.708 },
 { SATM:730, SATV:580, ACT:32, GPA: 3.433 },
 { SATM:760, SATV:720, ACT:32, GPA: 3.784 },
 { SATM:770, SATV:670, ACT:32, GPA: 3.303 },
 { SATM:780, SATV:800, ACT:32, GPA: 3.929 },
 { SATM:800, SATV:750, ACT:32, GPA: 3.653 },
 { SATM:620, SATV:730, ACT:33, GPA: 3.916 },
 { SATM:650, SATV:690, ACT:33, GPA: 3.401 },
 { SATM:680, SATV:720, ACT:33, GPA: 3.824 },
 { SATM:690, SATV:590, ACT:33, GPA: 3.535 },
 { SATM:700, SATV:580, ACT:33, GPA: 3.898 },
 { SATM:710, SATV:730, ACT:33, GPA: 3.643 },
 { SATM:710, SATV:730, ACT:33, GPA: 3.98 },
 { SATM:710, SATV:720, ACT:33, GPA: 3.642 },
 { SATM:710, SATV:630, ACT:33, GPA: 3.874 },
 { SATM:730, SATV:690, ACT:33, GPA: 3.936 },
 { SATM:790, SATV:730, ACT:33, GPA: 3.154 },
 { SATM:800, SATV:630, ACT:33, GPA: 3.925 },
 { SATM:800, SATV:720, ACT:33, GPA: 3.888 },
 { SATM:640, SATV:730, ACT:34, GPA: 3.885 },
 { SATM:640, SATV:670, ACT:34, GPA: 3.536 },
 { SATM:670, SATV:650, ACT:34, GPA: 3.872 },
 { SATM:690, SATV:800, ACT:34, GPA: 3.894 },
 { SATM:700, SATV:800, ACT:34, GPA: 2.534 },
 { SATM:720, SATV:720, ACT:34, GPA: 3.37 },
 { SATM:740, SATV:740, ACT:34, GPA: 3.833 },
 { SATM:750, SATV:800, ACT:34, GPA: 3.944 },
 { SATM:760, SATV:750, ACT:34, GPA: 3.757 },
 { SATM:770, SATV:730, ACT:34, GPA: 3.325 },
 { SATM:790, SATV:710, ACT:34, GPA: 3.928 },
 { SATM:790, SATV:760, ACT:34, GPA: 3.889 },
 { SATM:790, SATV:660, ACT:34, GPA: 3.821 },
 { SATM:800, SATV:680, ACT:34, GPA: 3.765 },
 { SATM:700, SATV:680, ACT:35, GPA: 3.911 },
 { SATM:720, SATV:770, ACT:35, GPA: 3.981 },
 { SATM:750, SATV:730, ACT:35, GPA: 3.882 },
 { SATM:790, SATV:780, ACT:35, GPA: 3.887 }
];
