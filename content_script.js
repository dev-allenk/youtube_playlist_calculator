(function () {
  const getTimeLists = (nodeLists) => {
    return Array.from(nodeLists).map(v => v.innerText.trim());
  }

  const getTotalTime = (lists) => {
    let totalTime = lists.reduce((acc, curr) => {
      let el = curr.split(':');
      let min = parseInt(el[0]);
      let sec = parseInt(el[1]);
      return acc + min * 60 + sec;
    }, 0)
    return totalTime;
  }

  let nodeLists;
  if (document.URL.includes('playlist')) nodeLists = document.querySelectorAll('.ytd-playlist-video-renderer .ytd-thumbnail-overlay-time-status-renderer');
  if (document.URL.includes('watch')) nodeLists = document.querySelectorAll('.ytd-playlist-panel-video-renderer .ytd-thumbnail-overlay-time-status-renderer');
  const timeLists = getTimeLists(nodeLists);
  return getTotalTime(timeLists);
})();