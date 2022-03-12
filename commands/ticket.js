module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message, args, Permissions) {

      const msgChannel = message.channel.id;

      const emojis = ['booknquill', 'balloon1', 'rail', 'Alex', 'cookie1', 'fish1', 'Agent', 'cake1', 'pickaxe', 'water', 'Steve', 'Apple', 'carro1t', 'panda', 'sign', 'potion', 'map1', 'llama1'];

      let msg = await message.channel.send('`What is your Code ?....`');

      for(let i=0; i<emojis.length; i++) {
      let reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === emojis[i]);
        msg.react(reactionEmoji);
      };

      const filter = (reaction, user) => {
        return !user.bot;
      }

      msg.awaitReactions({ filter, max: 4, time: 60000, errors: ['time'] })
      .then(async collected => {
        console.log(collected.size)
        let userReactionOne = collected.at(0);
        let userReactionTwo = collected.at(1);
        let userReactionThree = collected.at(2);
        let userReactionFour = collected.at(3);
        
        let emojiOne = message.guild.emojis.cache.find(emoji => emoji.name === userReactionOne._emoji.name);
        let emojiTwo = message.guild.emojis.cache.find(emoji => emoji.name === userReactionTwo._emoji.name);
        let emojiThree = message.guild.emojis.cache.find(emoji => emoji.name === userReactionThree._emoji.name);
        let emojiFour = message.guild.emojis.cache.find(emoji => emoji.name === userReactionFour._emoji.name);

        await message.channel.send(`${emojiOne} ${emojiTwo} ${emojiThree} ${emojiFour}`);

        msg.delete();
      
      });

      const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
      
      //Copy paste your Ticket channels Catergory's ID below.
      channel.setParent("951475510771347496");
  
      channel.permissionOverwrites.edit(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false,
      });
      channel.permissionOverwrites.edit(message.author, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
      });
  
      const reactionMessage = await channel.send("Thank you for contacting support!");
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Error sending emojis!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).permissions.has(Permissions.FLAGS.MANAGE_SERVER, true),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.permissionOverwrites.edit(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("Deleting this channel in 5 seconds!");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
  
      message.channel
        .send(`We will be right with you! ${channel}`)
        .then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 12000);
        })
        .catch((err) => {
          throw err;
        });
    },
};
  