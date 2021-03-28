import { SinglyLinkedList } from "./singly-linked-list";
import { DoublyLinkedList } from "./doubly-linked-list";
import "./styles.css";

const sllDomref = document.getElementById("singly-linkedlist");
const list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
const sllTextNode = document.createTextNode(
  `Singly Linked List Values: [${list.print()}]`
);
sllDomref.appendChild(sllTextNode);

const dlistDomref = document.getElementById("doubly-linkedlist");
const dlist = new DoublyLinkedList();
dlist.push("Harry");
dlist.push("Ron");
dlist.push("Hermione");
dlist.push("Dumbledore");
const dlistTextNode = document.createTextNode(
  `Doubly Linked List Values: [${dlist.print()}]`
);
dlistDomref.appendChild(dlistTextNode);
