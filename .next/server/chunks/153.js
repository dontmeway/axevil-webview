"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 9153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoGraphic: () => (/* binding */ InfoGraphic)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var cva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3766);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3831);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cva__WEBPACK_IMPORTED_MODULE_1__]);
cva__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const containerVariants = (0,cva__WEBPACK_IMPORTED_MODULE_1__.cva)([
    "font-mazzard-h flex-grow"
], {
    variants: {
        variant: {
            default: [],
            filled: [
                "bg-card-light dark:bg-card-dark p-4 rounded-2xl border border-body-text-light dark:border-body-text-dark"
            ],
            summary: [
                "bg-neutral-85 dark:bg-white dark:bg-opacity-40 p-4 rounded-2xl border border-body-text-light dark:border-body-text-dark"
            ]
        }
    }
});
const headingVariants = (0,cva__WEBPACK_IMPORTED_MODULE_1__.cva)([
    "font-normal"
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
            ],
            xl: [
                "text-[32px] leading-9"
            ]
        },
        variant: {
            default: [
                "text-neutral-100 dark:text-white"
            ],
            summary: [
                "text-white dark:text-neutral-100"
            ]
        }
    }
});
const paragraphVariants = (0,cva__WEBPACK_IMPORTED_MODULE_1__.cva)([
    "text-xs font-normal"
], {
    variants: {
        variant: {
            default: [
                "text-neutral-75 dark:text-white dark:text-opacity-40"
            ],
            summary: [
                "text-white text-opacity-40 dark:text-neutral-100"
            ]
        }
    }
});
const textContentContainerVariants = (0,cva__WEBPACK_IMPORTED_MODULE_1__.cva)([], {
    variants: {
        direction: {
            horizontal: [
                "flex items-center justify-center space-x-3"
            ],
            vertical: [
                "flex flex-col space-y-0"
            ]
        }
    }
});
const InfoGraphic = ({ description, direction, heading, headingSize, variant = "default", badge, isReverse = false, icon = null, iconHeight = 24, iconWidth = 24 })=>{
    const textContentVariant = variant === "summary" ? "summary" : "default";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: containerVariants({
            variant,
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)({
                "flex flex-col space-y-3": !!badge
            })
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)({
                    "flex items-center space-x-3": !!icon
                }),
                children: [
                    icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)("w-10 justify-center flex flex-shrink-0 self-stretch overflow-hidden items-center rounded-lg", "text-secondary-medium bg-brand-yellow-light dark:text-brand-yellow dark:bg-brand-yellow-dark"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_inlinesvg__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: icon,
                            height: iconHeight,
                            width: iconWidth
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: textContentContainerVariants({
                            direction,
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)({
                                "flex-col-reverse": isReverse && direction === "vertical",
                                "flex-row-reverse [&>p]:!mr-3": isReverse && direction === "horizontal"
                            })
                        }),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: headingVariants({
                                    size: headingSize,
                                    variant: textContentVariant
                                }),
                                children: heading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: paragraphVariants({
                                    variant: textContentVariant
                                }),
                                children: description
                            })
                        ]
                    })
                ]
            }),
            badge && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex rounded-lg justify-center py-1.5 bg-brand-yellow-light dark:bg-brand-yellow-dark",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs font-normal text-secondary-medium dark:text-brand-yellow",
                    children: badge
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;