import Firebase from "firebase/app";
import slugify from "slugify";

import { IRoom } from "./IRoom";

const RoomsCollection = Firebase.firestore().collection("rooms");

const get = async () =>
  RoomsCollection.get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data()) as IRoom[];
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      return [];
    });

const add = ({ name }: Pick<IRoom, "name">) =>
  RoomsCollection.add({
    name,
    slug: slugify(name, { lower: true }),
    createdAt: Firebase.firestore.Timestamp.now(),
    createdBy: Firebase.auth().currentUser?.uid || null,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

const remove = () => console.log;

export const RoomsService = { get, add, remove };