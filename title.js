var i=0;
setInterval(function(){
    var titles=[
"|M|",
"|Me|",
"|Mer|",
"|Merc|",
"|Mercu|",
"|Mercur|",
"|Mercury|",
"|MercuryH|",
"|MercuryHv|",
"|MercuryHvH|",
"|MercuryHv|",
"|MercuryH|",
"|Mercur|",
"|Mercu|",
"|Merc|",
"|Mer|",
"|Me|",
"|M|",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

