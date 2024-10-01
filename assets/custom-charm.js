
$('.button_outer span.first_btn').click(function(){  
    $('.charm_main_div .canvas_outer .left_div img.first_img').hide();
    $('.charm_main_div .canvas_outer .left_div img.second_img').show();
    $('.charm_main_div .canvas_outer .right_div .tab_one').show();
   $('.charm_main_div .canvas_outer .right_div .tab_two').hide();
});





$('.button_outer span.second_btn').click(function(){
    var cls= $('.charm_main_div .canvas_outer .left_div img.second_img').hasClass('active_div');
  if(cls == true){
   $('.charm_main_div .canvas_outer .right_div .tab_one').hide();
   $('.charm_main_div .canvas_outer .right_div .tab_two').show();
  $('.outer_product_tab_nav .nav_coll span.coll_nm:first-child')[0].click();
  }else{
   // alert('Choose Your Chain');
  }
}); 



$('.outer_product_tab_nav .nav_coll span.coll_nm').click(function(){
    $('.outer_product_tab_nav .nav_coll span.coll_nm').removeClass('active');
    $(this).addClass('active');
  $('.tab_two .outer_product_tab_nav .outer_product_tab').hide();
    var val =$(this).attr('nav_val');
   $('.tab_two .outer_product_tab_nav .outer_product_tab[data_val="'+val+'"]').show();
});




$('.tab_one .inner_div .add_btn span').click(function() {
  $('.charm_main_div .canvas_outer .left_div img.second_img').addClass('active_div');
    var op1 = [];
    var op2 = [];
    $('.tab_one .outer_product_tab .inner_div').removeClass('active');
    $(this).closest('.inner_div').addClass('active');

    $(this).closest('.inner_div').find('.variant_div .inner_var select').each(function(index) {
        var val = $(this).val(); 
        if(index == '0'){
        op1.push(val);
        }else{
          op2.push(val);  
        }
      
    });


  
 var main_op =op1 +' / '+ op2;
if (op1.length > 0 && op2.length > 0) {
     var id =$(this).closest('.inner_div').find('.var_id select option[tp_op="'+main_op+'"]').attr('vr_id');
} else {
  var id =$(this).closest('.inner_div').attr('var-id-ft'); 
}

  
  $('.charm_main_div form input.items_id1').val(id);
  $('.charm_main_div .chain_var_id').attr('chain_vr_id', id);
 var img= $(this).closest('.inner_div').find('.product_img img').attr('src');
   var price= $(this).closest('.inner_div').find('.product_price').attr('price');
  $('.charm_main_div .price_hide span.price.pr_0').text(price);
$('.charm_main_div .canvas_outer .left_div img.second_img').attr('src', img);
var count_val = 0;
$('.charm_main_div .price_hide .price').each(function(){
    var pr = $(this).text();    
    count_val += parseFloat(pr);   
});
// count = count_val / 100;
// count = Number(count).toFixed(2);
// $('.charm_main_div .add_btn_outer span.price_totel span').text(count);

  var price=(count_val/100);
      var price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); 
      var price = price.replace(",",","); 
$('.charm_main_div .add_btn_outer span.price_totel span').text(price);
  
});



$( document ).ready(function() {
var count = 0;
$('.tab_two .inner_div .add_btn span').click(function() {

  
    var op1 = [];
    var op2 = [];
    $('.tab_two .outer_product_tab .inner_div').removeClass('active');
    $(this).closest('.inner_div').addClass('active');

    $(this).closest('.inner_div').find('.variant_div .inner_var select').each(function(index) {
        var val = $(this).val(); 
        if(index == '0'){
        op1.push(val);
        }else{
          op2.push(val);  
        }
      
    });
 var main_op =op1 +' / '+ op2;

if (op1.length > 0 && op2.length > 0) {
     var id =$(this).closest('.inner_div').find('.var_id select option[tp_op="'+main_op+'"]').attr('vr_id');
} else {
  var id =$(this).closest('.inner_div').attr('var-id-ft'); 
}
  
   
  var text  =$(this).closest('.inner_div').find('input.properties_txt').val();
  if(text == ''){

}else{
console.log(text);
  }
      count++;
    
        $(".charm_main_div form").append("<input  type='hidden' count_nm='"+count+"' name='items["+count+"][id]' value='"+id+"'/>");
        $(".charm_main_div form").append("<input type='hidden'   count_nm='"+count+"' class='items' name='items["+count+"][quantity]' value='1'/>");
   // $(".charm_main_div form").append("<input type='hidden'   count_nm='"+count+"' class='items' name='items["+count+"][properties]' value='Bundle'/>");
 // $('.charm_main_div form input.items_id2').val(id);
 var img= $(this).closest('.inner_div').find('.product_img img').attr('src');
//$('.draggable_outer .draggable img').attr('src', img);

$(".draggable_outer .charm_w").each(function() {
      var img_src =$(this).find('img.charm').attr('src');
        if(img_src == ''){
            $(this).addClass('active');
       $(this).attr('count_pr', count);
           $(this).find('img.charm').attr('src', img);
             breakOut = true;
            return false;
          
        }
    });
 var price= $(this).closest('.inner_div').find('.product_price').attr('price');
  //$('.charm_main_div .price_hide span.price.pr_0').text(price);
 $(".charm_main_div .price_hide").append("<span  class='price  pr_"+count+"' count_nm='"+count+"'>"+price+"</span>");
  var count_val = 0;
$('.charm_main_div .price_hide .price').each(function(){
    var pr = $(this).text();    
    count_val += parseFloat(pr);   
});
// count = count_val / 100;
// count = Number(count).toFixed(2);
// $('.charm_main_div .add_btn_outer span.price_totel span').text(count);

 var price=(count_val/100);
      var price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); 
      var price = price.replace(",",","); 
  $('.charm_main_div .add_btn_outer span.price_totel span').text(price);
});
});



var count = 9;
$(document).on("click",".charm-close a",function(e) {
 e.preventDefault(); 
 
count++;   
    $(this).closest('.charm_w').removeClass('active');
      $(this).closest('.charm_w').attr('style', '');
    $(this).closest('.charm_w').find('.inner__charm_w img.charm').attr('src', '');
    var count_nn =$(this).closest('.charm_w').attr('count_pr'); 
    $('.charm_main_div form input[count_nm="'+count_nn+'"]').remove();
  


 $('.charm_main_div .price_hide .price[count_nm="'+count_nn+'"]').remove();
       $(this).closest('.charm_w').attr('count_pr', '');
    var count_val = 0;
$('.charm_main_div .price_hide .price').each(function(){
    var pr = $(this).text();    
    count_val += parseFloat(pr);   
});
// count = count_val / 100;
// count = Number(count).toFixed(2);
// $('.charm_main_div .add_btn_outer span.price_totel span').text(count);
 var price=(count_val/100);
      var price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); 
      var price = price.replace(",",","); 
  $('.charm_main_div .add_btn_outer span.price_totel span').text(price);

  $(this).closest('.charm_w').remove();
$(document).ready(function () {
    
    $('.draggable_outer .charm-container .charm_w:last-child').after('<div class="chm__'+count+'_wrapper charm_w ui-draggable ui-draggable-handle" count_pr=""><div class="inner__charm_w"><img class="charm" data-index="'+count+'" data-vid="" src=""><div class="charm-rotate_l 9"><img src="https://cdn.shopify.com/s/files/1/0268/8365/3667/files/Vector_5.svg?v=1698668275" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="true"></div><div class="charm-close '+count+'" data-index="'+count+'" data-pid="" data-vid=""><a href="#"><img src="https://cdn.shopify.com/s/files/1/0268/8365/3667/files/Group_181.svg?v=1698668275" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="true"></a></div><div class="charm-rotate_r 9"><img src="https://cdn.shopify.com/s/files/1/0268/8365/3667/files/Vector_4.svg?v=1698668275" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="true"></div></div></div>');

    $('.chm__'+count+'_wrapper').draggable({
        containment: ".charm_main_div .canvas_outer .left_div .inner",
      
    });
});   

   
});






function updateCart(){
var symbol= $('.charm_main_div').attr('currency_symbol');
     $.ajax({
    url:'/cart.js',
     type:"GET",
     dataType: 'JSON',
    success:function(res){
      console.log(res);
           $('.charm_main_div .cart_item_div .right_div .cart_data .part').remove();
  var finalprice=parseFloat(res['total_price']/100);
     var finalprice = finalprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); 
     var finalprice = finalprice.replace(",",","); 
     $(".bottom_bar_pc .pr_bottom span").remove();
 $(".bottom_bar_pc .pr_bottom").append("<span>"+symbol+finalprice+"</span>");
        var items=res['items'];
  var line_item_id = '1';
        
        for(i=0;i<items.length;i++){
              var title=items[i]['product_title']; 
      var id=items[i]['id']; 
                var producturl=items[i]['url'];   
            var img=items[i]['image'];
            var qty=items[i]['quantity'];
             var price=parseFloat(items[i]['price']/100);
      var price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); 
      var price = price.replace(",",",");     
            
   $('.charm_main_div .cart_item_div .right_div .cart_data').append("<div class='part loop-"+i+"' data-id='"+i+"' data-var-id='"+id+"'></div>");
$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i).append("<div class='image'></div>");
$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i).append("<div class='content'></div>");
$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .content").append("<div class='inner_content_lyt'></div>");
$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .content").append("<div class='inner_content_ryt'></div>"); 
 $(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .inner_content_ryt").append("<div class='quantitybox'></div>");            
$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .image").append("<div class='img'><img src="+img+"></div>");
$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .content .inner_content_lyt").append("<div class='title'><a href='"+producturl+"'>" +title+ "</a></div>");
$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .content .inner_content_lyt").append("<div data-price='"+price+"' class='price'>"+symbol+price+ "</div>");
  var variant_names = items[i]['options_with_values'];
        var k;
        for(k=0;k<variant_names.length;k++){
         var variant_name = variant_names[k]['name'];
         var variant = variant_names[k]['value'];
          if(variant != null ){
            if(variant.indexOf("Title") == -1){
             $(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .inner_content_lyt").append("<div class='varintbox'></div>");
             $(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .inner_content_lyt .varintbox").append("<div class='vartitle_size'><span class='varname'>"+variant_name+":</span> <span class='vartitle'>"+variant+"</span></div>");
             //$(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .inner_content_lyt .varintbox").append("<div class='vartitle'>" +variant+ "</div>");
            }
          }
          
        } 

   $(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .inner_content_ryt .quantitybox").append("<span style='display: none;'>x"+qty+"</span>");
   $(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .inner_content_ryt .quantitybox").append("<div class='rightnew'><button class='minus_quantity' data-id='"+line_item_id+"'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='2' viewBox='0 0 14 2' fill='none'><path opacity='0.5' d='M14 2H8H6H0V0H6H8H14V2Z' fill='black'/></svg></button><input type='number' class='cart__qty-input' data-id='"+line_item_id+"' value="+qty+" min='0' pattern='[0-9]*'><button class='plus_quantity' data-id='"+line_item_id+"'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'><path opacity='0.5' d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='black'/></svg>  </button></div>");
     $(".charm_main_div .cart_item_div .right_div .cart_data .loop-"+i+" .inner_content_ryt").append("<div class='remove' data-id="+i+"><button class='btn' type='button'>Remove <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'><path d='M1.49095 0.245437L4.99979 3.75428L8.49045 0.263617C8.56755 0.181548 8.66044 0.115896 8.76353 0.0705969C8.86662 0.025298 8.9778 0.00128568 9.0904 0C9.33149 0 9.56271 0.095772 9.73318 0.266247C9.90366 0.436723 9.99943 0.667937 9.99943 0.909026C10.0015 1.02047 9.98087 1.13118 9.93867 1.23435C9.89646 1.33752 9.83362 1.43097 9.75399 1.50898L6.21788 4.99964L9.75399 8.53575C9.90381 8.68232 9.99167 8.88081 9.99943 9.09026C9.99943 9.33134 9.90366 9.56256 9.73318 9.73303C9.56271 9.90351 9.33149 9.99928 9.0904 9.99928C8.97455 10.0041 8.85897 9.98475 8.75099 9.9425C8.64301 9.90025 8.545 9.836 8.46318 9.75384L4.99979 6.24501L1.50004 9.74475C1.42323 9.82409 1.33147 9.88742 1.23006 9.93111C1.12865 9.97479 1.01959 9.99796 0.909173 9.99928C0.668085 9.99928 0.436871 9.90351 0.266395 9.73303C0.0959199 9.56256 0.000147905 9.33134 0.000147905 9.09026C-0.00197148 8.97881 0.018706 8.8681 0.0609117 8.76493C0.103117 8.66176 0.165961 8.56831 0.245585 8.4903L3.78169 4.99964L0.245585 1.46353C0.0957637 1.31696 0.00791063 1.11848 0.000147905 0.909026C0.000147905 0.667937 0.0959199 0.436723 0.266395 0.266247C0.436871 0.095772 0.668085 0 0.909173 0C1.12734 0.00272708 1.33642 0.0909025 1.49095 0.245437Z' fill='black'/></svg>  </button></div>");
        var line_item_id = parseInt(line_item_id)+parseInt(1); 
            
            
        }
    }
     });

 }
$(document).ready(function(){	
  var element = $(".charm_main_div .canvas_outer .left_div .inner");
var getCanvas;
$('.charm_main_div .add_btn_outer span.add_btn').click(function() {

  html2canvas(element, {
         onrendered: function (canvas) {                
                getCanvas = canvas;
         
             }
         });
  
 setTimeout(function() {
 var imgageData = getCanvas.toDataURL("image/png");   
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
$(".final_img img").attr('src', newData);
}, 300);




 setTimeout(function() {
var id_chain =$('.charm_main_div .chain_var_id').attr('chain_vr_id');
  var dataURL =$('.final_img img').attr('src');
  var blobBin = atob(dataURL.split(',')[1]);
          var array_main = [];
          for(var i = 0; i < blobBin.length; i++) {
            array_main.push(blobBin.charCodeAt(i));
          }
        var file=new Blob([new Uint8Array(array_main)], {type: 'image/png'});
console.log("file",file);
var formdata = new FormData();
        formdata.append("properties[Preview image]", file,"preview.png");
        formdata.append("id", id_chain);
     $.ajax({
          url: "/cart/add",
          type: "POST",
          data: formdata,
          processData: false,
          contentType: false,
        }).done(function(respond){
       var var_id = $('.charm_main_div form').serialize();
     $.ajax({
      type: 'POST', 
      url: '/cart/add.js',
      dataType: 'json', 
      data: var_id,
    success:function(result){
updateCart();
   $('.charm_main_div .outer_div.fist_div').hide();
$('.charm_main_div .cart_item_div.second_div').show();     
    } 
   });
        });
}, 600);
  

});
});



/* Cartdrawer plus quantity */    
$(document).on("click","button.plus_quantity",function(){
      var data_id =  $(this).attr('data-id');  
      var qty = parseInt($(".cart__qty-input[data-id='"+data_id+"']").val())+parseInt(1);
      var data = {
       quantity: qty, 
       line: data_id 
        };

   $.ajax({
     url:'/cart/change.js',
     type:'POST',
     data:data,
     dataType:'JSON',
    success:function(res){
        updateCart(); 
}
 });
   
});
   
/* Cart drawer minus quantity */
$(document).on("click","button.minus_quantity",function(){
      var data_id =  $(this).attr('data-id');  
      var qty = parseInt($(".cart__qty-input[data-id='"+data_id+"']").val())-parseInt(1);
      var data = {
         quantity: qty, 
          line: data_id 
         };

   $.ajax({
     url:'/cart/change.js',
     type:'POST',
     data:data,
     dataType:'JSON',
     success:function(res){
        updateCart();
}
 });
   
 });
$('div[id*=charm-builder] .inner__charm_w').click(function(){
    $('div[id*=charm-builder] .inner__charm_w').removeClass('charm_active');
    $(this).addClass('charm_active');
});
$(document).on("click",".cart_item_div .remove button.btn",function(){

$.ajax({
    type: "POST",
    url: '/cart/clear.js',
    data: '',
    dataType: 'json',
    success: function() { 
     $('.charm_main_div .outer_div.fist_div').show();
$('.charm_main_div .cart_item_div.second_div').hide(); 
    },
    error: function(XMLHttpRequest, textStatus) {
   alert('error');
    }
  });
 });

  
