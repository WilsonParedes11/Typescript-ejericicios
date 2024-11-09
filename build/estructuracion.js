"use strict";
function rest(first, second, ...allOthers) {
    console.log(allOthers);
}
rest('foo', 'bar');
rest('foot', 'bar', 'bas', 'qux');
