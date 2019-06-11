// SELECT the element we want to manipulate
const listById = document.getElementById("list")
const linksByTags = document.getElementsByTagName("a")
const listByQuerySelector = document.querySelector("#list")
const paragraphsByClassName = document.getElementsByClassName("class-example")
const paragraphsByQuerySelector = document.querySelectorAll(".query-selector-example")

console.log('linksByTags:', linksByTags)
console.log('listById:', listById)
console.log('linksByTags:', linksByTags)
console.log('listByQuerySelector:', listByQuerySelector)
console.log('paragraphsByQuerySelector:', paragraphsByQuerySelector)

// MAKE A NEW DIV DYNAMICALLY
const newDiv = document.createElement('div') // creates this in memory and doesn't add to the DOM yet
console.log('newDiv:', newDiv)
newDiv.textContent = 'Hello world!'
newDiv.classList.add('newClass')
newDiv.classList.remove('newClass')
newDiv.classList.toggle('toggled')
newDiv.setAttribute('style', 'color: red;')
console.log('newDiv', newDiv)

// newDiv.style.background = "blue"
// ----------- EVENTS ----------
const body = document.querySelector("body");
console.log('body', body)

body.addEventListener('click', function() {
  console.log('body was clicked')
})

body.addEventListener('keypress', function(event) {
  console.log(event)
  if (event.key === "k") {
    console.log('k was pressed')
  }
})

document.body.addEventListener('click', function () {
  document.body.appendChild(newDiv)
  });

// body.addEventListener('click', alertFunction);

const button = document.querySelector('button')
console.log('button:', button)

button.addEventListener('click', function (event) {
  console.log(event)
  // Within that object you have access to many useful properties and functions
  // such as which mouse button or key was pressed, or information about the
  // event's target - the DOM node that was clicked.
  // important when using forms
  console.log(event.target)
})

/* --------------------------- EXERCISES --------------------------- */

// SELECT LIST BY ID
const list = document.getElementById('list')
console.log(list)

// list.style.background = 'blue' SELECT LINKS BY TAG NAME
const linksByTagName = document.getElementsByTagName('a')
console.log('linksByTagName:', linksByTagName)

// SELECT LIST USING QUERY SELECTOR
const list2 = document.querySelector('#list')

// SELECT PARAGRAPHS BY CLASS NAME
const paragraphs = document.getElementsByClassName('class-example')

// SELECT PARAGRAPHS BY QUERY SELECTOR MANIPULATE: ADD NEW CLASSNAME TO LINKS
linksByTagName[0]
  .classList
  .add('new-class')

// MANIPULATE: REMOVE NEW CLASSNAME FROM LINKS
linksByTagName[0]
  .classList
  .remove('new-class')

// MANIPULATE: TOGGLE CLASS CALLED ACTIVE MANIPULATE: SET LINK ATTRIBUTES TO
// HAVE A RED COLOUR - INLINE STYLE MAKE A NEW DIV DYNAMICALLY
const newDiv = document.createElement('div')
newDiv.textContent = 'Hellooooo'
document
  .body
  .appendChild(newDiv)
