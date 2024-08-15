class Node{
    constructor(data){
        this.data=data;
        this.right=null
        this.left=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    insert(data){
        const newNode = new Node(data)
     if(!this.root){
         this.root=newNode
     }else{
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
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNewNode(root.right,newNode)
            }
        }
    }

    preOrder(root){
        if(root){  
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }    
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }

    bfs(){
        //just using array for simplicity
        const queue=[]
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
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(12)
bst.insert(7)
bst.insert(6)
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)
bst.bfs()

console.log(bst)

