// Import the Vue module
import { createApp } from 'vue';

// Import the main user interface
import application from './main.vue';

// Register the service worker for the PWA
import './registerServiceWorker';

// Create and mount the application to the DOM
createApp(application).mount('#application');
