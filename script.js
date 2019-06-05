function click() {
  chrome.tabs.executeScript({ file: 'content_script.js' }, function (result) {

    document.querySelector('#result').innerText = `총 ${result / 60 / 60 | 0}시간 ${result / 60 % 60 | 0}분`;
    document.querySelector('.ratedResult').innerText = `1.25배속 시 : ${result / 1.25 / 60 / 60 | 0}시간 ${result / 1.25 / 60 % 60 | 0}분`;
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn').addEventListener('click', click);
});
