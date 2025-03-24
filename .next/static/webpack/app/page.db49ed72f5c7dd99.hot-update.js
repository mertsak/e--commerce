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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToBasket: () => (/* binding */ addToBasket),\n/* harmony export */   clearBasket: () => (/* binding */ clearBasket),\n/* harmony export */   decrementQuantity: () => (/* binding */ decrementQuantity),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deleteToBasket: () => (/* binding */ deleteToBasket),\n/* harmony export */   filterProducts: () => (/* binding */ filterProducts),\n/* harmony export */   incrementQuantity: () => (/* binding */ incrementQuantity),\n/* harmony export */   searchProducts: () => (/* binding */ searchProducts),\n/* harmony export */   setBasketProducts: () => (/* binding */ setBasketProducts)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ \"(app-pages-browser)/./src/redux/services/services.js\");\n// store/slices/counterSlice.ts\n\n\nconst initialState = {\n    products: [],\n    allProducts: [],\n    basketProducts: [],\n    totalAmount: 0,\n    status: \"idle\",\n    error: null\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState,\n    reducers: {\n        // State'i güncelleyen fonksiyonları tanımlıyoruz\n        setBasketProducts: (state, action)=>{\n            state.basketProducts = action.payload;\n            state.totalAmount = action.payload.reduce((acc, product)=>{\n                var _product_quantity;\n                return acc + product.price * ((_product_quantity = product.quantity) !== null && _product_quantity !== void 0 ? _product_quantity : 0);\n            }, 0);\n        },\n        // Sepete ürün ekleyen fonksiyon\n        addToBasket: (state, action)=>{\n            const existingProduct = state.basketProducts.find((product)=>product.id === action.payload.id);\n            if (existingProduct) {\n                if (existingProduct.quantity !== undefined) {\n                    existingProduct.quantity += 1;\n                }\n            } else {\n                state.basketProducts = [\n                    ...state.basketProducts,\n                    {\n                        ...action.payload,\n                        quantity: 1\n                    }\n                ];\n            }\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Ürün adedini artıran fonksiyon\n        incrementQuantity: (state, action)=>{\n            const existingProduct = state.basketProducts.find((product)=>product.id === action.payload.id);\n            if (existingProduct) {\n                if (existingProduct.quantity !== undefined) {\n                    existingProduct.quantity += 1;\n                }\n            }\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Ürün adedini azaltan fonksiyon\n        decrementQuantity: (state, action)=>{\n            const existingProduct = state.basketProducts.find((product)=>product.id === action.payload.id);\n            if (existingProduct) {\n                if (existingProduct.quantity !== undefined) {\n                    existingProduct.quantity -= 1;\n                }\n            }\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Sepetten ürün silen fonksiyon\n        deleteToBasket: (state, action)=>{\n            state.basketProducts = state.basketProducts.filter((product)=>product.id !== action.payload.id);\n            state.totalAmount = state.basketProducts.reduce((acc, item)=>acc + item.price * (item.quantity || 0), 0);\n            if (true) {\n                localStorage.setItem(\"basketProducts\", JSON.stringify(state.basketProducts));\n            }\n        },\n        // Ürün arama fonksiyonu\n        searchProducts: (state, action)=>{\n            if (action.payload === \"\") {\n                state.products = state.allProducts; // Eğer input boşsa orijinal listeyi geri yükle\n            } else {\n                state.products = state.allProducts.filter((product)=>product.name.toLowerCase().includes(action.payload.toLowerCase()));\n            }\n        },\n        // Ürünleri filtreleyen fonksiyon\n        filterProducts: (state, action)=>{\n            const { brand, category, minPrice, maxPrice, sortOrderPrice } = action.payload;\n            let filteredProducts = state.allProducts;\n            if (brand && brand !== \"all\") {\n                filteredProducts = filteredProducts.filter((p)=>p.brand === brand);\n            }\n            if (category && category !== \"all\") {\n                filteredProducts = filteredProducts.filter((p)=>p.category === category);\n            }\n            filteredProducts = filteredProducts.filter((p)=>p.price >= minPrice && p.price <= maxPrice);\n            if (sortOrderPrice === \"lowToHigh\") {\n                filteredProducts.sort((a, b)=>a.price - b.price);\n            } else if (sortOrderPrice === \"highToLow\") {\n                filteredProducts.sort((a, b)=>b.price - a.price);\n            }\n            state.products = filteredProducts;\n        },\n        // sepette ödeme yapıldıysa sepeti boşaltan fonksiyon\n        clearBasket: (state)=>{\n            state.basketProducts = [];\n            state.totalAmount = 0;\n            if (true) {\n                localStorage.removeItem(\"basketProducts\");\n            }\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_services_services__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, (state)=>{\n            state.status = \"loading\";\n        });\n        builder.addCase(_services_services__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, (state, action)=>{\n            state.status = \"idle\";\n            state.products = action.payload;\n            state.allProducts = action.payload;\n        });\n        builder.addCase(_services_services__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, (state)=>{\n            state.status = \"failed\";\n        });\n    }\n});\nconst { setBasketProducts, addToBasket, incrementQuantity, decrementQuantity, deleteToBasket, searchProducts, filterProducts, clearBasket } = productsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9wcm9kdWN0c1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQ2dCO0FBQ0s7QUFjcEQsTUFBTUUsZUFPRjtJQUNGQyxVQUFVLEVBQUU7SUFDWkMsYUFBYSxFQUFFO0lBQ2ZDLGdCQUFnQixFQUFFO0lBQ2xCQyxhQUFhO0lBQ2JDLFFBQVE7SUFDUkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsZ0JBQWdCVCw2REFBV0EsQ0FBQztJQUNoQ1UsTUFBTTtJQUNOUjtJQUNBUyxVQUFVO1FBQ1IsaURBQWlEO1FBQ2pEQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7WUFDekJELE1BQU1SLGNBQWMsR0FBR1MsT0FBT0MsT0FBTztZQUNyQ0YsTUFBTVAsV0FBVyxHQUFHUSxPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FDdkMsQ0FBQ0MsS0FBYUM7b0JBQ1dBO3VCQUF2QkQsTUFBTUMsUUFBUUMsS0FBSyxHQUFJRCxDQUFBQSxDQUFBQSxvQkFBQUEsUUFBUUUsUUFBUSxjQUFoQkYsK0JBQUFBLG9CQUFvQjtlQUM3QztRQUVKO1FBQ0EsZ0NBQWdDO1FBQ2hDRyxhQUFhLENBQUNSLE9BQU9DO1lBQ25CLE1BQU1RLGtCQUFrQlQsTUFBTVIsY0FBYyxDQUFDa0IsSUFBSSxDQUMvQyxDQUFDTCxVQUFZQSxRQUFRTSxFQUFFLEtBQUtWLE9BQU9DLE9BQU8sQ0FBQ1MsRUFBRTtZQUcvQyxJQUFJRixpQkFBaUI7Z0JBQ25CLElBQUlBLGdCQUFnQkYsUUFBUSxLQUFLSyxXQUFXO29CQUMxQ0gsZ0JBQWdCRixRQUFRLElBQUk7Z0JBQzlCO1lBQ0YsT0FBTztnQkFDTFAsTUFBTVIsY0FBYyxHQUFHO3VCQUNsQlEsTUFBTVIsY0FBYztvQkFDdkI7d0JBQUUsR0FBR1MsT0FBT0MsT0FBTzt3QkFBRUssVUFBVTtvQkFBRTtpQkFDbEM7WUFDSDtZQUVBUCxNQUFNUCxXQUFXLEdBQUdPLE1BQU1SLGNBQWMsQ0FBQ1cs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LE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNVixRQUFRLEdBQUdXLE9BQU9DLE9BQU87WUFDL0JGLE1BQU1ULFdBQVcsR0FBR1UsT0FBT0MsT0FBTztRQUNwQztRQUNBcUMsUUFBUUMsT0FBTyxDQUFDcEQsNkRBQWFBLENBQUN1RCxRQUFRLEVBQUUsQ0FBQzNDO1lBQ3ZDQSxNQUFNTixNQUFNLEdBQUc7UUFDakI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUNYSyxpQkFBaUIsRUFDakJTLFdBQVcsRUFDWFUsaUJBQWlCLEVBQ2pCQyxpQkFBaUIsRUFDakJDLGNBQWMsRUFDZEUsY0FBYyxFQUNkRyxjQUFjLEVBQ2RXLFdBQVcsRUFDWixHQUFHeEMsY0FBY2dELE9BQU8sQ0FBQztBQUMxQixpRUFBZWhELGNBQWNpRCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWVydFxcT25lRHJpdmVcXERlc2t0b3BcXGUtY29tbWVyY2VcXHNyY1xccmVkdXhcXHByb2R1Y3RzU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RvcmUvc2xpY2VzL2NvdW50ZXJTbGljZS50c1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXJ2aWNlc1wiO1xyXG5cclxuLy8gxLBsayBzdGF0ZSBkZcSfZXJsZXJpbmkgYmVsaXJsaXlvcnV6XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgYnJhbmQ6IHN0cmluZztcclxuICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgcXVhbnRpdHk/OiBudW1iZXI7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZToge1xyXG4gIHByb2R1Y3RzOiBJUHJvZHVjdFtdO1xyXG4gIGFsbFByb2R1Y3RzOiBJUHJvZHVjdFtdO1xyXG4gIGJhc2tldFByb2R1Y3RzOiBJUHJvZHVjdFtdO1xyXG4gIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbn0gPSB7XHJcbiAgcHJvZHVjdHM6IFtdLCAvLyBGaWx0cmVsZW5lbiDDvHLDvG5sZXJcclxuICBhbGxQcm9kdWN0czogW10sIC8vIE9yaWppbmFsIMO8csO8biBsaXN0ZXNpXHJcbiAgYmFza2V0UHJvZHVjdHM6IFtdLCAvLyDEsGxrIGJhxZ90YSBib8WfIGLEsXJha1xyXG4gIHRvdGFsQW1vdW50OiAwLCAvLyDEsGxrIGJhxZ90YSAwIGLEsXJha1xyXG4gIHN0YXR1czogXCJpZGxlXCIsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIFN0YXRlJ2kgZ8O8bmNlbGxleWVuIGZvbmtzaXlvbmxhcsSxIHRhbsSxbWzEsXlvcnV6XHJcbiAgICBzZXRCYXNrZXRQcm9kdWN0czogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuYmFza2V0UHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUudG90YWxBbW91bnQgPSBhY3Rpb24ucGF5bG9hZC5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYzogbnVtYmVyLCBwcm9kdWN0OiBJUHJvZHVjdCkgPT5cclxuICAgICAgICAgIGFjYyArIHByb2R1Y3QucHJpY2UgKiAocHJvZHVjdC5xdWFudGl0eSA/PyAwKSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgLy8gU2VwZXRlIMO8csO8biBla2xleWVuIGZvbmtzaXlvblxyXG4gICAgYWRkVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHN0YXRlLmJhc2tldFByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBleGlzdGluZ1Byb2R1Y3QucXVhbnRpdHkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuYmFza2V0UHJvZHVjdHMgPSBbXHJcbiAgICAgICAgICAuLi5zdGF0ZS5iYXNrZXRQcm9kdWN0cyxcclxuICAgICAgICAgIHsgLi4uYWN0aW9uLnBheWxvYWQsIHF1YW50aXR5OiAxIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUudG90YWxBbW91bnQgPSBzdGF0ZS5iYXNrZXRQcm9kdWN0cy5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5wcmljZSAqIChpdGVtLnF1YW50aXR5IHx8IDApLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICBcImJhc2tldFByb2R1Y3RzXCIsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5iYXNrZXRQcm9kdWN0cylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gw5xyw7xuIGFkZWRpbmkgYXJ0xLFyYW4gZm9ua3NpeW9uXHJcbiAgICBpbmNyZW1lbnRRdWFudGl0eTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgZXhpc3RpbmdQcm9kdWN0ID0gc3RhdGUuYmFza2V0UHJvZHVjdHMuZmluZChcclxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3QpIHtcclxuICAgICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGV4aXN0aW5nUHJvZHVjdC5xdWFudGl0eSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUudG90YWxBbW91bnQgPSBzdGF0ZS5iYXNrZXRQcm9kdWN0cy5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5wcmljZSAqIChpdGVtLnF1YW50aXR5IHx8IDApLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICBcImJhc2tldFByb2R1Y3RzXCIsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5iYXNrZXRQcm9kdWN0cylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gw5xyw7xuIGFkZWRpbmkgYXphbHRhbiBmb25rc2l5b25cclxuICAgIGRlY3JlbWVudFF1YW50aXR5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3QgPSBzdGF0ZS5iYXNrZXRQcm9kdWN0cy5maW5kKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3QucXVhbnRpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGF0ZS50b3RhbEFtb3VudCA9IHN0YXRlLmJhc2tldFByb2R1Y3RzLnJlZHVjZShcclxuICAgICAgICAoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlICogKGl0ZW0ucXVhbnRpdHkgfHwgMCksXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgIFwiYmFza2V0UHJvZHVjdHNcIixcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0YXRlLmJhc2tldFByb2R1Y3RzKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBTZXBldHRlbiDDvHLDvG4gc2lsZW4gZm9ua3NpeW9uXHJcbiAgICBkZWxldGVUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuYmFza2V0UHJvZHVjdHMgPSBzdGF0ZS5iYXNrZXRQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzdGF0ZS50b3RhbEFtb3VudCA9IHN0YXRlLmJhc2tldFByb2R1Y3RzLnJlZHVjZShcclxuICAgICAgICAoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlICogKGl0ZW0ucXVhbnRpdHkgfHwgMCksXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgIFwiYmFza2V0UHJvZHVjdHNcIixcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0YXRlLmJhc2tldFByb2R1Y3RzKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDDnHLDvG4gYXJhbWEgZm9ua3NpeW9udVxyXG4gICAgc2VhcmNoUHJvZHVjdHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gXCJcIikge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzID0gc3RhdGUuYWxsUHJvZHVjdHM7IC8vIEXEn2VyIGlucHV0IGJvxZ9zYSBvcmlqaW5hbCBsaXN0ZXlpIGdlcmkgecO8a2xlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHMgPSBzdGF0ZS5hbGxQcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+XHJcbiAgICAgICAgICBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDDnHLDvG5sZXJpIGZpbHRyZWxleWVuIGZvbmtzaXlvblxyXG4gICAgZmlsdGVyUHJvZHVjdHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYnJhbmQsIGNhdGVnb3J5LCBtaW5QcmljZSwgbWF4UHJpY2UsIHNvcnRPcmRlclByaWNlIH0gPVxyXG4gICAgICAgIGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgbGV0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5hbGxQcm9kdWN0cztcclxuXHJcbiAgICAgIGlmIChicmFuZCAmJiBicmFuZCAhPT0gXCJhbGxcIikge1xyXG4gICAgICAgIGZpbHRlcmVkUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzLmZpbHRlcigocCkgPT4gcC5icmFuZCA9PT0gYnJhbmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2F0ZWdvcnkgJiYgY2F0ZWdvcnkgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICBmaWx0ZXJlZFByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAocCkgPT4gcC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWx0ZXJlZFByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHApID0+IHAucHJpY2UgPj0gbWluUHJpY2UgJiYgcC5wcmljZSA8PSBtYXhQcmljZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNvcnRPcmRlclByaWNlID09PSBcImxvd1RvSGlnaFwiKSB7XHJcbiAgICAgICAgZmlsdGVyZWRQcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc29ydE9yZGVyUHJpY2UgPT09IFwiaGlnaFRvTG93XCIpIHtcclxuICAgICAgICBmaWx0ZXJlZFByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUucHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzO1xyXG4gICAgfSxcclxuICAgIC8vIHNlcGV0dGUgw7ZkZW1lIHlhcMSxbGTEsXlzYSBzZXBldGkgYm/Fn2FsdGFuIGZvbmtzaXlvblxyXG4gICAgY2xlYXJCYXNrZXQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5iYXNrZXRQcm9kdWN0cyA9IFtdO1xyXG4gICAgICBzdGF0ZS50b3RhbEFtb3VudCA9IDA7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmFza2V0UHJvZHVjdHNcIik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiaWRsZVwiO1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBzdGF0ZS5hbGxQcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZmFpbGVkXCI7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgc2V0QmFza2V0UHJvZHVjdHMsXHJcbiAgYWRkVG9CYXNrZXQsXHJcbiAgaW5jcmVtZW50UXVhbnRpdHksXHJcbiAgZGVjcmVtZW50UXVhbnRpdHksXHJcbiAgZGVsZXRlVG9CYXNrZXQsXHJcbiAgc2VhcmNoUHJvZHVjdHMsXHJcbiAgZmlsdGVyUHJvZHVjdHMsXHJcbiAgY2xlYXJCYXNrZXQsXHJcbn0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hQcm9kdWN0cyIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIiwiYWxsUHJvZHVjdHMiLCJiYXNrZXRQcm9kdWN0cyIsInRvdGFsQW1vdW50Iiwic3RhdHVzIiwiZXJyb3IiLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0QmFza2V0UHJvZHVjdHMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kdWN0IiwicHJpY2UiLCJxdWFudGl0eSIsImFkZFRvQmFza2V0IiwiZXhpc3RpbmdQcm9kdWN0IiwiZmluZCIsImlkIiwidW5kZWZpbmVkIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaW5jcmVtZW50UXVhbnRpdHkiLCJkZWNyZW1lbnRRdWFudGl0eSIsImRlbGV0ZVRvQmFza2V0IiwiZmlsdGVyIiwic2VhcmNoUHJvZHVjdHMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyUHJvZHVjdHMiLCJicmFuZCIsImNhdGVnb3J5IiwibWluUHJpY2UiLCJtYXhQcmljZSIsInNvcnRPcmRlclByaWNlIiwiZmlsdGVyZWRQcm9kdWN0cyIsInAiLCJzb3J0IiwiYSIsImIiLCJjbGVhckJhc2tldCIsInJlbW92ZUl0ZW0iLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/productsSlice.ts\n"));

/***/ })

});