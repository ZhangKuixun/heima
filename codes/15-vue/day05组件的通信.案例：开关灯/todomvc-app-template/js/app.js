(function(window) {
    'use strict';

    const vue = new Vue({
        el: '#app',
        data: {
            list: [
                { id: 1, name: '吃饭', completed: true },
                { id: 2, name: '睡觉', completed: false },
                { id: 3, name: '打豆豆', completed: false }
            ]
        },
    })

})(window);