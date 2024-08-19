import firebase_admin
from firebase_admin import credentials, firestore
import json

cred_path = "./gosia-gajewska-firebase-adminsdk-60mxw-ecfc8e5255.json"

cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred, {
	'databaseURL':"https://default.firebaseio.com",
	})

database = firestore.client()
collection_name = 'gosia-gajewska-portfolio'

# collection = database.collection("gosia-gajewska-portfolio").stream()
# for k in collection:
#     print(k.to_dict())




data_to_firebase = [
    {
        "description": "The subject of my PhD thesis is „AVANT PROVOCATEUR – fashion as aesthetic rebellion „.  In 2012 as a result of my study, research, creative thoughts and experience my PhD project started taking shape.  Artbook Avant Provocateur is part of the PhD project.  The catalog is hand-sewn and bound, made in a limited edition of 5 pieces.  The cover features a thermoplastic plate from which orthopedic braces are made. The tab is made of black cotton tape sewn with a zigzag stitch. The motif of this stitch scrolls throughout the catalog as an element of the graphic layout.  Its purpose is to provide knowledge about orthopedic disorders related to the osteoarticular system in artistic form.  The catalog was shown at the exhibition at the Apteka Sztuki Gallery in Warsaw, 2015.  Offset paper 190g / 23 x 31 cm / 120 pages",
        "name": "Avant Provocateur artbook – phd project",
        "slug": "avant-provocateur-artbook-phd-project",
        "mainPage": True,
        "thumbImg": "https://gosiagajewska.com/wpgg/wp-content/uploads/2015/03/katalog-doktorski__1110501.jpg",
        "id": "2"
    },
    {
        "name": "Avant Provocateur fashion collection",
        "description": "The subject of my PhD thesis is „AVANT PROVOCATEUR – fashion as aesthetic rebellion „.  In 2012 as a result of my study, research, creative thoughts and experience my PhD project started taking shape.  In Avant Provocateur fashion collection I am trying to blur the harmful boundary between people with and without disability. The collection consist of eight corrective garments intended for all women. I would like my clothes to be the medium through which non-disabled people will explore the world of people with disabilities and get used to it. I belive, that main role of the role of the clothing is not to beautify the body of a person but support its physical condition and health, make the body feel comfortable. This way the art of fashion would make a lot of sense. Therfore, my entire collection has a sporty character. Clothes are mainly made of medical and healthy materials. I used healthy wool fabric, lycra, breathable fabric with silver ions, beneficial health mustard seeds for filling and splinting thermoplastics.  In 2013, I organized a photo session of the collection at the Museum of Modern Art in Warsaw. I used the set design created for the exhibition „Square in the Pavilion”. The model posed on the background of exercise equipment.  fot. Arkadiusz Wiedeński",
        "slug": "avant-provocateur fashion-collection",
        "thumbImg": "https://gosiagajewska.com/wpgg/wp-content/uploads/2020/07/Logo-Gosia-Gajewska_new_scalone_white.png",
        "mainPage": True,
        "id": "1"
    },
    {
        "name": "Mermaid",
        "description": "The Mermaid of Warsaw – sign designed in 2015 for the needs of a Warsaw-themed festival.",
        "slug": "mermaid",
        "thumbImg": "https://gosiagajewska.com/wpgg/wp-content/uploads/2018/05/syrenka_alone.jpg",
        "mainPage": True,
        "id": "3"
    },
    {
        "name": "Strategic presentation",
        "description": "Strategic Presentation „Strong Magazines in the world of media”for Bauer Publishing House. The presentation was shown at the National Museum in Warsaw, 13.01.2020.",
        "slug": "strategic-presentation",
        "thumbImg": "https://gosiagajewska.com/wpgg/wp-content/uploads/2020/07/Gosia_Gajewska_Prezentacja_Strategiczna_fot1.jpg",
        "mainPage": True,
        "id": "4"
    }

]


firebase_db = database.collection(collection_name)


for item in data_to_firebase:
	firebase_db.document(item['id']).set({
		'name': item['name'],
		'description': item['description'],
		'slug': item['slug'],
		'thumbImg': item['thumbImg'],
		'id': item['id'],
		'mainPage': item['mainPage']
	})