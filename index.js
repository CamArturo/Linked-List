  var websiteTitle = $(".website-title");
  var websiteURL = $(".bookmark-link");
  var enterBtn = $('#enter');
<<<<<<< HEAD
  // var bookmarkURL = $('.bookmark-url');
=======

>>>>>>> master

  $(websiteURL).on('keyup', function() {
      var websiteTitleValue = websiteTitle.val();
      var websiteURLValue = websiteURL.val();
<<<<<<< HEAD
=======

>>>>>>> master
      if (websiteTitleValue !== '' && websiteURLValue !== '') {
          enterBtn.attr("disabled", false);
      }
  });

  enterBtn.on("click", function(event) {
<<<<<<< HEAD

      event.preventDefault();
      var websiteTitleValue = websiteTitle.val();
      var websiteURLValue = websiteURL.val();
=======
      var websiteTitleValue = websiteTitle.val();
      var websiteURLValue = websiteURL.val();
      
      event.preventDefault();
>>>>>>> master

      $(".col-2").append("<article class='bookmark'><h2>" + websiteTitleValue + "</h2><hr><a href=https://" + websiteURLValue + "  target='_blank' class='bookmark-url'> " + websiteURLValue + "</a><hr><a class='action-links read-link'>Read</a><a class=\"action-links delete-link\">Delete</a></article>");

      clearInput();
  });

<<<<<<< HEAD

  // This will clear both inputs after entered.
=======
>>>>>>> master
  function clearInput() {
      $('.website-title').val('');
      $('.bookmark-link').val('');
  }

<<<<<<< HEAD
  $('.col-2').on("click", '.delete-link', function() {
      $(this).parent('article').remove();
  });

  $('.col-2').on('click', '.read-link', function() {
      $(this).parent('article').toggleClass("read");
      $(this).toggleClass("read");
  });
=======
  $('.col-2').on('click', '.delete-link', function() {
      $(this).parent('article').remove();
  })

  $('.col-2').on('click', '.read-link', function() {
      $(this).parent('article').toggleClass('read');
      $(this).toggleClass('read');
  })

>>>>>>> master

  // data-attribute - for keeping track of the cards