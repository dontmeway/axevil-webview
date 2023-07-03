"use strict";
exports.id = 249;
exports.ids = [249];
exports.modules = {

/***/ 3359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* reexport */ chevron_up)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/shared/assets/icons/chevron-up.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 8,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    stroke: "#797B80",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m11 6.5-5-5-5 5"
  })));
};
/* harmony default export */ const chevron_up = (SvgChevronUp);
;// CONCATENATED MODULE: ./src/shared/assets/icons/index.ts



/***/ }),

/***/ 8250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDown: () => (/* binding */ DropDown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4973);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2602);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_assets_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__]);
_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DropDownView = ({ children, emoji, title, initialOpen = false })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialOpen);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOpen(initialOpen);
    }, [
        initialOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__.Root, {
        className: "w-full",
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__.Trigger, {
                className: "flex items-center justify-between px-4 py-5 rounded-xl bg-dropdown-light dark:bg-dropdown-dark w-full border border-gray-300 dark:border-gray-800",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-3 mr-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex-shrink-0",
                                children: emoji
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-mazzard-h text-base text-neutral-100 dark:text-white text-left",
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_assets_icons__WEBPACK_IMPORTED_MODULE_5__/* .IconChevronUp */ .y, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("transition-all flex-shrink-0", {
                            "transform rotate-180": !open
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__.Content, {
                className: "CollapsibleContent",
                children: children
            })
        ]
    });
};
const DropDown = (0,_builder_io_react__WEBPACK_IMPORTED_MODULE_4__.withChildren)(DropDownView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;