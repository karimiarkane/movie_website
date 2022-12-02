var vid = document.querySelector(".banner video");
var btn_play = document.querySelector(".banner .btns .fa-circle-play");
var btn_stop = document.querySelector(".banner .btns .fa-circle-pause");
var btn = document.querySelector(".banner .btns");
var ktiba=document.querySelectorAll(".banner .btns p");

console.log(vid);
console.log(btn_play);
console.log(btn_stop);
console.log(btn);

   
     
        btn_play.onclick=function(){
            vid.play();
            btn_stop.style.display="none";
            btn_play.style.display="none"; 
            ktiba[0].style.display="none";
            ktiba[1].style.display="none";
        }

        btn_stop.onclick=function(){
            vid.pause(); 
            btn_play.style.display="block";  
            btn_stop.style.display="none";
                   
        }
        if (vid.played){
            btn.onmouseover=function(){
            btn_stop.style.display="block";
            ktiba[0].style.display="block";
            ktiba[1].style.display="block";
            
            }
            
        }

        console.log( new Date( ) );
       


   
    



