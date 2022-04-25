class BH {
    constructor() {
      this.values = [];
    }
    add(element) {
      this.values.push(element);
      let index = this.values.length - 1;
      const current = this.values[index];
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
  
        if (parent <= current) {
          this.values[parentIndex] = current;
          this.values[index] = parent;
          index = parentIndex;
        } else break;
      }
    }
  
    extractMax(){
      const max = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return max;
    }
  
    sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
  
      while(true){
       let leftchildIdx = 2*idx+1; 
       let rightchildIdx = 2*idx+2;
       let leftchild, rightchild, swap = null;
        
        if(leftchildIdx < length){
         leftchild = this.values[leftchildIdx];
         if(leftchild > element){
           swap = leftchildIdx
         } 
        }
  
        if(rightchildIdx < length){
         rightchild = this.values[rightchildIdx];
         if(rightchild > element && rightchild > leftchild){
           swap = rightchildIdx
         } 
        }
  
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  
  }
  
  let tree = new BH();
  tree.add(3);
  tree.add(4);
  tree.add(31);
  tree.add(6);
  console.log(tree);
  console.log(tree.extractMax());
