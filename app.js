const express = require('express');
const path = require('path');
const app = express();

// Statik dosyaları sun
app.use(express.static(path.join(__dirname, 'public/index.html')));

// PORT tanımlaması
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});