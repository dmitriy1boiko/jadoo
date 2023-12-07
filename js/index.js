window.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('.video');
  video.addEventListener('click', function (){
    if(video.classList.contains('active')){
      return;
    }
    video.classList.add('active');
    video.insertAdjacentHTML('afterbegin','<iframe width="560" height="315" src="https://www.youtube.com/embed/GLhRgjPYRh4?si=EdGBEYz8sgfWTWD7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  })
})