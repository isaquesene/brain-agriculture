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

/***/ "(app-pages-browser)/./src/app/produtores/page.tsx":
/*!*************************************!*\
  !*** ./src/app/produtores/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/api */ \"(app-pages-browser)/./src/state/api.ts\");\n/* harmony import */ var _app_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/(components)/Header */ \"(app-pages-browser)/./src/app/(components)/Header/index.tsx\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst formatCpf = (cpf)=>{\n    if (!cpf) return \"\";\n    return cpf.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, \"$1.$2.$3-$4\");\n};\nconst formatCnpj = (cnpj)=>{\n    if (!cnpj) return \"\";\n    return cnpj.replace(/(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})/, \"$1.$2.$3/$4-$5\");\n};\nconst columns = [\n    {\n        field: \"produtorId\",\n        headerName: \"ID\",\n        width: 90\n    },\n    {\n        field: \"nome\",\n        headerName: \"Nome Produtor\",\n        width: 200\n    },\n    {\n        field: \"cpf\",\n        headerName: \"CPF\",\n        width: 200,\n        renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: params.value ? formatCpf(params.value) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 29\n            }, undefined)\n    },\n    {\n        field: \"cnpj\",\n        headerName: \"CNPJ\",\n        width: 200,\n        renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: params.value ? formatCnpj(params.value) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 29\n            }, undefined)\n    },\n    {\n        field: \"nomeFazenda\",\n        headerName: \"Fazenda\",\n        width: 200\n    },\n    {\n        field: \"cidade\",\n        headerName: \"Cidade\",\n        width: 200\n    },\n    {\n        field: \"estado\",\n        headerName: \"Estado\",\n        width: 200\n    },\n    {\n        field: \"areaTotal\",\n        headerName: \"Area Total\",\n        width: 90\n    },\n    {\n        field: \"areaAgricultavel\",\n        headerName: \"Area Agricultavel\",\n        width: 90\n    },\n    {\n        field: \"areaVegetacao\",\n        headerName: \"Area Vegeta\\xe7\\xe3o\",\n        width: 900\n    },\n    {\n        field: \"culturas\",\n        headerName: \"Cultura\",\n        width: 200\n    },\n    {\n        field: \"areaTotal\",\n        headerName: \"Area Total\",\n        width: 200\n    }\n];\nconst Produtores = ()=>{\n    _s();\n    const { data: produtores, isError, isLoading } = (0,_state_api__WEBPACK_IMPORTED_MODULE_1__.useGetProdutoresQuery)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-4\",\n            children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n            lineNumber: 48,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (isError || !produtores) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center text-red-500 py-4\",\n            children: \"Falha ao carregar o produto!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nome: \"Produtores\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {\n                rows: produtores,\n                columns: columns,\n                getRowId: (row)=>row.produtorId,\n                checkboxSelection: true,\n                className: \"bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Produtores, \"+5tlh3X9PU5kjUE+/ygm9jT6+sE=\", false, function() {\n    return [\n        _state_api__WEBPACK_IMPORTED_MODULE_1__.useGetProdutoresQuery\n    ];\n});\n_c = Produtores;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Produtores);\nvar _c;\n$RefreshReg$(_c, \"Produtores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHV0b3Jlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW9EO0FBQ0o7QUFDUTtBQUd4RCxNQUFNRyxZQUFZLENBQUNDO0lBQ2pCLElBQUksQ0FBQ0EsS0FBSyxPQUFPO0lBQ2pCLE9BQU9BLElBQUlDLE9BQU8sQ0FBQyxnQ0FBZ0M7QUFDckQ7QUFFQSxNQUFNQyxhQUFhLENBQUNDO0lBQ2xCLElBQUksQ0FBQ0EsTUFBTSxPQUFPO0lBQ2xCLE9BQU9BLEtBQUtGLE9BQU8sQ0FBQyx1Q0FBdUM7QUFDN0Q7QUFFQSxNQUFNRyxVQUF3QjtJQUM1QjtRQUFFQyxPQUFPO1FBQWNDLFlBQVk7UUFBTUMsT0FBTztJQUFHO0lBQ25EO1FBQUVGLE9BQU87UUFBUUMsWUFBWTtRQUFpQkMsT0FBTztJQUFJO0lBQ3pEO1FBQ0VGLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BDLFlBQVksQ0FBQ0MsdUJBQVcsOERBQUNDOzBCQUFNRCxPQUFPRSxLQUFLLEdBQUdaLFVBQVVVLE9BQU9FLEtBQUssSUFBSTs7Ozs7O0lBQzFFO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsWUFBWSxDQUFDQyx1QkFBVyw4REFBQ0M7MEJBQU1ELE9BQU9FLEtBQUssR0FBR1QsV0FBV08sT0FBT0UsS0FBSyxJQUFJOzs7Ozs7SUFDM0U7SUFDQTtRQUFFTixPQUFPO1FBQWVDLFlBQVk7UUFBV0MsT0FBTztJQUFJO0lBQzFEO1FBQUVGLE9BQU87UUFBVUMsWUFBWTtRQUFVQyxPQUFPO0lBQUk7SUFDcEQ7UUFBRUYsT0FBTztRQUFVQyxZQUFZO1FBQVVDLE9BQU87SUFBSTtJQUNwRDtRQUFFRixPQUFPO1FBQWFDLFlBQVk7UUFBY0MsT0FBTztJQUFHO0lBQzFEO1FBQUVGLE9BQU87UUFBb0JDLFlBQVk7UUFBcUJDLE9BQU87SUFBRztJQUN4RTtRQUFFRixPQUFPO1FBQWlCQyxZQUFZO1FBQWtCQyxPQUFPO0lBQUk7SUFDbkU7UUFBRUYsT0FBTztRQUFZQyxZQUFZO1FBQVdDLE9BQU87SUFBSTtJQUN2RDtRQUFFRixPQUFPO1FBQWFDLFlBQVk7UUFBY0MsT0FBTztJQUFJO0NBRTVEO0FBRUQsTUFBTUssYUFBYTs7SUFDakIsTUFBTSxFQUFFQyxNQUFNQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdwQixpRUFBcUJBO0lBRXRFLElBQUlvQixXQUFXO1FBQ2IscUJBQU8sOERBQUNDO1lBQUlDLFdBQVU7c0JBQU87Ozs7OztJQUMvQjtJQUVBLElBQUlILFdBQVcsQ0FBQ0QsWUFBWTtRQUMxQixxQkFDRSw4REFBQ0c7WUFBSUMsV0FBVTtzQkFBZ0M7Ozs7OztJQUluRDtJQUdBLHFCQUNFLDhEQUFDRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3JCLDhEQUFPQTtnQkFBQ3NCLE1BQUs7Ozs7OzswQkFDZCw4REFBQ3JCLHNEQUFRQTtnQkFDUHNCLE1BQU1OO2dCQUNOVixTQUFTQTtnQkFDVGlCLFVBQVUsQ0FBQ0MsTUFBUUEsSUFBSUMsVUFBVTtnQkFDakNDLGlCQUFpQjtnQkFDakJOLFdBQVU7Ozs7Ozs7Ozs7OztBQUdsQjtHQTNCTU47O1FBQzZDaEIsNkRBQXFCQTs7O0tBRGxFZ0I7QUE2Qk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdXRvcmVzL3BhZ2UudHN4P2ExZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VHZXRQcm9kdXRvcmVzUXVlcnkgfSBmcm9tIFwiQC9zdGF0ZS9hcGlcIjtcclxuaW1wb3J0IEhlYWRlcnMgZnJvbSBcIkAvYXBwLyhjb21wb25lbnRzKS9IZWFkZXJcIjtcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRDb2xEZWYgfSBmcm9tIFwiQG11aS94LWRhdGEtZ3JpZFwiO1xyXG5pbXBvcnQgeyBDb2x1bW5zIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5cclxuY29uc3QgZm9ybWF0Q3BmID0gKGNwZjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgaWYgKCFjcGYpIHJldHVybiBcIlwiO1xyXG4gIHJldHVybiBjcGYucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvLCAnJDEuJDIuJDMtJDQnKTtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdENucGogPSAoY25wajogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgaWYgKCFjbnBqKSByZXR1cm4gXCJcIjtcclxuICByZXR1cm4gY25wai5yZXBsYWNlKC8oXFxkezJ9KShcXGR7M30pKFxcZHszfSkoXFxkezR9KShcXGR7Mn0pLywgJyQxLiQyLiQzLyQ0LSQ1Jyk7XHJcbn07XHJcblxyXG5jb25zdCBjb2x1bW5zOiBHcmlkQ29sRGVmW10gPSBbXHJcbiAgeyBmaWVsZDogXCJwcm9kdXRvcklkXCIsIGhlYWRlck5hbWU6IFwiSURcIiwgd2lkdGg6IDkwIH0sXHJcbiAgeyBmaWVsZDogXCJub21lXCIsIGhlYWRlck5hbWU6IFwiTm9tZSBQcm9kdXRvclwiLCB3aWR0aDogMjAwIH0sXHJcbiAgeyBcclxuICAgIGZpZWxkOiBcImNwZlwiLCBcclxuICAgIGhlYWRlck5hbWU6IFwiQ1BGXCIsIFxyXG4gICAgd2lkdGg6IDIwMCwgXHJcbiAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiA8c3Bhbj57cGFyYW1zLnZhbHVlID8gZm9ybWF0Q3BmKHBhcmFtcy52YWx1ZSkgOiBcIlwifTwvc3Bhbj5cclxuICB9LFxyXG4gIHsgXHJcbiAgICBmaWVsZDogXCJjbnBqXCIsIFxyXG4gICAgaGVhZGVyTmFtZTogXCJDTlBKXCIsIFxyXG4gICAgd2lkdGg6IDIwMCwgXHJcbiAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiA8c3Bhbj57cGFyYW1zLnZhbHVlID8gZm9ybWF0Q25waihwYXJhbXMudmFsdWUpIDogXCJcIn08L3NwYW4+XHJcbiAgfSxcclxuICB7IGZpZWxkOiBcIm5vbWVGYXplbmRhXCIsIGhlYWRlck5hbWU6IFwiRmF6ZW5kYVwiLCB3aWR0aDogMjAwIH0sXHJcbiAgeyBmaWVsZDogXCJjaWRhZGVcIiwgaGVhZGVyTmFtZTogXCJDaWRhZGVcIiwgd2lkdGg6IDIwMCB9LFxyXG4gIHsgZmllbGQ6IFwiZXN0YWRvXCIsIGhlYWRlck5hbWU6IFwiRXN0YWRvXCIsIHdpZHRoOiAyMDAgfSxcclxuICB7IGZpZWxkOiBcImFyZWFUb3RhbFwiLCBoZWFkZXJOYW1lOiBcIkFyZWEgVG90YWxcIiwgd2lkdGg6IDkwIH0sXHJcbiAgeyBmaWVsZDogXCJhcmVhQWdyaWN1bHRhdmVsXCIsIGhlYWRlck5hbWU6IFwiQXJlYSBBZ3JpY3VsdGF2ZWxcIiwgd2lkdGg6IDkwIH0sXHJcbiAgeyBmaWVsZDogXCJhcmVhVmVnZXRhY2FvXCIsIGhlYWRlck5hbWU6IFwiQXJlYSBWZWdldGHDp8Ojb1wiLCB3aWR0aDogOTAwIH0sXHJcbiAgeyBmaWVsZDogXCJjdWx0dXJhc1wiLCBoZWFkZXJOYW1lOiBcIkN1bHR1cmFcIiwgd2lkdGg6IDIwMCB9LFxyXG4gIHsgZmllbGQ6IFwiYXJlYVRvdGFsXCIsIGhlYWRlck5hbWU6IFwiQXJlYSBUb3RhbFwiLCB3aWR0aDogMjAwIH0sXHJcblxyXG5dXHJcblxyXG5jb25zdCBQcm9kdXRvcmVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogcHJvZHV0b3JlcywgaXNFcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VHZXRQcm9kdXRvcmVzUXVlcnkoKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPkNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICB9XHJcblxyXG4gIGlmIChpc0Vycm9yIHx8ICFwcm9kdXRvcmVzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBweS00XCI+XHJcbiAgICAgICAgRmFsaGEgYW8gY2FycmVnYXIgbyBwcm9kdXRvIVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxIZWFkZXJzIG5vbWU9XCJQcm9kdXRvcmVzXCIgLz5cclxuICAgICAgPERhdGFHcmlkIFxyXG4gICAgICAgIHJvd3M9e3Byb2R1dG9yZXN9XHJcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICBnZXRSb3dJZD17KHJvdykgPT4gcm93LnByb2R1dG9ySWR9XHJcbiAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG10LTUgIXRleHQtZ3JheS03MDBcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1dG9yZXM7Il0sIm5hbWVzIjpbInVzZUdldFByb2R1dG9yZXNRdWVyeSIsIkhlYWRlcnMiLCJEYXRhR3JpZCIsImZvcm1hdENwZiIsImNwZiIsInJlcGxhY2UiLCJmb3JtYXRDbnBqIiwiY25waiIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsInJlbmRlckNlbGwiLCJwYXJhbXMiLCJzcGFuIiwidmFsdWUiLCJQcm9kdXRvcmVzIiwiZGF0YSIsInByb2R1dG9yZXMiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwibm9tZSIsInJvd3MiLCJnZXRSb3dJZCIsInJvdyIsInByb2R1dG9ySWQiLCJjaGVja2JveFNlbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/produtores/page.tsx\n"));

/***/ })

});