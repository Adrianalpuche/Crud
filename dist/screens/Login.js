"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
// import Button from '@mui/material/Button';
var material_1 = require("@mui/material");
var Button_1 = __importDefault(require("@mui/material/Button"));
// import {auth} from '../firebase.ts';
var auth_1 = require("firebase/auth");
var firebase_1 = require("../firebase");
function Login() {
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(''), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(''), success = _d[0], setSuccess = _d[1];
    var register = function (e) {
        e.preventDefault();
        setError('');
        // Create a new user with email and password using firebase
        (0, auth_1.createUserWithEmailAndPassword)(firebase_1.auth, email, password)
            .then(function (res) {
            setSuccess('User created');
            setError('');
        })
            .catch(function (error) {
            setError(error.message);
            setSuccess('');
        });
    };
    return (react_1.default.createElement(material_1.Container, null,
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, marginTop: 3 },
            react_1.default.createElement(material_1.Grid, { container: true },
                react_1.default.createElement(material_1.Grid, { item: true, md: 4, sm: 3, xs: 0 }),
                react_1.default.createElement(material_1.Grid, { item: true, md: 4, sm: 6, xs: 12 },
                    success && react_1.default.createElement(material_1.Alert, { severity: "success" }, success),
                    error && react_1.default.createElement(material_1.Alert, { severity: "error" }, error),
                    react_1.default.createElement(material_1.Typography, { variant: "h4" }, "Login form"))),
            react_1.default.createElement(material_1.Grid, { container: true, marginTop: 3 },
                react_1.default.createElement(material_1.Grid, { item: true, md: 4, sm: 3, xs: 0 }),
                react_1.default.createElement(material_1.Grid, { item: true, md: 4, sm: 6, xs: 12 },
                    react_1.default.createElement(material_1.TextField, { id: "outlined-basic", type: "text", value: email, onChange: function (e) { return setEmail(e.target.value); }, fullWidth: true, label: "Username", variant: "outlined" }),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(material_1.TextField, { id: "outlined-basic", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, fullWidth: true, label: "Password", variant: "outlined" }),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(Button_1.default, { variant: "outlined" }, "Login"),
                    react_1.default.createElement(Button_1.default, { variant: "outlined", onClick: register }, "Register"))))));
}
exports.default = Login;
//# sourceMappingURL=Login.js.map