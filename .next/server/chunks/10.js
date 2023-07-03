"use strict";
exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 7010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Banner: () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3831);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const Banner = ({ backgroundImage, content, link, icon = null, iconHeight = 24, iconWidth = 24, backgroundType = "default" })=>{
    const hasBackgroundImage = !!backgroundImage;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: link,
        target: "_blank",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)("w-full h-20 relative rounded-2xl overflow-hidden bg-center bg-cover", {
                "bg-banner-accent": !hasBackgroundImage && backgroundType === "accent",
                "bg-banner-default": !hasBackgroundImage && backgroundType === "default"
            }),
            style: hasBackgroundImage ? {
                backgroundImage: `url(${backgroundImage})`
            } : {},
            children: [
                hasBackgroundImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-0 bg-black bg-opacity-60"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-white flex items-center space-x-2 absolute z-10 inset-0 px-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-white text-lg leading-6 font-mazzard-h font-normal",
                            children: content
                        }),
                        icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: icon,
                            height: iconHeight,
                            width: iconWidth
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;