import discum
import time
import random
bot = discum.Client(token='NzY5NTI5MzM3ODU3ODM1MDE5.GSbwgs.edrcq8ruNFQ6jldMEuj6ISBcfz5lD1mhj_a8RU', log=False)
channel = "779279804297248769"
while True:
    print(time.ctime())
    if "12:51:00" in time.ctime() or "12:51:01" in time.ctime() or "12:51:02" in time.ctime():
        bot.sendMessage(channel, random.choice(["washed my eyes","eyes washed just now","just washed my eyes"]))
    if "00:28:00" in time.ctime() or "00:28:01" in time.ctime() or "00:28:02" in time.ctime():
        bot.sendMessage(channel, random.choice(["washed my eyes","eyes washed just now","just washed my eyes"]))
    
    time.sleep(1)
