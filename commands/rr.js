module.exports = {
    name: 'rr',
    description: "Sets up a reaction role message!",
    async execute(message, args, Permissions, MessageEmbed, client) {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS, true)) return message.channel.send('`You do not have permissions to use this command.`');
        
        const role1 = message.guild.roles.cache.find(role => role.name === args[0]);
        const role2 = message.guild.roles.cache.find(role => role.name === args[1]);
        const role3 = message.guild.roles.cache.find(role => role.name === args[2]);
        const role4 = message.guild.roles.cache.find(role => role.name === args[3]);
        const role5 = message.guild.roles.cache.find(role => role.name === args[4]);
 
        let firstOp = args[0] ? args[0] : "";
        let secondOp = args[1] ? args[1] : "";
        let thirdOp = args[2] ? args[2] : "";
        let fourthOp = args[3] ? args[3] : "";
        let fifthOp = args[4] ? args[4] : "";
    
 
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pick a role!')
            .setDescription(`Click on the below emojis to get your favourite role !!\n\n`
                + `${(firstOp != "") ? `1️⃣ to vote ${firstOp}` : ""}\n
                ${(secondOp != "") ? `2️⃣ to vote ${secondOp}` : ""}\n
                ${(thirdOp != "") ? `3️⃣ to vote ${thirdOp}` : ""}\n
                ${(fourthOp != "") ? `4️⃣ to vote ${fourthOp}` : ""}\n
                ${(fifthOp != "") ? `5️⃣ to vote ${fifthOp}` : ""}`)
            .setTimestamp();
        
        let msg = await message.channel.send({ embeds: [embed] });

        (firstOp != "") ? await msg.react(`1️⃣`) : "";
        (secondOp != "") ? await msg.react(`2️⃣`) : "";
        (thirdOp != "") ? await msg.react(`3️⃣`) : "";
        (fourthOp != "") ? await msg.react(`4️⃣`) : "";
        (fifthOp != "") ? await msg.react(`5️⃣`) : "";

        let channel = message.channel.id;
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === `1️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                }
                if (reaction.emoji.name === `2️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
                }
                if (reaction.emoji.name === `3️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role3);
                }
                if (reaction.emoji.name === `4️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role4);
                }
                if (reaction.emoji.name === `5️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role5);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === `1️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                }
                if (reaction.emoji.name === `2️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                }
                if (reaction.emoji.name === `3️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role3);
                }
                if (reaction.emoji.name === `4️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role4);
                }
                if (reaction.emoji.name === `5️⃣`) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role5);
                }
            } else {
                return;
            }
 
        });

        await message.delete();
    }
 
}   