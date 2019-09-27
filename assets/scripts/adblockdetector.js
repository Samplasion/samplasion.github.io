$(document).ready(function(){
    if($("#wrapfabtest").height() > 0) {
        $("#wrapfabtest").hide();
    } else {
        // Adblock detected

        // Don't hide $("#wrapfabtest") because it's already hidden by the adblock

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
        
        aab.html("<h1>You're using an ad blocker</h1><p>That's ok, I also do so. But could you consider unblocking me? I promise my ads aren't invasive. :)</p>");
        
        $(".mapache-ad.sidebar-items > ins").hide();
        $(".mapache-ad.sidebar-items").prepend(aab);

        var banner_aab = aab.clone()
            .css("height", "auto")
            .css("width", "100%")
            .css("display", "auto")
            .css("padding", "15px");

        banner_aab.html("<h3>You're using an ad blocker</h3><p>That's ok, I also do so. But could you consider unblocking me? I promise my ads aren't invasive. :)</p>");

        $("#disqus_thread").before(banner_aab, "<hr />");
    }
});