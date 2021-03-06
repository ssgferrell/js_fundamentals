// Before doing anything else on JS development, try this alert() first to make sure
// base definition between HTML5 and JS file is fine; that will save a lot of debugging
// time in the long run. Also you have the chance to check HTML5 & CSS3 matching
/* Now after verification, turn off the whole code or replace part of it, to develop sth.
$(function() {
    $('#bobhead').click(function() {
        alert('verified that HTML and JS file works fine, before doing anything else');
    });
});
*/

$(function() {
    $('#success').hide();
    //Only the below line is added after $('#startover') added:
    $('#bobhead').addClass('hoverOut');
    var score = 0;
    $('#bobhead').click(function() {
        score++; //score = score + 1;
        $('#score').text(score);    // Assign score to text();
        $('#success').show('slow').fadeOut(2000);  // only show after you clicked, then fade away in 2 seconds;
    });

    $('#startover').hover(function() {
        score = 0;
        $('#score').text(score);
        $('#startover').addClass('hoverIn').removeClass('hoverOut'); //Checkout this one: add one class then remove another
    }, function () {
        $('#startover').removeClass('hoverIn').addClass('hoverOut');
    });
});