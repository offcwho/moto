// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

import { register  } from 'swiper/element/bundle';
register();

//Slider
import Slider from './modules/slider';
Slider();
// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();