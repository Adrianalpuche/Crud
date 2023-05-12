import { doc, collection, updateDoc, getDoc, addDoc, getDocs, DocumentData, CollectionReference } from "firebase/firestore";
import { db } from "../firebase";
import { User } from "../resources/User";

const usersCollection: CollectionReference<DocumentData> = collection(db, 'users');


export const addUser = async (user: User) => {
    try {
        await addDoc(usersCollection, user);
        return true;
    } catch (error) {
        return false;
    }
};

export const updateUser  = async (userId: string, newData: Partial<User>): Promise<void> => {
    const userRef = doc(usersCollection, userId);
  
    try {
      await updateDoc(userRef, newData);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
  
  

export const getUsers = async () => {
    const result = await getDocs(usersCollection);
    return result;
};

export const getUsersID = async (id: string): Promise<User | undefined> => {
    const userid = await getDoc(doc(usersCollection, id));
    return userid.data() as User | undefined;
};