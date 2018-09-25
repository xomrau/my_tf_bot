// to include a module, use require() fn w/ the name of the module
//
const Discord = require('discord.js');

// starting point for any bots: new Discord.Client(options)
const client = new Discord.Client()
const key = require('./key.json')

client.on('ready', () => {
    console.log(client.readyAt) // time at which the client was last regarded as being in a READY state
    console.log('Connected as ' + client.user.tag) // .tag = discord tag for the users ie. TwistedFate Bot#2013
})

client.on('ready', () => {
    // List servers the bot is connected to
    console.log('Servers: ')
    client.guilds.forEach((guild) => {
        console.log(' - ' + guild.name)
    })
}) 


// COMMANDS
//

// 'message' = Emitted whenever a message is created
// type = Message

client.on('message', (messageReceived) => {
    if (messageReceived.author == client.user) {
        return // Prevent bot from responding to its own msgs
    }

    if (messageReceived.content.startsWith('!')){
        // js str.startsWith(' ')
        // .content = content of the message
        processCommand(messageReceived)
    }
}) 

function processCommand(messageReceived) { // breakdown the command
    let fullCommand = messageReceived.content.substr(1) // remove '!'
    let splitCommand = fullCommand.split(' ') // split the full command 
    let primCommand = splitCommand[0] // first word is the primary command
    // array.slice(start, end)
    let arg = splitCommand.slice(1) // other words = args/params for the command

    console.log('Command: ' + primCommand)
    console.log('Argument(s): ' + arg)

    if (primCommand == 'help') {
        helpCommand(arg, messageReceived)
    } else if (a) {

    } else {
        messageReceived.channel.send('Hold it partner, I reckon you try `!help`.')
    }
}

function helpCommand(arg, messageReceived) {

}

const token = JSON.parse(key)

client.login(token['discord_bot_secret_token'])