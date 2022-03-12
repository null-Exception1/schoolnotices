const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args, Permissions) {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_SERVER, true)) return message.channel.send('`You do not have permissions to use this command.`');
        const target = message.mentions.users.first();
        if (target) {

            //Change this Main Role to your server's main role which is given to every member.
            let mainRole = message.guild.roles.cache.find(role => role.id === '900098629262536794'); //Change this Members to your role name..

            //You can change this also if you want
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted'); //Change this muted to your role name..
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('`Cant find that member!`');
        }
    }
}