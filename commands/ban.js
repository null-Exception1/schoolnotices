module.exports = {
    name: 'ban',
    description: "This bans a member!",
    execute(message, args, Permissions){
        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS, true)) return message.channel.send('`You do not have permissions to use this command.`');
        const member = message.mentions.users.first();
        if(member){
            const membertarget = message.guild.members.cache.get(member.id);
            membertarget.ban();
            message.channel.send("`User has been banned...`");
        } else{
            message.channel.send("`User Could'nt be banned`");
        }
    }
}