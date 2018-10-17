var pathArray = window.location.href.split('/');
var protocol = pathArray[0];
var host = pathArray[2];
var iese = pathArray[3];

var urlHost = protocol + '//' + host + '/' + pathArray[1];
if ($('#editor1').length != 0) {
  CKEDITOR.replace('editor1');
}
if ($('.ajax-browse').length != 0) {
  ajax_browse();
}

function ajax_send_image() {
  $("#product-edit-request").unbind('submit');
  $("#product-edit-request").submit(function () {
    var btn = $(this).find('.btn-submit');
    var btnHtml = btn.html();
    var acion = $(this).attr('action')
    for (instance in CKEDITOR.instances) {
      CKEDITOR.instances[instance].updateElement();
    }
    var getParent = $(this);
    var _status = getParent.find('.status');
    _status.html('');
    var formData = new FormData($(this)[0]);

    $.ajax({
      url: acion,
      type: 'POST',
      data: formData,
      async: false,
      dataType: 'json',
      beforeSend: function () {
        _status.hide().html('<div class="alert alert-info">Please wait</div>').fadeIn('slow');
      },
      success: function (dat) {
        if (dat.status == 'success') {
          _status.hide().html('<div class="alert alert-success">' + dat.message + '</div>').fadeIn('slow');
        } else if (dat.status == 'error') {
          _status.hide().html('<div class="alert alert-danger"><ul>' + dat.message + '</ul></div>').fadeIn('slow');
        }
      },
      cache: false,
      contentType: false,
      processData: false
    });

    return false;
  });
}

function ajax_browse() {
  $('.ajax-browse li a,.dataContent').unbind("click");
  $('.ajax-browse li a,.dataContent').bind("click", function (e) {
    e.preventDefault();
    var url = $(this).attr('data-target');
    var target = $(this).attr('data-target');
    $.ajax({
      url: target,
      dataType: 'html',
      beforeSend: function () {

      },
      success: function (data) {
        $('.tab-content').html(data);
        ajax_send_image();
        if ($('#editor1').length != 0) {
          CKEDITOR.replace('editor1');
        }
        ajax_browse();
        $("button[id='btn-ajax']").unbind('click');
        $("button[id='btn-ajax']").click(function (e) {
          e.preventDefault();
          var getParent = $(this).closest('form');
          var action = getParent.attr('action');
          var method = getParent.attr('method');
          var _status = getParent.find('.status');
          var loading = getParent.find('.loading');
          _status.html('');
          loading.show();
          $.ajax({
            url: action,
            type: method,
            data: getParent.serialize(),
            dataType: "json",
            // beforeSend: function(){
            //   loading.html('<img src="'+urlHost+'resources/img/loader.gif" alt="Loading..." />');
            // },
            success: function (dat) {
              loading.hide();
              if (dat.status == 'success') {
                _status.hide().html('<div class="alert alert-success">' + dat.message + '</div>').fadeIn('slow');
                if (dat.action[0] == "redirect") {
                  setTimeout(function () {
                    window.location.href = dat.action[1];
                  }, 2000);
                } else if (dat.action[0] == 'closeModal') {
                  setTimeout(function () {
                    getParent.closest('.modal').modal('hide');
                  }, 2000);
                  getParent.find("input[type='text']").val('');;
                } else if (dat.action[0] == 'clearEverything') {
                  getParent.find("input[type='text'],select").val('');;
                }
              } else if (dat.status == 'error') {
                _status.hide().html('<div class="alert alert-danger"><ul>' + dat.message + '</ul></div>').fadeIn('slow');
              }
            }
          });
          return false;
        });

      }
    })
  });
}


$(function () {
  // MM MENU INIT
  $('nav#menu').mmenu();  

  $('a[data-toggle="popover"]').popover({
    trigger: 'hover'
  });

  $('.form-search .form-control').focus(function () {
    $('.form-search .input-group-search').addClass('active');
  });
  $('.form-search .form-control').blur(function () {
    $('.form-search .input-group-search').removeClass('active');
  });
  $('.btn-newsletter').click(function () {
    $('html').removeClass('mmenu-opened mmenu-left mmenu-opening');
    $('#menu').removeClass('mmenu-opened');
    $('html, body').animate({
        scrollTop: $("#nws_hg").offset().top - ($('#header-hd').height() + 55)
    }, 0);
  });
  $('.title-footer').click(function () {
    var thisClick = $(this);
    var content = $(this).parent('div').find('.unstyle');
    content.slideToggle("fast");
  });
  var categoryValue = $('.txt-category').val();
  if (categoryValue != "") {
    var btnCategory = $('.menuCategory li a[data-value="' + categoryValue + '"]').text();
    $('.btn-category').text(btnCategory).append(' <b class="caret"></b>');
  }
  $('.menuCategory li a').click(function () {
    var txt = $(this).text();
    var value = $(this).attr('data-value');
    $('.txt-category').val(value);
    $('#keyWords').focus();
    $('.btn-category').text(txt).append(' <b class="caret"></b>');
  });
  $('.btn-sidebar').click(function () {
    $('.sidebar').css({
      top: '-20px',
      bottom: 0,
      width: $(window).width(),
      height: parseInt($(window).height()) - 100,

    });
    $('.sidebar').toggle('slide', {
      direction: 'left'
    }, '800');
  });
  $('.hide-side').click(function () {
    $('.sidebar').toggle('slide', {
      direction: 'left'
    }, '800');
  });
  $('.bottom-close-category').click(function () {
    $('.sidebar').toggle('slide', {
      direction: 'up'
    }, '800');
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  $(".user-dropdown").clone().insertAfter(".dropdown-user-mobile").removeClass('dropdown-menu-right');
  $('.btn-gender').click(function () {
    var valG = $(this).val();
    $('#gender-txt').val(valG);
    $(this).parent('.col-md-12').find('#btn-ajax').click();
  })
  ///ajax form input///
  $("button[id='btn-ajax']").click(function (e) {
    e.preventDefault();
    var getParent = $(this).closest('form');
    var action = getParent.attr('action');
    var method = getParent.attr('method');
    var _status = getParent.find('.status');
    var loading = getParent.find('.loading');
    if (iese == 'iese') {
      document.getElementById("btn-ajax").blur();
      document.getElementById("btn-ajax").style.display = 'none';
    }
    _status.html('');
    loading.show();
    $.ajax({
      url: action,
      type: method,
      data: getParent.serialize(),
      dataType: "json",
      // beforeSend: function(){
      //   loading.html('<img src="'+urlHost+'resources/img/loader.gif" alt="Loading..." />');
      // },
      success: function (dat) {
        loading.hide();
        if (dat.status == 'success') {
          _status.hide().html('<div class="alert alert-success">' + dat.message + '</div>').fadeIn('slow');
          if (dat.action[0] == "redirect") {
            var urlSplit = document.URL.split("#");
            if (urlSplit[1]) {
              window.location.reload();
            } else {
              setTimeout(function () {
                window.location.href = dat.action[1];
              }, 2000);
            }
          } else if (dat.action[0] == 'closeModal') {
            setTimeout(function () {
              getParent.closest('.modal').modal('hide');
            }, 2000);
            getParent.find("input[type='text']").val('');
          } else if (dat.action[0] == 'clearEverything') {
            getParent.find("input[type='text'],textarea").val('');
          }
          if (iese == 'iese') {
            document.getElementById("btn-ajax").style.display = '';
            setTimeout(function () {
              $('.alert').fadeOut('slow');
            }, 3500);
          }
        } else if (dat.status == 'error') {
          _status.hide().html('<div class="alert alert-danger"><ul>' + dat.message + '</ul></div>').fadeIn('slow');
          if (iese == 'iese') {
            document.getElementById("btn-ajax").style.display = '';
            setTimeout(function () {
              $('.alert').fadeOut('slow');
            }, 3500);
          }
          if (dat.action[0] == 'clearEverything') {
            setTimeout(function () {
              $('.alert-danger').fadeOut('slow');
            }, 2000);
          }
        }
      }
    });
    return false;
  });


  $("button[id='btn-purchase']").click(function(e) {
    e.preventDefault();
    var getParent = $(this).closest('form');
    var action = getParent.attr('action');
    var method = getParent.attr('method');
    var _status = getParent.find('.status');
    var loading = getParent.find('.loading');
    if (iese == 'iese') {
      document.getElementById("btn-purchase").blur();
      document.getElementById("btn-purchase").style.display = 'none';
    }
    _status.html('');
    loading.show();
    document.getElementById("btn-purchase").disabled = true;
    $.ajax({
      url: action,
      type: method,
      data: getParent.serialize(),
      dataType: "json",
      // beforeSend: function(){
      //   loading.html('<img src="'+urlHost+'resources/img/loader.gif" alt="Loading..." />');
      // },
      success: function(dat) {
        loading.hide();
        if (dat.status == 'success') {
          _status.hide().html('<div class="alert alert-success">' + dat.message + '</div>').fadeIn('slow');
          if (dat.action[0] == "redirect") {
            var urlSplit = document.URL.split("#");
            if (urlSplit[1]) {
              window.location.reload();
            } else {
              setTimeout(function() {
                window.location.href = dat.action[1];
              }, 2000);
            }
          } else if (dat.action[0] == 'closeModal') {
            setTimeout(function() {
              getParent.closest('.modal').modal('hide');
            }, 2000);
            getParent.find("input[type='text']").val('');
          } else if (dat.action[0] == 'clearEverything') {
            getParent.find("input[type='text'],textarea").val('');
          }
          if (iese == 'iese') {
            document.getElementById("btn-purchase").style.display = '';
            setTimeout(function() {
              $('.alert').fadeOut('slow');
            }, 3500);
          }
        } else if (dat.status == 'error') {
          _status.hide().html('<div class="alert alert-danger"><ul>' + dat.message + '</ul></div>').fadeIn('slow');
          if (iese == 'iese') {
            document.getElementById("btn-purchase").style.display = '';
            setTimeout(function() {
              $('.alert').fadeOut('slow');
            }, 3500);
          }
          if (dat.action[0] == 'clearEverything') {
            setTimeout(function() {
              $('.alert-danger').fadeOut('slow');
            }, 2000);
          }
        }
      }
    });
    return false;
  });

  /////////////////////

  // $('#modalProductRequest').on('shown.bs.modal', function(e) {
  //   e.preventDefault();
  // });

  // $('#modalProductRequest').on('hidden.bs.modal', function(e) {
  //   $.ajax({
  //     url: "" + urlHost + "ajax/deleteCaptcha",
  //     dataType: "json",
  //     success: function(dat) {}
  //   });
  //   $('.captcha').html("");
  //   $("#product-request input[type='text']").val('');
  // });

  // $('.galleryZoom a').click(function(){
  // 	var src = $(this).attr('data-image');
  // 	$('.zoom').hide().html('<img src="'+src+'" class="img img-responsive">').fadeIn('slow');
  // 	$('.zoom img').magnify();
  // 	$('.galleryZoom a').removeClass('active');
  // 	$(this).addClass('active');
  // });

  $('#qty').on('change', function () {
    var indexKey = $(this).attr('id-product');
    var qty = $(this).val();
    $.ajax({
      type: "get",
      url: urlHost + "product/checkItem/" + indexKey + "/" + qty,
      dataType: "json",
      success: function (result) {
        //location.reload();
        if (result.message == 'true') {
          $("#" + indexKey).fadeOut('slow');
          $("#" + indexKey).removeClass('orange-hg');

          $("#disabled-cart").addClass('hide');
          $("#addToCart").removeClass('hide');

        } else {
          $("#" + indexKey).hide().html('Persediaan produk tidak cukup untuk memenuhi permintaan Anda.').fadeIn('slow');
          $("#" + indexKey).addClass('orange-hg');
          $("#addToCart").addClass('hide');
          $("#disabled-cart").removeClass('hide');
        }
      }
    });
    return false;
  });

  $('#color').on('change', function () {
    let parent_asin = $("input[name=parent_asin]:hidden").val();
    let color = encodeURI($(this).val());
    let size = '';

    $.ajax({
      type: "get",
      url: urlHost + "instantPriceOrder/getPrice?asin=" + parent_asin + "&color=" + color + "&size=" + size,
      dataType: "json",
      beforeSend: function () {
        $('.pd-real-price').hide();
        $("#addToCart").addClass("disabled");
        $(".loading-price").removeClass("hidden");
      },
      success: function (result) {
        $(".loading-price").addClass("hidden");
        $('.pd-real-price').show();
        if (result != null) {
          $('.pd-title').html(result.product_name);
          $('.pd-real-price').html(result.price_idr);
          $("input[name=pid]:hidden").val(result.product_id);
          $("input[name=asin]:hidden").val(result.asin);
          $("input[name=price]:hidden").val(result.price);
          $("#thumbnail-image").attr("src", result.images);
        }
        $("#addToCart").removeClass("disabled");
      }
    });

    $.ajax({
      type: "get",
      url: urlHost + "instantPriceOrder/getSize?parent_asin=" + parent_asin + "&color=" + color,
      success: function (a) {
        $('#size').html(a);
      }
    });
  });

  $('#size').on('change', function () {
    let parent_asin = $("input[name=parent_asin]:hidden").val();
    let color = encodeURI($('#color').val());
    let size = $(this).val();

    $.ajax({
      type: "get",
      url: urlHost + "instantPriceOrder/getPrice?asin=" + parent_asin + "&color=" + color + "&size=" + size,
      dataType: "json",
      beforeSend: function () {
        $('.pd-real-price').hide();
        $("#addToCart").addClass("disabled");
        $(".loading-price").removeClass("hidden");
      },
      success: function (result) {
        $(".loading-price").addClass("hidden");
        $('.pd-real-price').show();
        $('.pd-real-price').html(result.price_idr);
        $("input[name=price]:hidden").val(result.price);
        $("#addToCart").removeClass("disabled");
      }
    });
  });

  $('button[type="submit"][name="update"]').on('click', function () {
    var indexKey = $(this).val();
    var qty = $('select[name="qty-' + indexKey + '"]').val();
    $.ajax({
      type: "get",
      url: urlHost + "cart/updateItem/" + indexKey + "/" + qty,
      dataType: "json",
      success: function (result) {
        if (result.message == 'true') {
          $("#" + indexKey).removeClass('orange-hg');
          $("#" + indexKey).hide().html('Item has updated.').fadeIn('fast');
          location.reload();
        } else {
          $("#" + indexKey).hide().html('Persediaan produk tidak cukup untuk memenuhi permintaan Anda.').fadeIn('slow');
          $("#" + indexKey).addClass('orange-hg');
        }
      }
    });
    return false;
  });

  $('.provinsi').change(function () {
    var id = $(this).val();
    $('.kota').html('');
    $('.kecamatan').html('');
    $('.kelurahan').html('');
    $.ajax({
      type: "POST",
      data: "id=" + id,
      url: urlHost + "ajax/selectKota/" + id,
      success: function (a) {
        $('.kota').html(a);
        $('.kota').show();
        $('.kota-temp').hide();
      }
    });
  });

  $('.kota').change(function () {
    var id = $(this).val();
    $('.kecamatan').html('');
    $('.kelurahan').html('');
    $.ajax({
      type: "POST",
      data: "id=" + id,
      url: urlHost + "ajax/selectKecamatan/" + id,
      success: function (a) {
        $('.kecamatan').html(a);
        $('.kecamatan').show();
        $('.kec-temp').hide();
      }
    });
  });

  $('.kecamatan').change(function () {
    var id = $(this).val();
    $('.kelurahan').html('');

    $.ajax({
      type: "POST",
      data: "id=" + id,
      url: urlHost + "ajax/selectKelurahan/" + id,
      success: function (a) {
        $('.kelurahan').html(a);
        $('.kelurahan').show();
        $('.kel-temp').hide();
        $('.txt-kelurahan').hide();

        if (a == "<option selected value=''>Pilih Kelurahan</option>") {
          $('.kelurahan').hide();
          $('.txt-kelurahan').show();
        }
      }
    });

    $.ajax({
      type: "POST",
      data: "id=" + id,
      url: urlHost + "ajax/selectKodePos/0/" + id + "/0",
      success: function (a) {
        data = jQuery.parseJSON(a);
        console.log(data);
        if (data[0] != "") {

          $("#postcode").prop('disabled', false);
          $(".select2").prop('disabled', false);
          $(".postcodeText").prop('disabled', true);
          $('#postcode').css("display", "");
          $(".select2").css("display", "");
          $(".postcodeText").css("display", "none");

          $('#postcode').html('');
          $('#postcode')
            .append($("<option></option>")
              .attr("value", '')
              .text('Pilih Kodepos'));
          $.each(data, function (key, value) {
            $('#postcode')
              .append($("<option></option>")
                .attr("value", value)
                .text(value));
          });
          $('#postcode')
            .append($("<option></option>")
              .attr("value", 'manual')
              .text('Lainnya'));
        } else {
          $("#postcode").prop('disabled', true);
          $(".select2").prop('disabled', true);
          $(".postcodeText").prop('disabled', false);
          $('#postcode').css("display", "none");
          $(".select2").css("display", "none");
          $(".postcodeText").css("display", "");
        }
      }
    });
  });

  $('#postcode').change(function () {
    if ($(this).val() == 'manual') {
      $(this).css("display", "none");
      $(".select2").css("display", "none");
      $(".postcodeText").css("display", "");
      $(".postcodeText").focus();
    }
  });

  $('#voucher button[type="submit"]').click(function () {

    var kdVoucher = $('#voucher input[type=text][name=kd_voucher]').val()

    //remove all the class add the messagebox classes and start fading
    $("#msgbox-voucher").removeClass().addClass('messageLoad').fadeIn(1000);
    $(".loading").show();

    if (kdVoucher) {
      $.ajax({
        type: "POST",
        url: urlHost + 'voucher/checkCode/' + kdVoucher,
        data: $('#checkout').serialize(),
        type: "post",
        dataType: "json",
        success: function (msg) {
          if (msg.status == 'true') {
            $("#msgbox-voucher").fadeTo(200, 0.1, function () //start fading the messagebox
            {
              $('.loading').hide();
              //add message and change the class of the box and start fading
              $(this).html('Voucher telah dimasukkan, silahkan melanjutkan proses checkout.')
                .addClass('valid_box').fadeTo(900, 1);
              $("#voucher input[type=hidden][name=valid_kd_voucher]").val(kdVoucher);
            });
            setTimeout(function () {
              location.reload()
            }, 1000);

          } else {
            $("#msgbox-voucher").fadeTo(200, 0.1, function () //start fading the messagebox
            {
              $('.loading').hide();
              //add message and change the class of the box and start fading
              $(this).html(msg.message)
                .addClass('warning_box').fadeTo(100, 1);
            });
            setTimeout(function () {
              location.reload()
            }, 2500);
          }
        }
      });
    } else {
      $.ajax({
        type: "POST",
        url: urlHost + 'voucher/checkCode/' + 'empty',
        data: $('#voucher').serialize(),
        success: function (msg) {

          $("#msgbox-voucher").fadeTo(200, 0.1, function () //start fading the messagebox
          {
            //add message and change the class of the box and start fading
            $(this).html('Silahkan masukkan kode voucher.')
              .addClass('warning_box').fadeTo(900, 1);
            $('.loading').hide();
          });
          setTimeout(function () {
            location.reload()
          }, 1000);
        }
      });
    }

    return false;
  });

  /*----------  ./application/views/pages/order/review_order => gift card checking  ----------*/
  $('#cekGiftCard').click(function () {
    $('input[name^=gift_card_code]').map(function (idx, elem) {
      //remove all the class add the messagebox classes and start fading
      $("#msgbox-giftcard" + idx).removeClass().addClass('messageLoad input-group').fadeIn(1000);
      // $("#useGiftCard").addClass('disabled');

      if ($(elem).val()) {
        $.ajax({
          type: "POST",
          url: urlHost + 'giftCard/checkCode/' + $(elem).val(),
          dataType: "json",
          success: function (msg) {
            $("#msgbox-giftcard" + idx).fadeTo(200, 0.1, function () { //start fading the messagebox
              $(this).html(msg.message).addClass('valid_box' + idx).fadeTo(900, 1);
            });
            $("#useGiftCard").removeClass('disabled');
          }
        });
      } else {
        $("#msgbox-giftcard" + idx).fadeTo(200, 0.1, function () { //start fading the messagebox
          $(this).html('Silahkan masukkan kode giftcard ').addClass('valid_box' + idx).fadeTo(900, 1);
        });
        $("#useGiftCard").removeClass('disabled');
      }
    });
    return false;
  });

  /*----------  ./application/views/pages/order/review_order => gift card save  ----------*/
  $('#useGiftCard').click(function () {
    $("#useGiftCard").addClass('disabled');
    $.ajax({
      type: "POST",
      url: urlHost + 'giftCard/storeCode/',
      data: $('#gift_card').serialize(),
      dataType: "json",
      success: function (msg) {
        $("#msgbox-giftcard" + idx).fadeTo(200, 0.1, function () { //start fading the messagebox
          $(this).html(msg.message).addClass('valid_box' + idx).fadeTo(900, 1);
        });
      }
    });
    setTimeout(function () {
      location.reload()
    }, 1000);
  });

  $('#add_giftcard_button').click(function (e) { //on add input button click
    e.preventDefault();
    var x = 0;
    $('input[name^=gift_card_code]').map(function (idx, elem) {
      x++;
    });
    if (x < 5) { //max input box allowed
      $("#input_giftcard_wrap").append('<div class="form-group" style="display:block;padding-bottom:5px;"><div id="giftcard_additional"><div id="msgbox-giftcard' + x + '" class="input-group"></div></div><a class="input-sm orange-hg" id="remove_field" style="margin-right: 3px;padding: 0px;cursor:pointer;"><i class="fa fa-times-circle fa-fw"></i></a><div class="form-group"><div class="input-group"><input type="text" class="form-control input-sm" name="gift_card_code[]" onblur="document.getElementById(\'cekGiftCard\').click();" placeholder="kode gift card"></div></div></div>'); //add input box
      x++; //text box increment
    } else {
      $('#add_giftcard_button').addClass('disabled');
    }
  });

  $('#input_giftcard_wrap').on("click", "#remove_field", function (e) { //user click on remove text
    e.preventDefault();
    $("#giftcard_additional").parent('div').remove();
    $('#add_giftcard_button').removeClass('disabled');
  })


  $('#pilsnav').on('show.bs.collapse', function () {
    $('#myTab').addClass('nav-stacked');
  });

  //Unstack menu when not collapsed
  $('#pilsnav').on('hide.bs.collapse', function () {
    setTimeout(function () {
      $('#myTab').removeClass('nav-stacked');
    }, 500)
  });

  $('#myTab li a').click(function () {
    var getParent = $(this).closest('#myTab');
    var getAttr = getParent.attr('class');
    if (getAttr == "nav nav-tabs nav-stacked") {
      $('#pilsnav').collapse('hide');
    }
  })

  var navActive = $('#myTab li[class="active"] a').attr('href');
  $(navActive).addClass('in active');

  // Custom autocomplete instance.
  $.widget("app.autocomplete", $.ui.autocomplete, {
    // Which class get's applied to matched text in the menu items.
    options: {
      highlightClass: "ui-state-highlight"
    },

    _renderItem: function (ul, item) {

      // Replace the matched text with a custom span. This
      // span uses the class found in the "highlightClass" option.
      var re = new RegExp("(" + this.term + ")", "gi"),
        cls = this.options.highlightClass,
        template = "<span class='" + cls + "'>$1</span>",
        label = item.label.replace(re, template),
        $li = $("<li/>").appendTo(ul);

      // Create and return the custom menu item content.
      $("<a/>").attr("href", "#")
        .html(label)
        .appendTo($li);

      return $li;
    }
  });

  $('#keyWords').autocomplete({
    source: urlHost + "ajax/getKeywords",
    highlightClass: "bold",
    delay: 600,
    minLength: 2,
    select: function (event, ui) {
      $('#keyWords').val(ui.item.label);
      productSearch();
    }
  });

  $('#fadeInCarousel').on('slid.bs.carousel', function (evt) {
    // alert($(evt.relatedTarget).index());

    var img = $('#fadeInCarousel .item:eq(' + $(evt.relatedTarget).index() + ')').find('img');
    var body = $('body').width();
    var width = parseInt($('.caro').width());
    var height = parseInt($('.caro').height());
    var getWidthImg = parseInt(img.width());
    var getHeightImg = parseInt(img.height());
    if (body <= "320") {
      getHeightImg = "57";
      img.css({
        "height": getHeightImg
      });
    }
    if (getWidthImg > width) {
      img.css({
        "max-width": width,
        "height": getHeightImg
      });
    }
  })

  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
  //  Lazyload - banner homepage
  $("img.lazy-banner").lazyload({
    effect: "fadeIn", event : "foobar"
  });
  //  Lazyload - footer
  $('.footer img.lazy').lazyload({
    effect: "fadeIn", event : "foobar"
  });
  $(window).bind("load", function() {
    var timeout = setTimeout(function() {
        $("img.lazy-banner").trigger("foobar")
    }, 1000); // after load page success load the image banner

    var timeout = setTimeout(function() {
        $('.footer img.lazy').trigger("foobar")
    }, 100); // after load page success load the image footer
  });
  



  $('#checkPrice').click(function () {
    $("#addToCart").addClass("disabled");
    $(".loading-check-price").show();
    $(".warning_box").hide();

    $.ajax({
      url: urlHost + 'price/checkPrice/',
      data: $('#product_detail').serialize(),
      type: "get",
      dataType: "json",
      success: function (msg) {
        if (msg.status == 'not_updated') {
          $(".loading-check-price").hide();
          $("#addToCart").removeClass("disabled");
        } else if (msg.status == 'not_available') {
          $(".loading-check-price").hide();
          $("#product_not_available").modal('show');

          $("#product_not_available").on('hidden.bs.modal', function () {
            location.reload();
          });
        } else {
          $(".loading-check-price").hide();
          $('#old-price').text(msg.old_price);
          $('#new-price').text(msg.new_price);
          $('#url-cart').attr("href", msg.url)

          $("#popup_detail_product").modal('show');

          $("#popup_detail_product").on('hidden.bs.modal', function () {
            $("#addToCart").removeClass("disabled");
            location.reload();
          });
        }
      }
    });
    return false;
  });

  (function ($) {
    $(window).load(function () {
      $(".testi_home").mCustomScrollbar();
    });
  })(jQuery);

  $(function () {
    $('#checkPrice').click();
  });

});

function addText(c) {
  var d = parseInt(c) + 1;
  $('#linkNav' + c).remove();
  $('#input').append('<input class="form-control" type="text" id="request_name' + d + '" name="request_name[]" placeholder="Masukkan link produk"><input class="form-control" type="text" id="request_description' + d + '" name="request_description[]" placeholder="Masukkan deskripsi tambahan seperti: ukuran/warna"><span id="linkNav' + d + '"><a class="addmore"  onclick="addText(' + d + ');">Add More</a> | <a class="remove"  onclick="removeText(' + d + ');">Remove</a></span>');
}

function removeText(c) {
  var d = parseInt(c) - 1;
  $('#request_name' + c).remove();
  $('#request_description' + c).remove();
  $('.addmore').attr('onclick', 'addText(' + d + ')');
  $('#linkNav' + c).attr('id', 'linkNav' + d);
  if (d != 1) {
    $('.remove').attr('onclick', 'removeText(' + d + ');');
  } else {
    $('.remove').remove();
    $('#linkNav1').html('<a class="addmore"  onclick="addText(1);">Add More</a>');
  }
}

function popupWindow(url, title, w, h) {
  var left = (screen.width / 2) - (w / 2);
  var top = (screen.height / 2) - (h / 2);
  alert('Anda akan dialihkan ke website lain untuk melihat detil produk. Apabila ingin membeli, pastikan Anda berada di website hargadunia.com. ');
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

function continueCheckout() {
  window.location.href = urlHost + 'checkout/payment/atm';
  return false;
}

function cod_payment() {
  window.location.href = urlHost + 'checkout/payment/cod';
  return false;
}

function pointConecworld() {
  window.location.href = urlHost + 'checkout/payment/conecworld.com';
  return false;
}

// facebook
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&status=0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$('#sidebar-flt').draggable();

/*----------  ./application/views/pages/order/review_order => gift card delete  ----------*/
function remove_gift_card(gift_card_code) {
  $.ajax({
    type: "POST",
    url: urlHost + 'giftCard/removeGiftCardSession/' + gift_card_code,
    dataType: "json",
    success: function (msg) { }
  });
  setTimeout(function () {
    location.reload()
  }, 1000);
  return false;
};

function expressShipmentSession(element, value) {
  $('#btn-ajax').addClass('disabled');
  if (element.checked == true) {
    $.ajax({
      type: "POST",
      url: urlHost + 'order/addExpressShipment/' + value,
      dataType: "json",
      success: function (msg) { }
    });
    setTimeout(function () {
      location.reload()
    }, 1000);
    $('#express_shipment-total').addClass('orange-hg');
    return false;
  } else {
    $.ajax({
      type: "POST",
      url: urlHost + 'order/removeExpressShipment/',
      dataType: "json",
      success: function (msg) { }
    });
    setTimeout(function () {
      location.reload()
    }, 1000);
    $('#express_shipment-total').removeClass('orange-hg');
    return false;
  }
}

function insuranceSession(element, value) {
  $('#btn-purchase').addClass('disabled');
  if (element.checked == true) {
    $.ajax({
      type: "POST",
      url: urlHost + 'order/addInsurance/' + value,
      dataType: "json",
      success: function (msg) { }
    });
    setTimeout(function () {
      location.reload()
    }, 1000);
    $('#express_shipment-total').addClass('orange-hg');
    return false;
  } else {
    $.ajax({
      type: "POST",
      url: urlHost + 'order/removeInsurance/',
      dataType: "json",
      success: function (msg) { }
    });
    setTimeout(function () {
      location.reload()
    }, 1000);
    $('#express_shipment-total').removeClass('orange-hg');
    return false;
  }
}

function tncCheckbox(element) {
  if (element.checked == true) {
    $('#pay-now').removeClass('disabled');
    return true;
  } else {
    $('#pay-now').addClass('disabled');
    return false;
  }
}

function clearPaymentMethod() {
  $('input[name=payment-method]').attr('checked', false);
  $('select[name=payment-method] option:selected').removeAttr("selected");
  $('select[name=payment-method] #disabled').replaceWith("<option disabled value selected id=\"disabled\">Pilih Opsi Pembayaran</option>");
  $('.akulaku').attr('name', 'payment-method');
}

function ccInstallment() {
  // Cicilan Sprint
  if ($('select[name=payment-method]').val() === '201') {
    $('select[name=cc-installment] option[value=0]').removeClass('hidden');
    $('select[name=cc-installment] option[value=3]').addClass('hidden');
    $('select[name=cc-installment] option[value=6]').addClass('hidden');
    $('select[name=cc-installment] option[value=12]').addClass('hidden');
    $('select[name=cc-installment]').val(0);
    // Cicilan UOB
  } else if ($('select[name=payment-method]').val() === '202') {
    $('select[name=cc-installment] option[value=0]').addClass('hidden');
    $('select[name=cc-installment] option[value=12]').addClass('hidden');
    $('select[name=cc-installment] option[value=3]').removeClass('hidden');
    $('select[name=cc-installment] option[value=6]').removeClass('hidden');
    $('select[name=cc-installment]').val(3);
    // Cicilan Mandiri Doku
  } else if ($('select[name=payment-method]').val() === '200') {
    $('select[name=cc-installment] option[value=0]').addClass('hidden');
    $('select[name=cc-installment] option[value=3]').removeClass('hidden');
    $('select[name=cc-installment] option[value=6]').removeClass('hidden');
    $('select[name=cc-installment] option[value=12]').removeClass('hidden');
    $('select[name=cc-installment]').val(3);
  } else if ($('select[name=payment-method]').val() === '203') {
    $('select[name=cc-installment] option[value=0]').removeClass('hidden');
    $('select[name=cc-installment] option[value=3]').addClass('hidden');
    $('select[name=cc-installment] option[value=6]').addClass('hidden');
    $('select[name=cc-installment] option[value=12]').addClass('hidden');
    $('select[name=cc-installment]').val(0);
  }
  $('.akulaku').attr('name', 'payment-method-disabled'); // disabling akulaku to avoid conflict
}

function instantPriceOrder(form_id) {
  $.ajax({
    url: urlHost + "instantPriceOrder/getDataFromAmazon",
    type: "POST",
    dataType: "json",
    data: $(form_id).serialize(),
    beforeSend: function () {
      $('.ipo-overlay').removeClass('hidden');
      $('.ipo-loader').removeClass('hidden');
      $('#ipo-alert #message').html('');
      $('#ipo-alert').addClass('hidden');
    },
    success: function (result) {
      if (result.status === 0) { // failed
        $('#ipo-alert #message').html(result.message);
        $('#ipo-alert').removeClass('hidden');
        $('#ipo-alert').removeClass('alert-success');
        $('#ipo-alert').addClass('alert-danger');
      } else if (result.status === 1) { // success
        $('#ipo-alert #message').html(result.message);
        $('#ipo-alert').removeClass('hidden');
        $('#ipo-alert').removeClass('alert-danger');
        $('#ipo-alert').addClass('alert-success');
        window.location.href = result.redirect_link;
      } else if (result.status === 2) { // failed redirect to product request
        window.location.href = result.redirect_link;
      }
    },
    complete: function () {
      $('.ipo-overlay').addClass('hidden');
      $('.ipo-loader').addClass('hidden');
    }
  });
}

function productSearch() {
  if (!isUrl($('#keyWords').val())) {
    $.ajax({
      url: urlHost + "search/getKeywordSearch",
      type: "GET",
      dataType: "json",
      data: $('#formSearch').serialize(),
      beforeSend: function () {
        $('.ipo-overlay').removeClass('hidden');
        $('.ipo-loader').removeClass('hidden');
      },
      success: function (result) {
        window.location.href = result.redirect_link;
      }
    });
  } else {
    instantPriceOrder('#formSearch');
  }
}

function isUrl(url) {
  const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  let isValid = false;
  if (pattern.test(url)) {
    isValid = true;
  }

  return isValid;
}

$(document).ready(function (e) {
  $("#birthday").datetimepicker({
    format: 'D MMMM YYYY'
  });

  let tabs = $('.main.how-to-order-tab li');
  $('.prev-tab-button').on('click', function () {
    tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
    $("html, body").animate({
      scrollTop: 90
    });
  });
  $('.next-tab-button').on('click', function () {
    tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
    $("html, body").animate({
      scrollTop: 90
    });
  });

  // Clipboard js
  let clipboard = new Clipboard('.copy-promo-code');
  clipboard.on('success', function (e) {
    $('.copy-promo-code').html('Salin Kode Promo');
    $('.copy-promo-code').addClass('btn-default');
    $('.copy-promo-code').removeClass('btn-success');
    $('#' + e.trigger.id).html('<i class="fa fa-check fa-fw"></i>Kode Disalin');
    $('#' + e.trigger.id).removeClass('btn-default');
    $('#' + e.trigger.id).addClass('btn-success');
  });
});

function navCategoryToogle(status) {
  if (status == 1) {
    $(".dropdown-menu.departement").css({
      "display": "block"
    });
    $(".navCategoryToogle").attr("onclick", "navCategoryToogle(0)")
  } else {
    $(".dropdown-menu.departement").css({
      "display": "none"
    });
    $(".navCategoryToogle").attr("onclick", "navCategoryToogle(1)")
  }
}
// function closeNavCategory() {
//   $(".dropdown-menu.departement").css({ 'display': "none" });
// }

function closeTopText() {
  let joinAnnoun = $("#divTopText");
  joinAnnoun.addClass('hidden');
  /* get current minutes of time, and added by 2 to get 2 minutes expire date */
  let date = new Date();
  date.setMinutes(date.getMinutes() + 60);

  $.cookie('hidden_top_text', 'hide', {
    expires: date
  });
}

$(function () {
  let joinAnnoun = $("#divTopText");
  let validateTopText = $("#validateTopText").val;
  if ($.cookie('hidden_top_text') == 'hide' || validateTopText == 'hide') {
    joinAnnoun.addClass('hidden');
    $('#divTopText .close').addClass('hidden');
  } else {
    joinAnnoun.removeClass('hidden');
    $('#divTopText .close').removeClass('hidden');
  }
});

$(document).ready(function () {
  let goUp = true;
  let mobileDeviceCheck = true; // false = dekstop |&| true = mobile
  $('.nav-shop ul').css({
    'width': $('#formSearch').width()
  });
  $(window).scroll(function () {
    
    let heightTopText = $('#header-hd').height() + $("#nav").height();
    if ($(window).width() >= 768) {
      mobileDeviceCheck = false;
      heightTopText = $('#header-hd').height()  + $('#divTopText').height() + $("#nav").height()  ;
    } 
    // when page is scroll down
    if ($(this).scrollTop() > heightTopText + 50 && goUp) {
      goUp = false;
      $("#nav").css({
        'top': mobileDeviceCheck == true ? $('#header-hd').height() /*TRUE*/ : '0px' /*FALSE*/,
        'padding-bottom': mobileDeviceCheck == true ? '10px' /*TRUE*/ : '0px' /*FALSE*/,
        'box-shadow': 'rgba(14, 14, 14, 0.1) 0px 5px 10px -3px'
      }).addClass('hd-header-fixed');
      $("#header-hd").css({
        'width': '100%',
        'top': '0',
        'z-index': '16'
      });
      mobileDeviceCheck == true ? $("#header-hd").addClass('hd-header-fixed') /*TRUE*/ : $("#header-hd").removeClass('hd-header-fixed') /*FALSE*/
      
      $(".mobile-hd-logos").css({
        'height': '54px',
        'padding': '5px'
      });
      
      $("body").css("margin-top", mobileDeviceCheck == true ? heightTopText /*TRUE*/ : $('#header-hd').height() /*FALSE*/,);
      if(mobileDeviceCheck === true){
        $(".nav-shop ul").hide();
      }
      // when page is scroll up
    } else if ($(this).scrollTop() < heightTopText && !goUp) {
      goUp = true;
      $("#nav").removeAttr('style').removeClass('hd-header-fixed');
      $("#header-hd").removeAttr('style').removeClass('hd-header-fixed');
      $("body").css("margin-top", "0px");
      if(mobileDeviceCheck === true){
        $(".nav-shop ul").show();
      }
    }
  });
});

function storeSubscriber() {
  $.ajax({
    url: urlHost + "subscribe/post",
    type: "POST",
    dataType: "json",
    data: $('#subscribe-newsletter').serialize(),
    beforeSend: function () {
      $('#subscribe-newsletter .alert').addClass('hidden');
    },
    success: function (result) {
      if (result.status == "error") {
        $('#subscribe-newsletter .alert').addClass('alert-danger');
        $('#subscribe-newsletter .alert').removeClass('alert-success');
      } else {
        $('#subscribe-newsletter .alert').addClass('alert-success');
        $('#subscribe-newsletter .alert').removeClass('alert-danger');
      }
      $('#subscribe-newsletter .alert').removeClass('hidden');
      $('#subscribe-newsletter .alert').html(result.message);
    }
  });
}

function focusText() {
  $("#keyWords").focus();
  $('#resetSearch').addClass('hidden');
}

$(document).ready(function () {
  $("#homeCarousel").swiperight(function () {
    $("#homeCarousel").carousel('prev');
  });
  $("#homeCarousel").swipeleft(function () {
    $("#homeCarousel").carousel('next');
  });

  $('#keyWords').on('keyup', function () {
    if ($('#keyWords').val() != "") {
      $('#resetSearch').removeClass('hidden');
    } else {
      $('#resetSearch').addClass('hidden');
    }
  });

  $("#pilsnav").collapse('show');

  // Window resize (Re position | Block Help | in Account Information)
  $('#block-help-complain').attr('data-resize', 0);
  var block_help = $('#block-help-complain');
  var Get_prnt_ = block_help.closest('.row');
  if ($(window).width() <= 991) {
    block_help.attr('data-resize', 1);
    block_help.appendTo(Get_prnt_.find('.col-xs-12.col-md-9.col-lg-9'));
  }
  $(window).resize(function () {
    if ($(window).width() <= 991) {
      block_help.attr('data-resize', 1);
      block_help.appendTo(Get_prnt_.find('.col-xs-12.col-md-9.col-lg-9'));
    }
    if ($(window).width() >= 992) {
      if (block_help.attr('data-resize') == '1') {
        Get_prnt_.find('#pilsnav').after(block_help);
        block_help.attr('data-resize', 0);
      }
    }
  });


});

$(function () {
  $("#postcode").select2();
});

$(document).ready(function () {
  $("input[name='payment-method'], select[name='payment-method']").bind("click", function () {
    var status = $(this).val();
    setPaymentMethod(status);
  });
});

function setPaymentMethod(status) {
  $.ajax({
    type: "POST",
    url: urlHost + 'payment/setPaymentMethod',
    data: { status: status },
    success: function (result) {
      return true;
    }
  });
}

function getPaymentMethod() {
  $.ajax({
    type: "POST",
    url: urlHost + 'payment/getPaymentMethod',
    dataType: "json",
    beforeSend: function () {
    },
    success: function (result) {
      //payment
      ga("create", result.ga_code);
      ga("require", "ec");
      ga("ec:setAction", "checkout_option", {
        "step": 3,
        "option": result.payment
      });
      ga('send', 'event', 'Checkout', 'Option');
    }
  });

}

$(document).ready(function () {
  //onload//
  $("#width_tmp").html($('select option:selected').text());
  $('#select').width($("#width_tmp").width() + 30);
  $('#search-ac').width($("#search-ac2").width() - $("#width_tmp").width());

  ///
  $('#select').change(function () {
    $("#width_tmp").html($('select option:selected').text());
    $(this).width($("#width_tmp").width() + 30); // 30 : the size of the down arrow of the select box
    $('#search-ac').width($("#search-ac2").width() - $("#width_tmp").width());
    document.getElementById('search-ac').focus();
  });
  $('#search-ac').focus(function () {
    $("#select").addClass("border");
  });
  $('#search-ac').blur(function () {
    $("#select").removeClass("btn btn-default border").addClass("btn btn-default");
  });
});
    
function auto_expand(id) {
  var textarea = document.getElementById(id);
  var heightLimit = 90000; /* Maximum height: 200px */
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

function charitySession(id_radio, value) {

  $('#btn-purchase').addClass('disabled');
  $('.radio-label').removeClass('bold');
  $('#'+id_radio).addClass('bold');

  $('#btn-purchase').addClass('disabled');
  $.ajax({
    type: "GET",
    url: urlHost + 'order/addcharity/' + value,
    success: function (msg) { 
      $('#btn-purchase').removeClass('disabled');
      $('#express_shipment-total').html(msg); 
    }
  });
}