import { createGraph } from "./createGraph.js";

const findJudge = function (n, trust) {
  const graph = new createGraph();
  for (var i = 0; i < trust.length; i++) {
    graph.addEdge(trust[i][0], trust[i][1]);
  }

  var connections = graph.showConnection();
  var i = 0;
  for (var [key, value] of Object.entries(connections)) {
    console.log(value);
    if (value == "") {
      return key;
    }
    i++;
  }
  return -1;
};

// SC- O(1)
// TC -O(n)

// var trust = [
//   [1, 2],
//   [2, 3],
//   [3, 1],
// ];

// console.log(findJudge(3, trust));
