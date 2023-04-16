
export default class Node {
    constructor(array,parent) {
      this.name = array.shift();
      this.children = [];
      this.parent = parent;
      this.insert(array);
    }

    insert(array){
        
        if (array.length > 0) {
            const nextName = array[0];
            let nextChild = this.children.find(child => child.name === nextName);
            if (!nextChild) {
              this.children.push(new Node(array,this));
            } else { 
              array.shift();
              nextChild.insert(array);
            }
          }
        
    }
    getURL(path){
        path = this.name +"/"+ path;
        if(this.parent!=null){
            this.parent.getURL(path)
        }
        else{
            window.open(path)
        }
    }
    
  }