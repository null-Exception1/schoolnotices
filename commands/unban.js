module.exports = {
    name: 'unban',
    description: "This unbans a member!",
    execute(message, args, Permissions){
        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS, true)) return message.channel.send('`You do not have permissions to use this command.`');
          
          let userID = args[0]
            message.guild.bans.fetch().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(userID)
      });

      message.reply('`User has been unbanned....`')
    }
}