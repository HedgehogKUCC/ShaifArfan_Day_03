const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

// DOMContentLoaded 事件 是當 document 被完整的讀取跟解析後就會被觸發
// 不會等待 stylesheets, 圖片和 subframes 完成讀取
// ( load 事件可以用來作為判斷頁面已經完整讀取的方法 )
document.addEventListener('DOMContentLoaded', getJoke);
button.addEventListener('click', getJoke);

function getJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json',
    }
  }).then( data => data.json() )
    .then( obj => jokeText.innerHTML = obj.joke )
}

// async function getJoke() {
//   // Uncaught SyntaxError: await is only valid in async function
//   const jokeData = await fetch('https://icanhazdadjoke.com/', {
//     headers: {
//       'Accept': 'application/json',
//     }
//   });

//   const jokeObj = await jokeData.json();
//   jokeText.innerHTML = jokeObj.joke;
// }