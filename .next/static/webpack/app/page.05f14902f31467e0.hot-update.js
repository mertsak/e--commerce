"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Product.tsx":
/*!************************************!*\
  !*** ./src/components/Product.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_productsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/productsSlice */ \"(app-pages-browser)/./src/redux/productsSlice.ts\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Product = (param)=>{\n    let { product } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    // Sepete ürün eklemek için bir fonksiyon oluşturuyoruz.\n    const handleAddBasket = (product)=>{\n        dispatch((0,_redux_productsSlice__WEBPACK_IMPORTED_MODULE_2__.addToBasket)(product));\n        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({\n            title: \"Added to cart!\",\n            text: \"\".concat(product.name, \" added to cart.\"),\n            icon: \"success\"\n        });\n    };\n    console.log(product);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full min-h-[400px] flex flex-col justify-center items-center border border-gray-300 dark:border-black bg-white shadow-sm rounded-md py-2 hover:shadow-lg transition-shadow duration-200 overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-1/2 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: product.image || \"/default-image.png\",\n                    alt: product.name,\n                    className: \"object-contain w-full h-full max-w-[200px] max-h-[200px]\",\n                    layout: \"intrinsic\",\n                    width: 200,\n                    height: 200,\n                    loading: \"lazy\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-1/2 p-3 flex flex-col justify-between items-start gap-2 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base font-medium line-clamp-1\",\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-500 line-clamp-1\",\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-start flex-col gap-2 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-bold text-gray-700\",\n                                children: [\n                                    \"Basket Price: $\",\n                                    product.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddBasket(product),\n                                className: \"bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors duration-200 w-full flex justify-center items-center\",\n                                children: \"Add to cart\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Product.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNXO0FBQ1U7QUFDckI7QUFNL0IsTUFBTUksVUFBa0M7UUFBQyxFQUFFQyxPQUFPLEVBQUU7O0lBQ2xELE1BQU1DLFdBQVdMLHdEQUFXQTtJQUU1Qix3REFBd0Q7SUFDeEQsTUFBTU0sa0JBQWtCLENBQUNGO1FBQ3ZCQyxTQUFTSixpRUFBV0EsQ0FBQ0c7UUFFckJGLHVEQUFTLENBQUM7WUFDUk0sT0FBTztZQUNQQyxNQUFNLEdBQWdCLE9BQWJMLFFBQVFNLElBQUksRUFBQztZQUN0QkMsTUFBTTtRQUNSO0lBQ0Y7SUFFQUMsUUFBUUMsR0FBRyxDQUFDVDtJQUVaLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNoQixrREFBS0E7b0JBQ0ppQixLQUFLWixRQUFRYSxLQUFLLElBQUk7b0JBQ3RCQyxLQUFLZCxRQUFRTSxJQUFJO29CQUNqQkssV0FBVTtvQkFDVkksUUFBTztvQkFDUEMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsU0FBUTs7Ozs7Ozs7Ozs7MEJBS1osOERBQUNSO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQXNDWCxRQUFRTSxJQUFJOzs7Ozs7a0NBQy9ELDhEQUFDYTt3QkFBRVIsV0FBVTtrQ0FDVlgsUUFBUW9CLFdBQVc7Ozs7OztrQ0FHdEIsOERBQUNWO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUVSLFdBQVU7O29DQUFrQztvQ0FDN0JYLFFBQVFxQixLQUFLOzs7Ozs7OzBDQUUvQiw4REFBQ0M7Z0NBQ0NDLFNBQVMsSUFBTXJCLGdCQUFnQkY7Z0NBQy9CVyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXBETVo7O1FBQ2FILG9EQUFXQTs7O0tBRHhCRztBQXNETixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtZXJ0XFxPbmVEcml2ZVxcRGVza3RvcFxcZS1jb21tZXJjZVxcc3JjXFxjb21wb25lbnRzXFxQcm9kdWN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCJAL3JlZHV4L3Byb2R1Y3RzU2xpY2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0IH0gZnJvbSBcIkAvcmVkdXgvcHJvZHVjdHNTbGljZVwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0UHJvcHMge1xyXG4gIHByb2R1Y3Q6IElQcm9kdWN0O1xyXG59XHJcblxyXG5jb25zdCBQcm9kdWN0OiBSZWFjdC5GQzxQcm9kdWN0UHJvcHM+ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyBTZXBldGUgw7xyw7xuIGVrbGVtZWsgacOnaW4gYmlyIGZvbmtzaXlvbiBvbHXFn3R1cnV5b3J1ei5cclxuICBjb25zdCBoYW5kbGVBZGRCYXNrZXQgPSAocHJvZHVjdDogSVByb2R1Y3QpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZFRvQmFza2V0KHByb2R1Y3QpKTtcclxuXHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCJBZGRlZCB0byBjYXJ0IVwiLFxyXG4gICAgICB0ZXh0OiBgJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIGNhcnQuYCxcclxuICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBtaW4taC1bNDAwcHhdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZGFyazpib3JkZXItYmxhY2sgYmctd2hpdGUgc2hhZG93LXNtIHJvdW5kZWQtbWQgcHktMiBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMjAwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICB7Lyogw5xyw7xuIHJlc21pICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTEvMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlIHx8IFwiL2RlZmF1bHQtaW1hZ2UucG5nXCJ9XHJcbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIHctZnVsbCBoLWZ1bGwgbWF4LXctWzIwMHB4XSBtYXgtaC1bMjAwcHhdXCJcclxuICAgICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Lyogw5xyw7xuIGJpbGdpbGVyaSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgcC0zIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IGdhcC0yIG10LTRcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gbGluZS1jbGFtcC0xXCI+e3Byb2R1Y3QubmFtZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGxpbmUtY2xhbXAtMVwiPlxyXG4gICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IGZsZXgtY29sIGdhcC0yIHctZnVsbFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICBCYXNrZXQgUHJpY2U6ICR7cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkQmFza2V0KHByb2R1Y3QpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTEgcHgtMyByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgdG8gY2FydFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZURpc3BhdGNoIiwiYWRkVG9CYXNrZXQiLCJTd2FsIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJkaXNwYXRjaCIsImhhbmRsZUFkZEJhc2tldCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJuYW1lIiwiaWNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0IiwibG9hZGluZyIsInAiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Product.tsx\n"));

/***/ })

});