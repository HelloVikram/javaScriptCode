class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class linkedlist {
    constructor() {
        this.head = null;
    }
    insert_start = function (a) {
        let newnode = new Node(a);
        newnode.next = this.head;
        this.head = newnode;
    }
    insert_end = function (a) {
        const newnode = new Node(a);
        if (this.head == null) {
            this.head = newnode;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newnode;

    }
    insert_index = function (n, a) {
        let newnode = new Node(a);
        if (n === 0) {
            newnode.next = this.head;
            this.head = newnode;
        }
        else {
            let i = 1;
            let temp = this.head;
            while (i < n) {
                temp = temp.next;
                i++;
            }
            newnode.next = temp.next;
            temp.next = newnode;
        }
    }
    deletestart = function () {
        if (this.head == null) {
            return
        }
        else {
            this.head = this.head.next;
        }
    }
    deleteend = function () {
        if (this.head == null)
            return
        else {
            let temp = this.head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            temp.next = temp.next.next;
        }
    }
    deleteindex(n){
        if(n==0){
            this.deletestart();
        }
        else{
            let temp=this.head;
            let i=0;
            while(i<n-1){
                i++;
                temp=temp.next;
            }
            if(temp.next)
            temp.next=temp.next.next;
        }
    }
    display = function () {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}
let list = new linkedlist();
list.insert_start(5);
list.insert_start(6);
list.insert_start(7);
list.insert_end(8);
list.insert_end(9);
list.insert_index(3, 100);
list.insert_index(0, 400);
// list.deleteend();
// list.deletestart();
list.deleteindex(3);
//list.deleteindex(1);
list.display();