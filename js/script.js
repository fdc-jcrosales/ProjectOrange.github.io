(function(){
    $(function(){
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
        // On page scroll
        window.onscroll = function() {scrollFunction()};

        //Initialized WOW js
        new WOW().init();

        //Initialized Playbox js for Gallery section
        PlayBox.imageOpen('.pbcard-cp', '.pbcontainer-cp', ['images/slider01.jpg','images/slider02.jpg','images/slider03.jpg'], 200, 300);
        PlayBox.imageOpen('.pbcard-tb', '.pbcontainer-tb', ['images/slider01.jpg','images/slider02.jpg','images/slider03.jpg'], 200, 300);
        PlayBox.imageOpen('.pbcard-md', '.pbcontainer-md', ['images/slider01.jpg','images/slider02.jpg','images/slider03.jpg'], 200, 300);

        // Trigger click Go Top Arrow
        $("#go_top").click(function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        $(".wrap-wp").click(function(){
            $("#modalWP").modal("show");
        });

        $(".wrap-wt").click(function(){
            $("#modalWT").modal("show");
        });

        $(".wrap-wat").click(function(){
            $("#modalWAT").modal("show");
        });

        $(".btn-apply").click(function(){
            $(".modal").modal("hide");
        });
    });
})();