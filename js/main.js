const $agentIconsRow = document.querySelector(".home-icons");
const $filter = document.querySelector(".roles-icons");
const $roleButtons = document.querySelectorAll(".role-icon");
const $agentPageRow = document.querySelector(".agent-pages");
let $agentIcons;
const $bookmarksTab = document.querySelector(".bookmarks-tab");
let resp;

function getAgents() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    if (xhr.response && xhr.response.data) {
      resp = xhr.response.data;
      for (let i = 0; i < resp.length; i++) {
        const $agentIcon = document.createElement("img");
        $agentIcon.setAttribute("src", resp[i].displayIcon);
        $agentIcon.setAttribute("class", "agent-icon");
        $agentIcon.setAttribute("alt", "Agent Icon");
        $agentIcon.classList.add(resp[i].role.displayName.toLowerCase());
        $agentIconsRow.append($agentIcon);

        // character page
        const $agentPage = document.createElement("div");
        $agentPage.setAttribute("class", "row");
        $agentPage.classList.add("agent-page");
        $agentPage.classList.add("hidden");
        const $describedImage = document.createElement("div");
        $describedImage.setAttribute("class", "column-full left");
        const $abilities = document.createElement("div");
        $abilities.setAttribute("class", "column-full right");
        const $bookmarkIcon = document.createElement("i");

        if (data.bookmarkedAgents.includes(i)) {
          $bookmarkIcon.setAttribute(
            "class",
            "fa-solid fa-bookmark fa-bookmark-default"
          );
        } else {
          $bookmarkIcon.setAttribute(
            "class",
            "fa-regular fa-bookmark fa-bookmark-default"
          );
        }

        const $portraitText = document.createElement("div");
        $portraitText.setAttribute("class", "portrait-text");
        const $portrait = document.createElement("img");
        $portrait.setAttribute("src", resp[i].fullPortrait);
        $portrait.setAttribute("class", "agent-portrait");
        $portrait.setAttribute("alt", "Agent Portrait");
        const $name = document.createElement("h1");
        $name.setAttribute("class", "name");
        $name.textContent = resp[i].displayName;
        const $description = document.createElement("p");
        $description.setAttribute("class", "agent-description");
        $description.textContent = resp[i].description;

        const $abilityOne = document.createElement("div");
        $abilityOne.setAttribute("class", "ability");
        const $abilityTwo = document.createElement("div");
        $abilityTwo.setAttribute("class", "ability");
        const $abilityThree = document.createElement("div");
        $abilityThree.setAttribute("class", "ability");
        const $ultimate = document.createElement("div");
        $ultimate.setAttribute("class", "ability");

        const $abilityOneIcon = document.createElement("img");
        $abilityOneIcon.setAttribute("class", "ability-icon");
        $abilityOneIcon.setAttribute("alt", "Ability One Icon");
        $abilityOneIcon.setAttribute("src", resp[i].abilities[0].displayIcon);
        const $abilityTwoIcon = document.createElement("img");
        $abilityTwoIcon.setAttribute("class", "ability-icon");
        $abilityTwoIcon.setAttribute("src", resp[i].abilities[1].displayIcon);
        $abilityTwoIcon.setAttribute("alt", "Ability Two Icon");
        const $abilityThreeIcon = document.createElement("img");
        $abilityThreeIcon.setAttribute("class", "ability-icon");
        $abilityThreeIcon.setAttribute("alt", "Ability Three Icon");
        $abilityThreeIcon.setAttribute("src", resp[i].abilities[2].displayIcon);
        const $ultimateIcon = document.createElement("img");
        $ultimateIcon.setAttribute("class", "ability-icon");
        $ultimateIcon.setAttribute("alt", "Ultimate Icon");
        $ultimateIcon.setAttribute("src", resp[i].abilities[3].displayIcon);

        const $abilityOneName = document.createElement("h2");
        $abilityOneName.textContent = resp[i].abilities[0].displayName;
        const $abilityTwoName = document.createElement("h2");
        $abilityTwoName.textContent = resp[i].abilities[1].displayName;
        const $abilityThreeName = document.createElement("h2");
        $abilityThreeName.textContent = resp[i].abilities[2].displayName;
        const $ultimateName = document.createElement("h2");
        $ultimateName.textContent = resp[i].abilities[3].displayName;

        const $abilityOneDescription = document.createElement("p");
        $abilityOneDescription.textContent = resp[i].abilities[0].description;
        const $abilityTwoDescription = document.createElement("p");
        $abilityTwoDescription.textContent = resp[i].abilities[1].description;
        const $abilityThreeDescription = document.createElement("p");
        $abilityThreeDescription.textContent = resp[i].abilities[2].description;
        const $ultimateDescription = document.createElement("p");
        $ultimateDescription.textContent = resp[i].abilities[3].description;

        const $abilityOneText = document.createElement("div");
        $abilityOneText.setAttribute("class", "ability-text");
        $abilityOneText.append($abilityOneName);
        $abilityOneText.append($abilityOneDescription);
        const $abilityTwoText = document.createElement("div");
        $abilityTwoText.setAttribute("class", "ability-text");
        $abilityTwoText.append($abilityTwoName);
        $abilityTwoText.append($abilityTwoDescription);
        const $abilityThreeText = document.createElement("div");
        $abilityThreeText.setAttribute("class", "ability-text");
        $abilityThreeText.append($abilityThreeName);
        $abilityThreeText.append($abilityThreeDescription);
        const $ultimateText = document.createElement("div");
        $ultimateText.setAttribute("class", "ability-text");
        $ultimateText.append($ultimateName);
        $ultimateText.append($ultimateDescription);

        $portraitText.append($name);
        $portraitText.append($description);

        $abilityOne.append($abilityOneIcon);
        $abilityOne.append($abilityOneText);
        $abilityTwo.append($abilityTwoIcon);
        $abilityTwo.append($abilityTwoText);
        $abilityThree.append($abilityThreeIcon);
        $abilityThree.append($abilityThreeText);
        $ultimate.append($ultimateIcon);
        $ultimate.append($ultimateText);

        $describedImage.append($portrait);
        $describedImage.append($portraitText);

        $abilities.append($abilityOne);
        $abilities.append($abilityTwo);
        $abilities.append($abilityThree);
        $abilities.append($ultimate);

        $agentPage.append($describedImage);
        $agentPage.append($abilities);
        $agentPage.append($bookmarkIcon);

        $agentPageRow.append($agentPage);
      }
    }
  });
  xhr.send();
}

function renderAgentIcon(resp, id) {
  const $agentIcon = document.createElement("img");
  $agentIcon.setAttribute("src", resp[id].displayIcon);
  $agentIcon.setAttribute("class", "bookmarked-agent-icon");
  $agentIcon.setAttribute("dataset", "id");
  $agentIcon.classList.add("bookmarked-icon");
  $agentIcon.dataset.id = id;
  $agentIcon.setAttribute("alt", "Agent Icon");
  $agentIcon.classList.add(resp[id].role.displayName.toLowerCase());

  return $agentIcon;
}

function renderAgentPage(resp, id) {
  const $agentPage = document.createElement("div");
  $agentPage.setAttribute("class", "row");
  $agentPage.classList.add("bookmarked-agent-page");
  $agentPage.classList.add("hidden");
  const $describedImage = document.createElement("div");
  $describedImage.setAttribute("class", "column-full left");
  const $abilities = document.createElement("div");
  $abilities.setAttribute("class", "column-full right");
  const $bookmarkIcon = document.createElement("i");
  $bookmarkIcon.setAttribute("class", "fa-solid fa-bookmark");
  $bookmarkIcon.setAttribute("dataset", "id");
  $bookmarkIcon.dataset.id = id;

  const $portraitText = document.createElement("div");
  $portraitText.setAttribute("class", "portrait-text");
  const $portrait = document.createElement("img");
  $portrait.setAttribute("src", resp[id].fullPortrait);
  $portrait.setAttribute("class", "agent-portrait");
  $portrait.setAttribute("alt", "Agent Portrait");
  const $name = document.createElement("h1");
  $name.setAttribute("class", "name");
  $name.textContent = resp[id].displayName;
  const $description = document.createElement("p");
  $description.setAttribute("class", "agent-description");
  $description.textContent = resp[id].description;

  const $abilityOne = document.createElement("div");
  $abilityOne.setAttribute("class", "ability");
  const $abilityTwo = document.createElement("div");
  $abilityTwo.setAttribute("class", "ability");
  const $abilityThree = document.createElement("div");
  $abilityThree.setAttribute("class", "ability");
  const $ultimate = document.createElement("div");
  $ultimate.setAttribute("class", "ability");

  const $abilityOneIcon = document.createElement("img");
  $abilityOneIcon.setAttribute("class", "ability-icon");
  $abilityOneIcon.setAttribute("alt", "Ability One Icon");
  $abilityOneIcon.setAttribute("src", resp[id].abilities[0].displayIcon);
  const $abilityTwoIcon = document.createElement("img");
  $abilityTwoIcon.setAttribute("class", "ability-icon");
  $abilityTwoIcon.setAttribute("src", resp[id].abilities[1].displayIcon);
  $abilityTwoIcon.setAttribute("alt", "Ability Two Icon");
  const $abilityThreeIcon = document.createElement("img");
  $abilityThreeIcon.setAttribute("class", "ability-icon");
  $abilityThreeIcon.setAttribute("alt", "Ability Three Icon");
  $abilityThreeIcon.setAttribute("src", resp[id].abilities[2].displayIcon);
  const $ultimateIcon = document.createElement("img");
  $ultimateIcon.setAttribute("class", "ability-icon");
  $ultimateIcon.setAttribute("alt", "Ultimate Icon");
  $ultimateIcon.setAttribute("src", resp[id].abilities[3].displayIcon);

  const $abilityOneName = document.createElement("h2");
  $abilityOneName.textContent = resp[id].abilities[0].displayName;
  const $abilityTwoName = document.createElement("h2");
  $abilityTwoName.textContent = resp[id].abilities[1].displayName;
  const $abilityThreeName = document.createElement("h2");
  $abilityThreeName.textContent = resp[id].abilities[2].displayName;
  const $ultimateName = document.createElement("h2");
  $ultimateName.textContent = resp[id].abilities[3].displayName;

  const $abilityOneDescription = document.createElement("p");
  $abilityOneDescription.textContent = resp[id].abilities[0].description;
  const $abilityTwoDescription = document.createElement("p");
  $abilityTwoDescription.textContent = resp[id].abilities[1].description;
  const $abilityThreeDescription = document.createElement("p");
  $abilityThreeDescription.textContent = resp[id].abilities[2].description;
  const $ultimateDescription = document.createElement("p");
  $ultimateDescription.textContent = resp[id].abilities[3].description;

  const $abilityOneText = document.createElement("div");
  $abilityOneText.setAttribute("class", "ability-text");
  $abilityOneText.append($abilityOneName);
  $abilityOneText.append($abilityOneDescription);
  const $abilityTwoText = document.createElement("div");
  $abilityTwoText.setAttribute("class", "ability-text");
  $abilityTwoText.append($abilityTwoName);
  $abilityTwoText.append($abilityTwoDescription);
  const $abilityThreeText = document.createElement("div");
  $abilityThreeText.setAttribute("class", "ability-text");
  $abilityThreeText.append($abilityThreeName);
  $abilityThreeText.append($abilityThreeDescription);
  const $ultimateText = document.createElement("div");
  $ultimateText.setAttribute("class", "ability-text");
  $ultimateText.append($ultimateName);
  $ultimateText.append($ultimateDescription);

  $portraitText.append($name);
  $portraitText.append($description);

  $abilityOne.append($abilityOneIcon);
  $abilityOne.append($abilityOneText);
  $abilityTwo.append($abilityTwoIcon);
  $abilityTwo.append($abilityTwoText);
  $abilityThree.append($abilityThreeIcon);
  $abilityThree.append($abilityThreeText);
  $ultimate.append($ultimateIcon);
  $ultimate.append($ultimateText);

  $describedImage.append($portrait);
  $describedImage.append($portraitText);

  $abilities.append($abilityOne);
  $abilities.append($abilityTwo);
  $abilities.append($abilityThree);
  $abilities.append($ultimate);

  $agentPage.append($describedImage);
  $agentPage.append($abilities);
  $agentPage.append($bookmarkIcon);

  return $agentPage;
}

document.addEventListener("DOMContentLoaded", () => {
  getAgents();
  renderBookmark();
});

$filter.addEventListener("click", () => {
  if (event.target.classList.contains("current")) {
    event.target.classList.remove("current");
    for (let i = 0; i < $roleButtons.length; i++) {
      $roleButtons[i].classList.remove("darken");
    }
    for (let i = 0; i < $agentIcons.length; i++) {
      if (!$agentIcons[i].classList.contains(event.target.id)) {
        $agentIcons[i].classList.remove("hidden");
      }
    }
    return;
  }

  for (let i = 0; i < $roleButtons.length; i++) {
    if ($roleButtons[i].className !== event.target.className) {
      $roleButtons[i].classList.add("darken");
      $roleButtons[i].classList.remove("current");
    } else {
      event.target.classList.remove("darken");
      event.target.classList.add("current");
    }
  }

  $agentIcons = document.querySelectorAll(".agent-icon");
  for (let i = 0; i < $agentIcons.length; i++) {
    if (!$agentIcons[i].classList.contains(event.target.id)) {
      $agentIcons[i].classList.add("hidden");
    } else {
      $agentIcons[i].classList.remove("hidden");
    }
  }
});

let $allIcons;
let $agentPages;
let index;

$agentIconsRow.addEventListener("click", () => {
  $allIcons = document.querySelectorAll(".agent-icon");
  $agentPages = document.querySelectorAll(".agent-page");
  if (!$bookmarksRow.classList.contains("hidden")) {
    $bookmarksRow.classList.add("hidden");
  }
  if (!$filter.classList.contains("hidden")) {
    $filter.classList.add("hidden");
  }
  if (!$agentIconsRow.classList.contains("hidden")) {
    $agentIconsRow.classList.add("hidden");
  }
  if ($agentPageRow.classList.contains("hidden")) {
    $agentPageRow.classList.remove("hidden");
  }
  for (index = 0; index < $allIcons.length; index++) {
    if (event.target === $allIcons[index]) {
      if ($agentPages[index].classList.contains("hidden")) {
        $agentPages[index].classList.remove("hidden");
        return;
      }
    }
  }
});

const $agentsTab = document.querySelector(".agents-tab");

$agentsTab.addEventListener("click", agentTab);

function agentTab() {
  $agentPages = document.querySelectorAll(".agent-page");

  if (!$bookmarksRow.classList.contains("hidden")) {
    $bookmarksRow.classList.add("hidden");
  }
  if ($agentPages[index]) {
    if (!$agentPages[index].classList.contains("hidden")) {
      $agentPages[index].classList.add("hidden");
    }
  }
  $filter.classList.remove("hidden");
  $agentIconsRow.classList.remove("hidden");
  for (let i = 0; i < $allIcons.length; i++) {
    if ($allIcons[i].classList.contains("hidden")) {
      $allIcons[i].classList.remove("hidden");
    }
  }
}

const $logo = document.querySelector(".logo");

$logo.addEventListener("click", () => {
  $agentPages = document.querySelectorAll(".agent-page");

  if (!$bookmarksRow.classList.contains("hidden")) {
    $bookmarksRow.classList.add("hidden");
  }
  if ($agentPages[index]) {
    if (!$agentPages[index].classList.contains("hidden")) {
      $agentPages[index].classList.add("hidden");
    }
  }
  $filter.classList.remove("hidden");
  $agentIconsRow.classList.remove("hidden");
  for (let i = 0; i < $allIcons.length; i++) {
    if ($allIcons[i].classList.contains("hidden")) {
      $allIcons[i].classList.remove("hidden");
    }
  }
});

const $bookmarkedIconsRow = document.querySelector(".bookmarked-agent-icons");
const $bookmarkedPagesRow = document.querySelector(".bookmarked-agent-pages");

function bookmark() {
  const $bookmarkAll = document.querySelectorAll(".fa-bookmark-default");
  $agentPages = document.querySelectorAll(".agent-page");
  $allIcons = document.querySelectorAll(".agent-icon");
  console.log($agentPages);
  console.log($allIcons);
  for (let bookmarkNum = 0; bookmarkNum < $bookmarkAll.length; bookmarkNum++) {
    if (
      event.target === $bookmarkAll[bookmarkNum] &&
      event.target.classList.contains("fa-regular")
    ) {
      data.bookmarkedAgents.push(bookmarkNum);
      $bookmarkedIconsRow.append(renderAgentIcon(resp, bookmarkNum));
      $bookmarkedPagesRow.append(renderAgentPage(resp, bookmarkNum));
      $bookmarkAll[bookmarkNum].setAttribute(
        "class",
        "fa-solid fa-bookmark fa-bookmark-default"
      );
      return;
    }
  }
}

$agentPageRow.addEventListener("click", bookmark);

$bookmarksTab.addEventListener("click", bookmarkTab);

function bookmarkTab() {
  $agentPages = document.querySelectorAll(".agent-page");
  $allIcons = document.querySelectorAll(".agent-icon");
  const $AllBookmarkedIcons = document.querySelectorAll(".bookmarked-icon");
  const $AllBookmarkedPages = document.querySelectorAll(
    ".bookmarked-agent-page"
  );

  if ($bookmarksRow.classList.contains("hidden")) {
    $bookmarksRow.classList.remove("hidden");
  }
  if ($bookmarksText.classList.contains("hidden")) {
    $bookmarksText.classList.remove("hidden");
  }
  if ($bookmarkedIconsRow.classList.contains("hidden")) {
    $bookmarkedIconsRow.classList.remove("hidden");
  }
  if (!$filter.classList.contains("hidden")) {
    $filter.classList.add("hidden");
  }
  if (!$agentIconsRow.classList.contains("hidden")) {
    $agentIconsRow.classList.add("hidden");
  }
  for (let i = 0; i < $agentPages.length; i++) {
    if (!$agentPages[i].classList.contains("hidden")) {
      $agentPages[i].classList.add("hidden");
    }
  }
  for (let i = 0; i < $AllBookmarkedIcons.length; i++) {
    if (!$AllBookmarkedPages[i].classList.contains("hidden")) {
      $AllBookmarkedPages[i].classList.add("hidden");
    }
  }
}

function renderBookmark() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://valorant-api.com/v1/agents");
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    if (xhr.response && xhr.response.data) {
      resp = xhr.response.data;
      for (let i = 0; i < data.bookmarkedAgents.length; i++) {
        $bookmarkedIconsRow.append(
          renderAgentIcon(resp, data.bookmarkedAgents[i])
        );
        $bookmarkedPagesRow.append(
          renderAgentPage(resp, data.bookmarkedAgents[i])
        );
      }
    }
  });
  xhr.send();
}

const $bookmarksRow = document.querySelector(".bookmarks");
const $bookmarksText = document.querySelector(".bookmarks-text");

$bookmarksRow.addEventListener("click", () => {
  const $AllBookmarkedIcons = document.querySelectorAll(".bookmarked-icon");
  const $AllBookmarkedPages = document.querySelectorAll(
    ".bookmarked-agent-page"
  );

  if (!$bookmarksText.classList.contains("hidden")) {
    $bookmarksText.classList.add("hidden");
  }
  if (!$bookmarkedIconsRow.classList.contains("hidden")) {
    $bookmarkedIconsRow.classList.add("hidden");
  }
  for (let i = 0; i < $AllBookmarkedIcons.length; i++) {
    if (event.target === $AllBookmarkedIcons[i]) {
      if ($AllBookmarkedPages[i].classList.contains("hidden")) {
        $AllBookmarkedPages[i].classList.remove("hidden");
        return;
      }
    }
  }
});

const $bookmarkedAgentPage = document.querySelector(".bookmarked-agent-pages");

$bookmarkedAgentPage.addEventListener("click", () => {
  const $AllBookmarkedIcons = document.querySelectorAll(".bookmarked-icon");
  const $AllBookmarkedPages = document.querySelectorAll(
    ".bookmarked-agent-page"
  );

  if (!$bookmarksText.classList.contains("hidden")) {
    $bookmarksText.classList.add("hidden");
  }
  if (!$bookmarkedIconsRow.classList.contains("hidden")) {
    $bookmarkedIconsRow.classList.add("hidden");
  }

  for (let i = 0; i < $AllBookmarkedIcons.length; i++) {
    if (
      event.target.classList.contains("fa-solid") &&
      event.target.dataset.id === $AllBookmarkedIcons[i].dataset.id
    ) {
      const toBeRemoved = data.bookmarkedAgents.indexOf(i);
      data.bookmarkedAgents.splice(toBeRemoved, 1);
      $AllBookmarkedIcons[i].remove();
      $AllBookmarkedPages[i].remove();
    }
  }
  agentTab();
});
