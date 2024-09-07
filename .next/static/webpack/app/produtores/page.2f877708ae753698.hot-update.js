"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/produtores/page",{

/***/ "(app-pages-browser)/./src/state/api.ts":
/*!**************************!*\
  !*** ./src/state/api.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: function() { return /* binding */ api; },\n/* harmony export */   useCreateProdutorMutation: function() { return /* binding */ useCreateProdutorMutation; },\n/* harmony export */   useGetDashboardMetricsQuery: function() { return /* binding */ useGetDashboardMetricsQuery; },\n/* harmony export */   useGetProdutoresQuery: function() { return /* binding */ useGetProdutoresQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"http://localhost:8000\"\n    }),\n    reducerPath: \"api\",\n    tagTypes: [\n        \"DashboardMetrics\",\n        \"Produtores\",\n        \"NewProdutores\"\n    ],\n    endpoints: (build)=>({\n            getDashboardMetrics: build.query({\n                query: ()=>\"/dashboard\",\n                providesTags: [\n                    \"DashboardMetrics\"\n                ]\n            }),\n            getProdutores: build.query({\n                query: (search)=>({\n                        url: \"/produtores\",\n                        params: search ? {\n                            search\n                        } : {}\n                    }),\n                providesTags: [\n                    \"Produtores\"\n                ]\n            }),\n            createProdutor: build.mutation({\n                query: (newProdutores)=>({\n                        url: \"/produtores\",\n                        method: \"POST\",\n                        body: newProdutores\n                    }),\n                invalidatesTags: [\n                    \"Produtores\"\n                ]\n            })\n        })\n});\nconst { useGetDashboardMetricsQuery, useGetProdutoresQuery, useCreateProdutorMutation } = api;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdGF0ZS9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlFO0FBNkNsRSxNQUFNRSxNQUFNRix1RUFBU0EsQ0FBQztJQUN6QkcsV0FBV0YsNEVBQWNBLENBQUM7UUFBRUcsU0FBU0MsdUJBQW9DO0lBQUM7SUFDMUVHLGFBQWE7SUFDYkMsVUFBVTtRQUFDO1FBQW9CO1FBQWM7S0FBZ0I7SUFDN0RDLFdBQVcsQ0FBQ0MsUUFBVztZQUNuQkMscUJBQXFCRCxNQUFNRSxLQUFLLENBQXlCO2dCQUNyREEsT0FBTyxJQUFNO2dCQUNiQyxjQUFjO29CQUFDO2lCQUFtQjtZQUN0QztZQUNBQyxlQUFlSixNQUFNRSxLQUFLLENBQThCO2dCQUNwREEsT0FBTyxDQUFDRyxTQUFZO3dCQUNoQkMsS0FBSzt3QkFDTEMsUUFBUUYsU0FBUzs0QkFBQ0E7d0JBQU0sSUFBSSxDQUFDO29CQUNoQztnQkFDREYsY0FBYztvQkFBQztpQkFBYTtZQUNoQztZQUNBSyxnQkFBZ0JSLE1BQU1TLFFBQVEsQ0FBNEI7Z0JBQ3REUCxPQUFPLENBQUNRLGdCQUFtQjt3QkFDdkJKLEtBQUs7d0JBQ0xLLFFBQVE7d0JBQ1JDLE1BQU1GO29CQUNWO2dCQUNBRyxpQkFBaUI7b0JBQUM7aUJBQWE7WUFDbkM7UUFDSjtBQUNKLEdBQUc7QUFFSSxNQUFNLEVBQUVDLDJCQUEyQixFQUFFQyxxQkFBcUIsRUFBRUMseUJBQXlCLEVBQUMsR0FBR3pCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0YXRlL2FwaS50cz8wYzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9kdXRvcmVzIHtcclxuICAgIHByb2R1dG9ySWQ6ICAgICAgIHN0cmluZztcclxuICAgIGNwZj86ICAgICAgICAgICAgIHN0cmluZztcclxuICAgIGNucGo/OiAgICAgICAgICAgIHN0cmluZztcclxuICAgIG5vbWU6ICAgICAgICAgICAgIHN0cmluZztcclxuICAgIG5vbWVGYXplbmRhOiAgICAgIHN0cmluZztcclxuICAgIGNpZGFkZTogICAgICAgICAgIHN0cmluZztcclxuICAgIGVzdGFkbzogICAgICAgICAgIHN0cmluZztcclxuICAgIGFyZWFUb3RhbDogICAgICAgIG51bWJlcjtcclxuICAgIGFyZWFBZ3JpY3VsdGF2ZWw6IG51bWJlcjtcclxuICAgIGFyZWFWZWdldGFjYW86ICAgIG51bWJlcjtcclxuICAgIGN1bHR1cmFzOiAgICAgICAgIHN0cmluZ1tdO1xyXG4gICAgY3JlYXRlZEF0OiAgICAgICAgc3RyaW5nOyAvLyBJbmNsdWEgc2UgcHJlY2lzYXIgdmlzdWFsaXphclxyXG4gICAgdXBkYXRlZEF0OiAgICAgICAgc3RyaW5nOyAvLyBJbmNsdWEgc2UgcHJlY2lzYXIgdmlzdWFsaXphclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1dG9yZXMge1xyXG4gICAgcHJvZHV0b3JJZDogICAgICAgc3RyaW5nO1xyXG4gICAgY3BmPzogICAgICAgICAgICAgc3RyaW5nO1xyXG4gICAgY25waj86ICAgICAgICAgICAgc3RyaW5nO1xyXG4gICAgbm9tZTogICAgICAgICAgICAgc3RyaW5nO1xyXG4gICAgbm9tZUZhemVuZGE6ICAgICAgc3RyaW5nO1xyXG4gICAgY2lkYWRlOiAgICAgICAgICAgc3RyaW5nO1xyXG4gICAgZXN0YWRvOiAgICAgICAgICAgc3RyaW5nO1xyXG4gICAgYXJlYVRvdGFsOiAgICAgICAgbnVtYmVyO1xyXG4gICAgYXJlYUFncmljdWx0YXZlbDogbnVtYmVyO1xyXG4gICAgYXJlYVZlZ2V0YWNhbzogICAgbnVtYmVyO1xyXG4gICAgY3VsdHVyYXM6ICAgICAgICAgc3RyaW5nW107XHJcbiAgICBjcmVhdGVkQXQ6ICAgICAgICBzdHJpbmc7IC8vIEluY2x1YSBzZSBwcmVjaXNhciB2aXN1YWxpemFyXHJcbiAgICB1cGRhdGVkQXQ6ICAgICAgICBzdHJpbmc7IC8vIEluY2x1YSBzZSBwcmVjaXNhciB2aXN1YWxpemFyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcbiAgICB1c2VySWQ6ICBzdHJpbmc7XHJcbiAgICBuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBlbWFpbDogICBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkTWV0cmljcyB7XHJcbiAgICBwb3B1bGFyUHJvZHV0b3JlczogUHJvZHV0b3Jlc1tdO1xyXG4gICAgdXNlcjogVXNlcltdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlQXBpKHtcclxuICAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgfSksXHJcbiAgICByZWR1Y2VyUGF0aDogJ2FwaScsXHJcbiAgICB0YWdUeXBlczogW1wiRGFzaGJvYXJkTWV0cmljc1wiLCBcIlByb2R1dG9yZXNcIiwgXCJOZXdQcm9kdXRvcmVzXCJdLFxyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZ2V0RGFzaGJvYXJkTWV0cmljczogYnVpbGQucXVlcnk8RGFzaGJvYXJkTWV0cmljcywgdm9pZD4oe1xyXG4gICAgICAgICAgICBxdWVyeTogKCkgPT4gXCIvZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogW1wiRGFzaGJvYXJkTWV0cmljc1wiXVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdldFByb2R1dG9yZXM6IGJ1aWxkLnF1ZXJ5PFByb2R1dG9yZXNbXSwgc3RyaW5nIHwgdm9pZD4oe1xyXG4gICAgICAgICAgICBxdWVyeTogKHNlYXJjaCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvcHJvZHV0b3Jlc1wiLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBzZWFyY2ggPyB7c2VhcmNofSA6IHt9XHJcbiAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbXCJQcm9kdXRvcmVzXCJdXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY3JlYXRlUHJvZHV0b3I6IGJ1aWxkLm11dGF0aW9uPFByb2R1dG9yZXMsIE5ld1Byb2R1dG9yZXM+KHtcclxuICAgICAgICAgICAgcXVlcnk6IChuZXdQcm9kdXRvcmVzKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wcm9kdXRvcmVzXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogbmV3UHJvZHV0b3Jlc1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaW52YWxpZGF0ZXNUYWdzOiBbXCJQcm9kdXRvcmVzXCJdXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyB1c2VHZXREYXNoYm9hcmRNZXRyaWNzUXVlcnksIHVzZUdldFByb2R1dG9yZXNRdWVyeSwgdXNlQ3JlYXRlUHJvZHV0b3JNdXRhdGlvbn0gPSBhcGk7Il0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiYXBpIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJyZWR1Y2VyUGF0aCIsInRhZ1R5cGVzIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXREYXNoYm9hcmRNZXRyaWNzIiwicXVlcnkiLCJwcm92aWRlc1RhZ3MiLCJnZXRQcm9kdXRvcmVzIiwic2VhcmNoIiwidXJsIiwicGFyYW1zIiwiY3JlYXRlUHJvZHV0b3IiLCJtdXRhdGlvbiIsIm5ld1Byb2R1dG9yZXMiLCJtZXRob2QiLCJib2R5IiwiaW52YWxpZGF0ZXNUYWdzIiwidXNlR2V0RGFzaGJvYXJkTWV0cmljc1F1ZXJ5IiwidXNlR2V0UHJvZHV0b3Jlc1F1ZXJ5IiwidXNlQ3JlYXRlUHJvZHV0b3JNdXRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/state/api.ts\n"));

/***/ })

});