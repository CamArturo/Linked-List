var websiteTitle = $(".website-title");
var websiteURL = $(".bookmark-link");
var enterBtn = $('#enter');
var col2 = $('.col-2');
var articleCounter = 0;
var readCounter = 0;
var unreadCounter;

$(".website-title, .bookmark-link").on('keyup', checkInput);

col2.on("click", '.delete-link', function() {
    $(this).parent('article').remove();
    reduceCounter();
    updateReadCount();
});

col2.on('click', '.read-link', function() {
    $(this).toggleClass("read");
    updateReadCount(event);
    countUnread();
});

enterBtn.on("click", function(event) {
    event.preventDefault();
    var websiteTitleValue = websiteTitle.val();
    var websiteURLValue = websiteURL.val();

    col2.append("<article class='bookmark'><h2>" + websiteTitleValue + "</h2><hr><a href=https://" + websiteURLValue + "  target='_blank' class='bookmark-url'> " + websiteURLValue + "</a><hr><a class='action-links read-link'>Read</a><a class=\"action-links delete-link\">Delete</a></article>");
    websiteTitle.focus();
    enterBtn.attr("disabled", true);
    countCurrent();
    countUnread();
    clearInput();
});

function errorMessage() {
        $('.error-message p').html("Please enter a title and valid URL")
}

function checkInput() {
    var websiteTitleValue = websiteTitle.val();
    var websiteURLValue = websiteURL.val();
    if (websiteTitleValue === '' || websiteURLValue === '') {
        enterBtn.attr("disabled", true);
        errorMessage();
    } else {
        enterBtn.attr("disabled", false);
        $('.error-message p').html('&nbsp;');
        console.log($('.error-message p'));
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
    $('.current-links').text(articleCounter);
    console.log(articleCounter);
}

function updateReadCount(theWholeEvent) {
    readCounter = $('.read').length;
    $('.read-links').text(readCounter);
}

function countUnread() {
    unreadCounter = articleCounter - readCounter;
    $('.unread-links').text(unreadCounter);
}


//add clear bookmarks button - clears all read bookmarks
//make url input valid - otherwise show error

// data-attribute - for keeping track of the cards