"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    // auth: {
    //     type: "OAuth2",
    //     user: "info@habitatconstructores.com",
    //     clientId: "1089648144565-ovbu2kr3a2p2h0isuhqdluac5s93b4e1.apps.googleusercontent.com",
    //     clientSecret: "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",
    //     refreshToken: "1//04tR90w9hvjDJCgYIARAAGAQSNwF-L9IrARHjY1DJXgYXCfvCNCFKjk_xcCuAdmGLuBMckf3dbc5mxpyTIaTuVEfcH3sWVP5RY7Q"
    // }
    auth: {
         user: 'jonathanmelo0905@gmail.com', // generated ethereal user
         pass: 'maszojzhljouoxqy',  //generated ethereal password
    },
    // auth: {
    //     user: 'info@habitatconstructores.com',
    //     pass: 'zyvhybejprxidzsd', // generated ethereal password
    // },
});
exports.transporter.verify().then(() => {
    console.log('ready for send emails');
});
