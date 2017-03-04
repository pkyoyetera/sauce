


$(".form-text").hide();

$(".sign-in").on("click", function () {
   alert("By signing in, you accept the terms and conditions");
    $(".form-text").show();
});




var app = angular.module('front-app', []);