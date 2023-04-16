import Node from "./Node.js"

describe('Node', () => {
    describe('constructor', () => {
      it('should create a node with the correct name and children', () => {
        const node = new Node(['parent', 'child1', 'child2']);
        expect(node.name).toEqual('parent');
      });
    });
  
    describe('insert', () => {
      it('should add a new child node if it does not already exist', () => {
        const node = new Node(['parent', 'child1']);
        node.insert(['child2']);
        expect(node.children.length).toEqual(2);
        expect(node.children[1].name).toEqual('child2');
      });
  
      it('should add a new grandchild node if it does not already exist', () => {
        const node = new Node(['parent', 'child1']);
        node.insert(['child1', 'grandchild1']);
        expect(node.children.length).toEqual(1);
        expect(node.children[0].name).toEqual('child1');
        expect(node.children[0].children.length).toEqual(1);
        expect(node.children[0].children[0].name).toEqual('grandchild1');
      });
  
      it('should not add a new node if it already exists', () => {
        const node = new Node(['parent', 'child1']);
        node.insert(['child1']);
        node.insert(['child1']);
        expect(node.children.length).toEqual(1);
        expect(node.children[0].name).toEqual('child1');
      });
    });
  });
  