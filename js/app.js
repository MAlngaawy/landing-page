// This is the important variables
const navList = document.getElementById("navbar__list")
const sections = document.querySelectorAll("section")

const addAChild = (content, sectionID) => {
  // create teh  li element and it's a tag child
  const listItemElement = document.createElement("li")

  // access the related section
  const relatedSection = document.getElementById(sectionID)

  // add the content to the li element
  listItemElement.innerHTML = content

  // give a spicial id to teh navbar elemnt according to the section id
  listItemElement.id = `navTo${sectionID}`

  // add the created li element to the ul parent
  navList.appendChild(listItemElement)

  // add the click function that scroll to the section
  listItemElement.addEventListener('click', () => {
    relatedSection.scrollIntoView({behavior: "smooth"})

  })
  
}

// create the navbar according to the sections
for(let i = 0; i < sections.length; i++) {
  let content = sections[i].dataset.nav
  let sectionID = sections[i].id

  addAChild(content, sectionID)
}

