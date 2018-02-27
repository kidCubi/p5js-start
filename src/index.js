'use strict';

//Force page refresh on hot reload
if(module.hot) {
    module.hot.accept(function() {
        window.location.reload();
    })
}

import App from './App';

console.log(App)