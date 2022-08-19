import datetime
from Google import Create_Service
from googleapiclient.http import MediaFileUpload
import time 
import os    
while True:
    for i in os.listdir('openings/videos'):
        print("Publishing :",i)
        CLIENT_SECRET_FILE = 'client_secrets.json'
        API_NAME = 'youtube'
        API_VERSION = 'v3'
        SCOPES = ['https://www.googleapis.com/auth/youtube.upload']

        service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)

        upload_date_time = datetime.datetime(2020, 12, 25, 12, 30, 0).isoformat() + '.000Z'

        request_body = {
            'snippet': {
                'categoryI': 19,
                'title': i[:-4],
                'description': '#shorts #chess #openings #chessopenings #learnchessonline #chesstutorials #chesscom #chessrush #chesspuzzle #chessvideoplus #openingsequence #chessopeningtricks #chessopeningtraps #chessbaseindia #chesslover',
                'tags': ['shorts','chess','openings','chessopenings','learnchessonline','chesstutorials','chesscom','chessrush','chesspuzzle','chessvideoplus','openingsequence','chessopeningtricks','chessopeningtraps']
            },
            'status': {
                'privacyStatus': 'public',
                'selfDeclaredMadeForKids': False, 
            },
            'notifySubscribers': True
        }

        mediaFile = MediaFileUpload('openings/videos/'+i)

        response_upload = service.videos().insert(
            part='snippet,status',
            body=request_body,
            media_body=mediaFile
        ).execute()

        time.sleep(1800)
