// to include a module, use require() fn w/ the name of the module
//
const Discord = require('discord.js');
const Matchup = require('./classes/matchups.js');
const Help = require('./classes/helps.js');
const Build = require('./classes/build.js');

// starting point for any bots: new Discord.Client(options)
const client = new Discord.Client();
const key = require('./key.json');

client.on('ready', () => {
    console.log(client.readyAt) // time at which the client was last regarded as being in a READY state
    console.log('Connected as ' + client.user.tag) // .tag = discord tag for the users ie. TwistedFate Bot#2013
});

client.on('ready', () => {
    // List servers the bot is connected to
    console.log('Servers: ')
    client.guilds.forEach((guild) => {
        console.log(' - ' + guild.name)
    })
});


// COMMANDS
//

// 'message' = Emitted whenever a message is created
// type = Message

client.on('message', (messageReceived) => {
    if (messageReceived.author == client.user) {
        return // Prevent bot from responding to its own msgs
    };

    if (messageReceived.content.startsWith('!')){
        // js str.startsWith(' ')
        // .content = content of the message
        processCommand(messageReceived)
    };
}) ;

function processCommand(messageReceived) { // breakdown the command
    let fullCommand = messageReceived.content.substr(1); // remove '!'
    let splitCommand = fullCommand.split(' '); // split the full command into a list 
    let primCommand = splitCommand[0]; // first word is the primary command
    // array.slice(start, end)
    
    let arg = splitCommand.slice(1); // other words = args/params for the command
    
    

    console.log('Command: ' + primCommand);
    console.log('Argument(s): ' + arg);

    if (primCommand == 'help') {
        helpCommand(arg, messageReceived);
    } else if (primCommand == 'matchup') {
        if (arg.length == 0){
            messageReceived.channel.send('Hey partner, can you be more specific by writing `!matchup [champion\'s name]`.')
        } else{
            matchupCommand(arg, messageReceived)
        }
    } else if (primCommand == 'build') {
        buildCommand(arg, messageReceived);
    } else if (primCommand == 'grossgore'){
        const commands = new Help.Helps();
        const embed = new Discord.RichEmbed();
        embed.setTitle(commands.listOfResponses[primCommand].title);
        messageReceived.channel.send(embed);

    } else if (primCommand == 'patch') {
        patchCommand(arg, messageReceived);

    } else {
        messageReceived.channel.send('Hold it partner, I reckon you try `!help`.')
    }
};


//returns list of commands
function helpCommand(arg, messageReceived) {
    let helpContent = '```List of commands:\n\n';
    const commands = new Help.Helps();

    for (var prop in commands.listOfResponses){
        
        let commandDescription = `!${prop} - ${commands.listOfResponses[prop].description}\n`;
        //console.log('success2');
        console.log(commandDescription);
        helpContent += commandDescription;
        console.log(helpContent);
    };
    helpContent += '```'
    messageReceived.channel.send(helpContent);
}
 

//returns matchup infos
function matchupCommand(arg, messageReceived){
    const name = 'matchup';
    const matchup = new Matchup.Matchups();
    let champName = arg.toString(); // This is only temporary. Will make a seperate function that format inputs
    const embed = new Discord.RichEmbed();
    for (var i in matchup.listOfChamps){
        if (champName === i){
            champName = champName.charAt(0).toUpperCase() + champName.substr(1);
            embed.setTitle(`**Twisted Fate vs. ${champName}**`).setColor('#8B0000'); //*Later fix color depending on difficulty.
            try{
                for (var j in matchup.listOfChamps[i]){
                    if (matchup.listOfChamps[i][j] === ''){ //if value is empty -> skip.
                        continue;
                    }
                    embed.addField(j, matchup.listOfChamps[i][j]);
                    console.log(j);
                    //const a = j;
                    //console.log(matchup.listOfChamps[i][a]); do this if you want to refer.   
                }
            } catch(e){ //this was here to check where the error.
                if(e instanceof RangeError){
                    console.log('ERROR IS HERE!');
                }
            } 
            //for (var j in matchup.listOfChamps[i]){
                //console.log(j, typeof j);
                //embed.addField(j, value= matchup.listOfChamps[i].j);
                //console.log(matchup.listOfChamps[i].j);

            //}
            messageReceived.channel.send(embed);
            console.log(embed);
            console.log(`Respond to command: ${name} ${arg}`);
        }
    };
};

function buildCommand(arg, messageReceived){ //still needs to fix!!!
    const name = 'build';
    const builds = new Build.Build();
    const embed = new Discord.RichEmbed();
    
    //messageReceived.channel.send(embed);
    try{
        for (var i in builds.list){
            embed.addField(i,builds.list[i]);
        }
    } catch(e){ //this was here to check where the error.
        if(e instanceof RangeError){
            console.log('ERROR IS HERE!');
        }
    }
    messageReceived.channel.send(embed);
    console.log(embed);
    console.log(`Respond to command: ${name} ${arg}`);
}

//returns current or any patch note.
function patchCommand(arg, messageReceived){
    
}

client.login(key.discord_bot_secret_token);


