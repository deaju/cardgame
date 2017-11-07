$(function(){
  $('#date_button').on('click',function(){
    console.log();
    preload();
    var date = $('#start_date').val();
    getList(date,'http://10.125.66.203/api/ranking/rt');
  });

  $('#product_button').on('click',function(){
    console.log();
    preload();
    var date = $('#start_date').val();
    getList(date,'http://10.125.66.203/api/ranking/rt/product');
  });
  function preload(){
    $('#ranking_card').empty();
    $('#ranking_card').append(' <div class="progress"><div class="indeterminate"></div></div>');
  }
  function AutoLink(str) {
    var regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;
    var regexp_makeLink = function(all, url, h, href) {
      return '<a href="h' + href + '">' + url + '</a>';
    }
    return str.replace(regexp_url, regexp_makeLink);
  }
  function getList(date,url){
    $.ajax({
      async:false,
      url:url,
      type:'post',
      data:{
        start_data: date
      },
      dataType:'json'})
      .done(function( data, textStatus, jqXHR ) {
        $('#ranking_card').empty();
        $.each(data,function(i,_var){
          if (i >= 10){
            return false;
          }
          var id =  'list_'+ i
          $('#ranking_card').append($('<div id = "'  + id + '"></div>'));
          $('#'+id).addClass("card horizontal card-panel hoverable card-small");
          //var img = $('<div class="card-image">    <img src="'+ "https://lorempixel.com/100/190/nature/6" +'"> </div>');
          var retweet_count = $('<div class="card-content">    '+ _var["sub_retweet_count"] +' </div>');
          var text = $('<div class="card-content">    '+ AutoLink(_var["text"]) +' </div>');
          //var link = $('<a href="#"></a>')
          //$('#'+id).append(img)
          $('#'+id).append(retweet_count)
          $('#'+id).append(text)
          //$('#'+id).append(link)
        })
      })
      .fail(function( jqXHR, textStatus, errorThrown ) {
      })
    }
  });
