const $agentIconsRow = document.querySelector('.agent-icons');
const $filter = document.querySelector('.roles-icons');
const $roleButtons = document.querySelectorAll('.role-icon');
let $agentIcons;
const $agentpages = document.querySelector('.agent-pages');

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
          $agentIcon.classList.add(resp[i].role.displayName.toLowerCase());
          $agentIconsRow.append($agentIcon);

          // character page
          const $agentPage = document.createElement('div');
          $agentPage.setAttribute('class', 'row');
          // $agentPage.classList.add('hidden');
          const $describedImage = document.createElement('div');
          $describedImage.setAttribute('class', 'column-two-fifth');
          const $abilities = document.createElement('div');
          $abilities.setAttribute('class', 'column-three-fifth');

          const $portraitText = document.createElement('div');
          const $portrait = document.createElement('img');
          $portrait.setAttribute('src', resp[i].fullPortrait);
          $portrait.setAttribute('class', 'agent-portrait');
          const $name = document.createElement('h1');
          $name.textContent = resp[i].displayName;
          const $description = document.createElement('p');
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
          $abilityOneIcon.setAttribute('src', resp[i].abilities[0].displayIcon);
          const $abilityTwoIcon = document.createElement('img');
          $abilityTwoIcon.setAttribute('class', 'ability-icon');
          $abilityTwoIcon.setAttribute('src', resp[i].abilities[1].displayIcon);
          const $abilityThreeIcon = document.createElement('img');
          $abilityThreeIcon.setAttribute('class', 'ability-icon');
          $abilityThreeIcon.setAttribute('src', resp[i].abilities[2].displayIcon);
          const $ultimateIcon = document.createElement('img');
          $ultimateIcon.setAttribute('class', 'ability-icon');
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

          $agentpages.append($agentPage);
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

$agentIcons = document.querySelectorAll();
