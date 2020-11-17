function $(element){
  return (!element.includes("#")) ? document.querySelectorAll(element) : document.querySelector(element)
}

let counter = 1;
let size = $(".careusel-slider img")[0].clientWidth

$(".careusel-slider")[0].style.transform = `translateX(-${size * counter}px)`

$("#nextBtn").addEventListener("click",() => {
  if (counter >= $("careusel-slider").length - 1) 
  $(".careusel-slider")[0].style.transition ="transform .5s ease-in"
  counter++
  $(".careusel-slider")[0].style.transform = `translateX(-${size * counter}px)`
})

$("#prevBtn").addEventListener("click",() => {
  if (counter <= 0) return
  $(".careusel-slider")[0].style.transition ="transform .5s ease-in"
  counter--
  $(".careusel-slider")[0].style.transform = `translateX(-${size * counter}px)`
})

$(".careusel-slider")[0].addEventListener("transitionend",() => {
  if($(".careusel-slider img")[counter].id == "lastClone"){
    $(".careusel-slider")[0].style.transition ="none"
    counter = $(".careusel-slider img").length - 2;
    console.log(counter)
    $(".careusel-slider")[0].style.transform = `translateX(-${size * counter}px)`
  }
  if($(".careusel-slider img")[counter].id == "firstClone"){
    $(".careusel-slider")[0].style.transition ="none"
    counter = $(".careusel-slider img").length - counter;
    $(".careusel-slider")[0].style.transform = `translateX(-${size * counter}px)`
  }
})