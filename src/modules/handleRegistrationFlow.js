import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export async function userIsSignedIn() {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve(uid);
      } else {
        reject(false);
      }
    });
  });
}

export async function logInUser(email, password) {
  const auth = getAuth();
  try {
    let successfulEntry = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return successfulEntry;
  } catch (error) {
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
    if (error.code === "auth/user-not-found") {
      throw new Error("User not found, please review your information");
    }
  }
}
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

    if (error.code === "auth/email-already-in-use") {
      throw new Error("This email is already in use");
    }
  }
}
