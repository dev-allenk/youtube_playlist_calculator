function getRatedResult(rate, totalTime) {
  return `총 ${totalTime / rate / 60 / 60 | 0}시간 ${totalTime / rate / 60 % 60 | 0}분`
}

function click() {
  const rate = document.querySelector('#rate').value;
  chrome.tabs.executeScript({ file: 'content_script.js' }, function (result) {
    document.querySelector('#result').innerText = getRatedResult(rate, result);
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn').addEventListener('click', click);
});
