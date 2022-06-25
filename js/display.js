const navigation = document.getElementById('navigation');
const buttonShowNav = document.querySelector('.buttonShowNav');
const overlay = document.getElementById('overlay');

const iconChangeHandler = (event) => {
  if (event.target === buttonShowNav) return;
  const icons = event.target
    .closest('.buttonShowNav')
    .querySelectorAll('.fa-solid');

  icons.forEach((icon) => {
    icon.classList.toggle('show');
  });
};

const navigationHandler = (event) => {
  if (event.target.classList.contains('fa-bars')) {
    navigation.style.transform = 'translateX(0)';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('overlay').style.opacity = '0.6';

    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';

    return;
  }

  if (event.target.classList.contains('fa-xmark')) {
    navigation.style.transform = 'translateX(-100%)';
    document.getElementById('overlay').style.display = 'none';

    document.body.style.overflow = 'auto'; // ADD THIS LINE
    document.body.style.height = 'auto';

    return;
  }
};

export const toggleNavHandler = (event) => {
  iconChangeHandler(event);
  navigationHandler(event);
};

buttonShowNav.addEventListener('click', toggleNavHandler);
overlay.addEventListener('click', function (e) {
  if (e.target !== overlay) return;

  buttonShowNav.querySelectorAll('.fa-solid').forEach((icon) => {
    icon.classList.toggle('show');
  });
  navigation.style.transform = 'translateX(-100%)';

  overlay.style.display = 'none';
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  if (window.innerWidth <= 1024) return;
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-80px';
  }
  prevScrollpos = currentScrollPos;
};
