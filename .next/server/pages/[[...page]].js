"use strict";
(() => {
var exports = {};
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 3658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_5B_5B_page_5D_5D_absolutePagePath_private_next_pages_2F_5B_5B_page_5D_5D_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2F_5B_5B_page_5D_5D_absolutePagePath_private_next_pages_2F_5B_5B_page_5D_5D_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_5B_5B_page_5D_5D_absolutePagePath_private_next_pages_2F_5B_5B_page_5D_5D_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/[[...page]].tsx
var _page_namespaceObject = {};
__webpack_require__.r(_page_namespaceObject);
__webpack_require__.d(_page_namespaceObject, {
  "default": () => (Page),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@builder.io/react"
var react_ = __webpack_require__(2602);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/shared/lib.tsx
var lib = __webpack_require__(4743);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/shared/ui/grid/index.tsx
const gridDefaultBlocks = [
    {
        "@type": "@builder.io/sdk:Element",
        responsiveStyles: {
            large: {
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                flexShrink: "0",
                position: "relative",
                overflow: "hidden",
                minHeight: "20px",
                width: "100%"
            }
        },
        component: {
            name: "Infoblock",
            options: {
                heading: "Heading",
                description: "Description"
            }
        }
    }
];

;// CONCATENATED MODULE: ./src/shared/ui/registration.ts



react_.Builder.registerComponent(dynamic_default()(()=>__webpack_require__.e(/* import() */ 515).then(__webpack_require__.bind(__webpack_require__, 9515)).then((m)=>({
            default: m.Heading
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./heading"
        ]
    }
}), {
    name: "Heading",
    inputs: [
        {
            name: "content",
            type: "text",
            defaultValue: "Heading"
        },
        {
            name: "size",
            type: "text",
            enum: [
                "sm",
                "md",
                "lg"
            ],
            defaultValue: "sm"
        }
    ]
});
react_.Builder.registerComponent(dynamic_default()(()=>__webpack_require__.e(/* import() */ 150).then(__webpack_require__.bind(__webpack_require__, 2150)).then((m)=>({
            default: m.BodyText
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./body-text"
        ]
    }
}), {
    name: "BodyText",
    inputs: [
        {
            name: "content",
            type: "richText"
        },
        {
            name: "variant",
            type: "text",
            enum: [
                "default",
                "black",
                "yellow",
                "yellow-dark"
            ],
            defaultValue: "default"
        },
        {
            name: "icon",
            type: "file",
            allowedFileTypes: [
                "svg"
            ]
        },
        {
            name: "direction",
            type: "text",
            enum: [
                "horizontal",
                "vertical"
            ],
            defaultValue: "horizontal"
        },
        {
            name: "iconHeight",
            type: "number",
            defaultValue: 20
        },
        {
            name: "iconWidth",
            type: "number",
            defaultValue: 20
        }
    ]
});
react_.Builder.registerComponent(dynamic_default()(()=>__webpack_require__.e(/* import() */ 153).then(__webpack_require__.bind(__webpack_require__, 9153)).then((m)=>({
            default: m.InfoGraphic
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./infographic"
        ]
    }
}), {
    name: "Infoblock",
    inputs: [
        {
            name: "heading",
            type: "text",
            defaultValue: "Heading"
        },
        {
            name: "description",
            type: "longText",
            defaultValue: "Description"
        },
        {
            name: "badge",
            type: "text"
        },
        {
            name: "variant",
            type: "text",
            enum: [
                "default",
                "filled",
                "summary"
            ],
            defaultValue: "default"
        },
        {
            name: "direction",
            type: "text",
            enum: [
                "horizontal",
                "vertical"
            ],
            defaultValue: "vertical"
        },
        {
            name: "headingSize",
            type: "text",
            enum: [
                "sm",
                "md",
                "lg",
                "xl"
            ],
            defaultValue: "sm"
        },
        {
            name: "isReverse",
            type: "boolean",
            defaultValue: false
        },
        {
            name: "icon",
            type: "file",
            allowedFileTypes: [
                "svg"
            ]
        },
        {
            name: "iconHeight",
            type: "number",
            defaultValue: 20
        },
        {
            name: "iconWidth",
            type: "number",
            defaultValue: 20
        }
    ]
});
react_.Builder.registerComponent(react_.Columns, {
    name: "Grid",
    inputs: [
        {
            name: "columns",
            type: "array",
            broadcast: true,
            subFields: [
                {
                    name: "blocks",
                    type: "array",
                    hideFromUI: true
                },
                {
                    name: "width",
                    type: "number",
                    hideFromUI: true,
                    helperText: "Width %, e.g. set to 50 to fill half of the space"
                },
                {
                    name: "link",
                    type: "url",
                    helperText: "Optionally set a URL that clicking this column will link to"
                }
            ],
            defaultValue: [
                {
                    blocks: gridDefaultBlocks
                },
                {
                    blocks: gridDefaultBlocks
                }
            ],
            onChange: (options)=>{
                function clearWidths() {
                    options.columns.forEach((col)=>{
                        col.delete("width");
                    });
                }
                const columns = options.get("columns");
                if (Array.isArray(columns)) {
                    const containsColumnWithWidth = !!columns.find((col)=>col.get("width"));
                    if (containsColumnWithWidth) {
                        const containsColumnWithoutWidth = !!columns.find((col)=>!col.get("width"));
                        if (containsColumnWithoutWidth) {
                            clearWidths();
                        } else {
                            const sumWidths = columns.reduce((memo, col)=>{
                                return memo + col.get("width");
                            }, 0);
                            const widthsDontAddUp = sumWidths !== 100;
                            if (widthsDontAddUp) {
                                clearWidths();
                            }
                        }
                    }
                }
            }
        },
        {
            name: "space",
            type: "number",
            defaultValue: 8,
            helperText: "Size of gap between columns",
            advanced: true
        },
        {
            name: "stackColumnsAt",
            type: "string",
            defaultValue: "never",
            helperText: "Convert horizontal columns to vertical at what device size",
            enum: [
                "tablet",
                "mobile",
                "never"
            ],
            advanced: true
        },
        {
            name: "reverseColumnsWhenStacked",
            type: "boolean",
            defaultValue: false,
            helperText: "When stacking columns for mobile devices, reverse the ordering",
            advanced: true
        }
    ]
});
react_.Builder.registerComponent(dynamic_default()(()=>__webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(__webpack_require__, 7010)).then((m)=>({
            default: m.Banner
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./banner"
        ]
    }
}), {
    name: "Banner",
    inputs: [
        {
            name: "backgroundImage",
            type: "file",
            allowedFileTypes: [
                "jpeg",
                "jpg",
                "png"
            ],
            defaultValue: null
        },
        {
            name: "content",
            type: "string",
            defaultValue: "Banner"
        },
        {
            name: "link",
            type: "link"
        },
        {
            name: "backgroundType",
            type: "text",
            enum: [
                "default",
                "accent"
            ],
            defaultValue: "default"
        },
        {
            name: "icon",
            type: "file",
            allowedFileTypes: [
                "svg"
            ]
        },
        {
            name: "iconHeight",
            type: "number",
            defaultValue: 20
        },
        {
            name: "iconWidth",
            type: "number",
            defaultValue: 20
        }
    ]
});
react_.Builder.registerComponent(dynamic_default()(()=>__webpack_require__.e(/* import() */ 274).then(__webpack_require__.bind(__webpack_require__, 7274)).then((m)=>({
            default: m.BottomSheet
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./bottom-sheet"
        ]
    }
}), {
    defaultStyles: {
        margin: "0px"
    },
    name: "BottomSheet",
    inputs: [
        {
            name: "id",
            type: "string",
            required: true
        }
    ],
    defaultChildren: [
        {
            "@type": "@builder.io/sdk:Element",
            component: {
                name: "Text",
                options: {
                    text: "Bottom sheet default content!"
                }
            }
        }
    ]
});
react_.Builder.registerComponent(dynamic_default()(()=>__webpack_require__.e(/* import() */ 250).then(__webpack_require__.bind(__webpack_require__, 250)).then((m)=>({
            default: m.Box
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./box"
        ]
    }
}), {
    defaultStyles: {
        margin: "0px"
    },
    name: "BoxView",
    defaultChildren: [
        {
            "@type": "@builder.io/sdk:Element",
            component: {
                name: "Text",
                options: {
                    text: "Box content"
                }
            }
        }
    ]
});
react_.Builder.registerComponent(dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(636), __webpack_require__.e(675), __webpack_require__.e(651)]).then(__webpack_require__.bind(__webpack_require__, 5651)).then((m)=>({
            default: m.Summary
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./summary"
        ]
    }
}), {
    name: "Summary",
    defaultStyles: {
        margin: "0px"
    },
    defaultChildren: [
        {
            "@type": "@builder.io/sdk:Element",
            component: {
                name: "Text",
                options: {
                    text: "Summary default content!"
                }
            }
        }
    ],
    inputs: [
        {
            name: "logo",
            type: "file",
            allowedFileTypes: [
                "jpeg",
                "jpg",
                "png"
            ]
        },
        {
            name: "link",
            type: "link"
        },
        {
            name: "linkIcon",
            type: "file",
            allowedFileTypes: [
                "svg"
            ]
        },
        {
            name: "backgroundImage",
            type: "file",
            allowedFileTypes: [
                "jpeg",
                "jpg",
                "png"
            ]
        },
        {
            name: "gradient",
            type: "string"
        },
        {
            name: "linIconHeight",
            type: "number",
            defaultValue: 20
        },
        {
            name: "linIconWidth",
            type: "number",
            defaultValue: 20
        }
    ]
});
react_.Builder.registerComponent(dynamic_default()(()=>__webpack_require__.e(/* import() */ 249).then(__webpack_require__.bind(__webpack_require__, 8250)).then((m)=>({
            default: m.DropDown
        })), {
    loadableGenerated: {
        modules: [
            "../shared/ui/registration.ts -> " + "./dropdown"
        ]
    }
}), {
    name: "DropDown",
    inputs: [
        {
            name: "title",
            type: "string",
            defaultValue: "Title"
        },
        {
            name: "initialOpen",
            type: "boolean",
            defaultValue: false
        },
        {
            name: "emoji",
            type: "string",
            defaultValue: "\uD83D\uDC4B"
        }
    ],
    defaultChildren: [
        {
            "@type": "@builder.io/sdk:Element",
            component: {
                name: "Text",
                options: {
                    text: "DropDown default content!"
                }
            }
        }
    ]
});

;// CONCATENATED MODULE: ./src/pages/[[...page]].tsx






const API_KEY = "ffbb056c7c114e4080317099b533d26f";
const MODEL_NAME = "page" ?? 0;
if (!API_KEY) {
    throw new Error(`No Builder.io API key found as environment variable: ${API_KEY}`);
}
react_.builder.init(API_KEY);
const getStaticProps = async ({ params })=>{
    const urlPath = "/" + ((params?.page)?.join("/") || "");
    const page = await react_.builder.get(MODEL_NAME, {
        userAttributes: {
            urlPath
        }
    }).toPromise();
    return {
        props: {
            page: page || null
        },
        revalidate: 5
    };
};
async function getStaticPaths() {
    const pages = await react_.builder.getAll(MODEL_NAME, {
        fields: "data.url",
        options: {
            noTargeting: true
        }
    });
    return {
        paths: pages.map((page)=>`${page.data?.url}`).filter((url)=>url !== "/"),
        fallback: "blocking"
    };
}
function Page({ page }) {
    const isPreviewing = (0,react_.useIsPreviewing)();
    const ref = (0,lib/* useResize */.aB)(page);
    (0,lib/* useBindAnchorHandlers */.HS)([
        page
    ]);
    if (!page && !isPreviewing) {
        return /*#__PURE__*/ jsx_runtime.jsx((error_default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: page?.data?.title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(lib/* AppContextProvider */.iz, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full h-full bg-white text-black dark:bg-[#131416] dark:text-white overflow-auto px-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(ToggleThemeButton, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(react_.BuilderComponent, {
                            ref: ref,
                            model: MODEL_NAME,
                            content: page || undefined
                        })
                    ]
                })
            })
        ]
    });
}
const ToggleThemeButton = ()=>{
    const isPreviewing = (0,react_.useIsPreviewing)();
    const isToggleButtonVisible = isPreviewing || "production" === "development";
    if (!isToggleButtonVisible) return null;
    const handleClick = ()=>{
        const html = document.querySelector("html");
        if (!html) return;
        html.classList.contains("dark") ? html.classList.remove("dark") : html.classList.add("dark");
    };
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        className: "rounded bg-gray-500 text-white dark:bg-gray-50 dark:text-black px-2 py-1 text-sm",
        type: "button",
        onClick: handleClick,
        children: "Toggle Theme"
    });
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F%5B%5B...page%5D%5D&absolutePagePath=private-next-pages%2F%5B%5B...page%5D%5D.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_5B_5B_page_5D_5D_absolutePagePath_private_next_pages_2F_5B_5B_page_5D_5D_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_page_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_5B_5B_page_5D_5D_absolutePagePath_private_next_pages_2F_5B_5B_page_5D_5D_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_page_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2F_5B_5B_page_5D_5D_absolutePagePath_private_next_pages_2F_5B_5B_page_5D_5D_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_page_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_page_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_page_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_page_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_page_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_page_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_page_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_page_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_page_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/[[...page]]","pathname":"/[[...page]]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _page_namespaceObject })
        
        
    

/***/ }),

/***/ 4743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HS: () => (/* binding */ useBindAnchorHandlers),
/* harmony export */   Ow: () => (/* binding */ useAppHasBottomSheet),
/* harmony export */   aB: () => (/* binding */ useResize),
/* harmony export */   bp: () => (/* binding */ useAppContext),
/* harmony export */   iz: () => (/* binding */ AppContextProvider)
/* harmony export */ });
/* unused harmony export AppContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react-refresh/only-export-components */ 

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
const useAppHasBottomSheet = ()=>useAppContext()?.hasBottomSheet ?? false;
const AppContextProvider = ({ children })=>{
    const [bottomSheetId, setBottomSheetId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let ignore = false;
        const injected = injectHash();
        if (!ignore) {
            setBottomSheetId(injected["show-bottomsheet"] ?? null);
        }
        return ()=>{
            ignore = true;
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            bottomSheetId,
            hasBottomSheet: bottomSheetId !== null
        },
        children: children
    });
};
function useResize(...deps) {
    const [isFlutterAppReady, setIsFlutterAppReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handlerName = "handler";
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((entries)=>{
        const entry = entries[0];
        if (entry) {
            const size = entry.contentBoxSize[0]?.blockSize ?? 0;
            const record = {
                action: "resize_webview",
                height: size?.toString() ?? "0"
            };
            if (!isFlutterAppReady) {
                console.log(JSON.stringify(record, null, 2));
            // return
            }
            const flutterInAppWebView = window?.flutter_inappwebview;
            flutterInAppWebView?.callHandler(handlerName, record);
        }
    }, [
        isFlutterAppReady
    ]);
    const debouncedHandleResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(debounce(handleResize, 500), [
        handleResize
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = ()=>setIsFlutterAppReady(true);
        window.addEventListener("flutterInAppWebViewPlatformReady", handler);
        return ()=>{
            window.removeEventListener("flutterInAppWebViewPlatformReady", handler);
        };
    }, [
        ...deps
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new ResizeObserver(debouncedHandleResize);
        if (ref.current?.ref) {
            observer.observe(ref.current?.ref);
        }
        return ()=>{
            observer.disconnect();
        };
    }, [
        ...deps
    ]);
    return ref;
}
function useBindAnchorHandlers(deps) {
    const [isFlutterAppReady, setIsFlutterAppReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handlerName = "handler";
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ev)=>{
        const { href } = ev.currentTarget;
        const query = href.split("?").at(-1);
        const params = new URLSearchParams(query);
        if (params.has("action")) {
            ev.preventDefault();
            const action = params.get("action");
            params.delete("action");
            const record = {
                action,
                params: Array.from(params.entries()).reduce((acc, [key, value])=>{
                    if (action === "open_bottom_sheet") {
                        acc.webview_url = `${window.location.pathname}#show-bottomsheet-${value}`;
                    } else {
                        acc[key] = value;
                    }
                    return acc;
                }, {})
            };
            if (!isFlutterAppReady) {
                console.log(JSON.stringify(record, null, 2));
            // return
            }
            const flutterInAppWebView = window?.flutter_inappwebview;
            flutterInAppWebView?.callHandler(handlerName, record);
        }
    }, [
        isFlutterAppReady
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = ()=>setIsFlutterAppReady(true);
        window.addEventListener("flutterInAppWebViewPlatformReady", handler);
        return ()=>{
            window.removeEventListener("flutterInAppWebViewPlatformReady", handler);
        };
    }, [
        ...deps
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const anchors = document.querySelectorAll("a");
        anchors.forEach((anchor)=>{
            anchor.addEventListener("click", handleClick);
        });
        return ()=>{
            anchors.forEach((anchor)=>{
                anchor.removeEventListener("click", handleClick);
            });
        };
    }, [
        handleClick,
        ...deps
    ]);
}
const knownHashKeys = [
    "show-bottomsheet"
];
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = ()=>{
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
function injectHash() {
    const hash = window.location.hash.slice(1);
    const injected = {};
    if (!hash) return {};
    knownHashKeys.forEach((key)=>{
        const [_, found] = hash.split(key);
        for(let i = 0; i < (found?.length ?? 0); i++){
            const char = found?.charAt(i);
            if (typeof +char === "number" && !isNaN(+char)) {
                injected[key] = (injected[key] ?? "") + char;
            }
            const next = found?.charAt(i + 1);
            if (typeof +next !== "number" || isNaN(+next)) {
                break;
            }
        }
    });
    return injected;
}


/***/ }),

/***/ 2602:
/***/ ((module) => {

module.exports = require("@builder.io/react");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3831:
/***/ ((module) => {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ 4973:
/***/ ((module) => {

module.exports = import("@radix-ui/react-collapsible");;

/***/ }),

/***/ 3766:
/***/ ((module) => {

module.exports = import("cva");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,152], () => (__webpack_exec__(3658)));
module.exports = __webpack_exports__;

})();