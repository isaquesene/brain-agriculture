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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/api */ \"(app-pages-browser)/./src/state/api.ts\");\n/* harmony import */ var _app_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/(components)/Header */ \"(app-pages-browser)/./src/app/(components)/Header/index.tsx\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=PlusCircleIcon,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=PlusCircleIcon,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-plus.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CreateProdutorModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateProdutorModal */ \"(app-pages-browser)/./src/app/produtores/CreateProdutorModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst formatCpf = (cpf)=>{\n    if (!cpf) return \"\";\n    return cpf.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, \"$1.$2.$3-$4\");\n};\nconst formatCnpj = (cnpj)=>{\n    if (!cnpj) return \"\";\n    return cnpj.replace(/(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})/, \"$1.$2.$3/$4-$5\");\n};\nconst columns = [\n    {\n        field: \"produtorId\",\n        headerName: \"ID\",\n        width: 90\n    },\n    {\n        field: \"nome\",\n        headerName: \"Nome Produtor\",\n        width: 200\n    },\n    {\n        field: \"cpf\",\n        headerName: \"CPF\",\n        width: 200,\n        renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: params.value ? formatCpf(params.value) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 29\n            }, undefined)\n    },\n    {\n        field: \"cnpj\",\n        headerName: \"CNPJ\",\n        width: 200,\n        renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: params.value ? formatCnpj(params.value) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 29\n            }, undefined)\n    },\n    {\n        field: \"nomeFazenda\",\n        headerName: \"Fazenda\",\n        width: 200\n    },\n    {\n        field: \"cidade\",\n        headerName: \"Cidade\",\n        width: 90\n    },\n    {\n        field: \"estado\",\n        headerName: \"Estado\",\n        width: 50\n    },\n    {\n        field: \"areaTotal\",\n        headerName: \"Area Total\",\n        width: 90\n    },\n    {\n        field: \"areaAgricultavel\",\n        headerName: \"Area Agricultavel\",\n        width: 90\n    },\n    {\n        field: \"areaVegetacao\",\n        headerName: \"Area Vegeta\\xe7\\xe3o\",\n        width: 90\n    },\n    {\n        field: \"culturas\",\n        headerName: \"Cultura\",\n        width: 200\n    }\n];\nconst Produtores = ()=>{\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { data: produtores, isError, isLoading } = (0,_state_api__WEBPACK_IMPORTED_MODULE_1__.useGetProdutoresQuery)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-4\",\n            children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n            lineNumber: 63,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (isError || !produtores) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center text-red-500 py-4\",\n            children: \"Falha ao carregar os produtores!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined);\n    }\n    // Filtrando os produtores *cultura é uma array\n    const filteredProdutores = produtores.filter((produtor)=>{\n        const searchTermLower = searchTerm.toLowerCase();\n        const culturasString = Array.isArray(produtor.culturas) ? produtor.culturas.join(\", \").toLowerCase() : \"\";\n        return produtor.nome.toLowerCase().includes(searchTermLower) || produtor.cpf && formatCpf(produtor.cpf).includes(searchTerm) || produtor.cnpj && formatCnpj(produtor.cnpj).includes(searchTerm) || produtor.nomeFazenda.toLowerCase().includes(searchTermLower) || produtor.cidade.toLowerCase().includes(searchTermLower) || produtor.estado.toLowerCase().includes(searchTermLower) || culturasString.includes(searchTermLower);\n    });\n    const [createProdutor] = (0,_state_api__WEBPACK_IMPORTED_MODULE_1__.useCreateProdutoresMutation)();\n    const handleCreateProdutor = async (produtorData)=>{\n        await createProdutor(produtorData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto pb-5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center border-2 border-gray-200 rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"w-5 h-5 text-gray-500 m-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-full py-2 px-4 rounded bg-white\",\n                            placeholder: \"Pesquise aqui...\",\n                            value: searchTerm,\n                            onChange: (e)=>setSearchTerm(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        nome: \"Produtores\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4\",\n                        onClick: ()=>setIsModalOpen(true),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PlusCircleIcon_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"w-5 h-5 mr-2 !text-gray-200\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined),\n                            \" Cadastrar Produtor\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_7__.DataGrid, {\n                    rows: filteredProdutores,\n                    columns: columns,\n                    getRowId: (row)=>row.produtorId,\n                    checkboxSelection: true,\n                    className: \"bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateProdutorModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: ()=>setIsModalOpen(false),\n                onCreate: handleCreateProdutor\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\produtores\\\\page.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Produtores, \"fHiDFexGreJZVNqWcUp8MHAZMNE=\", false, function() {\n    return [\n        _state_api__WEBPACK_IMPORTED_MODULE_1__.useGetProdutoresQuery,\n        _state_api__WEBPACK_IMPORTED_MODULE_1__.useCreateProdutoresMutation\n    ];\n});\n_c = Produtores;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Produtores);\nvar _c;\n$RefreshReg$(_c, \"Produtores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHV0b3Jlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUY7QUFDakM7QUFDUTtBQUNGO0FBQ3JCO0FBQ3VCO0FBZXhELE1BQU1RLFlBQVksQ0FBQ0M7SUFDakIsSUFBSSxDQUFDQSxLQUFLLE9BQU87SUFDakIsT0FBT0EsSUFBSUMsT0FBTyxDQUFDLGdDQUFnQztBQUNyRDtBQUVBLE1BQU1DLGFBQWEsQ0FBQ0M7SUFDbEIsSUFBSSxDQUFDQSxNQUFNLE9BQU87SUFDbEIsT0FBT0EsS0FBS0YsT0FBTyxDQUFDLHVDQUF1QztBQUM3RDtBQUVBLE1BQU1HLFVBQXdCO0lBQzVCO1FBQUVDLE9BQU87UUFBY0MsWUFBWTtRQUFNQyxPQUFPO0lBQUc7SUFDbkQ7UUFBRUYsT0FBTztRQUFRQyxZQUFZO1FBQWlCQyxPQUFPO0lBQUk7SUFDekQ7UUFDRUYsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsWUFBWSxDQUFDQyx1QkFBVyw4REFBQ0M7MEJBQU1ELE9BQU9FLEtBQUssR0FBR1osVUFBVVUsT0FBT0UsS0FBSyxJQUFJOzs7Ozs7SUFDMUU7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxZQUFZLENBQUNDLHVCQUFXLDhEQUFDQzswQkFBTUQsT0FBT0UsS0FBSyxHQUFHVCxXQUFXTyxPQUFPRSxLQUFLLElBQUk7Ozs7OztJQUMzRTtJQUNBO1FBQUVOLE9BQU87UUFBZUMsWUFBWTtRQUFXQyxPQUFPO0lBQUk7SUFDMUQ7UUFBRUYsT0FBTztRQUFVQyxZQUFZO1FBQVVDLE9BQU87SUFBRztJQUNuRDtRQUFFRixPQUFPO1FBQVVDLFlBQVk7UUFBVUMsT0FBTztJQUFHO0lBQ25EO1FBQUVGLE9BQU87UUFBYUMsWUFBWTtRQUFjQyxPQUFPO0lBQUc7SUFDMUQ7UUFBRUYsT0FBTztRQUFvQkMsWUFBWTtRQUFxQkMsT0FBTztJQUFHO0lBQ3hFO1FBQUVG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Ly4vc3JjL2FwcC9wcm9kdXRvcmVzL3BhZ2UudHN4P2ExZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VDcmVhdGVQcm9kdXRvcmVzTXV0YXRpb24sIHVzZUdldFByb2R1dG9yZXNRdWVyeSB9IGZyb20gXCJAL3N0YXRlL2FwaVwiO1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tIFwiQC9hcHAvKGNvbXBvbmVudHMpL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZENvbERlZiB9IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVJY29uLCBTZWFyY2ggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcmVhdGVQcm9kdXRvck1vZGFsIGZyb20gXCIuL0NyZWF0ZVByb2R1dG9yTW9kYWxcIjtcclxuXHJcbi8vIFRpcG8gZG9zIGRhZG9zIGRvIGZvcm11bMOhcmlvXHJcbnR5cGUgUHJvZHV0b3JGb3JtRGF0YSA9IHtcclxuICBub21lOiBzdHJpbmc7XHJcbiAgY3BmOiBzdHJpbmc7XHJcbiAgY25wajogc3RyaW5nO1xyXG4gIG5vbWVGYXplbmRhOiBzdHJpbmc7XHJcbiAgY2lkYWRlOiBzdHJpbmc7XHJcbiAgZXN0YWRvOiBzdHJpbmc7XHJcbiAgYXJlYVRvdGFsOiBzdHJpbmc7XHJcbiAgYXJlYUFncmljdXRhdmVsOiBzdHJpbmc7XHJcbiAgY3VsdHVyYXM6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdENwZiA9IChjcGY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gIGlmICghY3BmKSByZXR1cm4gXCJcIjtcclxuICByZXR1cm4gY3BmLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLywgJyQxLiQyLiQzLSQ0Jyk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRDbnBqID0gKGNucGo6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gIGlmICghY25waikgcmV0dXJuIFwiXCI7XHJcbiAgcmV0dXJuIGNucGoucmVwbGFjZSgvKFxcZHsyfSkoXFxkezN9KShcXGR7M30pKFxcZHs0fSkoXFxkezJ9KS8sICckMS4kMi4kMy8kNC0kNScpO1xyXG59O1xyXG5cclxuY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xyXG4gIHsgZmllbGQ6IFwicHJvZHV0b3JJZFwiLCBoZWFkZXJOYW1lOiBcIklEXCIsIHdpZHRoOiA5MCB9LFxyXG4gIHsgZmllbGQ6IFwibm9tZVwiLCBoZWFkZXJOYW1lOiBcIk5vbWUgUHJvZHV0b3JcIiwgd2lkdGg6IDIwMCB9LFxyXG4gIHsgXHJcbiAgICBmaWVsZDogXCJjcGZcIiwgXHJcbiAgICBoZWFkZXJOYW1lOiBcIkNQRlwiLCBcclxuICAgIHdpZHRoOiAyMDAsIFxyXG4gICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gPHNwYW4+e3BhcmFtcy52YWx1ZSA/IGZvcm1hdENwZihwYXJhbXMudmFsdWUpIDogXCJcIn08L3NwYW4+XHJcbiAgfSxcclxuICB7IFxyXG4gICAgZmllbGQ6IFwiY25walwiLCBcclxuICAgIGhlYWRlck5hbWU6IFwiQ05QSlwiLCBcclxuICAgIHdpZHRoOiAyMDAsIFxyXG4gICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gPHNwYW4+e3BhcmFtcy52YWx1ZSA/IGZvcm1hdENucGoocGFyYW1zLnZhbHVlKSA6IFwiXCJ9PC9zcGFuPlxyXG4gIH0sXHJcbiAgeyBmaWVsZDogXCJub21lRmF6ZW5kYVwiLCBoZWFkZXJOYW1lOiBcIkZhemVuZGFcIiwgd2lkdGg6IDIwMCB9LFxyXG4gIHsgZmllbGQ6IFwiY2lkYWRlXCIsIGhlYWRlck5hbWU6IFwiQ2lkYWRlXCIsIHdpZHRoOiA5MCB9LFxyXG4gIHsgZmllbGQ6IFwiZXN0YWRvXCIsIGhlYWRlck5hbWU6IFwiRXN0YWRvXCIsIHdpZHRoOiA1MCB9LFxyXG4gIHsgZmllbGQ6IFwiYXJlYVRvdGFsXCIsIGhlYWRlck5hbWU6IFwiQXJlYSBUb3RhbFwiLCB3aWR0aDogOTAgfSxcclxuICB7IGZpZWxkOiBcImFyZWFBZ3JpY3VsdGF2ZWxcIiwgaGVhZGVyTmFtZTogXCJBcmVhIEFncmljdWx0YXZlbFwiLCB3aWR0aDogOTAgfSxcclxuICB7IGZpZWxkOiBcImFyZWFWZWdldGFjYW9cIiwgaGVhZGVyTmFtZTogXCJBcmVhIFZlZ2V0YcOnw6NvXCIsIHdpZHRoOiA5MCB9LFxyXG4gIHsgZmllbGQ6IFwiY3VsdHVyYXNcIiwgaGVhZGVyTmFtZTogXCJDdWx0dXJhXCIsIHdpZHRoOiAyMDAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByb2R1dG9yZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBkYXRhOiBwcm9kdXRvcmVzLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUdldFByb2R1dG9yZXNRdWVyeSgpO1xyXG4gIFxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5DYXJyZWdhbmRvLi4uPC9kaXY+XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFcnJvciB8fCAhcHJvZHV0b3Jlcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDAgcHktNFwiPlxyXG4gICAgICAgIEZhbGhhIGFvIGNhcnJlZ2FyIG9zIHByb2R1dG9yZXMhXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIEZpbHRyYW5kbyBvcyBwcm9kdXRvcmVzICpjdWx0dXJhIMOpIHVtYSBhcnJheVxyXG4gIGNvbnN0IGZpbHRlcmVkUHJvZHV0b3JlcyA9IHByb2R1dG9yZXMuZmlsdGVyKChwcm9kdXRvcikgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoVGVybUxvd2VyID0gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgY3VsdHVyYXNTdHJpbmcgPSBBcnJheS5pc0FycmF5KHByb2R1dG9yLmN1bHR1cmFzKVxyXG4gICAgICA/IHByb2R1dG9yLmN1bHR1cmFzLmpvaW4oXCIsIFwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIDogXCJcIjtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHByb2R1dG9yLm5vbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtTG93ZXIpIHx8XHJcbiAgICAgIChwcm9kdXRvci5jcGYgJiYgZm9ybWF0Q3BmKHByb2R1dG9yLmNwZikuaW5jbHVkZXMoc2VhcmNoVGVybSkpIHx8XHJcbiAgICAgIChwcm9kdXRvci5jbnBqICYmIGZvcm1hdENucGoocHJvZHV0b3IuY25waikuaW5jbHVkZXMoc2VhcmNoVGVybSkpIHx8XHJcbiAgICAgIHByb2R1dG9yLm5vbWVGYXplbmRhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybUxvd2VyKSB8fFxyXG4gICAgICBwcm9kdXRvci5jaWRhZGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtTG93ZXIpIHx8XHJcbiAgICAgIHByb2R1dG9yLmVzdGFkby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm1Mb3dlcikgfHxcclxuICAgICAgY3VsdHVyYXNTdHJpbmcuaW5jbHVkZXMoc2VhcmNoVGVybUxvd2VyKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZVByb2R1dG9yXSA9IHVzZUNyZWF0ZVByb2R1dG9yZXNNdXRhdGlvbigpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVByb2R1dG9yID0gYXN5bmMgKHByb2R1dG9yRGF0YTogUHJvZHV0b3JGb3JtRGF0YSkgPT4ge1xyXG4gICAgYXdhaXQgY3JlYXRlUHJvZHV0b3IocHJvZHV0b3JEYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcGItNSB3LWZ1bGxcIj5cclxuICAgICAgey8qIFNFQVJDSCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDAgbS0yXCIgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBweC00IHJvdW5kZWQgYmctd2hpdGVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNlIGFxdWkuLi5cIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEhFQURFUiBCQVIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuICAgICAgICA8SGVhZGVycyBub21lPVwiUHJvZHV0b3Jlc1wiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtZ3JheS0yMDAgZm9udC1ib2xkIHB5LTIgcHgtNFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsT3Blbih0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGx1c0NpcmNsZUljb24gY2xhc3NOYW1lPVwidy01IGgtNSBtci0yICF0ZXh0LWdyYXktMjAwXCIgLz4gQ2FkYXN0cmFyIFByb2R1dG9yXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgIHJvd3M9e2ZpbHRlcmVkUHJvZHV0b3Jlc31cclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICBnZXRSb3dJZD17KHJvdykgPT4gcm93LnByb2R1dG9ySWR9XHJcbiAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtdC01ICF0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIE1PREFMICovfVxyXG4gICAgICA8Q3JlYXRlUHJvZHV0b3JNb2RhbCBcclxuICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICBvbkNyZWF0ZT17aGFuZGxlQ3JlYXRlUHJvZHV0b3J9ICBcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdXRvcmVzO1xyXG4iXSwibmFtZXMiOlsidXNlQ3JlYXRlUHJvZHV0b3Jlc011dGF0aW9uIiwidXNlR2V0UHJvZHV0b3Jlc1F1ZXJ5IiwiSGVhZGVycyIsIkRhdGFHcmlkIiwiUGx1c0NpcmNsZUljb24iLCJTZWFyY2giLCJ1c2VTdGF0ZSIsIkNyZWF0ZVByb2R1dG9yTW9kYWwiLCJmb3JtYXRDcGYiLCJjcGYiLCJyZXBsYWNlIiwiZm9ybWF0Q25waiIsImNucGoiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwic3BhbiIsInZhbHVlIiwiUHJvZHV0b3JlcyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImRhdGEiLCJwcm9kdXRvcmVzIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImZpbHRlcmVkUHJvZHV0b3JlcyIsImZpbHRlciIsInByb2R1dG9yIiwic2VhcmNoVGVybUxvd2VyIiwidG9Mb3dlckNhc2UiLCJjdWx0dXJhc1N0cmluZyIsIkFycmF5IiwiaXNBcnJheSIsImN1bHR1cmFzIiwiam9pbiIsIm5vbWUiLCJpbmNsdWRlcyIsIm5vbWVGYXplbmRhIiwiY2lkYWRlIiwiZXN0YWRvIiwiY3JlYXRlUHJvZHV0b3IiLCJoYW5kbGVDcmVhdGVQcm9kdXRvciIsInByb2R1dG9yRGF0YSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicm93cyIsImdldFJvd0lkIiwicm93IiwicHJvZHV0b3JJZCIsImNoZWNrYm94U2VsZWN0aW9uIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uQ3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/produtores/page.tsx\n"));

/***/ })

});