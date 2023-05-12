"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var KeyboardReturn_1 = __importDefault(require("@mui/icons-material/KeyboardReturn"));
var react_hook_form_1 = require("react-hook-form");
var UserFitebase_1 = require("../resources/UserFitebase");
var Formulario = function () {
    var _a, _b, _c, _d;
    var _e = (0, react_hook_form_1.useForm)(), reset = _e.reset, register = _e.register, errors = _e.formState.errors, getValues = _e.getValues;
    var _f = (0, react_1.useState)(''), error = _f[0], setError = _f[1];
    var _g = (0, react_1.useState)(''), success = _g[0], setSuccess = _g[1];
    var _h = (0, react_1.useState)(), user = _h[0], setUser = _h[1];
    var id = (0, react_router_dom_1.useParams)().id;
    var _j = (0, react_1.useState)(true), isLoading = _j[0], setIsLoading = _j[1];
    (0, react_1.useEffect)(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var fbUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) return [3 /*break*/, 2];
                        setIsLoading(true);
                        return [4 /*yield*/, (0, UserFitebase_1.getUsersID)(id)];
                    case 1:
                        fbUser = _a.sent();
                        setUser(fbUser);
                        setIsLoading(false);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    function onSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = id;
                        event.preventDefault();
                        userData = getValues();
                        if (!user) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, UserFitebase_1.updateUser)(userId, userData)];
                    case 1:
                        _a.sent();
                        setSuccess("Usuario actualizado");
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, UserFitebase_1.addUser)(userData)];
                    case 3:
                        _a.sent();
                        setSuccess("Usuario agregado");
                        _a.label = 4;
                    case 4:
                        reset();
                        return [2 /*return*/];
                }
            });
        });
    }
    ;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isLoading && react_1.default.createElement("p", null, "Cargando..."),
        !isLoading && user && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("form", { onSubmit: onSubmit },
                react_1.default.createElement(material_1.TextField, __assign({ label: "Nombre", defaultValue: user === null || user === void 0 ? void 0 : user.name }, register("name", { required: true }))),
                errors.name && react_1.default.createElement("span", null, "Este campo es requerido"),
                react_1.default.createElement(material_1.TextField, __assign({ label: "Direccion", defaultValue: user === null || user === void 0 ? void 0 : user.address }, register("address", { required: true }))),
                errors.address && react_1.default.createElement("span", null, "Este campo es requerido"),
                react_1.default.createElement(material_1.TextField, __assign({ label: "Role", defaultValue: user === null || user === void 0 ? void 0 : user.role }, register("role", { required: true }))),
                errors.role && react_1.default.createElement("span", null, "Este campo es requerido"),
                react_1.default.createElement(material_1.TextField, __assign({ label: "Salario", defaultValue: user === null || user === void 0 ? void 0 : user.salary }, register("salary", { required: true, pattern: /^[0-9]+$/ }))),
                ((_a = errors.salary) === null || _a === void 0 ? void 0 : _a.type) === "required" && (react_1.default.createElement("span", null, "Este campo es requerido")),
                ((_b = errors.salary) === null || _b === void 0 ? void 0 : _b.type) === "pattern" && (react_1.default.createElement("span", null, "Este campo debe ser un n\u00FAmero entero")),
                react_1.default.createElement(material_1.Button, { type: "submit", variant: "contained", color: "primary" },
                    "Enviar",
                    react_1.default.createElement(KeyboardReturn_1.default, { fontSize: "large" }))),
            errors && react_1.default.createElement("p", null, error),
            success && react_1.default.createElement("p", null, success),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/PantallaUsuarios" },
                react_1.default.createElement(material_1.IconButton, { size: "large", edge: "start", "aria-label": "logo", style: { color: "#47BF95" } },
                    react_1.default.createElement(KeyboardReturn_1.default, { fontSize: "large" }))))),
        !isLoading && !user && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("form", { onSubmit: onSubmit },
                react_1.default.createElement(material_1.TextField, __assign({ label: "Nombre", defaultValue: "" }, register("name", { required: true }))),
                errors.name && react_1.default.createElement("span", null, "Este campo es requerido"),
                react_1.default.createElement(material_1.TextField, __assign({ label: "Direccion", defaultValue: "" }, register("address", { required: true }))),
                errors.address && react_1.default.createElement("span", null, "Este campo es requerido"),
                react_1.default.createElement(material_1.TextField, __assign({ label: "Role", defaultValue: "" }, register("role", { required: true }))),
                errors.role && react_1.default.createElement("span", null, "Este campo es requerido"),
                react_1.default.createElement(material_1.TextField, __assign({ label: "Salario", defaultValue: "" }, register("salary", { required: true, pattern: /^[0-9]+$/ }))),
                ((_c = errors.salary) === null || _c === void 0 ? void 0 : _c.type) === "required" && (react_1.default.createElement("span", null, "Este campo es requerido")),
                ((_d = errors.salary) === null || _d === void 0 ? void 0 : _d.type) === "pattern" && (react_1.default.createElement("span", null, "Este campo debe ser un n\u00FAmero entero")),
                react_1.default.createElement(material_1.Button, { type: "submit", variant: "contained", color: "primary" },
                    "Enviar",
                    react_1.default.createElement(KeyboardReturn_1.default, { fontSize: "large" }))),
            errors && react_1.default.createElement("p", null, error),
            success && react_1.default.createElement("p", null, success),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/PantallaUsuarios" },
                react_1.default.createElement(material_1.IconButton, { size: "large", edge: "start", "aria-label": "logo", style: { color: "#47BF95" } },
                    react_1.default.createElement(KeyboardReturn_1.default, { fontSize: "large" })))))));
};
exports.default = Formulario;
//# sourceMappingURL=Formulario.js.map