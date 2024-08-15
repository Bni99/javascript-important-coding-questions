// Find middle element in a Linked List
// Problem Statement: Given the head of a linked list of integers, determine the middle node of the linked list. However, if the linked list has an even number of nodes, return the second middle node.


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

    addAtFirst(data){
      const newNode = new Node(data)
      newNode.next = this.head;
      this.head= newNode
    }

    traverse(){
        let current = this.head
        console.log("linked list ---->")
        while(current){
            console.log(current.data)
            current = current.next
        }
    }

    length(){
        let current = this.head
        let counter =0;
        while(current){
            counter++
            current=current.next
        }
        return counter
    }

    //O(N+N/2)

    getMiddle(){
        let middle = Math.floor((this.length()/2)+1)
        let temp = this.head
     while(temp!==null){
       middle--;
       if(middle===0)break;
       temp=temp.next
    }
   return temp
    }

    getOptimizedMiddle(){
        let slow=this.head
        let fast = this.head
        while(fast!==null && fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        return slow
    }
}

const newLinkedList = new LinkedList()
newLinkedList.addAtFirst(1)
newLinkedList.addAtFirst(2)
newLinkedList.addAtFirst(3)
newLinkedList.addAtFirst(4)
newLinkedList.addAtFirst(5)
newLinkedList.traverse()
console.log(newLinkedList.getMiddle())
console.log(newLinkedList.getOptimizedMiddle())

