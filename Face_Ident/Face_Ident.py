from deepface import DeepFace
import re

df = DeepFace.find(img_path = "C:/Users/timna/Unknown_Faces/Elon_Musk.jpg", db_path = "C:/Users/timna/Known_Faces",model_name='Facenet')
if len(df)==0:
    print('I do not know who is it!')
else:
    print('It is probably {}!'.format((re.search('Known_Faces[\/\\](.*)\/.*$',df.loc[0,'identity'])).group(1))) #Выводится изображение на экран