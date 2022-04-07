import discum
from discord.ext import tasks
import asyncio
bot = discum.Client(token='NzY5NTI5MzM3ODU3ODM1MDE5.Yk69jQ.xQHxbYPcwBMeCIDwg4okMhbFdn0', log=False)

@bot.gateway.command
def helloworld(resp):
    if resp.event.ready_supplemental: #ready_supplemental is sent after ready
        pass
    if resp.event.message:
        pass
async def lp():
    while True:
        bot.sendMessage("895174767915720745", "pls fish")
        await asyncio.sleep(1)
        bot.sendMessage("895174767915720745", "pls dig")
        await asyncio.sleep(1)
        bot.sendMessage("895174767915720745", "pls beg")
        await asyncio.sleep(1)
        bot.sendMessage("895174767915720745", "pls hunt")
        await asyncio.sleep(35)
a = asyncio.get_event_loop()
a.create_task(lp())
a.run_forever()

