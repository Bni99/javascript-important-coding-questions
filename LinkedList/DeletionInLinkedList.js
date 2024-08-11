class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
    }

    addAtTop(data){
        const newNode = new Node(data)
        newNode.next=this.head
        this.head=newNode;
    }

    deleteFromTop(){
        if(!this.head){
            console.log('empty linked list')
        }
        else{
            this.head=this.head.next
        }
    }

    deleteAtEnd(){
        if(!this.head){
            console.log('empty linked list')
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            console.log(current)
        }
    }

    print(){
        let current = this.head;
        console.log("linked list ---->")
        
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const newLinkedList= new LinkedList()
newLinkedList.addAtTop(2)
newLinkedList.addAtTop(3)
newLinkedList.addAtTop(4)
newLinkedList.addAtTop(5)
// newLinkedList.print()
newLinkedList.deleteAtEnd()