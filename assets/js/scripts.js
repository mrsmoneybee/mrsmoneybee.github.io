$('a.menu').on("click", function(e) {
  e.preventDefault();
  $('.site-header nav').toggleClass("toggled");
});

// $('article.post iframe').wrap('<div class="video-container" />');

// $(function(){
//     $('.post-list li').each(function(i){
//         var t = $(this);
//         setTimeout(function(){ t.addClass('slider'); }, (i+1) * 330);
//     });
// });
