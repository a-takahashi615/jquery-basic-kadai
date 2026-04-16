// HTMLの読込に完了した際の処理
$(window).on('load',function(){
  //「loadイベントが発生しました」のメッセージをコンソールに出力
  console.log('loadイベントが発生しました');
});

// 画面をスクロールした際の処理
$(window).on('scroll',function(){
  //「scrollイベントが発生しました」のメッセージをコンソールに出力
  console.log('scrollイベントが発生しました');
});