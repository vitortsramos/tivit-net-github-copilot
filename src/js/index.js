// This file contains the JavaScript functionality for the credit card brand validator website.
// It captures user input and interacts with the validator module to display the appropriate brand icon.

import { validateCreditCardBrand } from './validator.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('creditCardInput');
    const validateButton = document.getElementById('validateButton');
    const numberDisplay = document.getElementById('numberDisplay');
    const brandText = document.getElementById('brandText');
    const brandIcon = document.getElementById('brandIcon');

    function showBrand(brand, rawInput) {
        // mostra o número digitado (texto puro do campo)
        numberDisplay.textContent = rawInput && rawInput.trim() !== '' ? rawInput : '—';

        if (brand) {
            const friendly = brand.charAt(0).toUpperCase() + brand.slice(1);
            brandText.textContent = friendly;
            brandIcon.src = `icons/${brand}.png`; // caminho relativo ao index.html
            brandIcon.alt = `${friendly} logo`;
            brandIcon.style.display = 'inline-block';
        } else {
            brandText.textContent = 'não identificada';
            brandIcon.src = '';
            brandIcon.alt = '';
            brandIcon.style.display = 'none';
        }
    }

    function detectAndShow() {
        const raw = inputField.value || '';
        const cardNumber = raw.replace(/[\s-]/g, '');
        const brand = validateCreditCardBrand(cardNumber);
        showBrand(brand, raw);
    }

    validateButton.addEventListener('click', () => {
        detectAndShow();
    });

    // atualização em tempo real (opcional)
    inputField.addEventListener('input', () => {
        // você pode comentar a linha abaixo se não quiser atualização ao digitar
        detectAndShow();
    });

    // inicializa com estado vazio
    showBrand(null, '');
});