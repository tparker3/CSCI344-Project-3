var main = function () {
  console.log("hello world!");
  
  var setUpClickHandler = function (anchor) {
    anchor.click(function () {
      var target = $(this).attr("href");
    
      $(".active").removeClass("active");
      $(this).addClass("active");
      $("#"+target).addClass("active");
    
      return false;
    });    
  };
  
  var setUpJSONTab = function (tab) {
    var tab_a = $("<a>"+tab.title+"</a>").addClass("tab").attr("href", tab.title);
    $(".tabs").append(tab_a);
    
    var content = $("<div>"+tab.content+"</div>").addClass("tab").attr("id",tab.title);
    $(".content").append(content);
    setUpClickHandler(tab_a);    
  };

  $.getJSON("all.json", function (todos) {
    console.log("yeah")
    var i;
    for (i = 0; i < todos.length; i++) {
      console.log (todos[i])
      $("#tab1").append ("<p>" + todos[i].description + ": " + todos[i].categories + "</p>"); 
      $("#tab2").append ("<p>" + $(".shopping.descriptions") + "</p>");
     
      
    };
    
  });
  
  var arr = ["shopping", "groceries", "travel", "work", "home", "family"];
  
   jQuery.each(arr, function () {
    console.log("category"),
$("#tab2").append ("<p>" + $(".shopping.descriptions") + "</p>");


});

  console.log("about to set up click handlers");
  setUpClickHandler($(".tabs .tab"));
  
  
  
    $("#user_input_button").click(function () {
      console.log("AddMe");
      $("#tab1").append ("<p>" + $("#user_input").val() + ": " + $("#user_input2").val() +"</p>"); 
    });
  
    
  
  
  var setUpAllJSON = function (content) {
    $("#tab1").append($("#all.json").val())
  };
  
  $.getJSON("all.json", setUpAllJSON);
}

$(document).ready(main);