"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDictionariesApi = void 0;
var Options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
};
exports.getDictionariesApi = function (params) {
    return fetch("/api/dict/dictionary/getDictionaries?namespace=" + params.namespace);
};
