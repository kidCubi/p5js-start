'use strict';

import Sketch from './sketch';

//Force page refresh on hot reload
if (module.hot) {
    module.hot.accept(function () {
        window.location.reload();
    })
}

new p5(Sketch);