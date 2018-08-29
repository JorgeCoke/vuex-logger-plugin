module.exports = function (store) {
    store.subscribe(function (mutation, state) {
        console.log(
            '%c MUTATION ' + mutation.type + ' ',
            'color: #03A9F4; font-weigth: bold; background-color: #eee',
            mutation.payload
        );
    });
};