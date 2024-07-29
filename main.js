var ready1=document.getElementById("preloader");
var loading=document.querySelector(".loader");
window.addEventListener('DOMContentLoaded', ready);
function ready() {
    setTimeout(function(){ready1.classList.add("complete");
    loading.parentElement.removeChild(loading)}, 3000);
}
/////////////////////////////cursor///////////////////////
var cursor=document.querySelector(".cursor")
var cursor2=document.querySelector(".cursor2")
document.addEventListener("mousemove",function(e){
cursor.style.cssText=cursor2.style.cssText="left: "+e.clientX + "px; top:" +e.clientY +"px;";
})
///////////////////////////////////////////////
class TypeWriter {
    constructor(txtElement, words, wait = 500) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 7);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];
        if (this.isDeleting) {
            this.txt = fulltxt.substring(0, this.txt.length - 1);


        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 50;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);
function init() {
    const txtElement = document.querySelector('.txttype');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);


}
////////////////////////////////////

const numb =document.querySelector(".percent");
let counter =0;
setInterval(()=>{

if(counter==1200){
    clearInterval();
}else{
    counter+=5;
    numb.textContent=counter +"+";
}

},80)
const numb1 =document.querySelector(".percent1");
let counter1 =0;
setInterval(()=>{

if(counter1==245){
    clearInterval();
}else{
    counter1+=1;
    numb1.textContent=counter1 +"+";
}

},80)
const numb2 =document.querySelector(".percent2");
let counter2 =0;
setInterval(()=>{

if(counter2==35){
    clearInterval();
}else{
    counter2+=1;
    numb2.textContent=counter2 +"+";
}

},80)
const numb3 =document.querySelector(".percent3");
let counter3 =0;
setInterval(()=>{

if(counter3==350){
    clearInterval();
}else{
    counter3+=1;
    numb3.textContent=counter3 +"+";
}

},80)
////////////////////////////////////////////
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {

    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {

            btn.classList.remove("active");

        });
        e.target.classList.add("active");

        articles.forEach(function (article) {
            article.classList.remove("active");

        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
const about2 = document.querySelector(".about2");
const btn2s = document.querySelectorAll(".tab-btn2");
const article2s = document.querySelectorAll(".content2");
about2.addEventListener("click", function (e) {

    const id2 = e.target.dataset.id;
    if (id2) {
        btn2s.forEach(function (btn2) {

            btn2.classList.remove("active");

        });
        e.target.classList.add("active");

        article2s.forEach(function (article2) {
            article2.classList.remove("active");

        });
        const element2 = document.getElementById(id2);
        element2.classList.add("active");
    }
});
//////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".b1").setAttribute("disabled",true);
    document.querySelector(".email").addEventListener("keyup",myfunc1);
    document.querySelector(".name").addEventListener("keyup",myfunc1);
    
    function myfunc1(){
        var y=document.querySelector(".name").value;
        var x=document.querySelector(".email").value;
        n="@";
        if(x.match(n)){
            document.getElementById("message1").innerHTML="correct email";
            document.getElementById("message1").style.fontSize="15px";
            document.getElementById("message1").style.color="green";
     
            
        }
        else {
         document.getElementById("message1").innerHTML="enter your email";
         document.getElementById("message1").style.fontSize="15px";
            document.getElementById("message1").style.color="red";
         
        }
     
        
     
         if(y.length<5){
               document.getElementById("message2").innerHTML="enter name";
               document.getElementById("message2").style.fontSize="15px";
               document.getElementById("message2").style.color="red";
           
               
               
            }
           else {
            document.getElementById("message2").innerHTML="correct";
            document.getElementById("message2").style.fontSize="15px";
            document.getElementById("message2").style.color="green";
      
           
        }
        
      if(y.length>5 && x.match(n))
        {
            document.querySelector(".b1").removeAttribute("disabled");
      
        
        }
        else{
            document.querySelector(".b1").setAttribute("disabled",true);
          
        }
          
   
   
   
   
   
    }

    
    

        
  


    

return false;
});

