// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）後にテキストを変更するための非同期処理を実行する
  setTimeout(() => {
  // テキストに「ボタンをクリックしました」というテキストを設定する
  text.textContent = 'ボタンをクリックしました';
},2000);
});