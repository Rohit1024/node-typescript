import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
const profileRef = collection(db, "profile");
const datesRef = collection(db, "dates");
const profiles = await getDocs(profileRef);
const dates = await getDocs(datesRef);
let startDates = [];
dates.docs.forEach((doc) => {
    console.log(doc.data());
    profiles.docs.forEach((profile) => {
        console.log(profile.data());
        if (profile.data().userEmail[profile.data().userEmail.length - 1] === doc.data().userEmail) {
            let finalDate = `${doc.data().startDate[doc.data().startDate.length - 1]} 
      ${doc.data().startMonth[doc.data().startMonth.length - 1]}`;
            startDates.push(finalDate);
        }
    });
});
console.log(startDates);
//# sourceMappingURL=index-8.js.map