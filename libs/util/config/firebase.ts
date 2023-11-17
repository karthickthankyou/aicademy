import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBU5T1kjaiLVZYmDWb8SrBSd1Xshja-iiA',
  authDomain: 'aicademy-karthick.firebaseapp.com',
  projectId: 'aicademy-karthick',
  storageBucket: 'aicademy-karthick.appspot.com',
  messagingSenderId: '396279960714',
  appId: '1:396279960714:web:e1c86526fb565e2cca4973',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const auth = getAuth(firebaseApp)
