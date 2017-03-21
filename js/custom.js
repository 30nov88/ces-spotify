$('document').ready(function() {

/*    $('.textBox').on('input', function() {
        var c = this.selectionStart,
            r = /[^A-Za-z0-9_\s]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
    });*/

});



function showToast(msg,msgStatus) {
    if(msgStatus === "success") {
        $('.toast').css('background-color', '#DFF2BF');
        $('.toast').css('color', '#4F8A10');
    }
    else if(msgStatus === "message") {
        $('.toast').css('background-color', '#BDE5F8');
        $('.toast').css('color', '#00529B');
    }
    else if (msgStatus === "warning"){
        $('.toast').css('background-color', '#FEEFB3');
        $('.toast').css('color', '#9F6000');
    }

    $('.toast').html(msg).clearQueue().fadeIn(400).delay(2000).fadeOut(400);
}
