import requests
import discord
from bs4 import BeautifulSoup
import time
i = ['0', '7', 'C', 'd', 'D', '-', 'Z', 'G', 'V', 'M', 'D', '2', 'V', '4', 'z', 'H', 'm', 'z', '_', 'T', 'c', 'b', 'V', 'R', 'P', 'w', 'y', '.', 'Q', 'v', 'D', 'E', 'Y', 'Y', '.', '3', 'M', 'z', 'M', '5', 'U', 'T', 'M', 'z', 'A', 'z', 'M', 'y', 'k', 'D', 'N', '0', 'I', 'D', 'M', '1', 'A', 'T', 'O']
i.reverse()
TOKEN = "".join(i)
client = discord.Client()
def getall():
    htm = requests.get('https://dpsrkp.net/category/notices').text
    w = BeautifulSoup(htm)
    h = w.text
    j = []
    for i in range(1,len(h.split('Read More »'))-1):
        k = h.split('Read More »')[i]
        k = k.replace('\n','')
        k = k.replace('\r','')
        k = k.replace('\xa0',' ')
        k = k.replace('   ',' ')
        j.append(k)
    return j
print(getall())
@client.event
async def on_ready():
    print("IM HERE")

@client.event
async def on_message(message):
    if message.content == "!notices":
        embed=discord.Embed(title="Notices", description="", color=discord.Color.green())
        
        m = getall()
        for i in m:
            embed.add_field(name=str(m.index(i)+1), value=i, inline=False)
        await message.channel.send(embed=embed)

last_m = getall()
client.run(TOKEN)
while True:
    time.sleep(5)
    m = getall()
    if last_m[0] != m[0]:
        channel = client.get_channel('852814482455658508')
        embed=discord.Embed(title="Notice", description=m[0], color=discord.Color.green())
        channel.send(embed=embed)
