///

// implementation

class HashTable {

    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    //
    hash(key) {
        var total = 0;

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    //
    set(key, value) {
        const index = this.hash(key)
        // no name collision
        // this.table[index] = value

        // handling name collision
        const bucket = this.table[index]

        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] == key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    // get
    get(key) {
        const index = this.hash(key)
        // no name collision
        // return this.table[index]

        // handling name collision
        const bucket = this.table[index]
        // const getKeyItem = bucket.find(item => item[0] == key ? console.log(item, " itemm") : console.log("not found") )
        const getKeyItem = bucket?.find(item => item[0] == key  ) 
        // console.log(getKeyItem, " getKeyItem")
        if(getKeyItem) {
            console.log(getKeyItem[1], " getKeyItem")
            // return getKeyItem[1]
        } else {
            console.log(" not found key")
        }
      
        //  console.log(" =================================================")
//        console.log(bucket, " bucket")
  //      console.log(key, " key")
    //    console.log(getKeyItem, " getKeyItem")
        // console.log(index, " index")
        // console.log(this.table, " this.table")
    }

    // remove
    remove(key) {
        const index = this.hash(key)
        // no name collision
        // this.table[index] = undefined
                
        // handling name collision
        const bucket = this.table[index]

        // console.log(getKeyItem, " getKeyItem")
        if(bucket) {
            const getKeyItem = bucket?.find(item => item[0] == key  ) 
            if(getKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
            // return getKeyItem[1]
        } 
    }

    ///
    display() {
        console.log(this.table, " table table")
        console.log(this.size, " size size")
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}


const hashOne = new HashTable(5)

hashOne.set("name", "Abdul")
hashOne.set("age", "25")
hashOne.set(1223, "2512")
// hashOne.set("city", "ODIS")
// hashOne.set("ytic", "BANG")
// hashOne.set("aeg", "2512345")
// hashOne.set("ega", "hello")
// hashOne.set("eag", "hello 2")
// hashOne.set("color", "red")
// hashOne.set("salary", "100000")
// hashOne.set("work", "FSD")

hashOne.get("1223")
hashOne.display()

// console.log(hashOne, " hashhhh")