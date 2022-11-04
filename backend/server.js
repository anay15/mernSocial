const app = require('./app');
const { connectDatabase } = require("./config/database");

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});