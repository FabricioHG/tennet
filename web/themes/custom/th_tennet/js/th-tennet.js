/**
 * @file
 * th_tennet behaviors.
 */
(function ($) {

  'use strict';

  

  Drupal.behaviors.thTennet = {
    attach: function (context, settings) {

    $( ".form-item-nombre, .form-item-correo-electronico" ).wrapAll( "<div class='blok_cont_1'></div>" );
    $( ".form-item-mensaje" ).wrap( "<div class='blok_cont_2'></div>" );
    $('.form-item-nombre').before("<img src='/sites/default/files/recepcionista_2.png'>");



    }
  };

} (jQuery));

