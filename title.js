var i=0;
setInterval(function(){
    var titles=[
"|D|",
"|Di|",
"|Diz|",
"|Dizi|",
"|Dizit|",
"|Dizitz|",
"|Dizitzz|",
"|Dizitz|",
"|Dizit|",
"|Dizi|",
"|Diz|",
"|Di|",
"|D|",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

