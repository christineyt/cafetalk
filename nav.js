function doOpen(){
    $("#NAV").show();
}

function doClose(){
    $("#NAV").hide();
}

$(".mob-wrapper").on("click", doOpen);
$("#NAV").on("click", doClose);
