/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
 $('.readmore').click(function (event) {
   event.preventDefault();
   var descriptionFull = document.querySelector('.collection-description-full');
   descriptionFull.style.display = 'block';
   var descriptionShort = document.querySelector('.collection-description-short');
   descriptionShort.style.display = 'none';
 });
 $('.readless').click(function (event) {
   event.preventDefault();
   var descriptionFull = document.querySelector('.collection-description-full');
   descriptionFull.style.display = 'none';
   var descriptionShort = document.querySelector('.collection-description-short');
   descriptionShort.style.display = 'block';
 });
 $('.NewsletterPopup__Close').click(function (event) {
      $('.PageOverlay').css('visibility', 'hidden');
      $('.PageOverlay').css('opacity', '0');
 });
function getUrlParameter(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  var qsp = 'code',
  para = getUrlParameter(qsp);
if(para == "yes"){
  $('body').addClass("customfilters");
  $('.Product__Wrappercustomdata').show();
  $('.custom.header').show();
  $('.customhead').show();



  $('.Product__Wrapper.jhhjkkjh').hide();
  $('div#shopify-section-template--16013514473652__judgeme_section_review_widget_c4a1').hide();
   $('div#shopify-section-template--16013514473652__product-recommendations').hide();
}

console.log(para);


$( document ).ready(function() {
   setTimeout(function() {
        $('.preloadernew').hide();
    }, 400);
});
$('.customfilters .Pagination__Nav a').each(function() {
        var url = $(this).attr('href');
        //var newurl = url.replace('/products/','');
          // var  newurls = newurl.split('?')[0];
        var resultapgeurl = url+"&code=yes";
    $(this).attr('href', resultapgeurl);
});
$('.customfilters .ProductItem__ImageWrapper').each(function() {
        var url = $(this).attr('href');
        //var newurl = url.replace('/products/','');
          // var  newurls = newurl.split('?')[0];
        var resultapgeurl = url+"?code=yes";
    $(this).attr('href', resultapgeurl);
});

$('.customfilters .ProductItem__Title.Heading a').each(function() {
        var url = $(this).attr('href');
        //var newurl = url.replace('/products/','');
          // var  newurls = newurl.split('?')[0];
        var resultapgeurl = url+"?code=yes";
    $(this).attr('href', resultapgeurl);
});

$('.easyPaginateNav a').click(function (event) {
  $('.customfilters .ProductItem__ImageWrapper').each(function() {
          var url = $(this).attr('href');
          //var newurl = url.replace('/products/','');
            // var  newurls = newurl.split('?')[0];
          var resultapgeurl = url+"?code=yes";
      $(this).attr('href', resultapgeurl);
  });
  $('.customfilters .ProductItem__Title.Heading a').each(function() {
          var url = $(this).attr('href');
          //var newurl = url.replace('/products/','');
            // var  newurls = newurl.split('?')[0];
          var resultapgeurl = url+"?code=yes";
      $(this).attr('href', resultapgeurl);
  });
});

jQuery(".template-collection .easyPaginateNav a").click(function() {
  jQuery("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
// $('.customfilters .ProductItem__ImageWrapper').each(function() {
//         var url = $(this).attr('href');
//         var newurl = url.replace('/products/','');
//            var  newurls = newurl.split('?')[0];
//         var resultapgeurl = "https://www.prexhobby.com/pages/manual-search-results?handle="+newurls;
//     $(this).attr('href', resultapgeurl);
//     });
