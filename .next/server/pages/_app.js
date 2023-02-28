/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.ts\");\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Layout = (props)=>{\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_constants__WEBPACK_IMPORTED_MODULE_2__.extractSession)().then((session)=>setSession(session));\n        const authStateChange = _utils_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setSession(session);\n        });\n        return ()=>{\n            authStateChange.data.subscription?.unsubscribe();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        display: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Skylon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/components/Layout.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Meta description for the Skylone app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/components/Layout.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/components/Layout.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/components/Layout.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/components/Layout.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/components/Layout.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0U7QUFDRDtBQUNoQjtBQUNPO0FBS3BDLE1BQU1NLFNBQVMsQ0FBQ0MsUUFBdUI7SUFDdEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFNLElBQUk7SUFFaERELGdEQUFTQSxDQUFDLElBQU07UUFDZkUsMERBQWNBLEdBQUdRLElBQUksQ0FBQyxDQUFDRixVQUFZQyxXQUFXRDtRQUM5QyxNQUFNRyxrQkFBa0JSLDRFQUErQixDQUN0RCxDQUFDVyxRQUFRTixVQUFZO1lBQ3BCQyxXQUFXRDtRQUNaO1FBR0QsT0FBTyxJQUFNO1lBQ1pHLGdCQUFnQkksSUFBSSxDQUFDQyxZQUFZLEVBQUVDO1FBQ3BDO0lBQ0QsR0FBRyxFQUFFO0lBRUwscUJBQ0MsOERBQUNaLDhDQUFHQTtRQUFDYSxTQUFTOzswQkFDYiw4REFBQ2Qsa0RBQUlBOztrQ0FDSiw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0FDLE1BQUs7d0JBQ0xDLFNBQVE7Ozs7OztrQ0FFVCw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFL0IsOERBQUNDOzBCQUFNaEIsTUFBTWlCLFFBQVE7Ozs7Ozs7Ozs7OztBQUd4QjtBQUVBLGlFQUFlbEIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXh0cmFjdFNlc3Npb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL3V0aWxzL3N1cGFiYXNlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbnR5cGUgTGF5b3V0UHJvcHMgPSB7XHJcblx0Y2hpbGRyZW46IGFueTtcclxufTtcclxuY29uc3QgTGF5b3V0ID0gKHByb3BzOiBMYXlvdXRQcm9wcykgPT4ge1xyXG5cdGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRleHRyYWN0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHNldFNlc3Npb24oc2Vzc2lvbikpO1xyXG5cdFx0Y29uc3QgYXV0aFN0YXRlQ2hhbmdlID0gc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZShcclxuXHRcdFx0KF9ldmVudCwgc2Vzc2lvbikgPT4ge1xyXG5cdFx0XHRcdHNldFNlc3Npb24oc2Vzc2lvbik7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0YXV0aFN0YXRlQ2hhbmdlLmRhdGEuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGRpc3BsYXk9e1wiZmxleFwifT5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlNreWxvbjwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGFcclxuXHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRjb250ZW50PVwiTWV0YSBkZXNjcmlwdGlvbiBmb3IgdGhlIFNreWxvbmUgYXBwXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXh0cmFjdFNlc3Npb24iLCJzdXBhYmFzZSIsIkhlYWQiLCJCb3giLCJMYXlvdXQiLCJwcm9wcyIsInNlc3Npb24iLCJzZXRTZXNzaW9uIiwidGhlbiIsImF1dGhTdGF0ZUNoYW5nZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsImRhdGEiLCJzdWJzY3JpcHRpb24iLCJ1bnN1YnNjcmliZSIsImRpc3BsYXkiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extractSession\": () => (/* binding */ extractSession),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getQuestionDetails\": () => (/* binding */ getQuestionDetails),\n/* harmony export */   \"getQuestionsPaths\": () => (/* binding */ getQuestionsPaths),\n/* harmony export */   \"hex2rgb\": () => (/* binding */ hex2rgb),\n/* harmony export */   \"logInWithGoogle\": () => (/* binding */ logInWithGoogle),\n/* harmony export */   \"useFormControls\": () => (/* binding */ useFormControls)\n/* harmony export */ });\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function extractSession() {\n    const { data: { session  }  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_0__.supabase.auth.getSession();\n    return session;\n}\nconst initialFormValues = {\n    fullName: \"\",\n    email: \"\",\n    password: \"\"\n};\nconst logInWithGoogle = async (router)=>{\n    console.log(\"Logging in\");\n    const { data , error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_0__.supabase.auth.signInWithOAuth({\n        provider: \"google\",\n        options: {\n            redirectTo: `${\"http://localhost:3000/\"}/home/dashboard`\n        }\n    });\n};\nconst hex2rgb = (hex, opacity)=>{\n    const r = parseInt(hex.slice(1, 3), 16);\n    const g = parseInt(hex.slice(3, 5), 16);\n    const b = parseInt(hex.slice(5, 7), 16);\n    // return {r, g, b}\n    return `rgb(${r},${g},${b},${opacity})`;\n};\nconst useFormControls = ()=>{\n    // We'll update \"values\" as the form updates\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialFormValues);\n    // \"errors\" is used to check the form for errors\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const validate = (field)=>{\n        let temp = {\n            ...errors\n        };\n        const [name, value] = Object.entries(field)[0];\n        switch(name){\n            case \"fullName\":\n                temp.fullName = value ? \"\" : \"This field is required.\";\n                break;\n            case \"email\":\n                validateEmail(value);\n                break;\n            case \"password\":\n                validatePassword(value);\n                break;\n            default:\n                break;\n        }\n        function validateEmail(email) {\n            temp.email = email ? \"\" : \"This field is required.\";\n            if (email) temp.email = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email) ? \"\" : \"Email is not valid.\";\n        }\n        function validatePassword(password) {\n            if (password) {\n                temp.password = password.length >= 6 ? \"\" : \"Password needs to be at least 6 charaters long\";\n            } else {\n                temp.password = \"This field is required.\";\n            }\n        }\n        setErrors({\n            ...temp\n        });\n    // this function will check if the form values are valid\n    };\n    const handleInputValue = (e)=>{\n        const { name , value  } = e.target;\n        setValues({\n            ...values,\n            [name]: value\n        });\n        validate({\n            [name]: value\n        });\n    };\n    const formIsValid = ()=>{\n        console.log(values);\n        console.log(Object.values(values).some((v)=>v !== undefined && v != \"\"));\n        return Object.values(values).some((v)=>v !== undefined && v != \"\") && Object.values(errors).every((x)=>x === \"\");\n    };\n    return {\n        handleInputValue,\n        formIsValid,\n        errors\n    };\n};\nasync function getQuestionsPaths() {\n    let paths = [];\n    await _utils_supabase__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"posts\").select(\"id\").then((result)=>result.data?.forEach((e)=>paths.push({\n                params: {\n                    id: e.id\n                }\n            })));\n    console.log(paths);\n    return paths;\n}\nasync function getQuestionDetails(questionId) {\n    const { data , error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"posts\").select(\"*\").eq(\"id\", questionId);\n    return data || [];\n}\nasync function getComments(postId) {\n    const { data , error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"comments\").select(\"*\").eq(\"post_id\", postId);\n    console.log(data);\n    if (!data) return [];\n    return data || [];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXgudHM/NjY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N1cGFiYXNlfSBmcm9tIFwiLi4vdXRpbHMvc3VwYWJhc2VcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7cmVkaXJlY3R9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHtOZXh0Um91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHthbnl9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFNlc3Npb24oKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge3Nlc3Npb259LFxyXG4gICAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xyXG4gICAgcmV0dXJuIHNlc3Npb247XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZvcm1WYWx1ZSA9XHJcbiAgICB7XHJcbiAgICAgICAgZnVsbE5hbWU6IHN0cmluZyxcclxuICAgICAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgICB9XHJcblxyXG5leHBvcnQgdHlwZSBUb3BpYyA9IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHF1ZXN0aW9ucz86IG51bWJlcixcclxuICAgIGNvbG9yOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYXQgPSB7XHJcbiAgICB1c2VyOiBhbnksXHJcbiAgICBtZXNzYWdlczogYW55W11cclxufVxyXG5cclxuY29uc3QgaW5pdGlhbEZvcm1WYWx1ZXM6IEZvcm1WYWx1ZSA9IHtcclxuICAgIGZ1bGxOYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dJbldpdGhHb29nbGUgPSBhc3luYyAocm91dGVyOk5leHRSb3V0ZXIpID0+XHJcbntcclxuICAgIGNvbnNvbGUubG9nKFwiTG9nZ2luZyBpblwiKVxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoT0F1dGgoe1xyXG4gICAgICAgIHByb3ZpZGVyOiAnZ29vZ2xlJyxcclxuICAgICAgICBvcHRpb25zOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvOmAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NJVEVfVVJMfS9ob21lL2Rhc2hib2FyZGBcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGV4MnJnYiA9IChoZXg6IHN0cmluZywgb3BhY2l0eTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNik7XHJcbiAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNik7XHJcbiAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XHJcblxyXG4gICAgLy8gcmV0dXJuIHtyLCBnLCBifVxyXG4gICAgcmV0dXJuIGByZ2IoJHtyfSwke2d9LCR7Yn0sJHtvcGFjaXR5fSlgO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZvcm1Db250cm9scyA9ICgpID0+IHtcclxuICAgIC8vIFdlJ2xsIHVwZGF0ZSBcInZhbHVlc1wiIGFzIHRoZSBmb3JtIHVwZGF0ZXNcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZShpbml0aWFsRm9ybVZhbHVlcyk7XHJcbiAgICAvLyBcImVycm9yc1wiIGlzIHVzZWQgdG8gY2hlY2sgdGhlIGZvcm0gZm9yIGVycm9yc1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9IGFzIGFueSk7XHJcbiAgICBjb25zdCB2YWxpZGF0ZTogYW55ID0gKGZpZWxkOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgdGVtcDogYW55ID0gey4uLmVycm9yc31cclxuICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMoZmllbGQpWzBdXHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmdWxsTmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgdGVtcC5mdWxsTmFtZSA9IHZhbHVlID8gXCJcIiA6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCIgOlxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVFbWFpbCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVQYXNzd29yZCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsOiBhbnkpIHtcclxuICAgICAgICAgICAgdGVtcC5lbWFpbCA9IGVtYWlsID8gXCJcIiA6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIlxyXG4gICAgICAgICAgICBpZiAoZW1haWwpXHJcbiAgICAgICAgICAgICAgICB0ZW1wLmVtYWlsID0gL15bXkBcXHNdK0BbXkBcXHNdK1xcLlteQFxcc10rJC8udGVzdChlbWFpbClcclxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiRW1haWwgaXMgbm90IHZhbGlkLlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLnBhc3N3b3JkID0gcGFzc3dvcmQubGVuZ3RoID49IDYgPyBcIlwiIDogXCJQYXNzd29yZCBuZWVkcyB0byBiZSBhdCBsZWFzdCA2IGNoYXJhdGVycyBsb25nXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRlbXAucGFzc3dvcmQgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRFcnJvcnMoe1xyXG4gICAgICAgICAgICAuLi50ZW1wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGNoZWNrIGlmIHRoZSBmb3JtIHZhbHVlcyBhcmUgdmFsaWRcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0VmFsdWUgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhbGlkYXRlKHtbbmFtZV06IHZhbHVlfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZm9ybUlzVmFsaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXModmFsdWVzKS5zb21lKHYgPT4gdiAhPT0gdW5kZWZpbmVkICYmIHYgIT0gJycpKVxyXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHZhbHVlcykuc29tZSh2ID0+IHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9ICcnKSAmJiBPYmplY3QudmFsdWVzKGVycm9ycykuZXZlcnkoKHgpID0+IHggPT09IFwiXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlSW5wdXRWYWx1ZSxcclxuICAgICAgICBmb3JtSXNWYWxpZCxcclxuICAgICAgICBlcnJvcnNcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRRdWVzdGlvbnNQYXRocygpIHtcclxuICAgIGxldCBwYXRocyA6IGFueVtdID0gW11cclxuICAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdwb3N0cycpLnNlbGVjdChcImlkXCIpLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGE/LmZvckVhY2goZSA9PiBwYXRocy5wdXNoKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgaWQ6ZS5pZCxcclxuICAgICAgICB9XHJcbiAgICB9KSkpXHJcbiAgICBjb25zb2xlLmxvZyhwYXRocylcclxuICAgIHJldHVybiBwYXRoc1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uRGV0YWlscyhxdWVzdGlvbklkPzogc3RyaW5nKTogUHJvbWlzZTxhbnlbXT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gIGF3YWl0IHN1cGFiYXNlLmZyb20oJ3Bvc3RzJykuc2VsZWN0KFwiKlwiKS5lcSgnaWQnLCBxdWVzdGlvbklkKVxyXG4gICAgcmV0dXJuIGRhdGEgfHwgW11cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzKHBvc3RJZD86IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9ICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdjb21tZW50cycpLnNlbGVjdChcIipcIikuZXEoJ3Bvc3RfaWQnLCBwb3N0SWQpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgaWYoIWRhdGEpIHJldHVybiBbXVxyXG4gICAgcmV0dXJuIGRhdGEgfHwgW11cclxufSJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsInVzZVN0YXRlIiwiZXh0cmFjdFNlc3Npb24iLCJkYXRhIiwic2Vzc2lvbiIsImF1dGgiLCJnZXRTZXNzaW9uIiwiaW5pdGlhbEZvcm1WYWx1ZXMiLCJmdWxsTmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dJbldpdGhHb29nbGUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzaWduSW5XaXRoT0F1dGgiLCJwcm92aWRlciIsIm9wdGlvbnMiLCJyZWRpcmVjdFRvIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NJVEVfVVJMIiwiaGV4MnJnYiIsImhleCIsIm9wYWNpdHkiLCJyIiwicGFyc2VJbnQiLCJzbGljZSIsImciLCJiIiwidXNlRm9ybUNvbnRyb2xzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidmFsaWRhdGUiLCJmaWVsZCIsInRlbXAiLCJuYW1lIiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwidmFsaWRhdGVFbWFpbCIsInZhbGlkYXRlUGFzc3dvcmQiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlSW5wdXRWYWx1ZSIsImUiLCJ0YXJnZXQiLCJmb3JtSXNWYWxpZCIsInNvbWUiLCJ2IiwidW5kZWZpbmVkIiwiZXZlcnkiLCJ4IiwiZ2V0UXVlc3Rpb25zUGF0aHMiLCJwYXRocyIsImZyb20iLCJzZWxlY3QiLCJ0aGVuIiwicmVzdWx0IiwiZm9yRWFjaCIsInB1c2giLCJwYXJhbXMiLCJpZCIsImdldFF1ZXN0aW9uRGV0YWlscyIsInF1ZXN0aW9uSWQiLCJlcSIsImdldENvbW1lbnRzIiwicG9zdElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.ts\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [hasMounted, setHasMounted] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setHasMounted(true);\n        (0,_constants__WEBPACK_IMPORTED_MODULE_4__.extractSession)().then((session)=>setSession(session));\n        const authStateChange = _utils_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setSession(session);\n        });\n        return ()=>{\n            authStateChange.data.subscription?.unsubscribe();\n        };\n    }, []);\n    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.createTheme)({\n        typography: {\n            fontFamily: [\n                \"Inter\",\n                \"sans-serif\"\n            ].join(\",\")\n        }\n    });\n    if (!hasMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                session: session\n            }, void 0, false, {\n                fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/pages/_app.tsx\",\n            lineNumber: 41,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/salmandotweb/Downloads/Project_Maaz/pages/_app.tsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDb0I7QUFDTjtBQUNDO0FBQ0Y7QUFDQTtBQUNGO0FBRTFDLFNBQVNRLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUNsRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQU0sSUFBSTtJQUVoRCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR2QscURBQWMsQ0FBQyxLQUFLO0lBRXhEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZhLGNBQWMsSUFBSTtRQUNsQlYsMERBQWNBLEdBQUdXLElBQUksQ0FBQyxDQUFDSixVQUFZQyxXQUFXRDtRQUM5QyxNQUFNSyxrQkFBa0JiLDRFQUErQixDQUN0RCxDQUFDZ0IsUUFBUVIsVUFBWTtZQUNwQkMsV0FBV0Q7UUFDWjtRQUdELE9BQU8sSUFBTTtZQUNaSyxnQkFBZ0JJLElBQUksQ0FBQ0MsWUFBWSxFQUFFQztRQUNwQztJQUNELEdBQUcsRUFBRTtJQUVMLE1BQU1DLFFBQVFsQiwwREFBV0EsQ0FBQztRQUN6Qm1CLFlBQVk7WUFDWEMsWUFBWTtnQkFBQztnQkFBUzthQUFhLENBQUNDLElBQUksQ0FBQztRQUMxQztJQUNEO0lBRUEsSUFBSSxDQUFDYixZQUFZO1FBQ2hCLE9BQU8sSUFBSTtJQUNaLENBQUM7SUFFRCxxQkFDQyw4REFBQ1Asc0RBQWFBO1FBQUNpQixPQUFPQTtrQkFDckIsNEVBQUNoQiwwREFBTUE7c0JBQ04sNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVDLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0FBRUEsaUVBQWVILEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL3V0aWxzL3N1cGFiYXNlXCI7XHJcbmltcG9ydCB7IGV4dHJhY3RTZXNzaW9uIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuXHRjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG5cclxuXHRjb25zdCBbaGFzTW91bnRlZCwgc2V0SGFzTW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRIYXNNb3VudGVkKHRydWUpO1xyXG5cdFx0ZXh0cmFjdFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiBzZXRTZXNzaW9uKHNlc3Npb24pKTtcclxuXHRcdGNvbnN0IGF1dGhTdGF0ZUNoYW5nZSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoXHJcblx0XHRcdChfZXZlbnQsIHNlc3Npb24pID0+IHtcclxuXHRcdFx0XHRzZXRTZXNzaW9uKHNlc3Npb24pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGF1dGhTdGF0ZUNoYW5nZS5kYXRhLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuXHRcdH07XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuXHRcdHR5cG9ncmFwaHk6IHtcclxuXHRcdFx0Zm9udEZhbWlseTogW1wiSW50ZXJcIiwgXCJzYW5zLXNlcmlmXCJdLmpvaW4oXCIsXCIpLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0aWYgKCFoYXNNb3VudGVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc2Vzc2lvbj17c2Vzc2lvbn0gLz5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJleHRyYWN0U2Vzc2lvbiIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJoYXNNb3VudGVkIiwic2V0SGFzTW91bnRlZCIsInRoZW4iLCJhdXRoU3RhdGVDaGFuZ2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJfZXZlbnQiLCJkYXRhIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/supabase.js":
/*!***************************!*\
  !*** ./utils/supabase.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase),\n/* harmony export */   \"supabaseAnonKey\": () => (/* binding */ supabaseAnonKey),\n/* harmony export */   \"supabaseUrl\": () => (/* binding */ supabaseUrl)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://hulujcymfjjpcdhwfcrp.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bHVqY3ltZmpqcGNkaHdmY3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5ODE0NTUsImV4cCI6MTk4OTU1NzQ1NX0.28qNZ3d3mt3qUhpdNLcVqv-RMw_ThIjYtFdmiztYc3w\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUc1QyxNQUFNQyxjQUFjQywwQ0FBb0M7QUFDeEQsTUFBTUcsa0JBQWtCSCxrTkFBeUM7QUFDakUsTUFBTUssV0FBV1AsbUVBQVlBLENBQ2hDQyxhQUNBSSxpQkFDQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL3N1cGFiYXNlLmpzPzQwNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcclxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXHJcbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcclxuICAgIHN1cGFiYXNlVXJsLFxyXG4gICAgc3VwYWJhc2VBbm9uS2V5LFxyXG4gICAgKSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/supabase.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();