class Node{
    constructor(data){
        this.data=data;
        this.right=null
        this.left=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root===null
    }

    insert(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.root=newNode
        }
        else{
         this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.data<=root.data){
            if(root.left===null){
                root.left=newNode
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right===null){
                root.right=newNode
            }
            else{
                this.insertNode(root.right,newNode)
            }
        }

    }

    search(root,searchValue){
       
        if(!root){
            return false
        }
        else{
            if(root.data===searchValue){
                return true
            }
            else if(searchValue<=root.data){
                this.search(root.left,searchValue)
            }
            else{
                this.search(root.right,searchValue)
            }
        }
        return false
       
    }
}

const bst= new BinarySearchTree()
console.log(bst.isEmpty())
bst.insert(8)
bst.insert(10)
bst.insert(15)
console.log(bst)
console.log(bst.search(bst.root,12))