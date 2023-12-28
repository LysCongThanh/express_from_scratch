const app = require('./src/App');

const _PORT = process.env.PORT;

app.listen(_PORT, () => {
    console.log('Server running at ', _PORT);
});