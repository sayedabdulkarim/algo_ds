// expect - 10 ==> 16 ==> 20

// defn - 
// 1 - 10 ==> 16 ==> 20 

// 2 - Here we have diffrent nodes which consist of values, and connects with the pointer i.e "==>"

// 3 - !st element is called "HEAD" and last element is called "TAIL"


// structure how we create the " implementation of class Function " 

// const LinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 16,
//             next: {
//                 value: 20,
//                 next: null
//             }
//         }
//     }
// }

/**
 * append
 * prepend
 * insert to a particular position
 */

// implementation

//  class Test {
//     constructor(data){
//         this.head = data
//         this.tail = this.head
//     }
//  }

// const test1 = new Test(680)
// test1.tail = 999
// console.log(test1, " testtt")

class LinkedListOne {

    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    //append ( push to the last )
    append(data) {

        const newNode = {
            value: data,
            next: null
        }
        //        console.log(this.tail, " taill first")    
        this.tail.next = newNode
        //      console.log(this.tail, " taill second")    
        this.tail = newNode
        this.length += 1
    }

    //prepend ( push from the front )
    prepend(data) {
        const newNode = {
            value: data,
            next: null
        }

        newNode.next = this.head
        this.head = newNode
    }

    traversing(idx) {
        let counter = 0;
        let currentNode = this.head

        while (counter != idx) {
            counter++;
            currentNode = currentNode.next
        }
        console.log(counter, " counter")
        console.log(currentNode, " currentNode")
        return currentNode
        // return { counter, currentNode }
    }

    traverse = (idx) => {
        // let counter = 0;
        let currentNode = this.head

        for(let i=0; i<idx; i++){
            // counter++;
            currentNode = currentNode.next    
        }
        // console.log("currentNode currentNode currentNode")
        console.log(currentNode, ` I a currentNode at idx = ${idx}`)
        return currentNode
    }   

        // 2   10 => 16 => 20
        //  \ /
        //   4

    insert(idx, data) {
        
        const newNode = {
            value: data,
            next: null
        }

        // as we have to insert between the two nodes, so here leaderNode represent the 1st node and nextNode represent the second node nd we hv to place the newNode between 1st and 2nd node 

       const leaderNode = this.traversing(idx - 1)
       const nextNode = leaderNode.next
        
       ///
       leaderNode.next = newNode  //
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

}

const one = new LinkedListOne(1)
one.append(11)
one.append(31)
one.insert(1, 21)
// one.traversing(2)
// one.prepend(000)
console.log(one, " oneee")