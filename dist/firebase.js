"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = void 0;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBVYVlJGd3VqRG110uJTBy-EqaDqTyMiLo",
    authDomain: "react-2f644.firebaseapp.com",
    projectId: "react-2f644",
    storageBucket: "react-2f644.appspot.com",
    messagingSenderId: "87920434028",
    appId: "1:87920434028:web:f166470c09342a6bad7149"
};
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
//# sourceMappingURL=firebase.js.map