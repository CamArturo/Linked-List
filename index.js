var websiteTitle = $(".website-title");
var websiteURL = $(".bookmark-link");
var enterBtn = $('#enter');
var errorMessageText = $('.error-message p');
var col2 = $('.col-2');
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

enterBtn.on('click', function (event) {
var errorMessageText = $('.error-message p');
var unreadCounter;

$(".website-title, .bookmark-link").on('keyup', checkInput);

col2.on("click", '.delete-link', function () {
  $(this).parent('article').remove();
  reduceCounter();
  updateReadCount();
});

col2.on('click', '.read-link', function () {
  $(this).toggleClass("read");
  updateReadCount(event);
  countUnread();
});

enterBtn.on("click", function (event) {
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
  errorMessageText.html("Please enter a title and valid URL")
}

function validURL() {
  // var urlValid = new RegExp("^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$");
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
  return [websiteTitleValue, websiteURLValue];
}

function clearInput() {
  $('.website-title').val('');
  $('.bookmark-link').val('');
}

function countCurrent() {
  articleCounter++;
  $('.current-links').text(articleCounter);
  console.log(articleCounter);
}

function reduceCounter() {
  articleCounter--;
  $('.current-links').text(articleCounter);
  console.log(articleCounter);
}

function updateReadCount(theWholeEvent) {
  readCounter = $('.read').length;
  $('.read-links').text(readCounter);
}

function countUnread() {
  var unreadCounter = articleCounter - readCounter;
  unreadCounter = articleCounter - readCounter;
  $('.unread-links').text(unreadCounter);
}

//add clear bookmarks button - clears all read bookmarks

// data-attribute - for keeping track of the cards