module.exports = async (client) =>{
    const guild = client.guilds.cache.get('900058475932028928');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('948081119792865357');
        const botCount = guild.members.cache.filter(member => member.user.bot).size;
        const botChannel = guild.channels.cache.get('948081137891295292');
        const channelCount = guild.channels.cache.size;
        const countChannel = guild.channels.cache.get('948081467144163398');
        channel.setName(`👑 | All Members: ${memberCount.toLocaleString()}`);
        botChannel.setName(`🤖 | All Bots: ${botCount.toLocaleString()}`);
        countChannel.setName(`⚡ | Channels: ${channelCount}`);
        //console.log('Updating Member Count');
    }, 5000);
}