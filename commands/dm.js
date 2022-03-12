module.exports = {
    name: 'dm',
    description: 'DMs a user',
    execute(message, args, Permissions, client) {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_SERVER, true)) return message.channel.send('`You do not have permissions to use this command.`');
        const target = message.mentions.members.first().id;

        const user = client.users.cache.get(target);
        if (!target) {
            message.reply('`Please mention someone to be warned...`');
            return
        }

        args.shift();

        const msg = args.join(' ');

        user.send(msg);

        message.reply('`DM Sent Successfully...`');
    }
}