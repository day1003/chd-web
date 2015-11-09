/**
 * Config application's dependencies and load expected application
 */
define(["config"], function (cfg) {
    'use strict';

    var libs = {
        baseUrl: cfg.WEB_ROOT + 'scripts/',
        //urlArgs: '_ts=' + (new Date()).getTime(),
        paths: {
            'domReady': 'libs/domReady',
            'underscore': 'libs/underscore-min',
            'log4javascript': 'libs/log4javascript',
            'angular': 'libs/angular.min',
            'angular-cookies': 'libs/angular-cookies.min',
            'angular-sanitize': 'libs/angular-sanitize.min',
            'angular-local-storage': 'libs/angular-local-storage.min',
            'angular-resource': 'libs/angular-resource.min',
            'angular-route': 'libs/angular-route.min',
            'angular-translate': 'libs/angular-translate.min',
            'angular-translate-loader-static-files': 'libs/angular-translate-loader-static-files.min',
            'angular-translate-storage-cookie': 'libs/angular-translate-storage-cookie.min',
            'angular-translate-storage-local': 'libs/angular-translate-storage-local.min',
            'angular-messages':'libs/angular-messages.min'
        },
        packages:[{
            name:'controllers',
            location:'app/controllers'
            //main:''
        },{
            name:'directives',
            location:'app/directives'
        }],
        shim: {
            'underscore': '_',
            'log4javascript':'log4javascript',
            'angular': {
                exports: 'angular'
            },
            'angular-cookies': ['angular'],
            'angular-sanitize': ['angular'],
            'angular-local-storage': ['angular-cookie'],
            'angular-resource': ['angular'],
            'angular-route': ['angular'],
            'angular-translate': ['angular', 'angular-sanitize'],
            'angular-translate-loader-static-files': ['angular-translate'],
            'angular-translate-storage-cookie':['angular-cookies', 'angular-translate'],
            'angular-translate-storage-local':['angular-translate-storage-cookie'],
            'angular-messages':['angular']
        },
        deps:[]
    };

    require.config(libs);

    var bootstrapName = document.getElementById('requirejs').getAttribute('data-bootstrap');
    require([bootstrapName + '-bootstrap']);

});





