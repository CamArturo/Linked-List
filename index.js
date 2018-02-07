var websiteTitle = $(".website-title");
var websiteURL = $(".bookmark-link");
var enterBtn = $('#enter');
var col2 = $('.col-2');

$(window).keydown(function(event){
  if(event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});

$(websiteURL).on('keyup', function () {
  var websiteTitleValue = websiteTitle.val();
  var websiteURLValue = websiteURL.val();
  if (websiteTitleValue !== '' && websiteURLValue !== '') {
    enterBtn.attr("disabled", false);
  }
});

function checkInput() {
  console.log('checking');
  var websiteTitleValue = websiteTitle.val();
  var websiteURLValue = websiteURL.val();
  if (websiteTitleValue !== '' && websiteURLValue !== '') {
    enterBtn.attr("disabled", false);
  } else {
    enterBtn.attr("disabled", true);
    return;
  }
  return [websiteTitleValue, websiteURLValue];
}


enterBtn.on("click", function (event) {
  event.preventDefault();

  var values = checkInput();
  var websiteTitleValue = values[0];
  var websiteURLValue = values[1];

  $(".col-2").append("<article class='bookmark'><h2>" + websiteTitleValue + "</h2><hr><a href=https://" + websiteURLValue + "  target='_blank' class='bookmark-url'> " + websiteURLValue + "</a><hr><a class='action-links read-link'>Read</a><a class=\"action-links delete-link\">Delete</a></article>");
  websiteTitle.focus();

  clearInput();
});

function clearInput() {
  $('.website-title').val('');
  $('.bookmark-link').val('');
}

col2.on("click", '.delete-link', function () {
  $(this).parent('article').remove();
});

col2.on('click', '.read-link', function () {
  $(this).parent('article').toggleClass("read");
  $(this).toggleClass("read");
});



// data-attribute - for keeping track of the cards