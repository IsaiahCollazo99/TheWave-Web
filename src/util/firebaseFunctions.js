import firebase from '../firebase';
import app from 'firebase/app';
import "firebase/database"
// import { storage } from 'firebase';

const database = app.database();

firebase.auth().useDeviceLanguage();

export const firebaseLogOut = () => firebase.auth().signOut();

export const firebaseLogIn = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const firebaseSignUp = async ( userData ) => {
    const {
        email,
        password,
        username,
        firstName,
        lastName
    } = userData;
    const fullName = firstName + lastName;

    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({
        displayName: username
    })
    console.log(await writeUserData(user, fullName));
    return user;
}

export const getFirebaseIdToken = () => {
	return firebase.auth().currentUser.getIdToken(false);
}

export const firebaseIsEmailExisting = async ( email ) => {
    try {
        const res = await firebase.auth().fetchSignInMethodsForEmail(email);
        return res.length;
    } catch ( error ) {
        throw error;
    }
}

export const writeUserData = async ( userData, full_name ) => {
    const {
        email,
        displayName: username,
        uid
    } = userData;

    return await database.ref("users/" + uid).set({
        username,
        email,
        full_name
    })
}