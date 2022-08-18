import discum
import time
import random
bot = discum.Client(token='NzY5NTI5MzM3ODU3ODM1MDE5.GSbwgs.edrcq8ruNFQ6jldMEuj6ISBcfz5lD1mhj_a8RU', log=False)
channel = "1001820243682934855"
a = False
while True:
    if "12:59:00" in time.ctime() or "12:59:01" in time.ctime() or "12:59:02" in time.ctime() and a == False:
        a = True
        bot.sendMessage(channel, random.choice(["washed my eyes","eyes washed just now","just washed my eyes"]))
    else:
        a = False
    if "00:28:00" in time.ctime() or "00:28:01" in time.ctime() or "00:28:02" in time.ctime() and a == False:
        a = True
        bot.sendMessage(channel, random.choice(["washed my eyes","eyes washed just now","just washed my eyes"]))
    else:
        a = False
    
    time.sleep(1)
