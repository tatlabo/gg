import firebase_admin
from firebase_admin import credentials, firestore
import json
from db import db 

cred_path = "./gosia-gajewska-firebase-adminsdk-60mxw-ecfc8e5255.json"

cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred, {
	'databaseURL':"https://default.firebaseio.com",
	})

database = firestore.client()
collection_name = 'gosia-gajewska-portfolio'


collection = database.collection("gosia-gajewska-portfolio").stream()

# for k in collection:
#     print(k.to_dict())


firebase_db = database.collection(collection_name)

def put_into_db(db):
    for item in db:
        firebase_db.document(item['id']).set({
            'name': item['name'],
            'description': item['description'],
            'slug': item['slug'],
            'thumbImg': item['thumbImg'],
            'id': item['id'],
            'mainPage': item['mainPage'],
            'genre': item['genre'],
            'html': item['html'],
            'createdAt': firestore.SERVER_TIMESTAMP,
            'updatedAt': firestore.SERVER_TIMESTAMP,
            'images': item['images']
        })
	
put_into_db(db)