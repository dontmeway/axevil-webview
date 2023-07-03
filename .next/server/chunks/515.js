"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 9515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Heading: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cva__WEBPACK_IMPORTED_MODULE_1__]);
cva__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const element = {
    sm: "h3",
    md: "h2",
    lg: "h1"
};
const variants = (0,cva__WEBPACK_IMPORTED_MODULE_1__.cva)([
    "text-neutral-100 font-mazzard-h font-medium dark:text-white"
], {
    variants: {
        size: {
            sm: [
                "text-base"
            ],
            md: [
                "text-lg leading-6"
            ],
            lg: [
                "text-2xl"
            ]
        }
    }
});
const Heading = ({ content = "Block Title - L", size = "sm" })=>{
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(element[size], {
        children: content,
        className: variants({
            size
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;