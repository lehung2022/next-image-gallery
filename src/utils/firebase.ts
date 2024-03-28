// firebaseConfig.ts
// Remember to install firebase, once we open the project

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string; // Measurement ID is optional
};

console.log("Firebase API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
console.log(
  "Firebase Auth Domain:",
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
);
console.log(
  "Firebase Project ID:",
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);
console.log(
  "Firebase Storage Bucket:",
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
);
console.log(
  "Firebase Messaging Sender ID:",
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
);
console.log("Firebase App ID:", process.env.NEXT_PUBLIC_FIREBASE_APP_ID);
console.log(
  "Firebase Measurement ID:",
  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
);

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "DEFAULT_SENDER_ID", // Provide a default value if messagingSenderId is undefined
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "", // Optional measurement ID
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
