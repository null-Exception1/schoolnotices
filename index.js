const {
    Client,
    Intents,
    Collection,
    MessageEmbed,
    Permissions
} = require('discord.js');

require('dotenv').config();

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_VOICE_STATES]
});


var prefix = process.env.PREFIX;

const fs = require('fs');

const Auditlog = require("discord-auditlog");

const memberCount = require('./counter/member-count');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
    memberCount(client);
});

client.on('guildMemberAdd', guildMember => {
    let verifyChannel  = guildMember.guild.channels.cache.get('900546626790240316'); // Replace this id with Verify Channel ID.
    let acChannel = guildMember.guild.channels.cache.get('921506413556150292'); // Replace this id with Account Channel ID.

    guildMember.send(`**Welcome <@${guildMember.id}>, If you want to talk in any of the channels in 𝗠.𝗘.𝗘 𝗦𝗠𝗣 24/7:**\n
    ⬇️ Click below, and react to the message to verify ⬇️\n\n
    ${verifyChannel}\n\n
    **If you want to get an account to play in the SMP or to play with others:**\n
    ⬇️ Click below and make a ticket! ⬇️\n\n
    ${acChannel}\n\n
    **(Disclaimer: The option to make accounts will only be available after you verify)**\n\n
    - Sent from the **𝗠.𝗘.𝗘 𝗦𝗠𝗣 24/7** server.`);

});

const forbiddenWordsOne = ['booobs','boooobs','booooobs','booooooobs','breasts','buceta','bugger','bum','bunnyfucker','butt','butthole','buttmuch','buttplug','c0ck','c0cksucker','carpetmuncher','cawk','chink','cipa','cl1t','clit','clitoris','clits','cnut','cock','cock-sucker','cockface','cockhead','cockmunch','cockmuncher','cocks','cocksuck','cocksucked','cocksucker','cocksucking','cocksucks','cocksuka','cocksukka','cok','cokmuncher','coksucka','coon','cox','crap','cum','cummer','cumming','cums','cumshot','cunilingus','cunillingus','cunnilingus','cunt','cuntlick','cuntlicker','cuntlicking','cunts','cyalis','cyberfuc','cyberfuck','cyberfucked','cyberfucker','cyberfuckers','cyberfucking','d1ck','damn','dick','dickhead','dildo','dildos','dink','dinks','dirsa','dlck','dog-fucker','doggin','dogging','donkeyribber','doosh','duche','dyke','ejaculate','ejaculated','ejaculates','ejaculating','ejaculatings','ejaculation','ejakulate','ballsack','bastard','beastial','beastiality','bellend','bestial','bestiality','bi+ch','biatch','bitch','bitcher'];

const forbiddenWordsTwo = ['bitchers','bitches','bitchin','bitching','bloody','blowjob','blowjob','blowjobs','boiolas','bollock','bollok','boner','boob','boobs','fuck','fucker','f4nny','fag','fagging','faggitt','faggot','faggs','fagot','fagots','fags','fanny','fannyflaps','fannyfucker','fanyy','fatass','fcuk','fcuker','fcuking','feck','fecker','felching','fellate','fellatio','fingerfuck','fingerfucked','fingerfucker','fingerfuckers','fingerfucking','fingerfucks','fistfuck','fistfucked','fistfucker','fistfuckers','fistfucking','fistfuckings','fistfucks','flange','fook','fooker','fuck','fucka','fucked','fucker','fuckers','fuckhead','fuckheads','fuckin','fucking','fuckings','fuckingshitmotherfucker','fuckme','fucks','fuckwhit','fuckwit','fudgepacker','fudgepacker','fuk','fuker','fukker','fukkin','fuks','fukwhit','fukwit','fux','fux0r','f_u_c_k','gangbang','gangbanged','gangbangs','gaylord','gaysex','goatse','god-dam','god-damned','goddamn','goddamned','hardcoresex','hell','heshe','hoar','hoare','hoer','homo','hore','horniest','horny','hotsex','jack-off','jackoff','jap','jerk-off','jism','jiz','jizm','jizz','kawk','knob','knobead','knobed','knobend','knobhead','knobjocky','knobjokey','kock','kondum','kondums','kum','kummer','kumming','kums','kunilingus','l3i+ch','l3itch','labia','lmfao','lust','lusting','m0f0','m0fo','m45terbate','ma5terb8','ma5terbate','masochist','master-bate','masterb8','masterbat*','masterbat3','masterbate','masterbation','masterbations','masturbate','mo-fo','mof0','mofo','mothafuck','mothafucka','mothafuckas','mothafuckaz','mothafucked','mothafucker','b!tch','b00bs','b17ch','b1tch','ballbag','balls'];


client.on('messageCreate', message => {

    if (forbiddenWordsOne.includes(message.content) || forbiddenWordsTwo.includes(message.content)) {
        message.delete()
        .then(message.channel.send('Message Deleted:\n**Usage of Bad Words is not permitted in this server**'))
    };

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if (command === 'rr') {
        client.commands.get('rr').execute(message, args, Permissions, MessageEmbed, client);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Permissions);
    } else if (command === 'unban') {
        client.commands.get('unban').execute(message, args, Permissions);
    } else if (command === 'poll') {
        client.commands.get('poll').execute(message, args, MessageEmbed, Permissions);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, Permissions);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args, Permissions);
    } else if (command === 'ticket') {
        client.commands.get('ticket').execute(message, args, Permissions);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Permissions);
    } else if (command === 'dm') {
        client.commands.get('dm').execute(message, args, Permissions, client);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, MessageEmbed);
    }
});

client.login(process.env.BOT_TOKEN);