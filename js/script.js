(function(){
    function scrollFunction() {
        var $navbar = document.getElementById("navbar");
        var $logo = document.getElementById("logo");
        var $goTop = document.getElementById("go_top");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $navbar.style.padding = "0rem 1rem";
            $logo.style.height = "45px";
            $goTop.style.display = "block";
        } else {
            $navbar.style.padding = ".5rem 1rem";
            $logo.style.height = "50px";
            $goTop.style.display = "none";
        }
    }
    window.onscroll = function() {scrollFunction()};

    //Initialized WOW js
    new WOW().init();

    $("#go_top").click(function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

})();