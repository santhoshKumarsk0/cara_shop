const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

    bar.addEventListener('click',()=>{
        nav.classList.toggle('active')
    })
    close.addEventListener("click", () => {
        nav.classList.toggle('active');
})


var mainimg = document.getElementById('Mainimg')
    var smallimg = document.getElementsByClassName('smallimg');
    smallimg[0].onclick=function(){
        mainimg.src=smallimg[0].src
    }
    smallimg[1].onclick=function(){
        mainimg.src=smallimg[1].src
    }
    smallimg[2].onclick=function(){
        mainimg.src=smallimg[2].src
    }
    smallimg[3].onclick=function(){
        mainimg.src=smallimg[3].src
    }
    

    var proimg = document.getElementsByClassName('imgd')
    proimg[0].onclick=()=>{
        mainimg.src=proimg[0].src
    }
   
    proimg[1].onclick=function(){
        mainimg.src=proimg[1].src
    }
    proimg[2].onclick=()=>{
        mainimg.src=proimg[2].src
    }
    proimg[3].onclick=()=>{
        mainimg.src=proimg[3].src
    }
    proimg[4].onclick=()=>{
        mainimg.src=proimg[4].src
    }
    proimg[5].onclick=()=>{
        mainimg.src=proimg[5].src
    }
    proimg[6].onclick=()=>{
        mainimg.src=proimg[6].src
    }
    proimg[7].onclick=()=>{
        mainimg.src=proimg[7].src
    }
    
    const sub = document.getElementById('submited')
    sub.addEventListener("click",()=>{
        console.log('clicked')
    })