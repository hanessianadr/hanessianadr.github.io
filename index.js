document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav")
  const hamburgerContainer = document.querySelector(".hamburgerContainer")

  const homeListItem = document.getElementById("homeListItem")
  const experienceListItem = document.getElementById("experienceListItem")
  const publicationsListItem = document.getElementById("publicationsListItem")
  const teachingListItem = document.getElementById("teachingListItem")
  const activitiesListItem = document.getElementById("activitiesListItem")
  const rankingsListItem = document.getElementById("rankingsListItem")
  const disclosureListItem = document.getElementById("disclosureListItem")

  const homeContainer = document.querySelector(".homeContainer")
  const experienceContainer = document.querySelector(".experienceContainer")
  const publicationsContainer = document.querySelector(".publicationsContainer")
  const teachingContainer = document.querySelector(".teachingContainer")
  const activitiesContainer = document.querySelector(".activitiesContainer")
  const rankingsContainer = document.querySelector(".rankingsContainer")
  const disclosureContainer = document.querySelector(".disclosureContainer")

  nav.addEventListener("click", changeTab)
  hamburgerContainer.addEventListener("click", toggleMenuDrawer)

  function changeTab(e) {
    const currentlySelected = document.querySelector(".selected")
    const currentlyVisible = document.querySelector(".visible")
    switch (e.target.innerText) {
      case "Home":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        homeListItem.classList.add("selected")
        homeContainer.classList.add("visible")
        window.scrollTo(0, 0)
        break
      case "Experience":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        experienceListItem.classList.add("selected")
        experienceContainer.classList.add("visible")
        window.scrollTo(0, 0)
        break
      case "Publications":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        publicationsListItem.classList.add("selected")
        publicationsContainer.classList.add("visible")
        window.scrollTo(0, 0)
        break
      case "Teaching, Presentations and Speeches":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        teachingListItem.classList.add("selected")
        teachingContainer.classList.add("visible")
        window.scrollTo(0, 0)
        break
      case "Professional Activities":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        activitiesListItem.classList.add("selected")
        activitiesContainer.classList.add("visible")
        window.scrollTo(0, 0)
        break
      case "Rankings and Recognition":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        rankingsListItem.classList.add("selected")
        rankingsContainer.classList.add("visible")
        window.scrollTo(0, 0)
        break
      case "Arbitrator Disclosure":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        disclosureListItem.classList.add("selected")
        disclosureContainer.classList.add("visible")
        window.scrollTo(0, 0)
        break
    }
  }

  function toggleMenuDrawer(e) {
    const menuDrawer = document.querySelector(".menuDrawer")
    const hamburger = document.querySelector(".hamburger")
    menuDrawer.classList.toggle("open")
    hamburger.classList.toggle("fadedOut")
  }
})
