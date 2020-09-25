var slides = [
  "http://67.227.248.6/~dco/wp-content/uploads/2020/09/kraftmaid.jpg",
  "http://67.227.248.6/~dco/wp-content/uploads/2020/09/Kitty_Hawk_Background.jpg",
  "http://67.227.248.6/~dco/wp-content/uploads/2020/09/Norwich-6-27-17-scaled.jpg",
  "http://67.227.248.6/~dco/wp-content/uploads/2020/09/Garrison_White-Garrison_Slate_Cherry-OA2.jpg"
];
function Preload(arrayName){
  for (var i = 0; i < arrayName.length - 1; ++i) {
    var img = new Image();
    img.src = arrayName[i];
  }
}
Preload(slides);
var OnSlide = 0;
Slidego();
function Slidego(){
  setTimeout(function(){
    var numberof = (slides.length - 1);
    if(OnSlide > numberof){
      OnSlide=0;
    }	
    var slide = slides[OnSlide];
    jQuery('#slider').fadeTo('1000', 0, function(){
      jQuery(this).css('background-image','linear-gradient(180deg,rgba(0,0,0,0.32) 0%,rgba(0,0,0,0.71) 100%),url('+slide+')');
    }).fadeTo(1000, 1);
    OnSlide++;
    Slidego();
  }, 5000);
}
