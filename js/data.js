/* exported data */

var data = {
  bookmarkedAgents: [],
  nextEntryId: 1
};

window.addEventListener('beforeunload', () => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
});

const previousDataJSON = localStorage.getItem('javascript-local-storage');
if (previousDataJSON != null) {
  data = JSON.parse(previousDataJSON);
}
