$(function() {
  $('#change-color').on('click', function() {
    // 文字色を赤に変更する
    $('#target').css('color','red');
  });

  $('#change-text').on('click', function() {
    // 文字内容を「Hello!」とする
    $('#target').text('Hello!');
  });

  $('#fade-out').on('click', function() {
    // フェードアウトで文字が消える
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});