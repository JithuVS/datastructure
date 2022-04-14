class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        var newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        ++this.size
        return this;
    }


    pop(){
        if(!this.first) return null;
        if(this.first === this.last){
            this.last = null;
        }
        var temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp;
    }

}

var stk = new Stack();
stk.push('A');
stk.push('B');

console.log(stk);