const fs = require("fs");
const util = require("util");
const urlsafe = require("url-safe-base64") 

// encode image to base64url
const encodeBase64URL = (imageAsBase64) => {
    const safe = urlsafe.encode(imageAsBase64).replace(/\./g, "");
    return safe;
}

// encode image to base64
const encodeBase64 = (photoPath) => {
    var imageAsBase64 = fs.readFileSync(photoPath, 'base64');
    return imageAsBase64;
}

const res = encodeBase64("foto/leptospirosis-1.jpg")
const simpan = `{"data":"${res}"}`

fs.writeFileSync("output.txt", simpan)
fs.writeFileSync("base64.txt", res)

console.log("udah")