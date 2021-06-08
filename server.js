const path = require('path');
const express = require('express');

const api = require('./routes/api'); // импортируем роутер

const indexHTML = path.resolve(__dirname,'./public/index.html');
const app = express();





// все статические файлы в папку public
app.use('/', express.static('public'));
// app.use(express.static(path.join(__dirname, "build")));
// запросы к api выносите в отдельный файл и подключаете как миделвер
app.use('/api', api);
app.use('/house/', api);


// на все остальные запросы 
// app.get('/', (req, res) => res.sendFile(indexHTML));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   });

const PORT = process.env.PORT || 3012

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)})




// const express = require('express')
// const path = require('path')

// const app = express()

// var houses = require('./src/node_modules/data/houses.json')
// app.get('/api/listings', async (req, res) => {
//     await new Promise((resolve, reject) => {
        
        
//         resolve(res)
//     }
//     )
    
//     res.status(200).json(houses.slice(0, 20));
//     res.send(houses);
// })

// // app.get('/phones', function (req, res) {
  
// // });

// app.get('/', (req,res) => {
//     res.status(200)
//     res.sendFile(path.join(__dirname,'public', 'index.html'))
// })

// const PORT = process.env.PORT || 3012

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })