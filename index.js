document.addEventListener("DOMContentLoaded", () => {
  // navigation
  const nav = document.querySelector(".nav")
  const hamburgerContainer = document.querySelector(".hamburgerContainer")
  const menuDrawer = document.querySelector(".menuDrawer")

  // navigation items on desktop
  const homeListItem = document.getElementById("homeListItem")
  const experienceListItem = document.getElementById("experienceListItem")
  const publicationsListItem = document.getElementById("publicationsListItem")
  const teachingListItem = document.getElementById("teachingListItem")
  const activitiesListItem = document.getElementById("activitiesListItem")
  const rankingsListItem = document.getElementById("rankingsListItem")
  const disclosureListItem = document.getElementById("disclosureListItem")

  // navigation items on tablet and mobile
  const drawerHomeListItem = document.getElementById("drawerHomeListItem")
  const drawerExperienceListItem = document.getElementById(
    "drawerExperienceListItem"
  )
  const drawerPublicationsListItem = document.getElementById(
    "drawerPublicationsListItem"
  )
  const drawerTeachingListItem = document.getElementById(
    "drawerTeachingListItem"
  )
  const drawerActivitiesListItem = document.getElementById(
    "drawerActivitiesListItem"
  )
  const drawerRankingsListItem = document.getElementById(
    "drawerRankingsListItem"
  )
  const drawerDisclosureListItem = document.getElementById(
    "drawerDisclosureListItem"
  )

  // content containers
  const homeContainer = document.querySelector(".homeContainer")
  const experienceContainer = document.querySelector(".experienceContainer")
  const publicationsContainer = document.querySelector(".publicationsContainer")
  const teachingContainer = document.querySelector(".teachingContainer")
  const activitiesContainer = document.querySelector(".activitiesContainer")
  const rankingsContainer = document.querySelector(".rankingsContainer")
  const disclosureContainer = document.querySelector(".disclosureContainer")

  // event listeners
  nav.addEventListener("click", (e) => changeTab(e, "desktop"))
  hamburgerContainer.addEventListener("click", toggleMenuDrawer)
  menuDrawer.addEventListener("click", (e) => changeTab(e, "mobile"))

  function changeTab(e, viewPortSize) {
    const currentlySelectedElements = Array.from(
      document.getElementsByClassName("selected")
    )
    const currentlyVisible = document.querySelector(".visible")
    const hamburger = document.querySelector(".hamburger")
    switch (e.target.innerText) {
      case "Home":
        currentlySelectedElements.forEach((selectedEl) =>
          selectedEl.classList.remove("selected")
        )
        currentlyVisible.classList.remove("visible")
        homeListItem.classList.add("selected")
        drawerHomeListItem.classList.add("selected")
        homeContainer.classList.add("visible")
        menuDrawer.classList.remove("open")
        hamburger.classList.remove("fadedOut")
        window.scrollTo(0, 0)
        break
      case "Experience":
        currentlySelectedElements.forEach((selectedEl) =>
          selectedEl.classList.remove("selected")
        )
        currentlyVisible.classList.remove("visible")
        experienceListItem.classList.add("selected")
        drawerExperienceListItem.classList.add("selected")
        experienceContainer.classList.add("visible")
        menuDrawer.classList.remove("open")
        hamburger.classList.remove("fadedOut")
        window.scrollTo(0, 0)
        break
      case "Publications":
        currentlySelectedElements.forEach((selectedEl) =>
          selectedEl.classList.remove("selected")
        )
        currentlyVisible.classList.remove("visible")
        publicationsListItem.classList.add("selected")
        drawerPublicationsListItem.classList.add("selected")
        publicationsContainer.classList.add("visible")
        menuDrawer.classList.remove("open")
        hamburger.classList.remove("fadedOut")
        window.scrollTo(0, 0)
        break
      case "Teaching, Presentations and Speeches":
        currentlySelectedElements.forEach((selectedEl) =>
          selectedEl.classList.remove("selected")
        )
        currentlyVisible.classList.remove("visible")
        teachingListItem.classList.add("selected")
        drawerTeachingListItem.classList.add("selected")
        teachingContainer.classList.add("visible")
        menuDrawer.classList.remove("open")
        hamburger.classList.remove("fadedOut")
        window.scrollTo(0, 0)
        break
      case "Professional Activities":
        currentlySelectedElements.forEach((selectedEl) =>
          selectedEl.classList.remove("selected")
        )
        currentlyVisible.classList.remove("visible")
        activitiesListItem.classList.add("selected")
        drawerActivitiesListItem.classList.add("selected")
        activitiesContainer.classList.add("visible")
        menuDrawer.classList.remove("open")
        hamburger.classList.remove("fadedOut")
        window.scrollTo(0, 0)
        break
      case "Rankings and Recognition":
        currentlySelectedElements.forEach((selectedEl) =>
          selectedEl.classList.remove("selected")
        )
        currentlyVisible.classList.remove("visible")
        rankingsListItem.classList.add("selected")
        drawerRankingsListItem.classList.add("selected")
        rankingsContainer.classList.add("visible")
        menuDrawer.classList.remove("open")
        hamburger.classList.remove("fadedOut")
        window.scrollTo(0, 0)
        break
      case "Arbitrator Disclosure":
        currentlySelectedElements.forEach((selectedEl) =>
          selectedEl.classList.remove("selected")
        )
        currentlyVisible.classList.remove("visible")
        disclosureListItem.classList.add("selected")
        drawerDisclosureListItem.classList.add("selected")
        disclosureContainer.classList.add("visible")
        menuDrawer.classList.remove("open")
        hamburger.classList.remove("fadedOut")
        window.scrollTo(0, 0)
        break
    }
  }

  function toggleMenuDrawer(e) {
    const hamburger = document.querySelector(".hamburger")
    menuDrawer.classList.toggle("open")
    hamburger.classList.toggle("fadedOut")
  }
})
