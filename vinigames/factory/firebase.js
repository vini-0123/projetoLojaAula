import Firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  -
};
Firebase.initializeApp(firebaseConfig);
const conexao = Firebase.firestore();
export default conexao;
