"use strict";
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
