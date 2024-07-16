function parallex(layer, distance, speed){
  const item = document.querySelector(layer);
  item.style.transform = "translateY("+ -distance*speed + "px)";
}
function hrparallax(layer, distance, speed){
  const item = document.querySelector(layer);
  item.style.transform = "translateX("+ -distance*speed + "px)";
}
document.addEventListener('scroll', function() {
  parallex('.l1', window.scrollY, 0.5);
  parallex('.l3', window.scrollY, -0.5);
  hrparallax('.l4', window.scrollY, -0.5);
  hrparallax('.l5', window.scrollY, 0.5);
});