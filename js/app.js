// This is the important variables
const navList = document.getElementById("navbar__list")
const sections = document.querySelectorAll("section")

const addAChild = (content, sectionID) => {
  // create teh  li element and it's a tag child
  const listItemElement = document.createElement("li")

  // add the content to the li element
  listItemElement.innerHTML = content
  
  // give a spicial id to teh navbar elemnt according to the section id
  listItemElement.dataset.select = `${sectionID}`
  
  // add the created li element to the ul parent
  navList.appendChild(listItemElement)  
}

// create the navbar according to the sections
for(let i = 0; i < sections.length; i++) {
  let content = sections[i].dataset.nav
  let sectionID = sections[i].id

  addAChild(content, sectionID)
}

// access the nav items
const items = document.querySelectorAll("li")

items.forEach(item => {
  item.addEventListener('click', () => {
    // access the related section in a variable
    let relatedSection = document.getElementById(item.dataset.select)
    
    //scroll to the related section
    relatedSection.scrollIntoView({behavior: "smooth"})

    // remove active classes from all the section and add active class to the related section
    sections.forEach(oneSection  => {
      oneSection.className = ''
    })
    relatedSection.className = 'active'

    // remove all active classes from all the items and add it to the clicked item
    items.forEach(item => {
      item.className = ''
    })
    item.className = 'active'

  })

})