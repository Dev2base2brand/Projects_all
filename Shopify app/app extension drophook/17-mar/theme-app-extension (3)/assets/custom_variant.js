document.addEventListener("DOMContentLoaded", function(event) {
// jQuery(function() {
    jQuery('.swatch :radio').change(function() {
      var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
      var optionValue = jQuery(this).val();
      jQuery(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
      var final_val;
      jQuery(this).closest('form').find('.single-option-selector').each(function(i,e){
        if(i == 0){
          final_val = $(this).val();
        }else{
          final_val = final_val+' / '+$(this).val();
        }
      });
      console.log(final_val);
      jQuery(this).closest('form').find('select.product-form__variants option').each(function(i,e){
        var text = jQuery(this).text().trim();
        if(text === final_val){
          var data_available = parseInt($(this).data('variant-available'));
          var price = $(this).data('price');
          jQuery(this).closest('form').find('select.product-form__variants').val(jQuery(this).val()).trigger('change');
          $(this).closest('form').find('.quantity_price .price .regular_price').text(price);
          if(data_available == 0){
            $(this).closest('form').find('.add_to_cart_btn button').addClass('ctm_disabled');
            $(this).closest('form').find('.add_to_cart_btn button').text('Sold Out');
          }else{
            $(this).closest('form').find('.add_to_cart_btn button').removeClass('ctm_disabled');
            $(this).closest('form').find('.add_to_cart_btn button').text('Order');
          }
          return false;
        }
      });
    });
  
    jQuery('.single-option-selector').change(function() {
      var optionValue = jQuery(this).val();
      var final_val;
      jQuery(this).closest('form').find('.single-option-selector').each(function(i,e){
        if(i == 0){
          final_val = $(this).val();
        }else{
          final_val = final_val+' / '+$(this).val();
        }
      });
      console.log(final_val);
      jQuery(this).closest('form').find('select.product-form__variants option').each(function(i,e){
        var text = jQuery(this).text().trim();
        if(text === final_val){
          var data_available = parseInt($(this).data('variant-available'));
          var price = $(this).data('price');
          var data_image_id = $(this).data('image-id');
          jQuery(this).closest('form').find('select.product-form__variants').val(jQuery(this).val()).trigger('change');
          $(this).closest('form').find('.quantity_price .price .regular_price').text(price);
          if(data_available == 0){
            $(this).closest('form').find('.add_to_cart_btn button').addClass('ctm_disabled');
            $(this).closest('form').find('.add_to_cart_btn button').text('Sold Out');
          }else{
            $(this).closest('form').find('.add_to_cart_btn button').removeClass('ctm_disabled');
            $(this).closest('form').find('.add_to_cart_btn button').text('Order');
          }
          console.log(data_image_id);
          if(data_image_id != '' ){
          	$('.banner-slider .thumbnail-image .thumbImg img[data-image-id="'+data_image_id+'"]').trigger('click');
          }
          return false;
        }
      });
    });
    
    $('.quantity .plus').on('click',function(e){
      var qty = parseInt($(this).closest('.qty_wrapper').find('[name="quantity"]').val());
      qty += 1
      $(this).closest('.qty_wrapper').find('[name="quantity"]').val(qty);
    });
    
    $('.quantity .minus').on('click',function(e){
      var qty = parseInt($(this).closest('.qty_wrapper').find('[name="quantity"]').val());
      qty -= 1
      
      if(qty < 1){
        $(this).closest('.qty_wrapper').find('[name="quantity"]').val(1);
      }else{
        $(this).closest('.qty_wrapper').find('[name="quantity"]').val(qty);
      }
    });
    
    $('.choose_file_btn').on('click',function(e){
        $(this).closest('.choose_file').find('input[type="file"]').trigger('click');
    })
    
  // });  
});
