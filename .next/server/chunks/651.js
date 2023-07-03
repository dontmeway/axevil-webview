"use strict";
exports.id = 651;
exports.ids = [651];
exports.modules = {

/***/ 5651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Summary: () => (/* binding */ Summary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2602);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3831);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__);





const SummaryView = ({ children, link, logo, backgroundImage, gradient, linkIconHeight = 20, linkIconWidth = 20, linkIcon })=>{
    const hasBgImageOrGradient = backgroundImage || gradient;
    const bgStyle = backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`
    } : gradient ? {
        backgroundImage: gradient
    } : {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("w-full px-2 pt-2 pb-6 rounded-3xl flex flex-col space-y-6 relative bg-cover bg-no-repeat", {
            "bg-summary": !hasBgImageOrGradient
        }),
        style: bgStyle,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full",
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex justify-center",
                children: [
                    logo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-8 w-32",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: logo,
                            fill: true,
                            style: {
                                objectFit: "contain"
                            },
                            alt: "logo"
                        })
                    }),
                    linkIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: link,
                        target: "_blank",
                        className: "w-12 h-12 rounded-2xl flex justify-center items-center absolute right-2 bottom-2 text-white bg-neutral-85 dark:text-neutral-100 dark:bg-white dark:bg-opacity-30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_inlinesvg__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: linkIcon,
                            height: linkIconHeight,
                            width: linkIconWidth
                        })
                    })
                ]
            })
        ]
    });
};
const Summary = (0,_builder_io_react__WEBPACK_IMPORTED_MODULE_1__.withChildren)(SummaryView);


/***/ })

};
;