let images=['imgs/Webp.net-resizeimage.jpg','imgs/3.jpg','imgs/2.jpg'];

let x=0;

    function next(){
        if(x==0){
            document.getElementById("header").style.backgroundImage = `url(${images[0]})`;
            x++;
        }else if(x==1){
            document.getElementById("header").style.backgroundImage = `url(${images[1]})`;
            x++;
        }else if(x==2){
            document.getElementById("header").style.backgroundImage = `url(${images[2]})`;
            x=0;
        }
    }


    function previous(){
        if(x==0){
            document.getElementById("header").style.backgroundImage = `url(${images[1]})`;
            x=2;
        }else if(x==1){
            document.getElementById("header").style.backgroundImage = `url(${images[2]})`;
            x--;
        }else if(x==2){
            document.getElementById("header").style.backgroundImage = `url(${images[0]})`;
            x--;
        }
    }