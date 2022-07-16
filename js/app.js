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

    items.forEach(item => {
      item.className = ''
    })
    item.className = 'active'

  })

})

// handle the section active class while scrolling

window.addEventListener('scroll', () => {

  // loop for every section while the screen scroll
  sections.forEach(single => {
    // add the positions in a variables
    const height = single.getBoundingClientRect().height
    const top = single.getBoundingClientRect().top
    const bottom = single.getBoundingClientRect().bottom
    // check to add the class if the section in the view
    if(top < height / 2 && bottom > height / 2) {
      single.classList.add('active')
    } else {
      single.classList.remove('active')
    }
  })

})