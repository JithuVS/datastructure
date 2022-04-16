class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(vertex, priority) {
    this.value.push({ vertex, priority });
    this.sort();
  }

  dequeue() {
    return this.value.shift();
  }

  sort() {
    this.value.sort((a, b) => {
      return a.priority - b.priority;
    });
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    let nodes = new PriorityQueue();
    let distances = [];
    let previous = [];
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] == null;
    }

    while (nodes.value.length) {
      smallest = nodes.dequeue().vertex;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbour];
          let sum = distances[smallest] + nextNode.weight;

          let nextNeighbour = nextNode.node;
          if (sum < distances[nextNeighbour]) {
            distances[nextNeighbour] = sum;
            previous[nextNeighbour] = smallest;
            nodes.enqueue(nextNeighbour, sum);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

let grp = new WeightedGraph();
grp.addVertex("A");
grp.addVertex("B");
grp.addVertex("C");
grp.addVertex("D");
grp.addVertex("E");
grp.addVertex("F");
grp.addVertex("G");

grp.addEdge("A", "B", 4);
grp.addEdge("B", "C", 5);
grp.addEdge("C", "D", 2);
grp.addEdge("D", "E", 4);
grp.addEdge("D", "F", 3);
grp.addEdge("F", "G", 1);

console.log(grp.dijkstra('A','G'));