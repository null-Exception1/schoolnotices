module.exports = {
    name: 'poll',
    description: 'poll command',
    async execute(message, args, MessageEmbed, Permissions) {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS, true)) return message.channel.send('`You do not have permissions to start a poll.`');
        let firstOp = args[0] ? args[0] : "";
        let secondOp = args[1] ? args[1] : "";
        let thirdOp = args[2] ? args[2] : "";
        let fourthOp = args[3] ? args[3] : "";
        let fifthOp = args[4] ? args[4] : "";
        let sixthOp = args[5] ? args[5] : "";

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`New Poll..`)
        .setDescription(`**React on suitable emojis for suitable options to vote.**\n
        ${(firstOp != "") ? `1️⃣ to vote ${firstOp}` : ""}\n
        ${(secondOp != "") ? `2️⃣ to vote ${secondOp}` : ""}\n
        ${(thirdOp != "") ? `3️⃣ to vote ${thirdOp}` : ""}\n
        ${(fourthOp != "") ? `4️⃣ to vote ${fourthOp}` : ""}\n
        ${(fifthOp != "") ? `5️⃣ to vote ${fifthOp}` : ""}\n
        ${(sixthOp != "") ? `6️⃣ to vote ${sixthOp}` : ""}`)
        .setTimestamp();

        let msg = await message.channel.send({ embeds: [embed] });

        (firstOp != "") ? await msg.react(`1️⃣`) : "";
        (secondOp != "") ? await msg.react(`2️⃣`) : "";
        (thirdOp != "") ? await msg.react(`3️⃣`) : "";
        (fourthOp != "") ? await msg.react(`4️⃣`) : "";
        (fifthOp != "") ? await msg.react(`5️⃣`) : "";
        (sixthOp != "") ? await msg.react(`6️⃣`) : "";
    }
}