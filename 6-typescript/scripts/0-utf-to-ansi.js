"use strict";
var escapable = /[\\\"\x00-\x1f\x7f-\uffff]/g, meta = {
    // Valores a sustituir
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\",
};
function quote(string) {
    escapable.lastIndex = 0;
    return escapable.test(string)
        ? '"' +
            string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string"
                    ? c
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
        : '"' + string + '"';
}
var encoded = quote("35751626");
var back = JSON.parse(encoded);
