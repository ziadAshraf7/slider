
let sliderImg = document.querySelectorAll(".container .slider .img img")
let nextt = document.querySelector(".btn-sliderr")
let prev = document.querySelector(".btn-slider")

 let arr = [...sliderImg]
    let position = 0
    let x = -(sliderImg.length - 2)
function next(){
    
     if(position >= x + "00"){
        position -= 100
    for(let slides of sliderImg){
        slides.style.transform = `translateX(${position}%)`
    }
}

}


function previous(){

    if(position != 0){
    position += 100
     
    for(let slides of sliderImg){
        slides.style.transform = `translateX(${position}%)`
    }
}
}


nextt.addEventListener("click" , function(){
    return next()
})

prev.addEventListener("click", function(){
  return  previous()
})