const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const isRequired = require('../utils/validation');

const key = {
    async set(){
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type:'input',
                name:'key',
                message:'Enter API Key' .green + 'https://nomics.com',
                validation: isRequired
            }
        ])

        const key = keyManager.setKey(input.key);
        if(key){
            console.log('API Key Set'.blue);
        }
    },
    show(){
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log('Current API Key:',key.yellow);
            return key;
        } catch (error) {
            console.log(error);
        }
    },
    remove(){
        try {
          const keyManager = new KeyManager();
          keyManager.deleteKey();

          console.log('Key Removed'.blue);

          return key;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = key;