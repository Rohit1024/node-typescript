import {
  addDoc,
  collection,
  FirestoreDataConverter,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase.js";

type Comment = {
  userId: string;
  userName: string;
  comment: string;
  _firebasePath: string;
};
type InsertComment = { userId: string; comment: string };
function lookupName(_id: string) {
  return "Steve";
}

const commentConverter: FirestoreDataConverter<Partial<Comment>> = {
  toFirestore: (modelObject: Partial<Comment>) => {
    return {
      userId: modelObject.userId,
      comment: modelObject.comment,
      userName: lookupName(modelObject.userId)
    };
  },
  fromFirestore: (snapshot, options) => {
    const { userId, comment } = snapshot.data(options);
    return {
      userId,
      comment,
      userName: lookupName(userId),
      _firebasePath: snapshot.ref.path,
    } as Comment;
  },
};

const commentCollection = collection(db, 'Comments').withConverter(commentConverter)

await addDoc(commentCollection, { comment: 'Hello World', userId: '123' })

setTimeout(() => getDocs(commentCollection).then(snaps => {
  snaps.docs.forEach(snap => {
      const { comment, userName, _firebasePath } = snap.data()
      console.info(`${userName} said "${comment}" (path: ${_firebasePath})`)
  })
}), 2000);

