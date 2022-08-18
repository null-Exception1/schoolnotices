import discum
import time
import random
bot = discum.Client(token='NzY5NTI5MzM3ODU3ODM1MDE5.GSbwgs.edrcq8ruNFQ6jldMEuj6ISBcfz5lD1mhj_a8RU', log=False)
channel = "1001820243682934855"
while True:
    print(time.ctime())
    if "11:30:00" in time.ctime():
        bot.sendMessage(channel, random.choice("washed my eyes","eyes washed just now","just washed my eyes"))
    if "00:28:00" in time.ctime():
        bot.sendMessage(channel, random.choice("washed my eyes","eyes washed just now","just washed my eyes"))
    
    time.sleep(1)
