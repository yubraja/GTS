import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "esp32-7930f.firebaseapp.com",
    databaseURL: "https://esp32-7930f-default-rtdb.firebaseio.com",
    projectId: "esp32-7930f",
    storageBucket: "esp32-7930f.appspot.com",
    messagingSenderId: "754091514021",
    appId: "1:754091514021:web:a0e25d67c2e2439e65554c",
    measurementId: "G-8SV68H4VTF"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export async function getDistanceValue() {
    const distanceRef = ref(database, "ultrasonicSensors/distance"); // Replace "distance" with the actual path to your distance value in the database

    try {
        const snapshot = await get(distanceRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            throw new Error("Distance value not found in the database.");
        }
    } catch (error) {
        throw error;
    }
}
