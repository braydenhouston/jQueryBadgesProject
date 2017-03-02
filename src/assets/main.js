$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2506500.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
          for(var i = 0, len = response.courses.completed.length; i < len; i++){
               console.log(response.courses.completed[i]);
               $("#badges").append("<div class='course'>" +
               "<h3>" + response.courses.completed[i].title + "</h3>" +
               "<img src='" + response.courses.completed[i].badge + "'>" +
               "<a class='btn btn-primary' target='_blank' href='" + response.courses.completed[i].url + "'>See Course</a>" +
               "</div>");
          }

    }
  });
});
