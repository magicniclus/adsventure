import { database } from "./firebase.config";
import { getDatabase, ref, set } from "firebase/database";

export function writeUserData(userId, name, surname, email, phone, message) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      message: message,
    })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
