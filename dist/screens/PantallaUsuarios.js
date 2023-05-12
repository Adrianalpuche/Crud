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
var TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
var material_1 = require("@mui/material");
var Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
var react_router_dom_1 = require("react-router-dom");
var AddBox_1 = __importDefault(require("@mui/icons-material/AddBox"));
var UserFitebase_1 = require("../resources/UserFitebase");
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var firestore_1 = require("firebase/firestore");
var firebase_1 = require("../firebase");
var material_2 = require("@mui/material");
function PantallaUsuarios() {
    var _this = this;
    var _a = (0, react_1.useState)([]), users = _a[0], setUser = _a[1];
    var _b = (0, react_1.useState)(false), borrar = _b[0], setBorrars = _b[1];
    var _c = (0, react_1.useState)(null), userToDelete = _c[0], setUserToDelete = _c[1];
    (0, react_1.useEffect)(function () {
        getUsersData();
    }, []);
    var getUsersData = function () { return __awaiter(_this, void 0, void 0, function () {
        var fbUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, UserFitebase_1.getUsers)()];
                case 1:
                    fbUsers = _a.sent();
                    setUser(fbUsers.docs);
                    return [2 /*return*/];
            }
        });
    }); };
    var deleteUser = function (user) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, firestore_1.deleteDoc)((0, firestore_1.doc)(firebase_1.db, "users", user.id))];
                case 1:
                    _a.sent();
                    getUsersData();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var rowColors = ['#FFFFFF', '#F5F8F8'];
    var colors = ['#242424', '#242424'];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/Formulario/0" },
                react_1.default.createElement(material_1.IconButton, { size: "large", edge: "end", "aria-label": "logo", style: { color: '#479BBF' } },
                    react_1.default.createElement(AddBox_1.default, { fontSize: 'large' })))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(TableContainer_1.default, { component: material_1.Paper },
                react_1.default.createElement(material_1.Table, { sx: { minWidth: 650 }, "aria-label": "simple table" },
                    react_1.default.createElement(material_1.TableHead, null,
                        react_1.default.createElement(material_1.TableRow, { style: { backgroundColor: '#F5F8F8', } },
                            react_1.default.createElement(material_1.TableCell, { style: { color: '#242424' } }, "ID"),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: '#242424' } }, "Name"),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: '#242424' } }, "Address"),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: '#242424' } }, "Role"),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: '#242424' } }, "Salary"),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: '#242424' } }, "Actions"),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: '#242424' } }, "Delete"))),
                    react_1.default.createElement(material_1.TableBody, null, users.map(function (user, index) {
                        var _a = user.data(), name = _a.name, address = _a.address, role = _a.role, salary = _a.salary;
                        var id = user.id;
                        function setConfirmDelete(arg0) {
                            throw new Error('Function not implemented.');
                        }
                        return (react_1.default.createElement(material_1.TableRow, { key: id, sx: { '&:last-child td, &:last-child th': { border: 0 } }, style: { backgroundColor: rowColors[index % 2] } },
                            react_1.default.createElement(material_1.TableCell, { style: { color: colors[index % 2] } }, id),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: colors[index % 2] } },
                                " ",
                                name),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: colors[index % 2] } }, address),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: colors[index % 2] } }, role),
                            react_1.default.createElement(material_1.TableCell, { align: "right", style: { color: colors[index % 2] } }, salary),
                            react_1.default.createElement(material_1.TableCell, { align: "right" },
                                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/Formulario/".concat(user.id) },
                                    react_1.default.createElement(material_1.IconButton, { size: "large", edge: "end", "aria-label": "logo", style: { color: '#479BBF' } },
                                        react_1.default.createElement(Edit_1.default, { fontSize: 'large' })))),
                            react_1.default.createElement(material_1.TableCell, { align: "right" },
                                react_1.default.createElement(material_1.IconButton, { size: "large", edge: "end", "aria-label": "logo", style: { color: '#C70039' }, onClick: function () {
                                        setUserToDelete(user);
                                        setBorrars(true);
                                    } },
                                    react_1.default.createElement(Delete_1.default, { fontSize: 'large' }))),
                            borrar && (react_1.default.createElement(material_2.Dialog, { open: true, onClose: function () { return setBorrars(false); } },
                                react_1.default.createElement(material_2.DialogTitle, null, "Confirmar eliminaci\u00F3n"),
                                react_1.default.createElement(material_2.DialogContent, null,
                                    react_1.default.createElement("p", null,
                                        "\u00BFEst\u00E1s seguro de que quieres eliminar al usuario ", userToDelete === null || userToDelete === void 0 ? void 0 :
                                        userToDelete.id,
                                        "?")),
                                react_1.default.createElement(material_2.DialogActions, null,
                                    react_1.default.createElement(material_2.Button, { variant: "contained", style: { backgroundColor: '#C70039', color: 'white', borderRadius: 5 }, onClick: function () {
                                            deleteUser(userToDelete);
                                            setBorrars(false);
                                        } }, "S\u00ED"),
                                    react_1.default.createElement(material_2.Button, { variant: "contained", style: { backgroundColor: '#479BBF', color: 'white', borderRadius: 5 }, onClick: function () {
                                            setUserToDelete(null);
                                            setBorrars(false);
                                        } }, "No"))))));
                    })))))));
}
exports.default = PantallaUsuarios;
//# sourceMappingURL=PantallaUsuarios.js.map