class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor (){
        this.root = null;
    }

    isEmpty = () => {
        return this.root === null;
        // return this.root === null ? console.log("TRUE") : console.log("FALSE") ;
    }

    //
    insertNode = (root, newNode) => {
        if(newNode.value < root.value) {
            if(root.left == null){
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right == null){
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    // 

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty(value)){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    search = (root, value) => {
        if(root == null){
            return false
        } else if(root.value == value){
            return true
        } else if(value < root.value){
            return this.search(root.left,  value)
        } else return this.search(root.right, value)
    }
 
    preOrder(root){
        var res = []
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value, " root")
            // res.push(root.value)
        }
        // console.log(res, " ressss")
    }
    test = () => {
        console.log(this.root, " check")
    }
}

const binaryOne = new BinarySearchTree()
// binaryOne.isEmpty()
binaryOne.insert(10)
binaryOne.insert(15)
binaryOne.insert(2)
binaryOne.insert(4)
binaryOne.insert(25)
// binaryOne.insert(15)

// binaryOne.test()

binaryOne.preOrder(binaryOne.root)
// console.log(binaryOne.search(binaryOne.root, 2))
// console.log(binaryOne, " binaryOne")