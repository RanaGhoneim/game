//preloader
var loader = document.querySelector(".loader")
window.addEventListener("load",vanish);
function vanish(){
    loader.classList.add("disppear")

}

//header 
var audioTitle =document.getElementById('audio_Title');
var audioIcon =document.getElementById('audio_icon');
function playAudio(){
    audioTitle.play();
}


//footer
let play_btn =document.getElementById("play");
let range =document.getElementById("range")
 audioSrc= 'https://educationalrc.org/tasks/6/assets/audio/p21e4q1.mp3'
 let isPlaying = false;
 let duration =0;
 let currentTimer =0;
  
 let Song = new Audio();
 window.onload = playsong

 //Ier s create our plays function
function playsong(){
    Song.src = audioSrc;

    play_btn.addEventListener('click',function(){ 
  if(!isPlaying){
    Song.play();
     isPlaying = true; 
     duration = Song.duration; 
     range.max = duration;
     play_btn.src = 'https://educationalrc.org/tasks/6/assets/images/pause.png';
    }else{
    Song.pause();
     isPlaying = false;
     play_btn.src = 'https://educationalrc.org/tasks/6/assets/images/play.png';
    }
    range.addEventListener('change',function(){
         Song.currentTime = range.value;
    })
    Song.addEventListener('timeupdate', function(){ 
        range.value = Song.currentTime; })
    })
    Song.addEventListener('ended',function(){
     Song.currentTime = 0; 
     Song.pause();
     isPlaying = false; 
     range.value = 0;
     play_btn.src = 'https://educationalrc.org/tasks/6/assets/images/play.png';

    })
}
    
    
//question
var choose =document.getElementsByClassName("question1-choose");
var choose2 =document.getElementsByClassName("question2-choose");
var choose3 =document.getElementsByClassName("question3-choose");
var choose4 =document.getElementsByClassName("question4-choose");
var choose5 =document.getElementsByClassName("question5-choose");


 var question1=document.getElementById("question1")
 var question2=document.getElementById("question2")
 var question3=document.getElementById("question3")
 var question4=document.getElementById("question4")
 var question5=document.getElementById("question5")
var questionImage1=document.getElementById("question-image1")
var questionImage2=document.getElementById("question-image2")
var questionImage3=document.getElementById("question-image3")
var questionImage4=document.getElementById("question-image4")
var questionImage5=document.getElementById("question-image5")

let right = document.getElementById("right");
let mistake=document.getElementById("mistake")
for (var i = 0 ; i < choose.length; i++) {

    choose[i].addEventListener('click' ,function(e){
      var x = e.target.innerText;
      if(x=='2'){
        question1.innerHTML= e.target.innerText;
        questionImage1.style.opacity=".5";
        right.play();
      }
      else{
        mistake.play()
      }
    } ) ; 
 }

 for (var i = 0 ; i < choose2.length; i++) {
    choose2[i].addEventListener('click' ,function(e){
      var x = e.target.innerText;
      if(x=='3'){
        question2.innerHTML= e.target.innerText;
        questionImage2.style.opacity=".5";
        right.play();
      }
      else{
        mistake.play()
      }
    } ) ; 
 }

 for (var i = 0 ; i < choose3.length; i++) {
    choose3[i].addEventListener('click' ,function(e){
      var x = e.target.innerText;
      if(x=='5'){
        question3.innerHTML= e.target.innerText;
        questionImage3.style.opacity=".5";
        right.play();
      }
      else{
        mistake.play()
      }
    } ) ; 
 }

 for (var i = 0 ; i < choose4.length; i++) {
    choose4[i].addEventListener('click' ,function(e){
      var x = e.target.innerText;
      if(x=='4'){
        question4.innerHTML= e.target.innerText;
        questionImage4.style.opacity=".5";
        right.play();
      }
      else{
        mistake.play()
      }
    } ) ; 
 }

 for (var i = 0 ; i < choose5.length; i++) {
    choose5[i].addEventListener('click' ,function(e){
      var x = e.target.innerText;
      if(x=='1'){
        question5.innerHTML= e.target.innerText;
        questionImage5.style.opacity=".5";
        right.play();
      }
      else{
        mistake.play()
      }
    } ) ; 
 }



 //showAns
 function showAns(){
    question5.innerHTML= "1";
    questionImage5.style.opacity=".5";

    question3.innerHTML= "5";
    questionImage3.style.opacity=".5";

    question1.innerHTML= 2;
    questionImage1.style.opacity=".5";
  
    question2.innerHTML= '3';
    questionImage2.style.opacity=".5"

    question4.innerHTML= "4";
    questionImage4.style.opacity=".5"
 }

 //replay

function replay(){
    question4.innerHTML= "";
    questionImage4.style.opacity="1"
    question3.innerHTML= "";
    questionImage3.style.opacity="1"
    question2.innerHTML= "";
    questionImage2.style.opacity="1"
    question1.innerHTML= "";
    questionImage1.style.opacity="1"
    question5.innerHTML= "";
    questionImage5.style.opacity="1"

}

//box
let dropDownBox1 = document.querySelector(".dropDown__box1");
let dropDownBox2 = document.querySelector(".dropDown__box2");
let dropDownBox3 = document.querySelector(".dropDown__box3");
let dropDownBox4 = document.querySelector(".dropDown__box4");
let dropDownBox5 = document.querySelector(".dropDown__box5");

console.log(dropDownBox1)
question1.addEventListener("click", function(){
    dropDownBox1.style.display="block"
})

question1.addEventListener("dblclick", function(){
    dropDownBox1.style.display="none"
})

question2.addEventListener("click", function(){
    dropDownBox2.style.display="block"
})
question2.addEventListener("dblclick", function(){
    dropDownBox2.style.display="none"
})

question3.addEventListener("click", function(){
    dropDownBox3.style.display="block"
})
question3.addEventListener("dblclick", function(){
    dropDownBox3.style.display="none"
})

question4.addEventListener("click", function(){
    dropDownBox4.style.display="block"
})
question4.addEventListener("dblclick", function(){
    dropDownBox4.style.display="none"
})

question5.addEventListener("click", function(){
    dropDownBox5.style.display="block"
})

question5.addEventListener("dblclick", function(){
    dropDownBox5.style.display="none"
})