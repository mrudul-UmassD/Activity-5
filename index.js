const commission = require('./CalculateComission');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value of lock: ', (lock) => {
    rl.question('Enter the value of stock: ', (stock) => {
        rl.question('Enter the value of barrel: ', (barrel) => {
            const result = commission(lock, stock, barrel);
            console.log(result);
            rl.close();
        });
    });
});
console.log(result);
