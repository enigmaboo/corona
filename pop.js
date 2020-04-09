$(window).load(function () {
    $(".audi").trigger('load');
    $(".triggr").click(function(){
       $('.hovr').show();
       $(".audi").trigger('play');
       navigator.vibrate(100000);
    });
    $('.hovr').click(function(){
        $('.hovr').hide();
        $(".audi").trigger('pause');
        navigator.vibrate(0);
    });
});
