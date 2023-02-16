import { addDoc, collection, getDocs, } from "firebase/firestore";
import { db } from "./firebase.js";
function lookupName(_id) {
    return "Steve";
}
const commentConverter = {
    toFirestore: (modelObject) => {
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
        };
    },
};
const commentCollection = collection(db, 'Comments').withConverter(commentConverter);
await addDoc(commentCollection, { comment: 'Hello World', userId: '123' });
setTimeout(() => getDocs(commentCollection).then(snaps => {
    snaps.docs.forEach(snap => {
        const { comment, userName, _firebasePath } = snap.data();
        console.info(`${userName} said "${comment}" (path: ${_firebasePath})`);
    });
}), 2000);
// getDocs(commentCollection).then(snaps => {
//     snaps.docs.forEach(snap => {
//         const { comment, userName, _firebasePath } = snap.data()
//         console.info(`${userName} said "${comment}" (path: ${_firebasePath})`)
//     })
// })
//# sourceMappingURL=index.js.map