import { SinglyLinkedList } from "./singly-linked-list";
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
