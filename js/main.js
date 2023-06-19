const $agentIconsRow = document.querySelector('.agent-icons');
const $filter = document.querySelector('.roles-icons');
const $roleButtons = document.querySelectorAll('.role-icon');
let $agentIcons;

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
          $agentPage.classList.add('hidden');
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
          const $abilityTwo = document.createElement('div');
          const $abilityThree = document.createElement('div');
          const $ultimate = document.createElement('div');

          const $abilityOneIcon = document.createElement('img');
          $abilityOneIcon.setAttribute('src', resp[i].abilities[0].displayIcon);
          const $abilityTwoIcon = document.createElement('img');
          $abilityTwoIcon.setAttribute('src', resp[i].abilities[1].displayIcon);
          const $abilityThreeIcon = document.createElement('img');
          $abilityThreeIcon.setAttribute('src', resp[i].abilities[2].displayIcon);
          const $ultimateIcon = document.createElement('img');
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
          $abilityOneText.append($abilityOneName);
          $abilityOneText.append($abilityOneDescription);
          const $abilityTwoText = document.createElement('div');
          $abilityOneText.append($abilityTwoName);
          $abilityOneText.append($abilityTwoDescription);
          const $abilityThreeText = document.createElement('div');
          $abilityOneText.append($abilityThreeName);
          $abilityOneText.append($abilityThreeDescription);
          const $ultimateText = document.createElement('div');
          $abilityOneText.append($ultimateName);
          $abilityOneText.append($ultimateDescription);

          $describedImage.append($portrait);
          $describedImage.append($portraitText);
          $portraitText.append($name);
          $portraitText.append($description);

          $abilities.append($abilityOne);
          $abilities.append($abilityTwo);
          $abilities.append($abilityThree);
          $abilities.append($ultimate);
          $abilityOne.append($abilityOneIcon);
          $abilityOne.append($abilityOneText);
          $abilityOne.append($abilityTwoIcon);
          $abilityOne.append($abilityTwoText);
          $abilityOne.append($abilityThreeIcon);
          $abilityOne.append($abilityThreeText);
          $abilityOne.append($ultimateIcon);
          $abilityOne.append($ultimateText);

          $agentPage.append($describedImage);
          $agentPage.append($abilities);
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
