const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3f20118eead94533603b9665190dd88`;

// 'mongodb+srv://tomer157:Rozalin456789@weather-ktfsb.mongodb.net/weather?retryWrites=true&w=majority'
