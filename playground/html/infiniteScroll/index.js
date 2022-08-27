
// 1 -  function to generate random number
// 2 -  create loadImage function to  append img element in the container div
// 3 -  call loadImage function , if the scroll hit the bottom

const URL = "http://api.adorable.io/avatars/"
const containerElem = document.querySelector("#container")

//1 
function generateRandomNum() {
   return Math.floor(Math.random() * 100)
}

//2

function loadImage(num = 10){
    
    for(let i = 1; i<= num; i++){
        const num = generateRandomNum();
        const imgElem = document.createElement("img")
        imgElem.src = `${URL}${num}`
        imgElem.alt = `${num}`
        containerElem.appendChild(imgElem)
    }

}

loadImage(20)

//3
window.addEventListener("scroll", (e) => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImage(10)
    }
    // console.log(window.scrollY, " scrollY", window.innerHeight, " innerHeight")
    // console.log(document.documentElement.scrollHeight, " scrollHeight")
})