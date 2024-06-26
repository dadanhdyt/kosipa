import './bootstrap';
import '../css/app.css';
import 'animate.css';
import 'primeicons/primeicons.css';

import {
  createApp,
  h,
} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice"
import Aura from '@/Presets/aura';
import { createInertiaApp } from '@inertiajs/vue3';
import Button from "primevue/button"
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import Card from "primevue/card"
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use('Card',Card)
            .use('Button',Button)
            .use(PrimeVue,{
                unstyled : false,
                pt : Aura,
            })
            .use(ToastService)
            .use(ZiggyVue)
            .use(ConfirmationService)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
