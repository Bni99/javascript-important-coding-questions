class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
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
                root.left=newNode;
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

    //bfs
    levelTraversal(){
        let queue=[];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    minNode(root){
    if(!root.left){
        return root.data
    }
    else{
       return this.minNode(root.left)
    }
    }

    maxNode(root){
     if(!root.right){
        return root.data
     }
     else{
        return this.maxNode(root.right)
     }
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.levelTraversal()
console.log(bst.minNode(bst.root))
console.log(bst.maxNode(bst.root))