console.log("Linked main.js");

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/

const sectionEl =document.querySelector(".article__section")
console.log("Contents of  vairable sectionEL, sectionEL")

const footerEl = document.querySelector(".article__footer")
console.log(footerEl)


const smallTextEl = document.querySelector(".smalText")
console.log("Befor changing the console", smallTextEl)
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")
console.log("After changing the console", smallTextEl)