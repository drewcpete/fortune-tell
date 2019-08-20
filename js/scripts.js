$(document).ready(function() {
  $("form.questions").submit(function (event){
    event.preventDefault();
    $("input:checkbox[name=lucky]:checked").each(function() {
      var luckyScore = parseInt($(this).val());
      console.log(luckyScore);
    });

    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unluckyScore = parseInt($(this).val());
      console.log(unluckyScore);
    });
    $(".questions").hide();

    // console.log(luckyScore);
    console.log(unluckyScore);

    var outputScore = luckyScore + unluckyScore;

    if (outputScore <= 5 && outputScore > 0) {
      $(".lucky").show();
    } else if (outputScore >= -5 && outputScore < 0) {
      $(".unlucky").show();
    } else {
      $(".neutral").show();
    }

  });
});
