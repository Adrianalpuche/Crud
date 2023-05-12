"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CatchingPokemon_1 = __importDefault(require("@mui/icons-material/CatchingPokemon"));
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function Navbars() {
    var pages = [
        {
            name: 'Usuarios',
            to: '/PantallaUsuarios',
        },
    ];
    return (react_1.default.createElement(material_1.AppBar, { position: "static", style: { backgroundColor: '#3D5495' } },
        react_1.default.createElement(material_1.Container, { maxWidth: "xl" },
            react_1.default.createElement(material_1.Toolbar, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", style: { color: '#DE253B' } },
                    react_1.default.createElement(material_1.IconButton, { size: "large", edge: "start", "aria-label": "logo", style: { color: '#DE253B' } },
                        react_1.default.createElement(CatchingPokemon_1.default, { fontSize: 'large' }))),
                react_1.default.createElement(material_1.Stack, null, pages.map(function (_a) {
                    var name = _a.name, to = _a.to;
                    return (react_1.default.createElement(material_1.Button, { key: name },
                        react_1.default.createElement(react_router_dom_1.NavLink, { color: 'inherit', style: { color: 'white', backgroundColor: 'transparent', textDecoration: 'none' }, to: to, className: "nav-link" }, name)));
                }))))));
}
exports.default = Navbars;
//# sourceMappingURL=Navbars.js.map