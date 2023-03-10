$(document).ready(function () {
  //show or hide password
  $("#toggle-password").click(function () {
    $("#toggle-password").toggleClass("fa-eye fa-eye-slash");
    if ($(this).hasClass("fa-eye")) {
      $("#password").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
    }
  });

  // validate signup form
  $(".signin-form").validate({
    rules: {
      username: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6
      },
    },
    messages: {
      username: "Username is required",
      email: "Email is required",
      password: {
        required: "Password is required",
        minlength: "Please enter minimum 6 characters",
      },
    },
    submitHandler: function(form) {
      form.submit();
      window.location = "notes";
    }
  });

  $(".login-form").validate({
    rules: {
      username: {
        required: true,
      },
      password: {
        required: true
      },
    },
    messages: {
      username: "Username is required",
      password: {
        required: "Password is required"
      },
    },
    submitHandler: function(form) {
      form.submit();
      window.location = "notes";
    }
  });

  // // navigate to next page
  // $("#signup-button").click(function () {
  //   window.location = "notes";
  // });

  // $("#login-button").click(function () {
  //   window.location = "notes";
  // });

  // Show the first tab and hide the rest
  $("#tabs-nav li:nth-child(2)").addClass("active");
  $(".tab-pane").hide();
  $(".tab-pane:nth-child(2)").show();

  // tabs click function
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-pane").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
});
