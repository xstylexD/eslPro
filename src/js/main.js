import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';



try {
    const tabs = document.querySelectorAll(".schedule__btn");
    const contents = document.querySelectorAll(".schedule__item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Удаляем активный класс у всех табов и контента
            tabs.forEach((t) => t.classList.remove("schedule__btn-active"));
            contents.forEach((c) => (c.style.display = "none"));

            // Добавляем активный класс к нажатому табу и показываем соответствующий контент
            tab.classList.add("schedule__btn-active");
            contents[index].style.display = "flex";
        });
    });

    // Показываем первый контент при загрузке
    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) { }

const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    loop: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper__next",
        prevEl: ".swiper__prev",
        clickable: true,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

const swiper__battles = new Swiper(".swiper__battles", {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    loop: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper__next",
        prevEl: ".swiper__prev",
        clickable: true,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});