const $agentIconsRow = document.querySelector('.agent-icons');
// const $filter = document.querySelector('.roles-icons');

// function getAgents(language, isPlayable) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://valorant-api.com/v1/agents');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', () => {
//     console.log(xhr.status);
//     console.log(xhr.response);
//     if (xhr.response && xhr.response.data) {
//       const resp = xhr.response.data;
//       for (let i = 0; i < resp.length; i++) {
//         if (resp[i].isPlayableCharacter === true) {
//           const $agent = document.createElement('div');
//           // $agent.setAttribute('src', resp[i].displayIcon);
//           $agent.setAttribute('class', 'circle');
//           const $icon = document.createElement('img');
//           $icon.setAttribute('src', resp[i].displayIcon);
//           $icon.setAttribute('class', 'agent-icon');
//           $icon['background-image'] = resp[i].displayIcon;
//           $agentIconsRow.append($agent);
//           // $agent.append($icon);
//         }
//       }
//     } else {
//       // error handler
//     }

//   });
//   xhr.send();
// }
// getAgents();

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
    } else {
      // error handler
    }

  });
  xhr.send();
}
getAgents();

// function getWeapons() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://valorant-api.com/v1/weapons');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', () => {
//     console.log(xhr.status);
//     console.log(xhr.response);
//     if (xhr.response && xhr.response.data) {
//       const resp = xhr.response.data;
//       for (let i = 0; i < resp.length; i++) {
//         let $div = document.createElement('div')
//         $div.textContent = resp[i].displayName;
//         $body.append($div);
//       }
//     } else {
//       // error handler
//       console.log('hi')
//     }

//   })
//     xhr.send();
// }
// getWeapons()
