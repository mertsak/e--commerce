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

/***/ "(app-pages-browser)/./src/redux/productsSlice.ts":
/*!************************************!*\
  !*** ./src/redux/productsSlice.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToBasket: () => (/* binding */ addToBasket),\n/* harmony export */   clearBasket: () => (/* binding */ clearBasket),\n/* harmony export */   decrementQuantity: () => (/* binding */ decrementQuantity),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deleteToBasket: () => (/* binding */ deleteToBasket),\n/* harmony export */   filterProducts: () => (/* binding */ filterProducts),\n/* harmony export */   incrementQuantity: () => (/* binding */ incrementQuantity),\n/* harmony export */   searchProducts: () => (/* binding */ searchProducts),\n/* harmony export */   setBasketProducts: () => (/* binding */ setBasketProducts)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ \"(app-pages-browser)/./src/redux/services/services.js\");\n// store/slices/counterSlice.ts\n\n\nconst initialState = {\n    products: [],\n    allProducts: [],\n    basketProducts: [],\n    totalAmount: 0,\n    status: \"idle\",\n    error: null\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState,\n    reducers: {\n        // State'i güncelleyen fonksiyonları tanımlıyoruz\n        setBasketProducts: (state, action)=>{\n            state.basketProducts = action.payload;\n            state.totalAmount = action.payload.reduce((acc, product)=>{\n                var _product_quantity;\n                return acc + product.price * ((_product_quantity = product.quantity) !== null && _product_quantity !== void 0 ? _product_quantity : 0);\n            }, 0);\n        },\n        // Sepete ürün ekleyen fonksiyon\n        addToBasket: (state, action)=>{\n            const existingProduct = state.basketProducts.find((product)=>product.id === action.payload.id);\n            if (existingProduct) {\n                if (existingProduct.quantity !== undefined) {\n                    existingProduct.quantity += 1;\n                }\n            } else {\n                state.basketProducts = [\n                    ...state.basketProducts,\n                    {\n                        ...action.payload,\n                        quantity: 1\n                    }\n                ];\n            }\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Ürün adedini artıran fonksiyon\n        incrementQuantity: (state, action)=>{\n            const existingProduct = state.basketProducts.find((product)=>product.id === action.payload.id);\n            if (existingProduct) {\n                if (existingProduct.quantity !== undefined) {\n                    existingProduct.quantity += 1;\n                }\n            }\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Ürün adedini azaltan fonksiyon\n        decrementQuantity: (state, action)=>{\n            const existingProduct = state.basketProducts.find((product)=>product.id === action.payload.id);\n            if (existingProduct) {\n                if (existingProduct.quantity !== undefined) {\n                    existingProduct.quantity -= 1;\n                }\n            }\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Sepetten ürün silen fonksiyon\n        deleteToBasket: (state, action)=>{\n            state.basketProducts = state.basketProducts.filter((product)=>product.id !== action.payload.id);\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Ürün arama fonksiyonu\n        searchProducts: (state, action)=>{\n            if (action.payload === \"\") {\n                state.products = state.allProducts; // Eğer input boşsa orijinal listeyi geri yükle\n            } else {\n                state.products = state.allProducts.filter((product)=>product.name.toLowerCase().includes(action.payload.toLowerCase()));\n            }\n        },\n        // Ürünleri filtreleyen fonksiyon\n        filterProducts: (state, action)=>{\n            const { brand, category, minPrice, maxPrice, sortOrderPrice } = action.payload;\n            let filteredProducts = state.allProducts;\n            if (brand && brand !== \"all\") {\n                filteredProducts = filteredProducts.filter((p)=>p.brand === brand);\n            }\n            if (category && category !== \"all\") {\n                filteredProducts = filteredProducts.filter((p)=>p.category === category);\n            }\n            filteredProducts = filteredProducts.filter((p)=>p.price >= minPrice && p.price <= maxPrice);\n            if (sortOrderPrice === \"lowToHigh\") {\n                filteredProducts.sort((a, b)=>a.price - b.price);\n            } else if (sortOrderPrice === \"highToLow\") {\n                filteredProducts.sort((a, b)=>b.price - a.price);\n            }\n            state.products = filteredProducts;\n        },\n        // sepette ödeme yapıldıysa sepeti boşaltan fonksiyon\n        clearBasket: (state)=>{\n            state.basketProducts = [];\n            state.totalAmount = 0;\n            if (true) {\n                localStorage.removeItem(\"basketProducts\");\n            }\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_services_services__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, (state)=>{\n            state.status = \"loading\";\n        });\n        builder.addCase(_services_services__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, (state, action)=>{\n            state.status = \"idle\";\n            state.products = action.payload;\n            state.allProducts = action.payload;\n        });\n        builder.addCase(_services_services__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, (state)=>{\n            state.status = \"failed\";\n        });\n    }\n});\nconst { setBasketProducts, addToBasket, incrementQuantity, decrementQuantity, deleteToBasket, searchProducts, filterProducts, clearBasket } = productsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9wcm9kdWN0c1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQ2dCO0FBQ0s7QUFhcEQsTUFBTUUsZUFPRjtJQUNGQyxVQUFVLEVBQUU7SUFDWkMsYUFBYSxFQUFFO0lBQ2ZDLGdCQUFnQixFQUFFO0lBQ2xCQyxhQUFhO0lBQ2JDLFFBQVE7SUFDUkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsZ0JBQWdCVCw2REFBV0EsQ0FBQztJQUNoQ1UsTUFBTTtJQUNOUjtJQUNBUyxVQUFVO1FBQ1IsaURBQWlEO1FBQ2pEQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7WUFDekJELE1BQU1SLGNBQWMsR0FBR1MsT0FBT0MsT0FBTztZQUNyQ0YsTUFBTVAsV0FBVyxHQUFHUSxPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FDdkMsQ0FBQ0MsS0FBYUM7b0JBQ1dBO3VCQUF2QkQsTUFBTUMsUUFBUUMsS0FBSyxHQUFJRCxDQUFBQSxDQUFBQSxvQkFBQUEsUUFBUUUsUUFBUSxjQUFoQkYsK0JBQUFBLG9CQUFvQjtlQUM3QztRQUVKO1FBQ0EsZ0NBQWdDO1FBQ2hDRyxhQUFhLENBQUNSLE9BQU9DO1lBQ25CLE1BQU1RLGtCQUFrQlQsTUFBTVIsY0FBYyxDQUFDa0IsSUFBSSxDQUMvQyxDQUFDTCxVQUFZQSxRQUFRTSxFQUFFLEtBQUtWLE9BQU9DLE9BQU8sQ0FBQ1MsRUFBRTtZQUcvQyxJQUFJRixpQkFBaUI7Z0JBQ25CLElBQUlBLGdCQUFnQkYsUUFBUSxLQUFLSyxXQUFXO29CQUMxQ0gsZ0JBQWdCRixRQUFRLElBQUk7Z0JBQzlCO1lBQ0YsT0FBTztnQkFDTFAsTUFBTVIsY0FBYyxHQUFHO3VCQUNsQlEsTUFBTVIsY0FBYztvQkFDdkI7d0JBQUUsR0FBR1MsT0FBT0MsT0FBTzt3QkFBRUssVUFBVTtvQkFBRTtpQkFDbEM7WUFDSDtZQUVBUCxNQUFNUCxXQUFXLEdBQUdPLE1BQU1SLGNBQWMsQ0FBQ1cs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LE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNVixRQUFRLEdBQUdXLE9BQU9DLE9BQU87WUFDL0JGLE1BQU1ULFdBQVcsR0FBR1UsT0FBT0MsT0FBTztRQUNwQztRQUNBcUMsUUFBUUMsT0FBTyxDQUFDcEQsNkRBQWFBLENBQUN1RCxRQUFRLEVBQUUsQ0FBQzNDO1lBQ3ZDQSxNQUFNTixNQUFNLEdBQUc7UUFDakI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUNYSyxpQkFBaUIsRUFDakJTLFdBQVcsRUFDWFUsaUJBQWlCLEVBQ2pCQyxpQkFBaUIsRUFDakJDLGNBQWMsRUFDZEUsY0FBYyxFQUNkRyxjQUFjLEVBQ2RXLFdBQVcsRUFDWixHQUFHeEMsY0FBY2dELE9BQU8sQ0FBQztBQUMxQixpRUFBZWhELGNBQWNpRCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWVydFxcT25lRHJpdmVcXERlc2t0b3BcXGUtY29tbWVyY2VcXHNyY1xccmVkdXhcXHByb2R1Y3RzU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RvcmUvc2xpY2VzL2NvdW50ZXJTbGljZS50c1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXJ2aWNlc1wiO1xyXG5cclxuLy8gxLBsayBzdGF0ZSBkZcSfZXJsZXJpbmkgYmVsaXJsaXlvcnV6XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGJyYW5kOiBzdHJpbmc7XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG4gIHF1YW50aXR5PzogbnVtYmVyO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHtcclxuICBwcm9kdWN0czogSVByb2R1Y3RbXTtcclxuICBhbGxQcm9kdWN0czogSVByb2R1Y3RbXTtcclxuICBiYXNrZXRQcm9kdWN0czogSVByb2R1Y3RbXTtcclxuICB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gIHN0YXR1czogc3RyaW5nO1xyXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xyXG59ID0ge1xyXG4gIHByb2R1Y3RzOiBbXSwgLy8gRmlsdHJlbGVuZW4gw7xyw7xubGVyXHJcbiAgYWxsUHJvZHVjdHM6IFtdLCAvLyBPcmlqaW5hbCDDvHLDvG4gbGlzdGVzaVxyXG4gIGJhc2tldFByb2R1Y3RzOiBbXSwgLy8gxLBsayBiYcWfdGEgYm/FnyBixLFyYWtcclxuICB0b3RhbEFtb3VudDogMCwgLy8gxLBsayBiYcWfdGEgMCBixLFyYWtcclxuICBzdGF0dXM6IFwiaWRsZVwiLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInByb2R1Y3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBTdGF0ZSdpIGfDvG5jZWxsZXllbiBmb25rc2l5b25sYXLEsSB0YW7EsW1sxLF5b3J1elxyXG4gICAgc2V0QmFza2V0UHJvZHVjdHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmJhc2tldFByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLnRvdGFsQW1vdW50ID0gYWN0aW9uLnBheWxvYWQucmVkdWNlKFxyXG4gICAgICAgIChhY2M6IG51bWJlciwgcHJvZHVjdDogSVByb2R1Y3QpID0+XHJcbiAgICAgICAgICBhY2MgKyBwcm9kdWN0LnByaWNlICogKHByb2R1Y3QucXVhbnRpdHkgPz8gMCksXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIC8vIFNlcGV0ZSDDvHLDvG4gZWtsZXllbiBmb25rc2l5b25cclxuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3QgPSBzdGF0ZS5iYXNrZXRQcm9kdWN0cy5maW5kKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3QucXVhbnRpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmJhc2tldFByb2R1Y3RzID0gW1xyXG4gICAgICAgICAgLi4uc3RhdGUuYmFza2V0UHJvZHVjdHMsXHJcbiAgICAgICAgICB7IC4uLmFjdGlvbi5wYXlsb2FkLCBxdWFudGl0eTogMSB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLnRvdGFsQW1vdW50ID0gc3RhdGUuYmFza2V0UHJvZHVjdHMucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucHJpY2UgKiAoaXRlbS5xdWFudGl0eSB8fCAwKSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgXCJiYXNrZXRQcm9kdWN0c1wiLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RhdGUuYmFza2V0UHJvZHVjdHMpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIMOccsO8biBhZGVkaW5pIGFydMSxcmFuIGZvbmtzaXlvblxyXG4gICAgaW5jcmVtZW50UXVhbnRpdHk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHN0YXRlLmJhc2tldFByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBleGlzdGluZ1Byb2R1Y3QucXVhbnRpdHkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLnRvdGFsQW1vdW50ID0gc3RhdGUuYmFza2V0UHJvZHVjdHMucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucHJpY2UgKiAoaXRlbS5xdWFudGl0eSB8fCAwKSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgXCJiYXNrZXRQcm9kdWN0c1wiLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RhdGUuYmFza2V0UHJvZHVjdHMpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIMOccsO8biBhZGVkaW5pIGF6YWx0YW4gZm9ua3NpeW9uXHJcbiAgICBkZWNyZW1lbnRRdWFudGl0eTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgZXhpc3RpbmdQcm9kdWN0ID0gc3RhdGUuYmFza2V0UHJvZHVjdHMuZmluZChcclxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3QpIHtcclxuICAgICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGV4aXN0aW5nUHJvZHVjdC5xdWFudGl0eSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUudG90YWxBbW91bnQgPSBzdGF0ZS5iYXNrZXRQcm9kdWN0cy5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5wcmljZSAqIChpdGVtLnF1YW50aXR5IHx8IDApLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICBcImJhc2tldFByb2R1Y3RzXCIsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5iYXNrZXRQcm9kdWN0cylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gU2VwZXR0ZW4gw7xyw7xuIHNpbGVuIGZvbmtzaXlvblxyXG4gICAgZGVsZXRlVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmJhc2tldFByb2R1Y3RzID0gc3RhdGUuYmFza2V0UHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgc3RhdGUudG90YWxBbW91bnQgPSBzdGF0ZS5iYXNrZXRQcm9kdWN0cy5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5wcmljZSAqIChpdGVtLnF1YW50aXR5IHx8IDApLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICBcImJhc2tldFByb2R1Y3RzXCIsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5iYXNrZXRQcm9kdWN0cylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gw5xyw7xuIGFyYW1hIGZvbmtzaXlvbnVcclxuICAgIHNlYXJjaFByb2R1Y3RzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0cyA9IHN0YXRlLmFsbFByb2R1Y3RzOyAvLyBFxJ9lciBpbnB1dCBib8Wfc2Egb3JpamluYWwgbGlzdGV5aSBnZXJpIHnDvGtsZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzID0gc3RhdGUuYWxsUHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PlxyXG4gICAgICAgICAgcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gw5xyw7xubGVyaSBmaWx0cmVsZXllbiBmb25rc2l5b25cclxuICAgIGZpbHRlclByb2R1Y3RzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGJyYW5kLCBjYXRlZ29yeSwgbWluUHJpY2UsIG1heFByaWNlLCBzb3J0T3JkZXJQcmljZSB9ID1cclxuICAgICAgICBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIGxldCBmaWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUuYWxsUHJvZHVjdHM7XHJcblxyXG4gICAgICBpZiAoYnJhbmQgJiYgYnJhbmQgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICBmaWx0ZXJlZFByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoKHApID0+IHAuYnJhbmQgPT09IGJyYW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNhdGVnb3J5ICYmIGNhdGVnb3J5ICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgZmlsdGVyZWRQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHApID0+IHAuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmlsdGVyZWRQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwKSA9PiBwLnByaWNlID49IG1pblByaWNlICYmIHAucHJpY2UgPD0gbWF4UHJpY2VcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChzb3J0T3JkZXJQcmljZSA9PT0gXCJsb3dUb0hpZ2hcIikge1xyXG4gICAgICAgIGZpbHRlcmVkUHJvZHVjdHMuc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNvcnRPcmRlclByaWNlID09PSBcImhpZ2hUb0xvd1wiKSB7XHJcbiAgICAgICAgZmlsdGVyZWRQcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBiLnByaWNlIC0gYS5wcmljZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLnByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cztcclxuICAgIH0sXHJcbiAgICAvLyBzZXBldHRlIMO2ZGVtZSB5YXDEsWxkxLF5c2Egc2VwZXRpIGJvxZ9hbHRhbiBmb25rc2l5b25cclxuICAgIGNsZWFyQmFza2V0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuYmFza2V0UHJvZHVjdHMgPSBbXTtcclxuICAgICAgc3RhdGUudG90YWxBbW91bnQgPSAwO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImJhc2tldFByb2R1Y3RzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImlkbGVcIjtcclxuICAgICAgc3RhdGUucHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUuYWxsUHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHNldEJhc2tldFByb2R1Y3RzLFxyXG4gIGFkZFRvQmFza2V0LFxyXG4gIGluY3JlbWVudFF1YW50aXR5LFxyXG4gIGRlY3JlbWVudFF1YW50aXR5LFxyXG4gIGRlbGV0ZVRvQmFza2V0LFxyXG4gIHNlYXJjaFByb2R1Y3RzLFxyXG4gIGZpbHRlclByb2R1Y3RzLFxyXG4gIGNsZWFyQmFza2V0LFxyXG59ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoUHJvZHVjdHMiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsImFsbFByb2R1Y3RzIiwiYmFza2V0UHJvZHVjdHMiLCJ0b3RhbEFtb3VudCIsInN0YXR1cyIsImVycm9yIiwicHJvZHVjdHNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEJhc2tldFByb2R1Y3RzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdCIsInByaWNlIiwicXVhbnRpdHkiLCJhZGRUb0Jhc2tldCIsImV4aXN0aW5nUHJvZHVjdCIsImZpbmQiLCJpZCIsInVuZGVmaW5lZCIsIml0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJkZWxldGVUb0Jhc2tldCIsImZpbHRlciIsInNlYXJjaFByb2R1Y3RzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImZpbHRlclByb2R1Y3RzIiwiYnJhbmQiLCJjYXRlZ29yeSIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJzb3J0T3JkZXJQcmljZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJwIiwic29ydCIsImEiLCJiIiwiY2xlYXJCYXNrZXQiLCJyZW1vdmVJdGVtIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/productsSlice.ts\n"));

/***/ })

});