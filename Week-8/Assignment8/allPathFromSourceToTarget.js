import { createGraph } from "./createGraph.js";

var graphIndex = [[4, 3, 1], [3, 2, 4], [3], [4], []];

function creatGraph(graph) {
  const g = new createGraph();
  var len = graph.length - 1;
  for (var i = len; i >= 0; i--) {
    g.addEdgeUni(i, graph[i][0]);
    g.addEdgeUni(i, graph[i][1]);
  }

  return g.showConnection();
}

// console.log(creatGraph(graphIndex));
var graphMain = creatGraph(graphIndex);

const findPathFromSourceAndDestiniy = function (graph, source, destination) {
  var result = [];
  var path = [];
  findPath(source);
  return result;
  function findPath(source) {
    path.push(source);

    if (source == destination) {
      result.push([...path]);
    }

    var nodes = graph[source];
    for (let i = 0; i < nodes.length; i++) {
      findPath(nodes[i]);
    }
    path.pop();
  }
};

// TC - O(n)
// SC -O(n) as we have used new array
console.log(findPathFromSourceAndDestiniy(graphMain, 0, 4));
