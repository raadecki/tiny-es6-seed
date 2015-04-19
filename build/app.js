"format register";
System.register("scripts/hello", [], function (_export) {
    function hello(name) {
        return "Hello " + name;
    }

    return {
        setters: [],
        execute: function () {
            "use strict";

            _export("default", hello);
        }
    };
});
System.register('scripts/startapp', ['scripts/hello'], function (_export) {
    var hello;

    function startapp() {
        //bootstrap code here

        console.log(hello('World'));
    }

    return {
        setters: [function (_scriptsHello) {
            hello = _scriptsHello['default'];
        }],
        execute: function () {
            'use strict';

            _export('default', startapp);
        }
    };
});