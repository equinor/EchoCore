/* eslint-disable @typescript-eslint/no-var-requires */
const figlet = require('figlet');
const color = '\x1b[36m';
console.log(
    figlet.textSync('Echo Core', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
);
console.log(color, 'Welcome to Echo Core! Have a nice time developing :)');
console.log(
    '------------------------------------------------------------------------------------------------------------------------------------------'
);
