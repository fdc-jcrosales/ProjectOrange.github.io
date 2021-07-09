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
        PlayBox.imageOpen('.pbcard-event1', '.pbcontainer-event1', ['images/gallery/summer-outing/1.jpg','images/gallery/summer-outing/2.jpg','images/gallery/summer-outing/3.jpg','images/gallery/summer-outing/4.jpg','images/gallery/summer-outing/5.jpg','images/gallery/summer-outing/6.jpg','images/gallery/summer-outing/7.jpg','images/gallery/summer-outing/8.jpg','images/gallery/summer-outing/9.jpg','images/gallery/summer-outing/10.jpg'], 200, 300);
       // PlayBox.imageOpen('.pbcard-event2', '.pbcontainer-event2', ['images/gallery/company-dinner/1.mp4']);
        PlayBox.imageOpen('.pbcard-event3', '.pbcontainer-event3', ['images/gallery/award-sept-2019/1.jpg','images/gallery/award-sept-2019/2.jpg','images/gallery/award-sept-2019/3.jpg','images/gallery/award-sept-2019/4.jpg','images/gallery/award-sept-2019/5.jpg','images/gallery/award-sept-2019/6.jpg','images/gallery/award-sept-2019/7.jpg','images/gallery/award-sept-2019/8.jpg','images/gallery/award-sept-2019/9.jpg','images/gallery/award-sept-2019/10.jpg'], 200, 300);
        PlayBox.imageOpen('.pbcard-event4', '.pbcontainer-event4', ['images/gallery/halloween-2019/1.jpg','images/gallery/halloween-2019/2.jpg','images/gallery/halloween-2019/3.jpg','images/gallery/halloween-2019/4.jpg','images/gallery/halloween-2019/5.jpg','images/gallery/halloween-2019/6.jpg','images/gallery/halloween-2019/7.jpg','images/gallery/halloween-2019/8.jpg','images/gallery/halloween-2019/9.jpg','images/gallery/halloween-2019/10.jpg'], 200, 300);
        PlayBox.imageOpen('.pbcard-event5', '.pbcontainer-event5', ['images/gallery/fdci-7/1.jpg','images/gallery/fdci-7/2.jpg','images/gallery/fdci-7/3.jpg','images/gallery/fdci-7/4.jpg','images/gallery/fdci-7/5.jpg','images/gallery/fdci-7/6.jpg','images/gallery/fdci-7/7.jpg','images/gallery/fdci-7/8.jpg','images/gallery/fdci-7/9.jpg','images/gallery/fdci-7/10.jpg'], 200, 300);
        PlayBox.imageOpen('.pbcard-event6', '.pbcontainer-event6', ['images/gallery/christmas-raffle-2019/1.jpg','images/gallery/christmas-raffle-2019/2.jpg','images/gallery/christmas-raffle-2019/3.jpg','images/gallery/christmas-raffle-2019/4.jpg','images/gallery/christmas-raffle-2019/5.jpg','images/gallery/christmas-raffle-2019/6.jpg','images/gallery/christmas-raffle-2019/7.jpg','images/gallery/christmas-raffle-2019/8.jpg','images/gallery/christmas-raffle-2019/9.jpg','images/gallery/christmas-raffle-2019/10.jpg'], 200, 300);
        PlayBox.imageOpen('.pbcard-event7', '.pbcontainer-event7', ['images/gallery/christmas-2019/1.jpg','images/gallery/christmas-2019/2.jpg','images/gallery/christmas-2019/3.jpg','images/gallery/christmas-2019/4.jpg','images/gallery/christmas-2019/5.jpg','images/gallery/christmas-2019/6.jpg','images/gallery/christmas-2019/7.jpg','images/gallery/christmas-2019/8.jpg','images/gallery/christmas-2019/9.jpg','images/gallery/christmas-2019/10.jpg'], 200, 300);

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
        //Scroll to section on click
        $("a.nav-link").click(function() {
            if (this.hash!=="") {
                var $target =  $('section' + this.hash);
                var targetOffset = $target.offset().top - 50;
                $('html,body').animate({scrollTop: targetOffset}, 0);
                return false;
            }
        });
    });
})();