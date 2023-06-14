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
          // const $div = document.createElement('div');
          const $agent = document.createElement('img');
          // $div.setAttribute('class', 'icon-container');
          $agent.setAttribute('src', resp[i].displayIcon);
          $agent.setAttribute('class', 'agent-icon');
          $agent.classList.add(resp[i].role.displayName.toLowerCase());
          $agentIconsRow.append($agent);
          // $div.append($agent);
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
    }
  }

});
