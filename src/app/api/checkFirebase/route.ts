import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";

async function testFirestoreConnection() {
  try {
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    // console.log("Successfully connected! Documents in the collection:");
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} =>`, doc.data());
    // });
  } catch (error) {
    console.error("Error connecting to Firestore:", error);
  }
}

testFirestoreConnection();
