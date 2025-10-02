import { ref, onValue, query, orderByChild, equalTo } from "firebase/database";
import { database } from "../firebaseConfig";

export const getSongsList = async (max?: number, categoryId?: string) => {
  const songRef = ref(database, "songs");
  let songQuery: any;
  if (categoryId) {
    songQuery = query(songRef, orderByChild("categoryId"), equalTo(categoryId));
  } else {
    songQuery = ref(database, "songs");
  }

  const result: any[] = await new Promise((resolve) => {
    onValue(songQuery, (snapshot) => {
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childValue = childSnapshot.val();
        data.push({
          id: childKey,
          ...childValue,
        });
      });
      if (max) {
        data = data.slice(0, max);
      }
      resolve(data);
    });
  });
  return result;
};

export const getSongsWishlist = async (userId: string) => {
  const songRef = ref(database, "songs");
  let songQuery: any = query(
    songRef,
    orderByChild(`wishlist/${userId}`),
    equalTo(true)
  );

  const result: any[] = await new Promise((resolve) => {
    onValue(songQuery, (snapshot) => {
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childValue = childSnapshot.val();
        data.push({
          id: childKey,
          ...childValue,
        });
      });
      resolve(data);
    });
  });
  return result;
};

export const getSongsDetail = async (id: string) => {
  const songRef = ref(database, "songs/" + id);

  const result: any[] = await new Promise((resolve: any) => {
    onValue(songRef, (snapshot) => {
      const childKey = snapshot.key;
      const childValue = snapshot.val();
      if (childValue) {
        const data = {
          id: childKey,
          ...childValue,
        };
        resolve(data);
      } else {
        resolve(null);
      }
    });
  });
  return result;
};
