var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(document, window, $){
    $(document).ready(function(){
        $(".slider").slick({

            prevArrow: '.slider-container .prev',
            nextArrow: '.slider-container .next',
            

            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,

            
            

            responsive: [
                {
                  breakpoint: 1140,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 920,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 680,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });
})(document, window, jQuery);

}
/*
     FILE ARCHIVED ON 16:13:24 Apr 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:46:43 Oct 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.562
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 4.369
  LoadShardBlock: 144.836 (3)
  PetaboxLoader3.datanode: 177.836 (6)
  PetaboxLoader3.resolve: 74.261 (3)
  load_resource: 124.835 (2)
  loaddict: 21.543
*/