const app = require('./src/kernel');
app.listen(app.port, () => {
    console.log("Server is running at: http://localhost:"+app.port)
});