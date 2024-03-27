"use server";
// In next.js 13, both objectFit and layout prop are deprecated from the Image component and must be implemented with style or className.
// Fill is a boolean that is false if not applied and true if present.
// @use-client
import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import firebase from "firebase/app";
import "firebase/storage";
import Link from "next/link";

async function fetchImageUrlsFromFirebase() {
  // Initialize Firebase (ensuring it's only initialized once)
  if (!firebase.apps.length) {
    firebase.initializeApp({
      // Your Firebase config here
    });
  }

  // Get a reference to the storage service
  const storage = firebase.storage();

  // Create a storage reference
  const storageRef = storage.ref();

  // Get image URLs from Firebase Storage
  const imageUrls = [];
  const result = await storageRef.listAll();
  for (const imageRef of result.items) {
    const url = await imageRef.getDownloadURL();
    imageUrls.push(url);
  }

  // Add your specific link to the imageUrls array
  imageUrls.push(
    "https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery-418014.appspot.com/o/B%C3%B9i%20%C4%90%E1%BA%AFc%20Tuy%C3%AAn.jpg?alt=media&token=78342bb3-811c-4f32-a238-b448a8260a5f"
  );

  return imageUrls;
}

// Initialize Firebase outside of the component to run it only on the server
if (!firebase.apps.length) {
  firebase.initializeApp({
    // Your Firebase config here
  });
}

// Corrected export statement with "async" emphasized
export default async function Content() {
  const {
    data: imageUrls,
    isLoading,
    isError,
  } = useQuery("imageUrls", fetchImageUrlsFromFirebase);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching image URLs</div>;

  return (
    <>
      <div className="h-20"></div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {/* Map over imageUrls and render Image components */}
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="relative w-full h-80">
            <Image
              src={imageUrl}
              fill
              style={{ objectFit: "cover" }}
              alt="nah"
            />
          </div>
        ))}
      </div>
    </>
  );
}
