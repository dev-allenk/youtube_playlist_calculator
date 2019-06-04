function click() {
  chrome.tabs.executeScript({ file: 'content_script.js' }, function (result) {

    console.log(result)
    document.querySelector('#result').innerText = result;
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn').addEventListener('click', click);
});
