class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => {
        return vertex !== vertex2;
      }
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => {
        return vertex !== vertex1;
      }
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let current = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, current);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRescursive(start) {
    let result = [];
    let visited = {};
    let adacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adacencyList[vertex].forEach((element) => {
        if (!visited[element]) {
          return dfs(element);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    let stack = [];
    let result = [];
    let visited = {};
    let currentVertex;

    stack.push(start);
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          stack.push(element);
        }
      });
    }

    return result;
  }

  breadthFirst(start){
      let queue = [start];
      let result = [];
      let visited = {};
      let currentVertex;

      visited[start] = true;
      while(queue.length){
          currentVertex = queue.shift();
          result.push(currentVertex);

          this.adjacencyList[currentVertex].forEach(element => {
              if(!visited[element]){
                visited[element] = true;
                queue.push(element);
              }
          })
      }
      return result;
  }
}

let grp = new Graph();
grp.addVertex("A");
grp.addVertex("B");
grp.addVertex("C");
grp.addVertex("D");

grp.addEdge("A", "B");
grp.addEdge("B", "C");
grp.addEdge("C", "D");
grp.addEdge("A", "D");
grp.addEdge("B", "D");

console.log(grp);

//grp.removeVertex("D");


console.log('dfsR',grp.depthFirstRescursive('A'));
console.log('dfs',grp.depthFirstIterative('A'));
console.log('bfs', grp.breadthFirst('A'));

