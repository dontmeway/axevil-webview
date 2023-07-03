"use strict";
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 2150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BodyText: () => (/* binding */ BodyText)
/* harmony export */ });
/* harmony import */ var cva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3766);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3831);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cva__WEBPACK_IMPORTED_MODULE_0__]);
cva__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const containerVariants = (0,cva__WEBPACK_IMPORTED_MODULE_0__.cva)([], {
    variants: {
        variant: {
            default: [
                "[&>svg]:text-secondary-light [&>svg]:dark:text-brand-yellow"
            ],
            black: [
                "bg-card-light dark:bg-card-dark p-5 rounded-2xl bg-cover bg-no-repeat",
                "border border-body-text-light dark:border-body-text-dark",
                "[&>svg]:text-secondary-light [&>svg]:dark:text-brand-yellow"
            ],
            yellow: [
                "bg-brand-yellow p-5 rounded-2xl",
                "[&>svg]:text-neutral-100"
            ],
            "yellow-dark": [
                "bg-brand-yellow-light dark:bg-brand-yellow-dark p-5 rounded-2xl",
                "[&>svg]:text-secondary-medium [&>svg]:dark:text-brand-yellow"
            ]
        },
        direction: {
            horizontal: [
                "flex space-x-3 items-start"
            ],
            vertical: [
                "flex flex-col space-y-3"
            ]
        }
    }
});
const textVariants = (0,cva__WEBPACK_IMPORTED_MODULE_0__.cva)([
    "builder-body-text builder-body-text-light dark:builder-body-text-dark",
    "[&>*]:font-mazzard-h [&>p]:text-base [&>p]:font-normal",
    "[&>h1]:mb-2 [&>h2]:mb-2 [&>h3]:mb-2",
    "[&>h1]:text-2xl [&>h2]:text-lg [&>h2]:leading-6 [&>h3]:text-base",
    "[&>h1]:font-medium [&>h2]:font-medium [&>h3]:font-medium",
    "[&>p>a]:text-secondary-medium [&>p>a]:dark:text-brand-yellow",
    "[&>p>strong]:font-medium"
], {
    variants: {
        variant: {
            default: [
                "[&>*]:text-neutral-75 [&>*]:dark:text-neutral-15 [&>h1]:dark:text-white [&>h2]:dark:text-white [&>h3]:dark:text-white"
            ],
            black: [
                "[&>*]:text-neutral-75 [&>*]:dark:text-neutral-15 [&>h1]:dark:text-white [&>h2]:dark:text-white [&>h3]:dark:text-white"
            ],
            yellow: [
                "[&>*]:text-neutral-100 [&>p>a]:text-secondary-medium [&>p>a]:dark:text-secondary-medium"
            ],
            "yellow-dark": [
                "[&>*]:text-secondary-medium [&>*]:dark:text-brand-yellow"
            ]
        }
    }
});
const BodyText = ({ content = "Definition Lists: Lists used to define terms and their meanings, typically consisting of a term and its definition.", variant = "default", direction = "horizontal", icon = null, iconHeight = 24, iconWidth = 24 })=>{
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: containerVariants({
            variant,
            direction
        }),
        children: [
            icon ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)((react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: icon,
                height: iconHeight,
                width: iconWidth,
                key: 1
            }) : null,
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
                dangerouslySetInnerHTML: {
                    __html: content
                },
                className: textVariants({
                    variant
                }),
                key: 2
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;