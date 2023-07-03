var ratingNum;

$("button.rating-btn").on("click", function (event){
  
  $(this).css("background-color", "var(--color-orange)").css("color", "white")
  ratingNum = this.innerHTML;

})

$("button.submit-btn").on("click", function (event) {

  $("div.rating").css("visibility", "hidden")
  $("div.thank-you").css("visibility", "visible")
  $("span.select-count").html(ratingNum)
})