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
    console.log(error.code, " ", error.message);
    if (
      error.code === "auth/invalid-email" ||
      error.code === "auth/missing-email"
    ) {
      throw new Error("Please re-check your email field");
    }

    if (error.code === "auth/internal-error") {
      throw new Error("Please re-check your password field");
    }

    if (error.code === "auth/internal-error") {
      throw new Error("An error has occured, please review your information");
    }
  }
}
