import discum
from discord.ext import tasks
import asyncio
bot = discum.Client(token='NzY5NTI5MzM3ODU3ODM1MDE5.Yk69jQ.xQHxbYPcwBMeCIDwg4okMhbFdn0', log=False)

@bot.gateway.command
def helloworld(resp):
    if resp.event.ready_supplemental: #ready_supplemental is sent after ready
        user = bot.gateway.session.user
        print("Logged in as {}#{}".format(user['username'], user['discriminator']))
    if resp.event.message:
        m = resp.parsed.auto()
        guildID = m['guild_id'] if 'guild_id' in m else None #because DMs are technically channels too
        channelID = m['channel_id']
        username = m['author']['username']
        discriminator = m['author']['discriminator']
        content = m['content']
        print("> guild {} channel {} | {}#{}: {}".format(guildID, channelID, username, discriminator, content))

async def lp():
    while True:
        bot.sendMessage("895174767915720745", "pls fish")
        bot.sendMessage("895174767915720745", "pls dig")
        bot.sendMessage("895174767915720745", "pls beg")
        bot.sendMessage("895174767915720745", "pls hunt")
        await asyncio.sleep(35)
a = asyncio.get_event_loop()
a.create_task(lp())
a.run_forever()

print('hi')
bot.gateway.run(auto_reconnect=True)
