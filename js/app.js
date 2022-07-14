// This is the important variables
const navList = document.getElementById("navbar__list")
const sections = document.querySelectorAll("section")

const addAChild = (content, sectionID) => {
  // create teh  li element and it's a tag child
  const listItemElement = document.createElement("li")
  const relatedSection = document.getElementById(sectionID)
  // add the content and the attr to the elements
  // anchorTag.href = `#${theID}`
  // anchorTag.innerHTML = content

  // add the a element to the li element and add the li element to the ul element
  listItemElement.innerHTML = content
  listItemElement.id = `navTo${sectionID}`
  listItemElement.addEventListener('click', () => {
    console.log(sectionID)
    relatedSection.scrollIntoView({behavior: "smooth"})

  })
  navList.appendChild(listItemElement)
}

// create the navbar according to the sections
for(let i = 0; i < sections.length; i++) {
  let content = sections[i].dataset.nav
  let sectionID = sections[i].id

  addAChild(content, sectionID)
}

