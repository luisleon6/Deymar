const slides = document.querySelectorAll('.text-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].className = 'text-slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'text-slide active';
}

setInterval(nextSlide, 2000); // Change the slide every 2 seconds

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

            toggleBtn.onclick = function () {
                dropDownMenu.classList.toggle('open')
                const isOpen = dropDownMenu.classList.contains('open')

                toggleBtnIcon.classList = isOpen
                    ? 'fa-solid fa-xmark'
                    : 'fa-solid fa-bars'
            }