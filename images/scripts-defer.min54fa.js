function reloadForm(e){if(e.hasClass("form--success")){var t=e.find('button[type="submit"]'),a=t.attr("data-label-default"),o=t;t.find("span.button").length&&(o=t.find("span.button")),e.removeClass("form--loading form--success"),o.text(a),t.attr("disabled",!1)}}jQuery(document).ready((function($){if($(".js-dateme").each((function(e,t){var a="",o="DD/MM/YYYY";if(void 0!==$(t).data("format")&&(o=$(t).data("format")),void 0!==$(t).data("date")){var n=$(t).data("date");"today"!==n?(n=parseInt(n),a=moment().add(n,"day").format(o)):a=moment().format(o)}else a=moment().format(o);$(t).text(a)})),$(".js-timeme").each((function(e,t){var a="";if(void 0!==$(t).data("time")){var o=$(t).data("time");"today"!==o?(o=parseInt(o),a=moment().add(o,"minute").format("HH:mm")):a=moment().format("HH:m")}else a=moment().format("HH:m");$(t).text(a)})),$(".js-opening_hours").each((function(e,t){var a=null,o=moment().format("YYYY-MM-DD");if(Modernizr.localstorage)if(sessionStorage.getItem("bh"))a=sessionStorage.getItem("bh"),openingHoursInit(t,a,o);else{var n=window.location.origin+"/wp-content/themes/gp/scripts/bh/bank-holidays.php";$.ajax({url:n,dataType:"application/json",complete:function(e){a=JSON.parse(e.responseText),sessionStorage.setItem("bh",a),openingHoursInit(t,a,o)}})}})),$(".js-datepicker").each((function(e,t){if(Modernizr.localstorage)if(sessionStorage.getItem("bh"))bh=sessionStorage.getItem("bh"),addDatePicker(t,bh);else{var a=window.location.origin+"/wp-content/themes/gp/scripts/bh/bank-holidays.php";$.ajax({url:a,dataType:"application/json",complete:function(e){bh=JSON.parse(e.responseText),sessionStorage.setItem("bh",bh),addDatePicker(t,bh)}})}})),$(".js-set_am_pm").length&&(setAMPM(),setInterval((function(){setAMPM()}),6e4)),!$("html").hasClass("browser-internet-explorer")&&$(".js-admin_interface_products_thumbnails").length){var e=$(".js-admin_interface_products_thumbnails")[0];new Sortable(e,{animation:350,draggable:".admin_interface_products_thumbnail_cell",easing:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"})}if($(".js-example_ticket_date").length){var t=moment().add(1,"week").format("ddd Do MMMM");$(".js-example_ticket_date").text(t+" 18:30")}if($(".js-example_ticket_date_2").length){t=moment().add(1,"week").add(2,"day").format("ddd Do MMMM");$(".js-example_ticket_date_2").text(t+" 18:30")}if($("#email_sales_summary-date").length){var a=moment().startOf("week").subtract(1,"week").add(1,"day").format("D MMM"),o=moment().endOf("week").subtract(1,"week").add(1,"day").format("D MMM");$("#email_sales_summary-date").text(a+" - "+o)}if($(".fulfilment_hero-recevied_date").length){var n=moment().format("Do MMMM YYYY HH:mm");$(".fulfilment_hero-recevied_date").text("Received: "+n)}if($(".fulfilment_hero-voucher_expiry").length){var s=moment().add(1,"year").format("D/MM/YY");$(".fulfilment_hero-voucher_expiry").text(s)}if($(".js-api_booking_date").length){var i=moment().endOf("week").format("Do"),r=moment().endOf("week").add(1,"day").format("Do MMMM");$(".js-api_booking_date").text(i+" - "+r)}$(document).on("click",".js-launch_screenshots_lg",(function(e){$(".integrations-screenshots_gallery_lg").addClass("enabled").flickity({setGallerySize:!1,wrapAround:!0,pageDots:!1,cellSelector:".integrations-screenshots_slide"}).flickity("select",$(this).closest(".integrations-screenshots_item").index(),!1,!0),$("body").addClass("show_screenshots_gallery"),bodyScrollLock.disableBodyScroll(document.querySelector("#integrations-screenshots_gallery_lg"))})),$(document).on("click",".js-close_screenshots_lg",(function(e){$("body").removeClass("show_screenshots_gallery"),bodyScrollLock.clearAllBodyScrollLocks()})),$(".js-validate").each((function(e,t){$(t).validate({messages:{title:"Please enter your title",name:"Please enter your name",business_name:"Please enter the name of your business",postcode:"Please enter your postcode",email:{required:"Please enter your email",email:"Please enter a valid email"},tel:"Please enter your telephone number",time:"Please enter a time",msg:"Please enter your message","interest[]":"Please select at least 1 interest"}})})),$(".js-ajax_form").ajaxForm({beforeSubmit:function(e,t,a){t.addClass("form--loading");var o=t.find('button[type="submit"]'),n=o.attr("data-label-loading"),s=o;o.find("span.button").length&&(s=o.find("span.button")),o.attr("disabled",!0),s.text(n),t.trigger("form_load")},success:function(e,t,a,o){o.addClass("form--success");var n=o.find('button[type="submit"]'),s=n.attr("data-label-success"),i=n;n.find("span.button").length&&(i=n.find("span.button"));var r=o.find('input[name="event_action"]').val(),l=o.find('input[name="event_label"]').val(),d=!1;o.find('input[name="subscribe"]').is(":checked")&&(d=!0),i.text(s),o.trigger("form_success"),r&&window.dataLayer&&dataLayer.push({event:"Contact form submit",eventAction:r,eventLabel:l}),d&&window.dataLayer&&dataLayer.push({event:"Newsletter signup"}),window.fbq&&fbq("track","Contact")}}),$(".js-ajax_form :input").keyup((function(e){reloadForm($(this).closest(".js-ajax_form"))})),$('.js-ajax_form input[type="checkbox"]').change((function(e){reloadForm($(this).closest(".js-ajax_form"))})),windowWidth<=1100&&$(".blog_carousel_cell").matchHeight({byRow:!1}),$(window).on("resize",(function(){windowWidth>1100&&$(".blog_carousel_cell").matchHeight({remove:!0})})),$(window).on("load",(function(){$.fn.matchHeight._update()}))}));