window.onload = function () {

  // Sroller

  let offset = 0;
  let scroll = document.querySelector('.wrap-img');

  document.querySelector('.btn-scroll-next').addEventListener('click', function scrollNext () {
    offset = offset + 948;
    if (offset > 3786) {
      offset = 0;
    }
    scroll.style.left = -offset + 'px';
  });
  document.querySelector('.btn-scroll-prev').addEventListener('click', function () {
    offset = offset - 948;
    if (offset < 0) {
      offset = 2844;
    }
    scroll.style.left = -offset + 'px';
  });

  setInterval(() => {
    offset = offset + 948;
    if (offset > 3786) {
      offset = 0;
    }
    scroll.style.left = -offset + 'px';
  }, 5000)






  // Top button scroll

  let topButton = document.querySelector('.btn-foot-sroll');
  let scrolled;
  let timer;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
      topButton.style.display = 'block';
    }
    else if (window.scrollY == 0) {
      topButton.style.display = 'none';
    }
  });
  

  topButton.onclick = () => {

    scrolled = window.pageYOffset;
    window.scrollTo(10,0);

    scrollTop();

    function scrollTop () {

      if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 25;
        timer = setTimeout(scrollTop, 0.1);
      }
      else {
        clearTimeout(timer);
        window.scrollTo(0,0);
      }
      
    }
  }



  // Burger


  const burger = document.getElementById('burger');

  burger.onclick = () => {

    const headCont = document.getElementById('head');
    headCont.classList.toggle('head-cont-2');

    document.querySelector('.burger').classList.toggle('change-burger');


    document.querySelector('.burger').innerHTML = '&#9776';
    document.querySelector('.change-burger').innerHTML = '&#10006';
    

  }


  
}