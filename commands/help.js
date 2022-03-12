module.exports = {
    name: 'help',
    description: 'Help Command',
    execute(message, args, MessageEmbed) {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Commands List')
        .setDescription('__*PREFIX :*    **.**__\n`Make sure to use prefix before commands..`')
        .addFields(
            { name: '__ban @user__', value: '`Ban Someone using this command...`'},
            { name: '__kick @user__', value: '`Kick someone using this command`'},
            { name: '__ticket__', value: '`Open a ticket.`'},
            { name: '__unban <user id>__', value: '`Unban a banned user using thier id`'},
            { name: '__mute @user <time (in sec)>__', value: '`Mute a user for some time with this command..`'},
            { name: '__unmute @user__', value: '`Unmute a muted user.`'},
            { name: '__dm @user <message>__', value: '`Dm the mentioned a message through the bot.`'},
            { name: '__poll <Options>__', value: '`Create a poll. (Max 6 options).`'},
            { name: '__rr <Options>__', value: '`Create a Reaction Role message. (Options must be same as the role name.) (Max 5 options).`'}
        )
        .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
}