document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav")

  const homeListItem = document.getElementById("homeListItem")
  const experienceListItem = document.getElementById("experienceListItem")
  const publicationsListItem = document.getElementById("publicationsListItem")
  const teachingListItem = document.getElementById("teachingListItem")
  const activitiesListItem = document.getElementById("activitiesListItem")
  const rankingsListItem = document.getElementById("rankingsListItem")
  const disclosureListItem = document.getElementById("disclosureListItem")

  const homeContainer = document.querySelector(".homeContainer")
  const experienceContainer = document.querySelector(".experienceContainer")

  nav.addEventListener("click", changeTab)

  function changeTab(e) {
    const currentlySelected = document.querySelector(".selected")
    const currentlyVisible = document.querySelector(".visible")
    switch (e.target.innerText) {
      case "Home":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        homeListItem.classList.add("selected")
        homeContainer.classList.add("visible")
        break
      case "Experience":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        experienceListItem.classList.add("selected")
        experienceContainer.classList.add("visible")
        break
      case "Publications":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        publicationsListItem.classList.add("selected")
        break
      case "Teaching, Presentations and Speeches":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        teachingListItem.classList.add("selected")
        break
      case "Professional Activities":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        activitiesListItem.classList.add("selected")
        break
      case "Rankings and Recognition":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        rankingsListItem.classList.add("selected")
        break
      case "Arbitrator Disclosure":
        currentlySelected.classList.remove("selected")
        currentlyVisible.classList.remove("visible")
        disclosureListItem.classList.add("selected")
        break
    }
  }
})
