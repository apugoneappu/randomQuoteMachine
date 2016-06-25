$(document).ready(function() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    var html = a[0].content + "<p>— " + a[0].title + "</p>";
    var tweetEnd = a[0].content + " -" + a[0].title;
    $("#quote").html(html);
    });
    $("a").prop("href", "https://twitter.com/intent/tweet?text=Do some work! Copy the quote from the website yourself.");
    
});