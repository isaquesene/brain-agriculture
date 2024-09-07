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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/api */ \"(app-pages-browser)/./src/state/api.ts\");\n/* harmony import */ var _app_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/(components)/Header */ \"(app-pages-browser)/./src/app/(components)/Header/index.tsx\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=PlusCircleIcon,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=PlusCircleIcon,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-plus.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CreateProdutorModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateProdutorModal */ \"(app-pages-browser)/./src/app/produtores/CreateProdutorModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst formatCpf = (cpf)=>{\n    if (!cpf) return \"\";\n    return cpf.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, \"$1.$2.$3-$4\");\n};\nconst formatCnpj = (cnpj)=>{\n    if (!cnpj) return \"\";\n    return cnpj.replace(/(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})/, \"$1.$2.$3/$4-$5\");\n};\nconst columns = [\n    {\n        field: \"produtorId\",\n        headerName: \"ID\",\n        width: 90\n    },\n    {\n        field: \"nome\",\n        headerName: \"Nome Produtor\",\n        width: 200\n    },\n    {\n        field: \"cpf\",\n        headerName: \"CPF\",\n        width: 200,\n        renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: params.value ? formatCpf(params.value) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 29\n            }, undefined)\n    },\n    {\n        field: \"cnpj\",\n        headerName: \"CNPJ\",\n        width: 200,\n        renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: params.value ? formatCnpj(params.value) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 29\n            }, undefined)\n    },\n    {\n        field: \"nomeFazenda\",\n        headerName: \"Fazenda\",\n        width: 200\n    },\n    {\n        field: \"cidade\",\n        headerName: \"Cidade\",\n        width: 90\n    },\n    {\n        field: \"estado\",\n        headerName: \"Estado\",\n        width: 50\n    },\n    {\n        field: \"areaTotal\",\n        headerName: \"Area Total\",\n        width: 90\n    },\n    {\n        field: \"areaAgricultavel\",\n        headerName: \"Area Agricultavel\",\n        width: 90\n    },\n    {\n        field: \"areaVegetacao\",\n        headerName: \"Area Vegeta\\xe7\\xe3o\",\n        width: 90\n    },\n    {\n        field: \"culturas\",\n        headerName: \"Cultura\",\n        width: 200\n    }\n];\nconst Produtores = ()=>{\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { data: produtores, isError, isLoading } = (0,_state_api__WEBPACK_IMPORTED_MODULE_1__.useGetProdutoresQuery)();\n    const [createProdutor] = useCreateProdutorMutation();\n    const handleCreateProdutor = async (produtorData)=>{\n        await createProdutor(produtorData);\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-4\",\n            children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n            lineNumber: 69,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (isError || !produtores) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center text-red-500 py-4\",\n            children: \"Falha ao carregar os produtores!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined);\n    }\n    // Filtrando os produtores *cultura é uma array\n    const filteredProdutores = produtores.filter((produtor)=>{\n        const searchTermLower = searchTerm.toLowerCase();\n        const culturasString = Array.isArray(produtor.culturas) ? produtor.culturas.join(\", \").toLowerCase() : \"\";\n        return produtor.nome.toLowerCase().includes(searchTermLower) || produtor.cpf && formatCpf(produtor.cpf).includes(searchTerm) || produtor.cnpj && formatCnpj(produtor.cnpj).includes(searchTerm) || produtor.nomeFazenda.toLowerCase().includes(searchTermLower) || produtor.cidade.toLowerCase().includes(searchTermLower) || produtor.estado.toLowerCase().includes(searchTermLower) || culturasString.includes(searchTermLower);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto pb-5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center border-2 border-gray-200 rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"w-5 h-5 text-gray-500 m-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-full py-2 px-4 rounded bg-white\",\n                            placeholder: \"Pesquise aqui...\",\n                            value: searchTerm,\n                            onChange: (e)=>setSearchTerm(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        nome: \"Produtores\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4\",\n                        onClick: ()=>setIsModalOpen(true),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"w-5 h-5 mr-2 !text-gray-200\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, undefined),\n                            \" Cadastrar Produtor\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_7__.DataGrid, {\n                    rows: filteredProdutores,\n                    columns: columns,\n                    getRowId: (row)=>row.produtorId,\n                    checkboxSelection: true,\n                    className: \"bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateProdutorModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: ()=>setIsModalOpen(false),\n                onCreate: handleCreateProdutor\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Produtores, \"VK7cNOTCF6aCL7qIp9EEzcddufc=\", true, function() {\n    return [\n        _state_api__WEBPACK_IMPORTED_MODULE_1__.useGetProdutoresQuery\n    ];\n});\n_c = Produtores;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Produtores);\nvar _c;\n$RefreshReg$(_c, \"Produtores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHV0b3Jlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUY7QUFDakM7QUFDUTtBQUNGO0FBQ3JCO0FBQ3VCO0FBZXhELE1BQU1PLFlBQVksQ0FBQ0M7SUFDakIsSUFBSSxDQUFDQSxLQUFLLE9BQU87SUFDakIsT0FBT0EsSUFBSUMsT0FBTyxDQUFDLGdDQUFnQztBQUNyRDtBQUVBLE1BQU1DLGFBQWEsQ0FBQ0M7SUFDbEIsSUFBSSxDQUFDQSxNQUFNLE9BQU87SUFDbEIsT0FBT0EsS0FBS0YsT0FBTyxDQUFDLHVDQUF1QztBQUM3RDtBQUVBLE1BQU1HLFVBQXdCO0lBQzVCO1FBQUVDLE9BQU87UUFBY0MsWUFBWTtRQUFNQyxPQUFPO0lBQUc7SUFDbkQ7UUFBRUYsT0FBTztRQUFRQyxZQUFZO1FBQWlCQyxPQUFPO0lBQUk7SUFDekQ7UUFDRUYsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsWUFBWSxDQUFDQyx1QkFBVyw4REFBQ0M7MEJBQU1ELE9BQU9FLEtBQUssR0FBR1osVUFBVVUsT0FBT0UsS0FBSyxJQUFJOzs7Ozs7SUFDMUU7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxZQUFZLENBQUNDLHVCQUFXLDhEQUFDQzswQkFBTUQsT0FBT0UsS0FBSyxHQUFHVCxXQUFXTyxPQUFPRSxLQUFLLElBQUk7Ozs7OztJQUMzRTtJQUNBO1FBQUVOLE9BQU87UUFBZUMsWUFBWTtRQUFXQyxPQUFPO0lBQUk7SUFDMUQ7UUFBRUYsT0FBTztRQUFVQyxZQUFZO1FBQVVDLE9BQU87SUFBRztJQUNuRDtRQUFFRixPQUFPO1FBQVVDLFlBQVk7UUFBVUMsT0FBTztJQUFHO0lBQ25EO1FBQUVGLE9BQU87UUFBYUMsWUFBWTtRQUFjQyxPQUFPO0lBQUc7SUFDMUQ7UUFBRUYsT0FBTztRQUFvQkMsWUFBWTtRQUFxQkMsT0FBTztJQUFHO0lBQ3hFO1FBQUVG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ZS50c3g/YTFlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUNyZWF0ZVByb2R1dG9yZXNNdXRhdGlvbiwgdXNlR2V0UHJvZHV0b3Jlc1F1ZXJ5IH0gZnJvbSBcIkAvc3RhdGUvYXBpXCI7XHJcbmltcG9ydCBIZWFkZXJzIGZyb20gXCJAL2FwcC8oY29tcG9uZW50cykvSGVhZGVyXCI7XHJcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWRcIjtcclxuaW1wb3J0IHsgUGx1c0NpcmNsZUljb24sIFNlYXJjaCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENyZWF0ZVByb2R1dG9yTW9kYWwgZnJvbSBcIi4vQ3JlYXRlUHJvZHV0b3JNb2RhbFwiO1xyXG5cclxuLy8gVGlwbyBkb3MgZGFkb3MgZG8gZm9ybXVsw6FyaW9cclxudHlwZSBQcm9kdXRvckZvcm1EYXRhID0ge1xyXG4gIG5vbWU6IHN0cmluZztcclxuICBjcGY6IHN0cmluZztcclxuICBjbnBqOiBzdHJpbmc7XHJcbiAgbm9tZUZhemVuZGE6IHN0cmluZztcclxuICBjaWRhZGU6IHN0cmluZztcclxuICBlc3RhZG86IHN0cmluZztcclxuICBhcmVhVG90YWw6IHN0cmluZztcclxuICBhcmVhQWdyaWN1dGF2ZWw6IHN0cmluZztcclxuICBjdWx0dXJhczogc3RyaW5nW107XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRDcGYgPSAoY3BmOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuICBpZiAoIWNwZikgcmV0dXJuIFwiXCI7XHJcbiAgcmV0dXJuIGNwZi5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS8sICckMS4kMi4kMy0kNCcpO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0Q25waiA9IChjbnBqOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuICBpZiAoIWNucGopIHJldHVybiBcIlwiO1xyXG4gIHJldHVybiBjbnBqLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHszfSkoXFxkezN9KShcXGR7NH0pKFxcZHsyfSkvLCAnJDEuJDIuJDMvJDQtJDUnKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcclxuICB7IGZpZWxkOiBcInByb2R1dG9ySWRcIiwgaGVhZGVyTmFtZTogXCJJRFwiLCB3aWR0aDogOTAgfSxcclxuICB7IGZpZWxkOiBcIm5vbWVcIiwgaGVhZGVyTmFtZTogXCJOb21lIFByb2R1dG9yXCIsIHdpZHRoOiAyMDAgfSxcclxuICB7IFxyXG4gICAgZmllbGQ6IFwiY3BmXCIsIFxyXG4gICAgaGVhZGVyTmFtZTogXCJDUEZcIiwgXHJcbiAgICB3aWR0aDogMjAwLCBcclxuICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IDxzcGFuPntwYXJhbXMudmFsdWUgPyBmb3JtYXRDcGYocGFyYW1zLnZhbHVlKSA6IFwiXCJ9PC9zcGFuPlxyXG4gIH0sXHJcbiAgeyBcclxuICAgIGZpZWxkOiBcImNucGpcIiwgXHJcbiAgICBoZWFkZXJOYW1lOiBcIkNOUEpcIiwgXHJcbiAgICB3aWR0aDogMjAwLCBcclxuICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IDxzcGFuPntwYXJhbXMudmFsdWUgPyBmb3JtYXRDbnBqKHBhcmFtcy52YWx1ZSkgOiBcIlwifTwvc3Bhbj5cclxuICB9LFxyXG4gIHsgZmllbGQ6IFwibm9tZUZhemVuZGFcIiwgaGVhZGVyTmFtZTogXCJGYXplbmRhXCIsIHdpZHRoOiAyMDAgfSxcclxuICB7IGZpZWxkOiBcImNpZGFkZVwiLCBoZWFkZXJOYW1lOiBcIkNpZGFkZVwiLCB3aWR0aDogOTAgfSxcclxuICB7IGZpZWxkOiBcImVzdGFkb1wiLCBoZWFkZXJOYW1lOiBcIkVzdGFkb1wiLCB3aWR0aDogNTAgfSxcclxuICB7IGZpZWxkOiBcImFyZWFUb3RhbFwiLCBoZWFkZXJOYW1lOiBcIkFyZWEgVG90YWxcIiwgd2lkdGg6IDkwIH0sXHJcbiAgeyBmaWVsZDogXCJhcmVhQWdyaWN1bHRhdmVsXCIsIGhlYWRlck5hbWU6IFwiQXJlYSBBZ3JpY3VsdGF2ZWxcIiwgd2lkdGg6IDkwIH0sXHJcbiAgeyBmaWVsZDogXCJhcmVhVmVnZXRhY2FvXCIsIGhlYWRlck5hbWU6IFwiQXJlYSBWZWdldGHDp8Ojb1wiLCB3aWR0aDogOTAgfSxcclxuICB7IGZpZWxkOiBcImN1bHR1cmFzXCIsIGhlYWRlck5hbWU6IFwiQ3VsdHVyYVwiLCB3aWR0aDogMjAwIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcm9kdXRvcmVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgZGF0YTogcHJvZHV0b3JlcywgaXNFcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VHZXRQcm9kdXRvcmVzUXVlcnkoKTtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZVByb2R1dG9yXSA9IHVzZUNyZWF0ZVByb2R1dG9yTXV0YXRpb24oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvZHV0b3IgPSBhc3luYyAocHJvZHV0b3JEYXRhOiBQcm9kdXRvckZvcm1EYXRhKSA9PiB7XHJcbiAgICBhd2FpdCBjcmVhdGVQcm9kdXRvcihwcm9kdXRvckRhdGEpO1xyXG4gIH07XHJcbiAgXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPkNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICB9XHJcblxyXG4gIGlmIChpc0Vycm9yIHx8ICFwcm9kdXRvcmVzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBweS00XCI+XHJcbiAgICAgICAgRmFsaGEgYW8gY2FycmVnYXIgb3MgcHJvZHV0b3JlcyFcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgLy8gRmlsdHJhbmRvIG9zIHByb2R1dG9yZXMgKmN1bHR1cmEgw6kgdW1hIGFycmF5XHJcbiAgY29uc3QgZmlsdGVyZWRQcm9kdXRvcmVzID0gcHJvZHV0b3Jlcy5maWx0ZXIoKHByb2R1dG9yKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtTG93ZXIgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBjdWx0dXJhc1N0cmluZyA9IEFycmF5LmlzQXJyYXkocHJvZHV0b3IuY3VsdHVyYXMpXHJcbiAgICAgID8gcHJvZHV0b3IuY3VsdHVyYXMuam9pbihcIiwgXCIpLnRvTG93ZXJDYXNlKClcclxuICAgICAgOiBcIlwiO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcHJvZHV0b3Iubm9tZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm1Mb3dlcikgfHxcclxuICAgICAgKHByb2R1dG9yLmNwZiAmJiBmb3JtYXRDcGYocHJvZHV0b3IuY3BmKS5pbmNsdWRlcyhzZWFyY2hUZXJtKSkgfHxcclxuICAgICAgKHByb2R1dG9yLmNucGogJiYgZm9ybWF0Q25waihwcm9kdXRvci5jbnBqKS5pbmNsdWRlcyhzZWFyY2hUZXJtKSkgfHxcclxuICAgICAgcHJvZHV0b3Iubm9tZUZhemVuZGEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtTG93ZXIpIHx8XHJcbiAgICAgIHByb2R1dG9yLmNpZGFkZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm1Mb3dlcikgfHxcclxuICAgICAgcHJvZHV0b3IuZXN0YWRvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybUxvd2VyKSB8fFxyXG4gICAgICBjdWx0dXJhc1N0cmluZy5pbmNsdWRlcyhzZWFyY2hUZXJtTG93ZXIpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHBiLTUgdy1mdWxsXCI+XHJcbiAgICAgIHsvKiBTRUFSQ0ggKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNTAwIG0tMlwiIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgcHgtNCByb3VuZGVkIGJnLXdoaXRlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzZSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBIRUFERVIgQkFSICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi02XCI+XHJcbiAgICAgICAgPEhlYWRlcnMgbm9tZT1cIlByb2R1dG9yZXNcIiAvPlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LWdyYXktMjAwIGZvbnQtYm9sZCBweS0yIHB4LTRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBsdXNDaXJjbGVJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMiAhdGV4dC1ncmF5LTIwMFwiIC8+IENhZGFzdHJhciBQcm9kdXRvclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICByb3dzPXtmaWx0ZXJlZFByb2R1dG9yZXN9XHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZ2V0Um93SWQ9eyhyb3cpID0+IHJvdy5wcm9kdXRvcklkfVxyXG4gICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgbXQtNSAhdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBNT0RBTCAqL31cclxuICAgICAgPENyZWF0ZVByb2R1dG9yTW9kYWwgXHJcbiAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc01vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgb25DcmVhdGU9e2hhbmRsZUNyZWF0ZVByb2R1dG9yfSAgXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHV0b3JlcztcclxuIl0sIm5hbWVzIjpbInVzZUdldFByb2R1dG9yZXNRdWVyeSIsIkhlYWRlcnMiLCJEYXRhR3JpZCIsIlBsdXNDaXJjbGVJY29uIiwiU2VhcmNoIiwidXNlU3RhdGUiLCJDcmVhdGVQcm9kdXRvck1vZGFsIiwiZm9ybWF0Q3BmIiwiY3BmIiwicmVwbGFjZSIsImZvcm1hdENucGoiLCJjbnBqIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsInNwYW4iLCJ2YWx1ZSIsIlByb2R1dG9yZXMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJkYXRhIiwicHJvZHV0b3JlcyIsImlzRXJyb3IiLCJpc0xvYWRpbmciLCJjcmVhdGVQcm9kdXRvciIsInVzZUNyZWF0ZVByb2R1dG9yTXV0YXRpb24iLCJoYW5kbGVDcmVhdGVQcm9kdXRvciIsInByb2R1dG9yRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImZpbHRlcmVkUHJvZHV0b3JlcyIsImZpbHRlciIsInByb2R1dG9yIiwic2VhcmNoVGVybUxvd2VyIiwidG9Mb3dlckNhc2UiLCJjdWx0dXJhc1N0cmluZyIsIkFycmF5IiwiaXNBcnJheSIsImN1bHR1cmFzIiwiam9pbiIsIm5vbWUiLCJpbmNsdWRlcyIsIm5vbWVGYXplbmRhIiwiY2lkYWRlIiwiZXN0YWRvIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyb3dzIiwiZ2V0Um93SWQiLCJyb3ciLCJwcm9kdXRvcklkIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJpc09wZW4iLCJvbkNsb3NlIiwib25DcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/produtores/page.tsx\n"));

/***/ })

});