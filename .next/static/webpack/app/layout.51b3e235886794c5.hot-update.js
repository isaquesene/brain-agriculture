"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"53e201308b3b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NjU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjUzZTIwMTMwOGIzYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/(components)/Sidebar/index.tsx":
/*!************************************************!*\
  !*** ./src/app/(components)/Sidebar/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/redux */ \"(app-pages-browser)/./src/app/redux.tsx\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state */ \"(app-pages-browser)/./src/state/index.ts\");\n/* harmony import */ var _barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Menu,Sprout,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Menu,Sprout,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/panels-top-left.js\");\n/* harmony import */ var _barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Menu,Sprout,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sprout.js\");\n/* harmony import */ var _barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Menu,Sprout,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users-round.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst SidebarLink = (param)=>{\n    let { href, icon: Icon, label, isCollapsed } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const isActive = pathname === href || pathname === \"/\" && href === \"/dashboard\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cursor-pointer flex items-center \".concat(isCollapsed ? \"justify-center py-4\" : \"justify-start px-8 py-4\", \" \\n            hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors \").concat(isActive ? \"bg-blue-200 text-white\" : \"\", \"\\n            \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    className: \"w-6 h-6 !text-gray-700\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat(isCollapsed ? \"hidden\" : \"block\", \" font-medium text-gray-700\"),\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SidebarLink, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = SidebarLink;\nconst Sidebar = ()=>{\n    _s1();\n    const dispatch = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const isSidebarCollapsed = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const toggleSidebar = ()=>{\n        dispatch((0,_state__WEBPACK_IMPORTED_MODULE_2__.setIsSidebarCollapsed)(!isSidebarCollapsed));\n    };\n    const sidebarClassNames = \"fixed flex flex-col \".concat(isSidebarCollapsed ? \"w-0 md:w-16\" : \"w-72 md:w-64\", \" bg-white transition-all duration-300 overflow-hidden h-full shadown-md z-40\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: sidebarClassNames,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-between md:justify-normal items-center pt-8 \".concat(isSidebarCollapsed ? \"px-5\" : \"px-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(isSidebarCollapsed ? \"hidden\" : \"block\", \" font-extrabold text-2xl\"),\n                        children: \"BrAgroculture\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100\",\n                        onClick: toggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"w-4 h-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/dashboard\",\n                        icon: _barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                        label: \"Dashboard\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/produtores\",\n                        icon: _barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                        label: \"Produtores\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"#\",\n                        icon: _barrel_optimize_names_Layout_Menu_Sprout_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                        label: \"Produtores\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(isSidebarCollapsed ? \"hidden\" : \"block\", \" mb-10\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-xs text-gray-500\",\n                    children: \"\\xa9 2024 Brain Agriculture\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Documents\\\\brain_agriculture\\\\brain_acriculture\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Sidebar, \"PqQZzUnCvmXyMQtUoWWwPjOlbu4=\", false, function() {\n    return [\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c1 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"SidebarLink\");\n$RefreshReg$(_c1, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGNvbXBvbmVudHMpL1NpZGViYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTZEO0FBQ2I7QUFZeEI7QUFDc0I7QUFDcEI7QUFDRztBQVU3QixNQUFNVSxjQUFjO1FBQUMsRUFDakJDLElBQUksRUFDSkMsTUFBTUMsSUFBSSxFQUNWQyxLQUFLLEVBQ0xDLFdBQVcsRUFDSTs7SUFDZixNQUFNQyxXQUFXVCw0REFBV0E7SUFDNUIsTUFBTVUsV0FBV0QsYUFBYUwsUUFBU0ssYUFBYSxPQUFPTCxTQUFTO0lBRXBFLHFCQUNJLDhEQUFDRixpREFBSUE7UUFBQ0UsTUFBTUE7a0JBQ1IsNEVBQUNPO1lBQUlDLFdBQVcsb0NBSVpGLE9BSEFGLGNBQWMsd0JBQXdCLDJCQUN6QyxpRkFHQSxPQURHRSxXQUFXLDJCQUEyQixJQUN6Qzs7OEJBRUcsOERBQUNKO29CQUFLTSxXQUFVOzs7Ozs7OEJBRWhCLDhEQUFDQztvQkFBS0QsV0FBVyxHQUFvQyxPQUFqQ0osY0FBYyxXQUFXLFNBQVE7OEJBQ2hERDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0ExQk1KOztRQU1lSCx3REFBV0E7OztLQU4xQkc7QUE0Qk4sTUFBTVcsVUFBVTs7SUFFWixNQUFNQyxXQUFXdEIsMERBQWNBO0lBRS9CLE1BQU11QixxQkFBcUJ0QiwwREFBY0EsQ0FDckMsQ0FBQ3VCLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0Ysa0JBQWtCO0lBRzlDLE1BQU1HLGdCQUFnQjtRQUNsQkosU0FBU3BCLDZEQUFxQkEsQ0FBQyxDQUFDcUI7SUFDcEM7SUFFQSxNQUFNSSxvQkFBb0IsdUJBQytCLE9BQXJESixxQkFBcUIsZ0JBQWdCLGdCQUFnQjtJQUUzRCxxQkFDRSw4REFBQ0w7UUFBSUMsV0FBV1E7OzBCQUVaLDhEQUFDVDtnQkFBSUMsV0FBVyxrRUFBdUcsT0FBckNJLHFCQUFxQixTQUFTOztrQ0FFNUcsOERBQUNLO3dCQUFHVCxXQUFXLEdBQTJDLE9BQXhDSSxxQkFBcUIsV0FBVyxTQUFRO2tDQUEyQjs7Ozs7O2tDQUVyRiw4REFBQ007d0JBQ0dWLFdBQVU7d0JBQ1ZXLFNBQVNKO2tDQUNULDRFQUFDdEIseUdBQUlBOzRCQUFDZSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLeEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1Q7d0JBQ0dDLE1BQUs7d0JBQ0xDLE1BQU1ULHlHQUFNQTt3QkFDWlcsT0FBTTt3QkFDTkMsYUFBYVE7Ozs7OztrQ0FFaEIsOERBQUNiO3dCQUNFQyxNQUFLO3dCQUNMQyxNQUFNUCx5R0FBTUE7d0JBQ1pTLE9BQU07d0JBQ05DLGFBQWFROzs7Ozs7a0NBRWpCLDhEQUFDYjt3QkFDR0MsTUFBSzt3QkFDTEMsTUFBTU4seUdBQVVBO3dCQUNoQlEsT0FBTTt3QkFDTkMsYUFBYVE7Ozs7Ozs7Ozs7OzswQkFLckIsOERBQUNMO2dCQUFJQyxXQUFXLEdBQTJDLE9BQXhDSSxxQkFBcUIsV0FBVyxTQUFROzBCQUN2RCw0RUFBQ1E7b0JBQUVaLFdBQVU7OEJBQW9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RDtJQXpETUU7O1FBRWVyQixzREFBY0E7UUFFSkMsc0RBQWNBOzs7TUFKdkNvQjtBQTJETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhjb21wb25lbnRzKS9TaWRlYmFyL2luZGV4LnRzeD8yZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvYXBwL3JlZHV4JztcclxuaW1wb3J0IHsgc2V0SXNTaWRlYmFyQ29sbGFwc2VkIH0gZnJvbSAnQC9zdGF0ZSc7XHJcbmltcG9ydCB7XHJcbiAgICBBcmNoaXZlLFxyXG4gICAgQ2lyY2xlRG9sbGFyU2lnbixcclxuICAgIENsaXBib2FyZCxcclxuICAgIExheW91dCxcclxuICAgIEx1Y2lkZUljb24sXHJcbiAgICBNZW51LFxyXG4gICAgU2xpZGVyc0hvcml6b250YWwsXHJcbiAgICBTcHJvdXQsXHJcbiAgICBVc2Vyc1JvdW5kLFxyXG4gICAgVXNlcixcclxuICB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW50ZXJmYWNlIFNpZGViYXJMaW5rUHJvcHMge1xyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgaWNvbjogTHVjaWRlSWNvbjtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBpc0NvbGxhcHNlZDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU2lkZWJhckxpbmsgPSAoe1xyXG4gICAgaHJlZixcclxuICAgIGljb246IEljb24sXHJcbiAgICBsYWJlbCxcclxuICAgIGlzQ29sbGFwc2VkXHJcbn06IFNpZGViYXJMaW5rUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gcGF0aG5hbWUgPT09IGhyZWYgfHwgKHBhdGhuYW1lID09PSBcIi9cIiAmJiBocmVmID09PSBcIi9kYXNoYm9hcmRcIik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciAke1xyXG4gICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQgPyBcImp1c3RpZnktY2VudGVyIHB5LTRcIiA6IFwianVzdGlmeS1zdGFydCBweC04IHB5LTRcIlxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBob3Zlcjp0ZXh0LWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtMTAwIGdhcC0zIHRyYW5zaXRpb24tY29sb3JzICR7XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/IFwiYmctYmx1ZS0yMDAgdGV4dC13aGl0ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PlxyXG4gICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPSd3LTYgaC02ICF0ZXh0LWdyYXktNzAwJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7aXNDb2xsYXBzZWQgPyBcImhpZGRlblwiIDogXCJibG9ja1wifSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwYH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGlzU2lkZWJhckNvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgICAgIChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsLmlzU2lkZWJhckNvbGxhcHNlZFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldElzU2lkZWJhckNvbGxhcHNlZCghaXNTaWRlYmFyQ29sbGFwc2VkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNpZGViYXJDbGFzc05hbWVzID0gYGZpeGVkIGZsZXggZmxleC1jb2wgJHtcclxuICAgICAgICBpc1NpZGViYXJDb2xsYXBzZWQgPyBcInctMCBtZDp3LTE2XCIgOiBcInctNzIgbWQ6dy02NFwiIH0gYmctd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIG92ZXJmbG93LWhpZGRlbiBoLWZ1bGwgc2hhZG93bi1tZCB6LTQwYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzaWRlYmFyQ2xhc3NOYW1lc30+XHJcbiAgICAgICAgey8qIExPR08gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGdhcC0zIGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LW5vcm1hbCBpdGVtcy1jZW50ZXIgcHQtOCAke2lzU2lkZWJhckNvbGxhcHNlZCA/IFwicHgtNVwiIDogXCJweC04XCJ9YH0+XHJcbiAgICAgICAgICAgIHsvKio8ZGl2PmxvZ288L2Rpdj4qL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7aXNTaWRlYmFyQ29sbGFwc2VkID8gXCJoaWRkZW5cIiA6IFwiYmxvY2tcIn0gZm9udC1leHRyYWJvbGQgdGV4dC0yeGxgfT5CckFncm9jdWx0dXJlPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21kOmhpZGRlbiBweC0zIHB5LTMgYmctZ3JheS0xMDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWJsdWUtMTAwJyBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUgY2xhc3NOYW1lPSd3LTQgaC00JyAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIExJTktTICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgbXQtOCc+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyTGluayBcclxuICAgICAgICAgICAgICAgIGhyZWY9Jy9kYXNoYm9hcmQnXHJcbiAgICAgICAgICAgICAgICBpY29uPXtMYXlvdXR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICBpc0NvbGxhcHNlZD17aXNTaWRlYmFyQ29sbGFwc2VkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPFNpZGViYXJMaW5rIFxyXG4gICAgICAgICAgICAgICAgaHJlZj0nL3Byb2R1dG9yZXMnXHJcbiAgICAgICAgICAgICAgICBpY29uPXtTcHJvdXR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2R1dG9yZXNcIlxyXG4gICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQ9e2lzU2lkZWJhckNvbGxhcHNlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNpZGViYXJMaW5rIFxyXG4gICAgICAgICAgICAgICAgaHJlZj0nIydcclxuICAgICAgICAgICAgICAgIGljb249e1VzZXJzUm91bmR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2R1dG9yZXNcIlxyXG4gICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQ9e2lzU2lkZWJhckNvbGxhcHNlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEZPT1RFUiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNTaWRlYmFyQ29sbGFwc2VkID8gXCJoaWRkZW5cIiA6IFwiYmxvY2tcIn0gbWItMTBgfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtZ3JheS01MDAnPiZjb3B5OyAyMDI0IEJyYWluIEFncmljdWx0dXJlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRJc1NpZGViYXJDb2xsYXBzZWQiLCJMYXlvdXQiLCJNZW51IiwiU3Byb3V0IiwiVXNlcnNSb3VuZCIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJMaW5rIiwiU2lkZWJhckxpbmsiLCJocmVmIiwiaWNvbiIsIkljb24iLCJsYWJlbCIsImlzQ29sbGFwc2VkIiwicGF0aG5hbWUiLCJpc0FjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJTaWRlYmFyIiwiZGlzcGF0Y2giLCJpc1NpZGViYXJDb2xsYXBzZWQiLCJzdGF0ZSIsImdsb2JhbCIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyQ2xhc3NOYW1lcyIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(components)/Sidebar/index.tsx\n"));

/***/ })

});