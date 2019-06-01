const getTimeLists = (el) => {
  return Array.from(el).map(v => v.innerText.trim());
}

const getTotalTime = (lists) => {
  let totalTime = lists.reduce((acc, curr) => {
    let el = curr.split(':');
    let min = parseInt(el[0]);
    let sec = parseInt(el[1]);
    return acc + min * 60 + sec;
  }, 0)
  return `${totalTime / 60 / 60 | 0}시간 ${totalTime / 60 % 60 | 0}분`
}

const el = document.querySelectorAll('.ytd-playlist-video-renderer .ytd-thumbnail-overlay-time-status-renderer');
const timeLists = getTimeLists(el);
getTotalTime(timeLists);