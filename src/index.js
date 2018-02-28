'use strict';

//Force page refresh on hot reload
if (module.hot) {
    module.hot.accept(function () {
        window.location.reload();
    })
}

import Sketch from './sketch';

new p5(Sketch);