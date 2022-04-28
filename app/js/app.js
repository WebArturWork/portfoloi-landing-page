// Sroller

let offset = 0;
let scroll = document.querySelector('.wrap-img');

document.querySelector('.btn-scroll-next').addEventListener('click', function scrollNext () {
  offset = offset + 948;
  if (offset > 3786) {
  	offset = 0;
  }
  scroll.style.left = -offset + 'px';
  console.log(offset);
});
document.querySelector('.btn-scroll-prev').addEventListener('click', function () {
  offset = offset - 948;
  if (offset < 0) {
  	offset = 2844;
  }
  scroll.style.left = -offset + 'px';
  console.log(offset);
});

setInterval(() => {
  offset = offset + 948;
  if (offset > 3786) {
  	offset = 0;
  }
  scroll.style.left = -offset + 'px';
}, 5000)