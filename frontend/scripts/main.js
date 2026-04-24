import { initMusic } from'./music.js';
import { initCountdown } from './countdown.js';
import { initGalleryModal } from './gallery.js';
import { initModal } from './modal.js';
import { initDynamicFields } from './dynamicFields.js';
import { initSubmitForm } from './submitForm.js';

document.addEventListener("DOMContentLoaded", () => {
    initMusic();
    initCountdown();
    initGalleryModal();
    initModal();
    initDynamicFields();
    initSubmitForm();
});