(function(){
    function scrollFunction() {
        var $navbar = document.getElementById("navbar");
        var $logo = document.getElementById("logo");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $navbar.style.padding = "0rem 1rem";
            $logo.style.height = "45px";
        } else {
            $navbar.style.padding = ".5rem 1rem";
            $logo.style.height = "50px";
        }
    }

    window.onscroll = function() {scrollFunction()};
})();