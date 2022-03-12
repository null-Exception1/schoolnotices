module.exports = {
    name: 'kick',
    description: "This kicks a member!",
    execute(message, args, Permissions){
        const member = message.mentions.users.first();
        if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS, true)) return message.channel.send('`You do not have permissions to use this command.`');

        if(member){
            const membertarget = message.guild.members.cache.get(member.id);
            membertarget.kick();
            message.channel.send("`User has been kicked`");
        } else{
            message.channel.send("`User Could'nt be kicked`");
        }
    }
}