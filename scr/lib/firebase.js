// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7JUJwT6_F_Nfn-VEdKNOQOjtcielLBAY",
  authDomain: "coffe-school.firebaseapp.com",
  projectId: "coffe-school",
  storageBucket: "coffe-school.firebasestorage.app",
  messagingSenderId: "281594211042",
  appId: "1:281594211042:web:d24744829c58ca9e0cccbb",
  measurementId: "G-WZ9H9WFMP7"
};
// ==========================================
// Firebase Services — لا تعدّل هنا
// ==========================================
import { initializeApp }                          from 'firebase/app'
import { getAuth }                                from 'firebase/auth'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'

const app  = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db   = getFirestore(app)

// تفعيل العمل أوفلاين
enableIndexedDbPersistence(db).catch(err => {
  if (err.code === 'failed-precondition') console.warn('Offline persistence: multiple tabs open')
  else if (err.code === 'unimplemented')  console.warn('Offline persistence: not supported in this browser')
})

export default app
