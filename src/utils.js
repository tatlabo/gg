// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2BZNhjSycpkUMjqSa1DgZoZW8pgBpoTY",
  authDomain: "gosia-gajewska.firebaseapp.com",
  databaseURL: "https://gosia-gajewska-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gosia-gajewska",
  storageBucket: "gosia-gajewska.appspot.com",
  messagingSenderId: "468728848565",
  appId: "1:468728848565:web:ffec073029ca53d2c45efc"
};

import { getFirestore, query, getDocs, getDoc, collection, where, doc } from "firebase/firestore/lite";
export { utilsFirebase }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const portfolio = collection(db, "gosia-gajewska-portfolio")

const utilsFirebase = {}

// utilsFirebase.root = async (displayPage) => {
//     const q = query(collection(db, 'gosia-gajewska-portfolio'), where(displayPage, '==', true))
//     const data = await getDocs(q)
//     return { data: data.docs.data() }
// }
const portfolioData = {
    portfolio: [
        {
            description: "The subject of my PhD thesis is „AVANT PROVOCATEUR – fashion as aesthetic rebellion „.  In 2012 as a result of my study, research, creative thoughts and experience my PhD project started taking shape.  Artbook Avant Provocateur is part of the PhD project.  The catalog is hand-sewn and bound, made in a limited edition of 5 pieces.  The cover features a thermoplastic plate from which orthopedic braces are made. The tab is made of black cotton tape sewn with a zigzag stitch. The motif of this stitch scrolls throughout the catalog as an element of the graphic layout.  Its purpose is to provide knowledge about orthopedic disorders related to the osteoarticular system in artistic form.  The catalog was shown at the exhibition at the Apteka Sztuki Gallery in Warsaw, 2015.  Offset paper 190g / 23 x 31 cm / 120 pages",
            name: "Avant Provocateur artbook – phd project",
            slug: "avant-provocateur-artbook-phd-project",
            mainPage: true,
            thumbImg: "https://gosiagajewska.com/wpgg/wp-content/uploads/2015/03/katalog-doktorski__1110501.jpg",
            id: "2"
        },
        {
            name: "Avant Provocateur fashion collection",
            description: "The subject of my PhD thesis is „AVANT PROVOCATEUR – fashion as aesthetic rebellion „.  In 2012 as a result of my study, research, creative thoughts and experience my PhD project started taking shape.  In Avant Provocateur fashion collection I am trying to blur the harmful boundary between people with and without disability. The collection consist of eight corrective garments intended for all women. I would like my clothes to be the medium through which non-disabled people will explore the world of people with disabilities and get used to it. I belive, that main role of the role of the clothing is not to beautify the body of a person but support its physical condition and health, make the body feel comfortable. This way the art of fashion would make a lot of sense. Therfore, my entire collection has a sporty character. Clothes are mainly made of medical and healthy materials. I used healthy wool fabric, lycra, breathable fabric with silver ions, beneficial health mustard seeds for filling and splinting thermoplastics.  In 2013, I organized a photo session of the collection at the Museum of Modern Art in Warsaw. I used the set design created for the exhibition „Square in the Pavilion”. The model posed on the background of exercise equipment.  fot. Arkadiusz Wiedeński",
            slug: "avant-provocateur fashion-collection",
            thumbImg: "https://gosiagajewska.com/wpgg/wp-content/uploads/2020/07/Logo-Gosia-Gajewska_new_scalone_white.png",
            mainPage: true,
            id: "1"
        },
        {
            name: "Mermaid",
            description: "The Mermaid of Warsaw – sign designed in 2015 for the needs of a Warsaw-themed festival.",
            slug: "mermaid",
            thumbImg: "https://gosiagajewska.com/wpgg/wp-content/uploads/2018/05/syrenka_alone.jpg",
            mainPage: true,
            id: "3"
        },
        {
            name: "Strategic presentation",
            description: "Strategic Presentation „Strong Magazines in the world of media”for Bauer Publishing House. The presentation was shown at the National Museum in Warsaw, 13.01.2020.",
            slug: "strategic-presentation",
            thumbImg: "https://gosiagajewska.com/wpgg/wp-content/uploads/2020/07/Gosia_Gajewska_Prezentacja_Strategiczna_fot1.jpg",
            mainPage: true,
            id: "4"
        }

    ]
}


utilsFirebase.root = async () => {
    const data = await getDocs( portfolio )
    const dataArr = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return { portfolio: dataArr }
}



utilsFirebase.rootElements = async (clause) => {
    return { portfolio: portfolioData.portfolio }
}



utilsFirebase.article = async (clause, slug) => {
    const q = query(portfolio, where(clause, '==', slug))
    const items = await getDocs(q)
    const dataArr = items.docs.map( doc => ({...doc.data(), id: doc.id }))

    return { article: dataArr }
}


