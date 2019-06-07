function getOriginResult(totalTime) {
  return `총 ${totalTime / 60 / 60 | 0}시간 ${totalTime / 60 % 60 | 0}분`
}

function getRatedResult(rate, totalTime) {
  return `${totalTime / rate / 60 / 60 | 0}시간 ${totalTime / rate / 60 % 60 | 0}분`
}

function click() {
  chrome.tabs.executeScript({ file: 'content_script.js' }, function (result) {
    document.querySelector('#result').innerText = getOriginResult(result);
    document.querySelector('.ratedResult').innerText = `1.25배속 시 : ` + getRatedResult(1.25, result);
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn').addEventListener('click', click);
});
