import { onValue, ref } from "firebase/database";
import { database } from "../firebaseConfig";

export const getSingers = async (maxItem?: number) => {
  const singersRef = ref(database, "singers");

  const result: any[] = await new Promise((resolve) => {
    onValue(singersRef, (snapshot) => {
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childValue = childSnapshot.val();
        data.push({
          id: childKey,
          link: `/singers/${childKey}`,
          ...childValue,
        });
      });
      if (maxItem) {
        data = data.slice(0, maxItem);
      }
      resolve(data);
    });
  });
  return result;
};

export const getSingerDetail = async (id: string) => {
  const singerDetailRef = ref(database, "singers/" + id);

  const result: any[] = await new Promise((resolve) => {
    onValue(singerDetailRef, (snapshot) => {
      const childKey = snapshot.key;
      const childValue = snapshot.val();
      const data: any = {
        id: childKey,
        ...childValue,
      };
      resolve(data);
    });
  });
  return result;
};
