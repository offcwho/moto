import Swiper from "swiper";

function Slider(){
    const swiper = new Swiper('.reviews__slider', {
        slidesPerView: 3,
        spaceBetween: 40,
    })
}
export default Slider;