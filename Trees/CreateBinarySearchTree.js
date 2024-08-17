// You are given an array nodes. It contains 7 integers, which represents the value of nodes of the binary tree in level order traversal. You are also given a root of the tree which has a value equal to nodes[0].

// Your task to construct a binary tree by creating nodes for the remaining 6 nodes.

// Example:

// Input: 
// nodes = [1 2 3 4 5 6 7]
// Output: 
//          1
//        /   \
//      2       3
//    /  \     /  \
//    4  5    6   7
// Explanation: 
// The 7 node binary tree is represented above.


class Node{
    constructor(data){
        this.data=data;
        this.right=null;
        this.left=null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(data){
        const newNode = new Node(data)
        if(!this.root){
            this.root = newNode
        }
        else{
            this.insertNewNode(this.root,newNode)
        }

    }

    insertNewNode(root,newNode){
      if(newNode.data<=root.data){
        if(root.left===null){
            root.left=newNode
        }
        else{
            this.insertNewNode(root.left,newNode)
        }
      }
      else{
        if(root.right===null){
            root.right=newNode
        }
        else{
            this.insertNewNode(root.right,newNode)
        }
      }
    }
}

const bst = new binarySearchTree()
const arr = [1,2,3,4,5,6,7]
for(let i=0;i<arr.length;i++){
    bst.insert(arr[i])
}
console.log(bst)