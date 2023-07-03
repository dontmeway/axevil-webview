"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 7274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomSheet: () => (/* binding */ BottomSheet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2602);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4743);



const BottomSheetView = ({ id, children })=>{
    const context = (0,_shared_lib__WEBPACK_IMPORTED_MODULE_2__/* .useAppContext */ .bp)();
    const isPreviewing = (0,_builder_io_react__WEBPACK_IMPORTED_MODULE_1__.useIsPreviewing)();
    if (context?.bottomSheetId !== `${id}` && !isPreviewing) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: children
    });
};
const BottomSheet = (0,_builder_io_react__WEBPACK_IMPORTED_MODULE_1__.withChildren)(BottomSheetView);


/***/ })

};
;