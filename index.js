$(document).ready(function(){
    // $('.result').hide();
    var $res;
    $('input').on('keyup', function(){
        $text1 = $('#1').val();
        // $('#res1').text($('#1').val());
        $text2 = $('#2').val();
        $text3 = $('#3').val();
        $text4 = $('#4').val();
        $text5 = parseInt($('#5').val());
        $text6 = parseInt($('#6').val());
        $text7 = parseInt($('#7').val());
        $res = ($text5*$text6)/$text7;
    });
    $('#button1').on('click', function(){
        $('.result').show();
        $('#res1').text($text1);
        $('#res2').text($text2);
        $('#res3').text($text3);
        $('#res4').text($text3);
    });
    $('#button2').on('click', function(){
        if($res >= 1000 && $res <= 9999){
            $('.calc').text($res/1000 + "kb, file can be uploaded");
        }
        else{
            $('.calc').text("The file size is big");
        }
    });
});