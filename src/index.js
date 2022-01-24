require('dotenv').config()
import app from './app';

async function main(){

    const port =  4000 || process.env.PORT;

    await app.listen(port);
    console.log(`Server running on port ${port}`);
}

main();