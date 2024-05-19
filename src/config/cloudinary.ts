const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: "dulz7fjbz", 
    api_key: "353983549681837", 
    api_secret: "2fgmrieR2ITA9GoDwngfupAluKU", // Click 'View Credentials' below to copy your API secret
    secure: true
});

module.exports = cloudinary