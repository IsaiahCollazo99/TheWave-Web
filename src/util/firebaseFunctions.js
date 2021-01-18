import firebase from '../firebase';
// import { storage } from 'firebase';

firebase.auth().useDeviceLanguage();

export const firebaseLogOut = () => firebase.auth().signOut();

export const firebaseLogIn = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const firebaseSignUp = async ( email, password, displayName ) => {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({
        displayName
    })
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