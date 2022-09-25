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

class HashTable {
    constructor(size) {
        this.table = []
    }

    set = (key, value) => {
        this.table[key] = value
    }

}


const hashTable = new HashTable(3)

hashTable.set("name", " one")
hashTable.set("age", " 12345")
hashTable.set(0987, " 12345")
// hashTable.set("age-ONE", " 12345")
// hashTable.set("age-TWO", " 12345")

console.log(hashTable, " hashTable")