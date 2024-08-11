class Node {
    constructor(data){
        this.data=data;
        this.next = null
    }
}


class LinkedList{
  constructor(){
    this.head=null
  }

  traversal(){
    let current = this.head;
    while(current){
        console.log(current.data)
        current=current.next;
    }
  }

    addElementInFront(data){
        const temp = new Node(data)
        temp.next=this.head;
        this.head=temp
    }
}



const newLinkedList = new LinkedList()
newLinkedList.addElementInFront(1)
newLinkedList.addElementInFront(2)
console.log(newLinkedList.traversal())