  var websiteTitle = $(".website-title");
  var websiteURL = $(".bookmark-link");
  var enterBtn = $('#enter');
  // var bookmarkURL = $('.bookmark-url');

  $(websiteURL).on('keyup', function() {
      var websiteTitleValue = websiteTitle.val();
      var websiteURLValue = websiteURL.val();
      if (websiteTitleValue !== '' && websiteURLValue !== '') {
          enterBtn.attr("disabled", false);
      }
  });

  enterBtn.on("click", function(event) {

      event.preventDefault();
      var websiteTitleValue = websiteTitle.val();
      var websiteURLValue = websiteURL.val();

      $(".col-2").append("<article class='bookmark'><h2>" + websiteTitleValue + "</h2><hr><a href=https://" + websiteURLValue + "  target='_blank' class='bookmark-url'> " + websiteURLValue + "</a><hr><a class='action-links read-link'>Read</a><a class=\"action-links delete-link\">Delete</a></article>");

      clearInput();
  });


  // This will clear both inputs after entered.
  function clearInput() {
      $('.website-title').val('');
      $('.bookmark-link').val('');
  }

  $('.col-2').on("click", '.delete-link', function() {
      $(this).parent('article').remove();
  });

  $('.col-2').on('click', '.read-link', function() {
      $(this).parent('article').toggleClass("read");
      $(this).toggleClass("read");
  });

  // data-attribute - for keeping track of the cards