import { onValue, ref } from "firebase/database";
import { database } from "../firebaseConfig";

export const getDataCategories = async (maxItem?: number) => {
  const categoriesRef = ref(database, "categories");

  const result: any[] = await new Promise((resolve) => {
    onValue(categoriesRef, (snapshot) => {
      let data: any = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childValue = childSnapshot.val();
        data.push({
          id: childKey,
          link: `/categories/${childKey}`,
          ...childValue,
        });
      });
      if(maxItem) {
        data = data.slice(0, maxItem);
      }
      resolve(data);
    });
  });
  return result;
};
