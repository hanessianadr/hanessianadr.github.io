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

  const ListItemElementDict = {
    home: {
      desktop: homeListItem,
      mobile: drawerHomeListItem,
      container: homeContainer,
    },
    experience: {
      desktop: experienceListItem,
      mobile: drawerExperienceListItem,
      container: experienceContainer,
    },
    publications: {
      desktop: publicationsListItem,
      mobile: drawerPublicationsListItem,
      container: publicationsContainer,
    },
    teaching: {
      desktop: teachingListItem,
      mobile: drawerTeachingListItem,
      container: teachingContainer,
    },
    activities: {
      desktop: activitiesListItem,
      mobile: drawerActivitiesListItem,
      container: activitiesContainer,
    },
    rankings: {
      desktop: rankingsListItem,
      mobile: drawerRankingsListItem,
      container: rankingsContainer,
    },
    disclosure: {
      desktop: disclosureListItem,
      mobile: drawerDisclosureListItem,
      container: disclosureContainer,
    },
  }

  function changeTab(e, viewPortSize) {
    switch (e.target.innerText.trim()) {
      case "Home":
        handleClassLists("home", viewPortSize)
        break
      case "Experience":
        handleClassLists("experience", viewPortSize)
        break
      case "Publications":
        handleClassLists("publications", viewPortSize)
        break
      case "Teaching, Presentations and Speeches":
        handleClassLists("teaching", viewPortSize)
        break
      case "Professional Activities":
        handleClassLists("activities", viewPortSize)
        break
      case "Rankings and Recognition":
        handleClassLists("rankings", viewPortSize)
        break
      case "Arbitrator Disclosure":
        handleClassLists("disclosure", viewPortSize)
        break
    }
  }

  function toggleMenuDrawer(e) {
    const hamburger = document.querySelector(".hamburger")
    menuDrawer.classList.toggle("open")
    hamburger.classList.toggle("fadedOut")
  }

  function handleClassLists(sectionName, viewPortSize) {
    const currentlySelectedElements = Array.from(
      document.getElementsByClassName("selected")
    )
    const currentlyVisible = document.querySelector(".visible")
    const hamburger = document.querySelector(".hamburger")

    currentlySelectedElements.forEach((selectedEl) =>
      selectedEl.classList.remove("selected")
    )
    currentlyVisible.classList.remove("visible")
    ListItemElementDict[sectionName].desktop.classList.add("selected")
    ListItemElementDict[sectionName].mobile.classList.add("selected")
    ListItemElementDict[sectionName].container.classList.add("visible")
    if (viewPortSize === "mobile") {
      menuDrawer.classList.remove("open")
      hamburger.classList.remove("fadedOut")
    }
    window.scrollTo(0, 0)
  }
})
