class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
}

function processData(input) {
  // Separar las líneas de entrada
  const lines = input.split('\n');

  // Obtener el número de consultas
  const numQueries = parseInt(lines[0]);

  // Crear una instancia de la cola
  const queue = new Queue();

  // Procesar las consultas
  for (let i = 1; i <= numQueries; i++) {
    const query = lines[i].split(' ');

    if (query[0] === '1') {
      const x = parseInt(query[1]);
      queue.enqueue(x);
    } else if (query[0] === '2') {
      queue.dequeue();
    } else if (query[0] === '3') {
      console.log(queue.peek());
    }
  }
}