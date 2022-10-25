import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export async function registerUser(email, password) {
  const auth = getAuth();
  try {
    let successfulEntry = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return successfulEntry;
  } catch (error) {
    console.log("should be throwing err - ", error.code);
    if (error.code === "auth/invalid-email") {
      console.log("throwing error");
      throw new Error("User has an invalid email");
    }

    if (error.code === "auth/internal-error") {
      throw new Error("An error has occured, please review your information");
    }
  }
}