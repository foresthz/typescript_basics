

interface record {
    name: string;
    value: string;
    sayhello(): string;
}

function sayhello(name: string) {
    console.info(`hello my name is: ${name}`)
}

class TableManager {

}

sayhello('world(name)');

console.info('interface test ..');
