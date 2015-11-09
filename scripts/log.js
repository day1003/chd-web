define([
    'config',
    'log4javascript'
], function(cfg, log4javascript){
    'use strict';
    log4javascript.setEnabled(cfg.LOG_ENABLED);

    var log = log4javascript.getLogger(cfg.APP_NAME);
    //log4javascript.Level.ALL
    //log4javascript.Level.TRACE
    //log4javascript.Level.DEBUG
    //log4javascript.Level.INFO
    //log4javascript.Level.WARN
    //log4javascript.Level.ERROR
    //log4javascript.Level.FATAL
    //log4javascript.Level.OFF
    log.setLevel(log4javascript.Level.ALL);

    var appender = new log4javascript.BrowserConsoleAppender();
    //appender.setThreshold(log4javascript.Level.ALL);
    var layout = new log4javascript.PatternLayout('%d{yyyy-MM-dd HH:mm:ss,SSS} [%c] %-5p - %m{1}%n');
    appender.setLayout(layout);
    log.addAppender(appender);

    return log;
});
