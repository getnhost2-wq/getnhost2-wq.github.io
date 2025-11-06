const blocks = document.querySelectorAll('.block');
const overlay = document.getElementById('enter');
const features_container = document.getElementById("features");
const home_container = document.getElementById("home");
const status_container = document.getElementById("status");
const Pricing_container = document.getElementById("Pricing");
const information_container = document.getElementById("information");
const text_element = document.querySelector('.type');

const phrases = [
  "Friendly support",
  "Dominate competition with the best provider on the market",
  "Close to zero downtime",
  "Cleanest UI",
  "Join today, dont wait longer"
];

const typing_speed = 60;
const deleting_speed = 35;
const pause_after_typing = 1000;

let phrase_index = 0;
let char_index = 0;
let is_deleting = false;

// follow mouse thingy
blocks.forEach(block => {
  block.addEventListener('mousemove', e => {
    const rect = block.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const center_x = rect.width / 2;
    const center_y = rect.height / 2;

    const rotate_x = -(y - center_y) / 15;
    const rotate_y = (x - center_x) / 15;

    block.style.transform = `rotateX(${rotate_x}deg) rotateY(${rotate_y}deg) scale(1.05)`;
  });

  block.addEventListener('mouseleave', () => {
    block.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

// intro / music
overlay.addEventListener('click', () => {
  overlay.classList.add('fade-out');
  setTimeout(() => overlay.remove(), 500);

  //const music = document.getElementById('bg-music');
  //music.volume = 0.15;
  //music.play().catch(function(error) {
  //  console.log('Autoplay blocked:', error);
  //});
});

// auto scroll / features
function scroll_to_features_container() {
  const container_center = features_container.offsetTop + features_container.offsetHeight / 2 - window.innerHeight / 2;
  window.scrollTo({
    top: container_center,
    behavior: "smooth"
  });
}

function scroll_to_home_container() {
  const container_center = home_container.offsetTop + home_container.offsetHeight / 2 - window.innerHeight / 2;
  window.scrollTo({
    top: container_center,
    behavior: "smooth"
  });
}

function scroll_to_status_container() {
  const container_center = status_container.offsetTop + status_container.offsetHeight / 2 - window.innerHeight / 2;
  window.scrollTo({
    top: container_center,
    behavior: "smooth"
  });
}

function scroll_to_pricing_container() {
  const container_center = Pricing_container.offsetTop + Pricing_container.offsetHeight / 2 - window.innerHeight / 2;
  window.scrollTo({
    top: container_center,
    behavior: "smooth"
  });
}

function scroll_to_information_container() {
  const container_center = information_container.offsetTop + information_container.offsetHeight / 2 - window.innerHeight / 2;
  window.scrollTo({
    top: container_center,
    behavior: "smooth"
  });
}

// typing effect
function type_phrases() {
  const current_phrase = phrases[phrase_index];

  if (!is_deleting) {
    text_element.textContent = current_phrase.substring(0, char_index + 1) || ".";
    char_index++;
    if (char_index === current_phrase.length) {
      setTimeout(() => {
        is_deleting = true;
        type_phrases();
      }, pause_after_typing);
      return;
    }
  } else {
    text_element.textContent = current_phrase.substring(0, char_index) || ".";
    char_index--;
    if (char_index < 0) {
      is_deleting = false;
      phrase_index = (phrase_index + 1) % phrases.length;
    }
  }

  setTimeout(type_phrases, is_deleting ? deleting_speed : typing_speed);
}

type_phrases();
scroll_to_home_container()
