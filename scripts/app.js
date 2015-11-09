/**
 * Basic application module for all pages
 */
define([
    'config',
    'log',
    'angular',
    'angular-translate-loader-static-files',
    'angular-translate-storage-local',
    'angular-messages'
], function(cfg, log, angular){

    'use strict';

    var app = {};

    app.config = cfg;
    app.angular = angular;
    app.module = angular.module(cfg.APP_NAME, ['ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ngMessages']);
    app.module.config(['$translateProvider', function($translateProvider){
        $translateProvider.useStaticFilesLoader({
            files:[{
                prefix:cfg.WEB_ROOT+'i18n/',
                suffix:'.json'
            }]
        });
        $translateProvider.registerAvailableLanguageKeys(['en', 'cn'], {
            'en_*':'en',
            'zh_*':'cn'
        });
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.determinePreferredLanguage();
        $translateProvider.useLocalStorage();

    }]);

    return app;
});
