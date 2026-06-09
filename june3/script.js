let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    if(navigator.vibrate){
        navigator.vibrate(50)
    }
})  