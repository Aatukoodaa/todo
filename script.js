$(document).ready(function() {
password();

function password() {
    var userPassword;
    var myPassword = "a";

    userPassword = prompt("Enter the password:");

    if(userPassword == salasana) {
        alert('Correct, press ok to enter the site.');
    }else if(userPassword == null) {
        window.location ="https://elated-heyrovsky-724144.netlify.com";
    }else {
        alert('Incorrect');
        password();
    }
}

  $("#list-items").html(localStorage.getItem("listItems"));

  $(".add-items").submit(function(event) {
    event.preventDefault();

    var item = $("#todo-list-item").val();

    if (item) {
      $("#list-items").append(
        "<li><input class='checkbox' type='checkbox'/>" +
          item +
          "<a class='remove'>x</a><hr></li>"
      );

      localStorage.setItem("listItems", $("#list-items").html());

      $("#todo-list-item").val("");
    }
  });

  $(document).on("change", ".checkbox", function() {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }

    $(this)
      .parent()
      .toggleClass("completed");

    localStorage.setItem("listItems", $("#list-items").html());
  });

  $(document).on("click", ".remove", function() {
    $(this)
      .parent()
      .remove();

    localStorage.setItem("listItems", $("#list-items").html());
  });
});





