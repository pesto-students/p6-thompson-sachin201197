// Implementing creation of graph

class createGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertesis(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdgeBi(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.addVertesis(vertex1);
    }
    if (this.adjacencyList[vertex2]) {
      this.addVertesis(vertex2);
    }
    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertesis(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertesis(vertex2);
    }
    if (vertex2 != undefined) this.adjacencyList[vertex1].push(vertex2);
  }

  addEdgeUni(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertesis(vertex1);
    }
    if (vertex2 != undefined) this.adjacencyList[vertex1].push(vertex2);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (i) => i != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (i) => i != vertex1
    );
  }

  removeVertex(vertex) {
    var nodesConnected = this.adjacencyList[vertex];
    console.log(nodesConnected);
    for (var node of nodesConnected) {
      console.log(node);
      this.adjacencyList[node] = this.adjacencyList[node].filter(
        (i) => i != vertex
      );
    }
    delete this.adjacencyList[vertex];
  }
  showConnection() {
    //  console.log(this.adjacencyList);
    return this.adjacencyList;
  }
}

// const graph = new createGraph();
// graph.addVertesis(1);
// graph.addVertesis(2);
// graph.addVertesis(3);
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(1, 3);
// graph.removeEdge(1, 2);
// //graph.removeVertex(3);
// graph.showConnection();

export { createGraph };
