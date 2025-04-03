define(["require", "exports", "react/jsx-runtime", "react", "react-dom/client", "./App"], function (require, exports, jsx_runtime_1, react_1, client_1, App_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    if ((_a = window.Telegram) === null || _a === void 0 ? void 0 : _a.WebApi) {
        window.Telegram.WebApi.ready();
        window.Telegram.WebApi.expand();
    }
    var root = client_1.default.createRoot(document.getElementById('root'));
    root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
});
