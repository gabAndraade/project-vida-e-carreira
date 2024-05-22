window.addEventListener("scroll",function(){
    let header = document.querySelector('#header')
    header.classList.toggle('roll',this.window.scrollY>0)
})



