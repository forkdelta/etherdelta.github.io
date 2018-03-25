/* This module was module number 568 in the old packed code. It was referenced in the old code using `require(<module name>)` by the following module names:
* ./settings
*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
exports.default = function() {
    var state =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      language: void 0,
                      selectedContract: void 0,
                      connection: void 0,
                      ethGasPrice: void 0,
                  },
        action = arguments[1];
    switch (action.type) {
        case 'UPDATE_SETTINGS':
            return Object.assign(state, action.value);
        default:
            return state;
    }
            };