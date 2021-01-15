'use strict';

/**
 * @param {string} path relative to mercadopago folder
 * @returns {any} - exports of the specified file
 */
function importScript(path) {
    try {
        return require('*/cartridge/scripts/payment/mercadopago/' + path);
    } catch (_) {
        return {};
    }
}

/**
 * @class
 */
function MercadoPago() {}

MercadoPago.payment = importScript('modules/payment');
MercadoPago.constants = importScript('modules/constants');
MercadoPago.configuration = importScript('modules/configuration');
MercadoPago.preferences = importScript('modules/preferences');
MercadoPago.services = importScript('modules/services');
MercadoPago.utils = importScript('modules/utils');

module.exports = MercadoPago;

