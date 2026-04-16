$(function() {
  // class属性btnがクリックされたとき
  $('.btn').on('click', function() {
    // class属性text-boxの中の値を変更する
    $('.text-box').val('クリックしました！');
  });
});