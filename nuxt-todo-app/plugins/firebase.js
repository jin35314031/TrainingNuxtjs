import firebase from 'firebase'

const config = {
    projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length){
    firebase.iniitalizeApp(config)
}

export default firebase