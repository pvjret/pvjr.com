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

jQuery(document).ready(function($) {

$("#ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "feedback/contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<div class="notification_ok"><i class="fa fa-check-square-o fa-5x"></i><br>"Your message has been sent!"</div>';
$("#ajax-contact-form").hide();
$(".quick_contact>h4").hide();
} else {
result = msg;
}
$('#note').html(result);
}
});
return false;
});
});

}
/*
     FILE ARCHIVED ON 16:13:26 Apr 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:46:41 Oct 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.15
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 4.249
  LoadShardBlock: 65.701 (3)
  PetaboxLoader3.datanode: 110.523 (6)
  PetaboxLoader3.resolve: 96.714 (3)
  load_resource: 147.312 (2)
  loaddict: 42.133
*/