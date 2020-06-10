document.addEventListener("DOMContentLoaded", function () {
  // navigation
  var nav = document.querySelector(".nav")
  var hamburgerContainer = document.querySelector(".hamburgerContainer")
  var menuDrawer = document.querySelector(".menuDrawer")

  // navigation items on desktop
  var homeListItem = document.getElementById("homeListItem")
  var experienceListItem = document.getElementById("experienceListItem")
  var publicationsListItem = document.getElementById("publicationsListItem")
  var teachingListItem = document.getElementById("teachingListItem")
  var activitiesListItem = document.getElementById("activitiesListItem")
  var rankingsListItem = document.getElementById("rankingsListItem")
  var disclosureListItem = document.getElementById("disclosureListItem")
  var contactListItem = document.getElementById("contactListItem")

  // navigation items on tablet and mobile
  var drawerHomeListItem = document.getElementById("drawerHomeListItem")
  var drawerExperienceListItem = document.getElementById("drawerExperienceListItem")
  var drawerPublicationsListItem = document.getElementById("drawerPublicationsListItem")
  var drawerTeachingListItem = document.getElementById("drawerTeachingListItem")
  var drawerActivitiesListItem = document.getElementById("drawerActivitiesListItem")
  var drawerRankingsListItem = document.getElementById("drawerRankingsListItem")
  var drawerDisclosureListItem = document.getElementById("drawerDisclosureListItem")
  var drawerContactListItem = document.getElementById("drawerContactListItem")

  // content containers
  var homeContainer = document.querySelector(".homeContainer")
  var experienceContainer = document.querySelector(".experienceContainer")
  var publicationsContainer = document.querySelector(".publicationsContainer")
  var teachingContainer = document.querySelector(".teachingContainer")
  var activitiesContainer = document.querySelector(".activitiesContainer")
  var rankingsContainer = document.querySelector(".rankingsContainer")
  var disclosureContainer = document.querySelector(".disclosureContainer")
  var contactContainer = document.querySelector(".contactContainer")

  // event listeners
  nav.addEventListener("click", function (e) {
    changeTab(e, "desktop")
  })
  hamburgerContainer.addEventListener("click", toggleMenuDrawer)
  menuDrawer.addEventListener("click", function (e) {
    changeTab(e, "mobile")
  })

  var ListItemElementDict = {
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
    contact: {
      desktop: contactListItem,
      mobile: drawerContactListItem,
      container: contactContainer,
    },
  }

  // stripped out the switch statement for IE11
  function changeTab(e, viewPortSize) {
    if (e.target.innerText === "Home") {
      handleClassLists("home", viewPortSize)
    } else if (e.target.innerText === "Experience") {
      handleClassLists("experience", viewPortSize)
    } else if (e.target.innerText === "Publications") {
      handleClassLists("publications", viewPortSize)
    } else if (e.target.innerText === "Teaching, Presentations and Speeches") {
      handleClassLists("teaching", viewPortSize)
    } else if (e.target.innerText === "Professional Activities") {
      handleClassLists("activities", viewPortSize)
    } else if (e.target.innerText === "Rankings and Recognition") {
      handleClassLists("rankings", viewPortSize)
    } else if (e.target.innerText === "Arbitrator Disclosure") {
      handleClassLists("disclosure", viewPortSize)
    } else if (e.target.innerText === "Contact") {
      handleClassLists("contact", viewPortSize)
    }
  }

  function toggleMenuDrawer(e) {
    var hamburger = document.querySelector(".hamburger")
    menuDrawer.classList.toggle("open")
    hamburger.classList.toggle("fadedOut")
  }

  function handleClassLists(sectionName, viewPortSize) {
    var selectedDomNodes = document.getElementsByClassName("selected")
    var currentlySelectedElementsArray = []
    var currentlyVisible = document.querySelector(".visible")
    var hamburger = document.querySelector(".hamburger")

    // Stripped out Array.from for IE11
    for (let i = 0; i < selectedDomNodes.length; i++) {
      currentlySelectedElementsArray.push(selectedDomNodes[i])
    }

    // Stripped out forEach for IE11
    for (let i = 0; i < currentlySelectedElementsArray.length; i++) {
      currentlySelectedElementsArray[i].classList.remove("selected")
    }

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
