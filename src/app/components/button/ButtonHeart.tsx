"use client";

import { authFirebase, database } from "@/app/firebaseConfig";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

export default function ButtonHeart(props: ISongItem) {
  const [isActive, setIsActive] = useState(false);
  const {
    id = "",
    image = "",
    title = "",
    audio = "",
    className = "",
    wishlist = {},
  } = props;

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const userId = user.uid;
        if (wishlist[`${userId}`]) {
          setIsActive(true);
        }
      }
    });
  }, [wishlist]);

  const handleAddWishlist = () => {
    const userId = authFirebase?.currentUser?.uid;
    if (id && userId) {
      const songRef = ref(database, `songs/${id}`);
      runTransaction(songRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            song.wishlist[userId] = null;
            setIsActive(false);
          } else {
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[userId] = true;
            setIsActive(true);
          }
        }
        return song;
      });
    }
  };
  return (
    <>
      <button
        onClick={handleAddWishlist}
        className={
          "w-[34px] h-[34px] text-white border border-white rounded-full inline-flex items-center justify-center text-[15px] " +
          (isActive ? "border-primary bg-primary" : "border-white")
        }
      >
        <FaHeart />
      </button>
    </>
  );
}
