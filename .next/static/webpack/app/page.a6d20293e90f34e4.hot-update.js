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

/***/ "(app-pages-browser)/./src/components/Products.tsx":
/*!*************************************!*\
  !*** ./src/components/Products.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"(app-pages-browser)/./src/components/Product.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/services/services */ \"(app-pages-browser)/./src/redux/services/services.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst INITIAL_LOAD = 10; // İlk açılışta gösterilecek ürün sayısı\nconst LOAD_MORE = 5; // Butona tıklandıkça yüklenecek ürün sayısı\nconst Products = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Products.useEffect\": ()=>{\n            // Ürünleri API'den almak için dispatch ediyoruz\n            dispatch((0,_redux_services_services__WEBPACK_IMPORTED_MODULE_3__.fetchProducts)());\n        }\n    }[\"Products.useEffect\"], []);\n    const allProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)({\n        \"Products.useSelector[allProducts]\": (state)=>state.products.products\n    }[\"Products.useSelector[allProducts]\"]);\n    const productsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)({\n        \"Products.useSelector[productsStatus]\": (state)=>state.products.status\n    }[\"Products.useSelector[productsStatus]\"]);\n    // Ürünleri sayfada göstermek için state tanımlıyoruz\n    const [visibleCount, setVisibleCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(INITIAL_LOAD);\n    // Tüm ürünlerin ilk açılışta gösterilecek olan kısmını alıyoruz useMemo ile\n    const visibleProducts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)({\n        \"Products.useMemo[visibleProducts]\": ()=>{\n            return allProducts.slice(0, visibleCount);\n        }\n    }[\"Products.useMemo[visibleProducts]\"], [\n        visibleCount,\n        allProducts\n    ]);\n    // Load More butonuna tıklandığında çalışacak fonksiyon\n    const handleLoadMore = ()=>{\n        if (visibleCount >= allProducts.length) {\n            alert(\"Daha fazla ürün yok!\");\n            return;\n        }\n        setVisibleCount((prevCount)=>prevCount + LOAD_MORE);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center w-full\",\n        children: [\n            productsStatus === \"loading\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[60vh] flex justify-center items-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl font-semibold text-center mt-6\",\n                    children: \"\\xdcr\\xfcnler y\\xfckleniyor...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            productsStatus !== \"loading\" && allProducts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[60vh] flex justify-center items-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl font-semibold text-center mt-6\",\n                    children: \"Filtrelemenize uygun \\xfcr\\xfcn bulunamadı.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined),\n            productsStatus !== \"loading\" && allProducts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full\",\n                        children: visibleProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLoadMore,\n                        className: \"mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50\",\n                        disabled: visibleCount >= allProducts.length,\n                        children: visibleCount >= allProducts.length ? \"Tüm Ürünler Yüklendi\" : \"Load More\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mert\\\\OneDrive\\\\Desktop\\\\e-commerce\\\\src\\\\components\\\\Products.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Products, \"Fm2TPt+eNsn6sKW8UfDnOpKyGLY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Products;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEM7QUFDVjtBQUNxQjtBQUNNO0FBQ2pCO0FBRTFDLE1BQU1PLGVBQWUsSUFBSSx3Q0FBd0M7QUFDakUsTUFBTUMsWUFBWSxHQUFHLDRDQUE0QztBQUVqRSxNQUFNQyxXQUFXOztJQUNmLE1BQU1DLFdBQVdKLHdEQUFXQTtJQUU1QkYsZ0RBQVNBOzhCQUFDO1lBQ1IsZ0RBQWdEO1lBQ2hETSxTQUFTTCx1RUFBYUE7UUFDeEI7NkJBQUcsRUFBRTtJQUVMLE1BQU1NLGNBQWNYLHdEQUFXQTs2Q0FDN0IsQ0FBQ1ksUUFBcUJBLE1BQU1DLFFBQVEsQ0FBQ0EsUUFBUTs7SUFHL0MsTUFBTUMsaUJBQWlCZCx3REFBV0E7Z0RBQ2hDLENBQUNZLFFBQXFCQSxNQUFNQyxRQUFRLENBQUNFLE1BQU07O0lBRzdDLHFEQUFxRDtJQUNyRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQ0s7SUFFakQsNEVBQTRFO0lBQzVFLE1BQU1XLGtCQUFrQmYsOENBQU9BOzZDQUFDO1lBQzlCLE9BQU9RLFlBQVlRLEtBQUssQ0FBQyxHQUFHSDtRQUM5Qjs0Q0FBRztRQUFDQTtRQUFjTDtLQUFZO0lBRTlCLHVEQUF1RDtJQUN2RCxNQUFNUyxpQkFBaUI7UUFDckIsSUFBSUosZ0JBQWdCTCxZQUFZVSxNQUFNLEVBQUU7WUFDdENDLE1BQU07WUFDTjtRQUNGO1FBQ0FMLGdCQUFnQixDQUFDTSxZQUFjQSxZQUFZZjtJQUM3QztJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTs7WUFFWlgsbUJBQW1CLDJCQUNsQiw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFFRCxXQUFVOzhCQUEwQzs7Ozs7Ozs7Ozs7WUFPMURYLG1CQUFtQixhQUFhSCxZQUFZVSxNQUFNLEtBQUssbUJBQ3RELDhEQUFDRztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUVELFdBQVU7OEJBQTBDOzs7Ozs7Ozs7OztZQU8xRFgsbUJBQW1CLGFBQWFILFlBQVlVLE1BQU0sR0FBRyxtQkFDcEQ7O2tDQUNFLDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FDWlAsZ0JBQWdCUyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ3BCLDhEQUFDM0IsZ0RBQU9BO2dDQUFrQjJCLFNBQVNBOytCQUFyQkEsUUFBUUMsRUFBRTs7Ozs7Ozs7OztrQ0FLNUIsOERBQUNDO3dCQUNDQyxTQUFTWDt3QkFDVEssV0FBVTt3QkFDVk8sVUFBVWhCLGdCQUFnQkwsWUFBWVUsTUFBTTtrQ0FFM0NMLGdCQUFnQkwsWUFBWVUsTUFBTSxHQUMvQix5QkFDQTs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0E1RU1aOztRQUNhSCxvREFBV0E7UUFPUk4sb0RBQVdBO1FBSVJBLG9EQUFXQTs7O0tBWjlCUztBQThFTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtZXJ0XFxPbmVEcml2ZVxcRGVza3RvcFxcZS1jb21tZXJjZVxcc3JjXFxjb21wb25lbnRzXFxQcm9kdWN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiQC9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi9yZWR1eC9zZXJ2aWNlcy9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgSU5JVElBTF9MT0FEID0gMTA7IC8vIMSwbGsgYcOnxLFsxLHFn3RhIGfDtnN0ZXJpbGVjZWsgw7xyw7xuIHNhecSxc8SxXHJcbmNvbnN0IExPQURfTU9SRSA9IDU7IC8vIEJ1dG9uYSB0xLFrbGFuZMSxa8OnYSB5w7xrbGVuZWNlayDDvHLDvG4gc2F5xLFzxLFcclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDDnHLDvG5sZXJpIEFQSSdkZW4gYWxtYWsgacOnaW4gZGlzcGF0Y2ggZWRpeW9ydXpcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhbGxQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzLnByb2R1Y3RzXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdHNTdGF0dXMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cy5zdGF0dXNcclxuICApO1xyXG5cclxuICAvLyDDnHLDvG5sZXJpIHNheWZhZGEgZ8O2c3Rlcm1layBpw6dpbiBzdGF0ZSB0YW7EsW1sxLF5b3J1elxyXG4gIGNvbnN0IFt2aXNpYmxlQ291bnQsIHNldFZpc2libGVDb3VudF0gPSB1c2VTdGF0ZShJTklUSUFMX0xPQUQpO1xyXG5cclxuICAvLyBUw7xtIMO8csO8bmxlcmluIGlsayBhw6fEsWzEscWfdGEgZ8O2c3RlcmlsZWNlayBvbGFuIGvEsXNtxLFuxLEgYWzEsXlvcnV6IHVzZU1lbW8gaWxlXHJcbiAgY29uc3QgdmlzaWJsZVByb2R1Y3RzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gYWxsUHJvZHVjdHMuc2xpY2UoMCwgdmlzaWJsZUNvdW50KTtcclxuICB9LCBbdmlzaWJsZUNvdW50LCBhbGxQcm9kdWN0c10pO1xyXG5cclxuICAvLyBMb2FkIE1vcmUgYnV0b251bmEgdMSxa2xhbmTEscSfxLFuZGEgw6dhbMSxxZ9hY2FrIGZvbmtzaXlvblxyXG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgaWYgKHZpc2libGVDb3VudCA+PSBhbGxQcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgYWxlcnQoXCJEYWhhIGZhemxhIMO8csO8biB5b2shXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRWaXNpYmxlQ291bnQoKHByZXZDb3VudCkgPT4gcHJldkNvdW50ICsgTE9BRF9NT1JFKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgey8qIFnDvGtsZW5tZSBkdXJ1bXUga29udHJvbMO8ICovfVxyXG4gICAgICB7cHJvZHVjdHNTdGF0dXMgPT09IFwibG9hZGluZ1wiICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs2MHZoXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICDDnHLDvG5sZXIgecO8a2xlbml5b3IuLi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBZw7xrbGVubWUgZHVydW11IGJpdG1pxZ9zZSB2ZSDDvHLDvG4geW9rc2EgKi99XHJcbiAgICAgIHtwcm9kdWN0c1N0YXR1cyAhPT0gXCJsb2FkaW5nXCIgJiYgYWxsUHJvZHVjdHMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs2MHZoXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICBGaWx0cmVsZW1lbml6ZSB1eWd1biDDvHLDvG4gYnVsdW5hbWFkxLEuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogWcO8a2xlbm1lIGR1cnVtdSBiaXRtacWfc2UgdmUgw7xyw7xubGVyIHZhcnNhICovfVxyXG4gICAgICB7cHJvZHVjdHNTdGF0dXMgIT09IFwibG9hZGluZ1wiICYmIGFsbFByb2R1Y3RzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgMnhsOmdyaWQtY29scy01IGdhcC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICB7dmlzaWJsZVByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogTG9hZCBNb3JlIGJ1dG9udSAqL31cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9hZE1vcmV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgcHgtNiBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCB0cmFuc2l0aW9uIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dmlzaWJsZUNvdW50ID49IGFsbFByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Zpc2libGVDb3VudCA+PSBhbGxQcm9kdWN0cy5sZW5ndGhcclxuICAgICAgICAgICAgICA/IFwiVMO8bSDDnHLDvG5sZXIgWcO8a2xlbmRpXCJcclxuICAgICAgICAgICAgICA6IFwiTG9hZCBNb3JlXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiUHJvZHVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZUVmZmVjdCIsImZldGNoUHJvZHVjdHMiLCJ1c2VEaXNwYXRjaCIsIklOSVRJQUxfTE9BRCIsIkxPQURfTU9SRSIsIlByb2R1Y3RzIiwiZGlzcGF0Y2giLCJhbGxQcm9kdWN0cyIsInN0YXRlIiwicHJvZHVjdHMiLCJwcm9kdWN0c1N0YXR1cyIsInN0YXR1cyIsInZpc2libGVDb3VudCIsInNldFZpc2libGVDb3VudCIsInZpc2libGVQcm9kdWN0cyIsInNsaWNlIiwiaGFuZGxlTG9hZE1vcmUiLCJsZW5ndGgiLCJhbGVydCIsInByZXZDb3VudCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Products.tsx\n"));

/***/ })

});