var websiteTitle = $(".website-title");
var websiteURL = $(".bookmark-link");
var enterBtn = $('#enter');
var errorMessageText = $('.error-message p');
var col2 = $('.col-2');
var col1 = $('.col-1');
var articleCounter = 0;
var readCounter = 0;

$(".website-title, .bookmark-link").on('keyup', checkInput);

col2.on('click', '.read-link', function () {
  $(this).toggleClass("read");
  updateReadCount(event);
  countUnread();
});

col2.on('click', '.delete-link', function () {
  $(this).parent('article').remove();
  reduceCounter();
  updateReadCount();
});

col1.on('click', '.clear-readbtn', function () {
  $('.read').parent('article').remove();
  reduceCounter();
  updateReadCount();
});

enterBtn.on('click', function (event) {
  event.preventDefault();
  var websiteTitleValue = websiteTitle.val();
  var websiteURLValue = websiteURL.val();

  col2.append("<article class='bookmark'><h2>" + websiteTitleValue + "</h2><hr><a href=" + websiteURLValue + "  target='_blank' class='bookmark-url'> " + websiteURLValue + "</a><hr><a class='action-links read-link'>Read</a><a class=\"action-links delete-link\">Delete</a></article>");
  websiteTitle.focus();
  enterBtn.attr("disabled", true);
  countCurrent();
  countUnread();
  clearInput();
});

function errorMessage() {
  errorMessageText.html("Please enter a title and valid URL with http://")
}

function validURL() {
  // https://gist.github.com/dperini/729294
  var urlValid = new RegExp(
    "^" +
    // protocol identifier
    "(?:(?:https?|ftp)://)" +
    // user:pass authentication
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
    // IP address exclusion
    // private & local networks
    "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
    "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
    "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
    // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broacast addresses
    // (first & last IP address of each class)
    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
    "|" +
    // host name
    "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
    // domain name
    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
    // TLD identifier
    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
    // TLD may end with dot
    "\\.?" +
    ")" +
    // port number
    "(?::\\d{2,5})?" +
    // resource path
    "(?:[/?#]\\S*)?" +
    "$", "i"
  );
  var websiteURLValue = websiteURL.val();
  return urlValid.test(websiteURLValue);
}

function checkInput() {
  var websiteTitleValue = websiteTitle.val();
  var websiteURLValue = websiteURL.val();
  if (websiteTitleValue === '' || websiteURLValue === '') {
    enterBtn.attr("disabled", true);
    errorMessage();
  } else {
    var valid = validURL();
    if (valid) {
      enterBtn.attr("disabled", false);
      errorMessageText.html('&nbsp;');
      return;
    }
  }
  // return [websiteTitleValue, websiteURLValue];
}

function clearInput() {
  $('.website-title').val('');
  $('.bookmark-link').val('');
}

function countCurrent() {
  articleCounter++;
  $('.current-links').text(articleCounter);
}

function reduceCounter() {
  articleCounter--;
  $('.current-links').text(articleCounter);
}

function updateReadCount(event) {
  readCounter = $('.read').length;
  $('.read-links').text(readCounter);
}

function countUnread() {
  var unreadCounter = articleCounter - readCounter;
  $('.unread-links').text(unreadCounter);
}

//add clear bookmarks button - clears all read bookmarks
//make url input valid - otherwise show error

// data-attribute - for keeping track of the cards