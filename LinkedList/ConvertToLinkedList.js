//making a class to create a node

class Node{
constructor(data){
this.data=data;
this.next=null
}
}




class LinkedList {
    convertToLinkedList(arr){
        let head = new Node(arr[0])
        let mover = head;
        for(let i=1;i<arr.length;i++){
            let temp = new Node(arr[i])
            mover.next=temp
            mover =temp
        }
        return head
    }
}


const newLinkedList = new LinkedList()
console.log(newLinkedList.convertToLinkedList([1,2,3]))



