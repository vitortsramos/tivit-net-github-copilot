/**
 * validateCreditCardBrand(cardNumber)
 * - cardNumber: string contendo apenas dígitos (já limpos de espaços/traços)
 * Retorna: chave da bandeira (ex: 'visa', 'diners', 'hipercard') ou null
 *
 * Observação: algumas faixas podem variar entre emissores; confirme BINs em produção.
 */
function validateCreditCardBrand(cardNumber) {
    if (!cardNumber || !/^\d+$/.test(cardNumber)) return null;

    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/, // 13 ou 16 dígitos
        mastercard: /^5[1-5][0-9]{14}$/, // 16 dígitos (can be extended for new ranges if needed)
        amex: /^3[47][0-9]{13}$/, // 15 dígitos
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/, // 16 dígitos
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/, // 15 ou 16 dígitos

        // Diners Club: combina 300–305, 36, 38 (tipicamente 14 dígitos)
        diners: /^(?:30[0-5]\d{11}|36\d{12}|38\d{12}|39\d{12})$/,

        // EnRoute: prefixos históricos 2014, 2149 (15 dígitos)
        enroute: /^(?:2014|2149)\d{11}$/,

        // Voyager: (uso comum: prefixo 8699, comprimento 15) -- confirme se necessário
        voyager: /^8699\d{11}$/,

        // Hipercard: exemplos comuns incluem 606282 e alguns 38xx (varia). Ajuste conforme BINs oficiais.
        hipercard: /^(?:606282\d{10}|38\d{12})$/,

        // Aura: implementado com alguns prefixos conhecidos (ex.: 50xx não é exclusivo) —
        // ajuste/complete conforme BINs oficiais do emissor.
        aura: /^(?:50[0-9]{14}|5067[0-9]{12})$/ 
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }
    return null;
}

function getBrandIcon(brand) {
    return brand ? `icons/${brand}.png` : null;
}

export { validateCreditCardBrand, getBrandIcon };