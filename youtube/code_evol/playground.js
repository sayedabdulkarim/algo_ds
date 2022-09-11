// Built in data structures

/** 
 * Arrays
 * Object
 * Sets
 * Maps
 */

// Custom Data structure

/**
 * Stacks - class 
* Queues - class with Array and objects ( two pointers )
 * Circular Queues
 * Linked List
 * Hash Tables
 * Trees
 * Graphs
 */

/**
 * DS IMPLEMENTATION 
 * 
 * stack - LIFO ( Browser history tracking, undom typing, call stack in js runtime  )
 * operation - push, pop, peek ( get the value of top element without removing it ), isEmpty, size, print
 * 
 * queue - FIFO ( printers, CPU task scheduling, Call back queue in JS runtime )
 * operation - enqueue( add an element ), dequeue ( remove the oldest element from the queue ), peek ( get the value of top element without removing it ), isEmpty, size, print
 * 
 * linkedList - (append( push from back), prepend( add from first ), insert ( insert to a particular index ), remove, reverse ( check again ) )
 * e.g = 10 ==> 16 ==> 20
 * 
 * hashTable 
 * 
 */

// ============================================================================================================

class Linked {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    traverse = (idx) => {
        // let counter = 0;
        let currentNode = this.head

        for(let i=0; i<idx; i++){
            // counter++;
            currentNode = currentNode.next    
        }
        // console.log("currentNode currentNode currentNode")
        // console.log(currentNode, ` I a currentNode at idx = ${idx}`)
        return currentNode
    }   

    append = (value) => {
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length += 1
    }

    prepend(value){
        const newNode = {
            value,
            next: null
        }     
        
        newNode.next = this.head
        this.head = newNode

        this.length += 1
    }

    // 2   10 => 16 => 20
    //  \ /
    //   4

    insert = (idx, value) => {
        
        const newNode = {
            value,
            next: null
        }     

        const prevNode = this.traverse( idx - 1 ) 
        const nextNode = prevNode.next
        
        prevNode.next = newNode
        newNode.next = nextNode
        
        this.length += 1
    }

    delete = (idx) => {
        const prevNode = this.traverse( idx - 1 ) 
        const nextNode = this.traverse( idx + 1 )

        prevNode.next = nextNode

        this.length -= 1
        // console.log(prevNode, " prevNode")
        // console.log(nextNode, " nextNode")
    } 

    print = () => {
        const arr = []

        for(let i=0; i < this.length; i++){
            arr.push(this.traverse(i).value)
        }

        return arr
    }

}


const Link1 = new Linked(2)
Link1.append(4)
Link1.append(10)
// Link1.append(16)
// Link1.append(20)
// Link1.prepend(1)
// Link1.prepend(11)
// Link1.insert(1, "4 - I am inserted at 1st index")
// Link1.traverse(1)
// Link1.append(24)
// Link1.delete(1)
console.log("==================================")
console.log(Link1, " linkkkk")
console.log("==================================")
Link1.print()