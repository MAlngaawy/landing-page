// This is the important variables
const navList = document.getElementById("navbar__list")
const sections = document.querySelectorAll("section")

const addAChild = (content, theID) => {
  // create teh  li element and it's a tag child
  var listItemElement = document.createElement("li")
  var anchorTag = document.createElement("a")
  
  // add the content and the attr to the elements
  anchorTag.href = `#${theID}`
  anchorTag.innerHTML = content

  // add the a element to the li element and add the li element to the ul element
  listItemElement.appendChild(anchorTag)
  navList.appendChild(listItemElement)
}

// create the navbar according to the sections
for(let i = 0; i < sections.length; i++) {
  var content = sections[i].dataset.nav
  var theID = sections[i].id

  addAChild(content, theID)
}
