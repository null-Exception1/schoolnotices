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
    for i in range(len(h.split('Read More »'))-1):
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
    if "!notices" in message.content:
        if int(message.content.split(' ')[1]) <= 12 and int(message.content.split(' ')[1]) != 0:
            m = getall()
            embed=discord.Embed(title="Notice "+(message.content.split(' ')[1]), description=m[int(message.content.split(' ')[1])-1], color=discord.Color.green())
            await message.channel.send(embed=embed)
        else:
            embed=discord.Embed(title="Notice index can be not more than 12 or 0", description="weird bug but ok", color=discord.Color.green())
            await message.channel.send(embed=embed)
last_m = getall()
client.run(TOKEN)

"""
import requests
import discord
from bs4 import BeautifulSoup
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
client.run(TOKEN)
"""
