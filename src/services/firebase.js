import { initializeApp } from 'firebase/app'
import { initializeAuth, inMemoryPersistence, browserPopupRedirectResolver, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// SERVICE: login com o Google usando o Firebase.

// Dados do projeto no Firebase (são públicos, podem ficar no código)
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

// inMemoryPersistence: o login do Google não fica salvo no navegador
const auth = initializeAuth(app, {
  persistence: inMemoryPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
})
const provedorGoogle = new GoogleAuthProvider()

// Abre o popup do Google e devolve a conta escolhida
export async function loginComGoogle() {
  const resultado = await signInWithPopup(auth, provedorGoogle)
  return resultado.user
}
