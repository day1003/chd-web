define(['app'], function (app) {
    'use strict';

    require(['domReady'], function(){
        app.angular.bootstrap(document, [app.config.APP_NAME]);
    });
});
