$.ajax({
    url: "http://dota.oblio360.com/api/articles.json",
    success: function( data ) {
        index = 0;
        for(article in data.articles) {
            index = index + 1;
            name = article;
            url = data.articles[article].url;
            article_link = "<div class='latest-article'><a href=\"" + url + "\">" + name + "</a></div>";
            $(".latest-dota-articles").append(article_link);
            if(index > 2) {
                return false;
            }
        }
    },
    error: function(errorjqXHR, error, errorThrown) {
        console.log(error);
    }
});

$.ajax({
    url: "http://hearthstone.oblio360.com/api/articles.json",
    success: function( data ) {
        index = 0;
        for(article in data.articles) {
            index = index + 1;
            name = article;
            url = data.articles[article].url;
            article_link = "<div class='latest-article'><a href=\"" + url + "\">" + name + "</a></div>";
            $(".latest-hearthstone-articles").append(article_link);
            if(index > 2) {
                return false;
            }
        }
    },
    error: function(errorjqXHR, error, errorThrown) {
        console.log(error);
    }
});

$.ajax({
    url: "http://blog.oblio360.com/api/articles.json",
    success: function( data ) {
        index = 0;
        for(article in data.articles) {
            index = index + 1;
            name = article;
            url = data.articles[article].url;
            article_link = "<div class='latest-article'><a href=\"" + url + "\">" + name + "</a></div>";
            $(".latest-blog-articles").append(article_link);
            if(index > 2) {
                return false;
            }
        }
    },
    error: function(errorjqXHR, error, errorThrown) {
        console.log(error);
    }
});


$.ajax({
    url: "http://dota.oblio360.com/api/tags.json",
    success: function( data ) {
        for(tag in data.tags) {
            name = tag;
            url = data.tags[tag];
            if(name !== "") {
                tag_link = "<div class='article-tag'><a href=\"" + url + "\">" + name + "</a></div>";
                $("#dota-tags").append(tag_link);
            }
        }
    },
    error: function(errorjqXHR, error, errorThrown) {
        console.log(error);
    }
});


$.ajax({
    url: "http://hearthstone.oblio360.com/api/tags.json",
    success: function( data ) {
        for(tag in data.tags) {
            name = tag;
            url = data.tags[tag];
            if(name !== "") {
                tag_link = "<div class='article-tag'><a href=\"" + url + "\">" + name + "</a></div>";
                $("#hearthstone-tags").append(tag_link);
            }
        }
    },
    error: function(errorjqXHR, error, errorThrown) {
        console.log(error);
    }
});

$.ajax({
    url: "http://blog.oblio360.com/api/tags.json",
    success: function( data ) {
        for(tag in data.tags) {
            name = tag;
            url = data.tags[tag];
            if(name !== "") {
                tag_link = "<div class='article-tag'><a href=\"" + url + "\">" + name + "</a></div>";
                $("#blog-tags").append(tag_link);
            }
        }
    },
    error: function(errorjqXHR, error, errorThrown) {
        console.log(error);
    }
});
