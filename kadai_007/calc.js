// 変数numに0～50までのランダムな整数を代入する
let num = Math.floor(Math.random() * 51);

// &&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う
if (num%3 === 0 && num%5 === 0){
  console.log('3と5の倍数です');
}

// 変数numの値が3の倍数の場合「3の倍数です」という文字列を出力する
else if (num%3 === 0) {
  console.log('3の倍数です');
}

// 変数numの値が5の倍数の場合「5の倍数です」という文字列を出力する
else if (num%5 === 0) {
  console.log('5の倍数です');
}

// それ以外の場合、変数(num)を出力する
else {
  console.log(num);
}