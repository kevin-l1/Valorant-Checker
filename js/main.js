const $agentIconsRow = document.querySelector('.agent-icons');

function getAgents(language, isPlayable) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/agents');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    if (xhr.response && xhr.response.data) {
      const resp = xhr.response.data;
      for (let i = 0; i < resp.length; i++) {
        if (resp[i].isPlayableCharacter === true) {
          const $div = document.createElement('div');
          const $agent = document.createElement('img');
          $div.setAttribute('class', 'icon-container');
          $agent.setAttribute('src', resp[i].displayIcon);
          $agent.setAttribute('class', 'agent-icon');
          $agentIconsRow.append($div);
          $div.append($agent);
        }
      }
    }

  });
  xhr.send();
}
getAgents();
