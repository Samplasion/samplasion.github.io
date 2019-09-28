$(document).ready(function(){
    if(document.getElementById('OqZDWAsgjiLK')){
        // alert('Blocking Ads: No');
    } else {
        // Adblock detected

        // Create a "Please unblock us" banner
        var aab = $("<div></div>");
        aab.css("height", "250")
           .css("outline", "5px solid #c44040")
           .css("background-color", "#c44040")
           .css("border", "5px dashed white")
           .css("padding", "5px")
           .css("display", "grid")
           .css("align-items", "center")
           .css("color", "white");
        
        aab.html(`<h1>${abt}</h1><p>${abp}</p>`);
        
        $(".mapache-ad.sidebar-items > ins").hide();
        $(".mapache-ad.sidebar-items").prepend(aab);

        var banner_aab = aab.clone()
            .css("height", "auto")
            .css("width", "100%")
            .css("display", "auto")
            .css("padding", "15px");

        banner_aab.html(`<h3>${abt}</h3><p>${abp}</p>`);

        $("#disqus_thread").before(banner_aab, "<hr />");
    }
});