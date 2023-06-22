const $agentIconsRow = document.querySelector('.agent-icons');
const $filter = document.querySelector('.roles-icons');
const $roleButtons = document.querySelectorAll('.role-icon');
const $agentPageRow = document.querySelector('.agent-pages');
let $agentIcons = document.querySelector('.agent-icons');

function getAgents() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/agents');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    if (xhr.response && xhr.response.data) {
      const resp = xhr.response.data;
      for (let i = 0; i < resp.length; i++) {
        if (resp[i].isPlayableCharacter === true) {
          const $agentIcon = document.createElement('img');
          $agentIcon.setAttribute('src', resp[i].displayIcon);
          $agentIcon.setAttribute('class', 'agent-icon');
          $agentIcon.setAttribute('alt', 'Agent Icon');
          $agentIcon.classList.add(resp[i].role.displayName.toLowerCase());
          $agentIconsRow.append($agentIcon);

          // character page
          const $agentPage = document.createElement('div');
          $agentPage.setAttribute('class', 'row');
          $agentPage.classList.add('agent-page');
          $agentPage.classList.add('hidden');
          const $describedImage = document.createElement('div');
          $describedImage.setAttribute('class', 'column-full left');
          const $abilities = document.createElement('div');
          $abilities.setAttribute('class', 'column-full right');
          const $bookmarkIcon = document.createElement('i');
          $bookmarkIcon.setAttribute('class', 'fa-regular fa-bookmark');

          const $portraitText = document.createElement('div');
          $portraitText.setAttribute('class', 'portrait-text');
          const $portrait = document.createElement('img');
          $portrait.setAttribute('src', resp[i].fullPortrait);
          $portrait.setAttribute('class', 'agent-portrait');
          $portrait.setAttribute('alt', 'Agent Portrait');
          const $name = document.createElement('h1');
          $name.setAttribute('class', 'name');
          $name.textContent = resp[i].displayName;
          const $description = document.createElement('p');
          $description.setAttribute('class', 'agent-description');
          $description.textContent = resp[i].description;

          const $abilityOne = document.createElement('div');
          $abilityOne.setAttribute('class', 'ability');
          const $abilityTwo = document.createElement('div');
          $abilityTwo.setAttribute('class', 'ability');
          const $abilityThree = document.createElement('div');
          $abilityThree.setAttribute('class', 'ability');
          const $ultimate = document.createElement('div');
          $ultimate.setAttribute('class', 'ability');

          const $abilityOneIcon = document.createElement('img');
          $abilityOneIcon.setAttribute('class', 'ability-icon');
          $abilityOneIcon.setAttribute('alt', 'Ability One Icon');
          $abilityOneIcon.setAttribute('src', resp[i].abilities[0].displayIcon);
          const $abilityTwoIcon = document.createElement('img');
          $abilityTwoIcon.setAttribute('class', 'ability-icon');
          $abilityTwoIcon.setAttribute('src', resp[i].abilities[1].displayIcon);
          $abilityTwoIcon.setAttribute('alt', 'Ability Two Icon');
          const $abilityThreeIcon = document.createElement('img');
          $abilityThreeIcon.setAttribute('class', 'ability-icon');
          $abilityThreeIcon.setAttribute('alt', 'Ability Three Icon');
          $abilityThreeIcon.setAttribute('src', resp[i].abilities[2].displayIcon);
          const $ultimateIcon = document.createElement('img');
          $ultimateIcon.setAttribute('class', 'ability-icon');
          $ultimateIcon.setAttribute('alt', 'Ultimate Icon');
          $ultimateIcon.setAttribute('src', resp[i].abilities[3].displayIcon);

          const $abilityOneName = document.createElement('h2');
          $abilityOneName.textContent = resp[i].abilities[0].displayName;
          const $abilityTwoName = document.createElement('h2');
          $abilityTwoName.textContent = resp[i].abilities[1].displayName;
          const $abilityThreeName = document.createElement('h2');
          $abilityThreeName.textContent = resp[i].abilities[2].displayName;
          const $ultimateName = document.createElement('h2');
          $ultimateName.textContent = resp[i].abilities[3].displayName;

          const $abilityOneDescription = document.createElement('p');
          $abilityOneDescription.textContent = resp[i].abilities[0].description;
          const $abilityTwoDescription = document.createElement('p');
          $abilityTwoDescription.textContent = resp[i].abilities[1].description;
          const $abilityThreeDescription = document.createElement('p');
          $abilityThreeDescription.textContent = resp[i].abilities[2].description;
          const $ultimateDescription = document.createElement('p');
          $ultimateDescription.textContent = resp[i].abilities[3].description;

          const $abilityOneText = document.createElement('div');
          $abilityOneText.setAttribute('class', 'ability-text');
          $abilityOneText.append($abilityOneName);
          $abilityOneText.append($abilityOneDescription);
          const $abilityTwoText = document.createElement('div');
          $abilityTwoText.setAttribute('class', 'ability-text');
          $abilityTwoText.append($abilityTwoName);
          $abilityTwoText.append($abilityTwoDescription);
          const $abilityThreeText = document.createElement('div');
          $abilityThreeText.setAttribute('class', 'ability-text');
          $abilityThreeText.append($abilityThreeName);
          $abilityThreeText.append($abilityThreeDescription);
          const $ultimateText = document.createElement('div');
          $ultimateText.setAttribute('class', 'ability-text');
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
    }

  });
  xhr.send();
}

document.addEventListener('DOMContentLoaded', () => {
  getAgents();
});

$filter.addEventListener('click', () => {
  if (event.target.classList.contains('current')) {
    event.target.classList.remove('current');
    for (let i = 0; i < $roleButtons.length; i++) {
      $roleButtons[i].classList.remove('darken');
    }
    for (let i = 0; i < $agentIcons.length; i++) {
      if (!$agentIcons[i].classList.contains(event.target.id)) {
        $agentIcons[i].classList.remove('hidden');
      }
    }
    return;
  }

  for (let i = 0; i < $roleButtons.length; i++) {
    if ($roleButtons[i].className !== event.target.className) {
      $roleButtons[i].classList.add('darken');
      $roleButtons[i].classList.remove('current');
    } else {
      event.target.classList.remove('darken');
      event.target.classList.add('current');
    }
  }

  $agentIcons = document.querySelectorAll('.agent-icon');
  for (let i = 0; i < $agentIcons.length; i++) {
    if (!$agentIcons[i].classList.contains(event.target.id)) {
      $agentIcons[i].classList.add('hidden');
    } else {
      $agentIcons[i].classList.remove('hidden');
    }
  }

});

let $allIcons;
let $agentPages;
let index;

$agentIcons.addEventListener('click', () => {
  $allIcons = document.querySelectorAll('.agent-icon');
  $agentPages = document.querySelectorAll('.agent-page');
  if (!$bookmarksRow.classList.contains('hidden')) {
    $bookmarksRow.classList.add('hidden');
  }
  if (!$filter.classList.contains('hidden')) {
    $filter.classList.add('hidden');
  }
  if (!$agentIconsRow.classList.contains('hidden')) {
    $agentIconsRow.classList.add('hidden');
  }
  for (index = 0; index < $allIcons.length; index++) {
    if (event.target === $allIcons[index]) {
      if ($agentPages[index].classList.contains('hidden')) {
        $agentPages[index].classList.remove('hidden');
        return;
      }
    }
  }
});

const $agentsTab = document.querySelector('.agents-tab');

$agentsTab.addEventListener('click', () => {
  $agentPages = document.querySelectorAll('.agent-page');

  if (!$bookmarksRow.classList.contains('hidden')) {
    $bookmarksRow.classList.add('hidden');
  }
  if (!$agentPages[index] === undefined) {
    if (!$agentPages[index].classList.contains('hidden')) {
      $agentPages[index].classList.add('hidden');
    }
  }
  $filter.classList.remove('hidden');
  $agentIconsRow.classList.remove('hidden');
  for (let i = 0; i < $allIcons.length; i++) {
    if ($allIcons[i].classList.contains('hidden')) {
      $allIcons[i].classList.remove('hidden');
    }
  }

});

const $logo = document.querySelector('.logo');

$logo.addEventListener('click', () => {
  if (!$bookmarksRow.classList.contains('hidden')) {
    $bookmarksRow.classList.add('hidden');
  }
  $agentPages = document.querySelectorAll('.agent-page');
  $agentPages[index].classList.add('hidden');
  $filter.classList.remove('hidden');
  $agentIconsRow.classList.remove('hidden');
});

let bookmarkNum;

$agentPageRow.addEventListener('click', () => {
  const $bookmarkAll = document.querySelectorAll('.fa-bookmark');
  $agentPages = document.querySelectorAll('.agent-page');
  $allIcons = document.querySelectorAll('.agent-icon');
  for (bookmarkNum = 0; bookmarkNum < $bookmarkAll.length; bookmarkNum++) {
    if (event.target === $bookmarkAll[bookmarkNum]) {
      $bookmarkAll[bookmarkNum].setAttribute('class', 'fa-solid fa-bookmark');
      $agentPages[bookmarkNum].classList.add('bookmarked');
      $allIcons[bookmarkNum].classList.add('bookmarked');
      return;
    }
  }
});

const $bookmarksTab = document.querySelector('.bookmarks-tab');
const $bookmarksRow = document.querySelector('.bookmarks');

$bookmarksTab.addEventListener('click', () => {
  $agentPages = document.querySelectorAll('.agent-page');
  $allIcons = document.querySelectorAll('.agent-icon');

  if ($bookmarksRow.classList.contains('hidden')) {
    $bookmarksRow.classList.remove('hidden');
  }
  if (!$filter.classList.contains('hidden')) {
    $filter.classList.add('hidden');
  }
  if ($agentIconsRow.classList.contains('hidden')) {
    $agentIconsRow.classList.remove('hidden');
  }
  for (let i = 0; i < $allIcons.length; i++) {
    if (!$allIcons[i].classList.contains('bookmarked')) {
      $allIcons[i].classList.add('hidden');
    }
    if (!$agentPages[i].classList.contains('hidden')) {
      $agentPages[i].classList.add('hidden');
    }
  }
});
