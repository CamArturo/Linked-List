var websiteTitle = $(".website-title");
var websiteURL = $(".bookmark-link");
var enterBtn = $('#enter');
var col2 = $('.col-2');
var articleCounter = 0;
var readCounter = 0;

$(window).keydown(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

$(websiteURL).on('keyup', function() {
    var websiteTitleValue = websiteTitle.val();
    var websiteURLValue = websiteURL.val();
    if (websiteTitleValue !== '' && websiteURLValue !== '') {
        enterBtn.attr("disabled", false);
    }
});

col2.on("click", '.delete-link', function() {
    $(this).parent('article').remove();
    reduceCounter();
});

col2.on('click', '.read-link', function() {
    $(this).parent('article').toggleClass("read");
    $(this).toggleClass("read");
    console.log(event);
    updateReadCount(event);
    countUnread(event);
});

enterBtn.on("click", function(event) {
    event.preventDefault();

    var values = checkInput();
    var websiteTitleValue = values[0];
    var websiteURLValue = values[1];

    $(".col-2").append("<article class='bookmark'><h2>" + websiteTitleValue + "</h2><hr><a href=https://" + websiteURLValue + "  target='_blank' class='bookmark-url'> " + websiteURLValue + "</a><hr><a class='action-links read-link'>Read</a><a class=\"action-links delete-link\">Delete</a></article>");
    websiteTitle.focus();
    countCurrent();
    clearInput();
});

function errorMessage() {
    if ($('.error-message').children().length === 0) {
        $('.error-message').append("<p>Please enter a title and valid URL</p>")
    }
}

function checkInput() {
    var websiteTitleValue = websiteTitle.val();
    var websiteURLValue = websiteURL.val();
    if (websiteTitleValue !== '' && websiteURLValue !== '') {
        enterBtn.attr("disabled", false);
    } else {
        enterBtn.attr("disabled", true);
        errorMessage();
        return;
    }
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
    console.log(articleCounter);
}

function updateReadCount(theWholeEvent) {
  if($(event.target).hasClass("read")) {
      readCounter++;
      $('.read-links').text(readCounter);
    } else {
      readCounter--;
      $('.read-links').text(readCounter);
    }
}

function countUnread(event) {
    if(!$(event.target).hasClass("read")) {
      readCounter--;
      $('.unread-links').text(readCounter);
    } else {
      readCounter++;
      $('.unread-links').text(readCounter);
    }
}


// data-attribute - for keeping track of the cards