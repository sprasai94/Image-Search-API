$(document).ready(function() {
  $('.search').click(function() {
    var tags = $(".searchtext").val();
    var per_Page = 20;
    var safe_Search = "high";
    var access_Key = "???";
    var API_url = "https://api.unsplash.com/search/photos?query="+tags+"&per_page="+per_Page+"&client_id="+access_Key+"&content_filter="+safe_Search;
    
    $.ajax({
      method: 'GET',
      url: API_url,
      success: function(data) {
        $(".imageList").empty();
        $.each(data.results, function (i, item) {
          $(".imageList").append('<div class="img"><img src="'+item.urls.regular+'" /> </div>')
        });
      },
      error: function (xhr, status, error) {
        alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
    }       
    })
  })

  $('.searchtext').keypress(function (e) {
    if (e.which == 13) {
      $('.search').click();
      return false;  
    }
  });
})