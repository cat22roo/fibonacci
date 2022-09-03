'use strict';
const memo = new Map();
memo.set(0, 0); // 0のときは0
memo.set(1, 1); // 1のときは1を返す
function fib(n) {
  if (memo.has(n)) { // has は true/falseを返す「メモにあったら」
    return memo.get(n); // メモの値を返す
  }
  const value = fib(n - 1) + fib(n - 2); // メモになかったら、1個前と2個前のデータをメモから取ってくる
  memo.set(n, value); // 新しく追加した数字をメモに追加しておく
  return value;
}
const length = 40;
for (let i = 1; i <= length; i++) {
  console.log(`${fib(i)}番目は${fib(i)}です`);
}

/*
'use strict';
function fib(n) { // n (一般化)
  if (n === 0) {
    return 0;
  }
// ガード句(特殊な条件を省く)elseを書かなくてもいいのでスッキリ
  if (n === 1) { 
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(`${(i)}番目は` + fib(i));
}
*/
