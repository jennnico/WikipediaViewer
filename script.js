$(document).ready(function() {
  $('#magGlass').click(function() {
    
    //hides magnifying glass...
    $('#magGlass').css('visibility', 'hidden');
    
    //...and pulls up google search
    (function() {
      var cx = '004159287798991970030:zzkloi9ehdi';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  })
})
