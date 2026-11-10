import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const firebaseConfig = {
  apiKey: 'AIzaSyCsPXf-4YFcfC2xErbIBy4E-d5wyubAsFo',
  authDomain: 'laivyproject.firebaseapp.com',
  projectId: 'laivyproject',
  storageBucket: 'laivyproject.firebasestorage.app',
  messagingSenderId: '30584037439',
  appId: '1:30584037439:web:bbaa29a07455e2833b988a',
  measurementId: 'G-H0XJ11PESH',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provedorGoogle = new GoogleAuthProvider()

export async function loginComGoogle() {
  const resultado = await signInWithPopup(auth, provedorGoogle)
  return resultado.user
}
