const Options = {
    method: 'POST',
    headers: {
        'Content-Type':'application/json;charset=UTF-8',
    }
}
export const getDictionariesApi = (params:any) => {
    return fetch(`/api/dict/dictionary/getDictionaries?namespace=${params.namespace}`);
}