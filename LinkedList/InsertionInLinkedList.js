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

    addFirst(data){
        const newNode = new Node(data)
        newNode.next=this.head
        this.head=newNode 
    }

    addLast(data){
       const newNode = new Node(data)
       if(!this.head){
        this.head=newNode;
       }
       else{
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next=newNode
       }
    }

    length(){
        let current = this.head;
        let counter=0;
        while(current){
          counter++;
          current=current.next
        }
        return counter
    }

    addAt(data,index){
        console.log(this.length())
        if(index<0 || index >this.length()){
            console.log('invalid')
        }
        else{
            let newNode = new Node(data)
            let current = this.head;
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            newNode.next=current.next
            current.next=newNode
        }
    }


}

const newLinkedList = new LinkedList()
// newLinkedList.addFirst(1)
newLinkedList.addFirst(2)
newLinkedList.addLast(3)
newLinkedList.addAt(4,2)
console.log(newLinkedList)