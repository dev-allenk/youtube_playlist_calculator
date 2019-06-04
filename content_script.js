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
    return `총 ${totalTime / 60 / 60 | 0}시간 ${totalTime / 60 % 60 | 0}분`
  }

  let nodeLists = document.querySelectorAll('.ytd-playlist-video-renderer .ytd-thumbnail-overlay-time-status-renderer');
  if(!nodeLists.length) nodeLists = document.querySelectorAll('.ytd-playlist-panel-video-renderer .ytd-thumbnail-overlay-time-status-renderer');
  const timeLists = getTimeLists(nodeLists);
  return getTotalTime(timeLists);
})();