// html 
// function for suggestion on filter which behaves like an api
// add handle change with calling suggestion
// toggle css to show n hide the section listing
// append list data

//data
const data = [ "RAM", "SHYAM", "KARAN", "ARJUN" ]
// dom elem
const inp_Elem = document.getElementById("search_input");
const suggestion_Elem = document.getElementById("section_container");
//func
const debounceFunc = (fn, delay = 500) => {
    let clearTimer;
    return function () {
        const self = this;
        const args = arguments;
        clearTimeout(clearTimer)
        clearTimer = setTimeout(() => fn.apply(self, args), delay);
    }
}

const getSuggestion = (str) => {
    // const result = data.filter( i => i.substring(0, str.length).toLowerCase() === str.toLowerCase() );
    const result = data.filter( i => i.toLowerCase().indexOf(str) > -1 );

    if(str && str.length){
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(result)
            }, 1000);
        })
    }
}

const renderList = (arr = []) => {
    const ulElem = document.createElement("ul")
    for( i of arr ){
        const liElem = document.createElement("li")
        liElem.innerHTML = i
        liElem.classList.add("lsit-item")
        ulElem.appendChild(liElem)
        // console.log(divElem, "ii")
        // suggestion_Elem.appendChild(i)
    }
    suggestion_Elem.innerHTML = ""
    suggestion_Elem.appendChild(ulElem)
}

const handleSearch = async (str) => {
   const result = await getSuggestion(str);
   if(result && result.length){
    suggestion_Elem.classList.add("suggestion_wrapper_visible");
    renderList(result)
    // suggestion_Elem.innerHTML = "<h1>Hello</h1>"
} else {
    // suggestion_Elem.innerText = "World"
    suggestion_Elem.classList.remove("suggestion_wrapper_visible");
   }
//    console.log(result, " ressss")
}

const handleChange = async (e) => {
    console.log("clld")
    const value = e.target.value;
    handleSearch(value)
}

(() => {
    // inp_Elem.addEventListener("input", handleChange)
    inp_Elem.addEventListener("input", debounceFunc(handleChange, 1000))
})()
