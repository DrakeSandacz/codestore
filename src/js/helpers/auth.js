import {observable, action} from 'mobx';
import firebase from 'firebase';
import validator from 'validator';
import history from '../history';
// import isEmail from 'validator/lib/isEmail';
// import equals from 'validator/lib/equals';



class AuthStore{

    //login observables
    @observable email = null;
    @observable password = null;
    @observable loginVisible = false; // modal visibility control

    //register observables
    @observable registerVisible = false;
    @observable forgotVisible = false;
    @observable registerEmail = null;
    @observable registerPassword = null;
    @observable registerPasswordConfirm = null;
    @observable registerName = null;
    @observable invalidPasswords = false;
    @observable invalidEmail = false;
    @observable invalidUsername = false;
    @observable altErrorText = '';

    // navigate Observable
    @observable userProfile = null;



    @observable user = null;
    @observable passwordConfirm = '';

    //set login email
    @action setEmail(event){
        this.email = event.target.value;
    };

    //set login password
    @action setPassword(event){
        this.password = event.target.value;
    };


    @action toggleLoginOpen = () => {this.loginVisible = true;};

    @action toggleLoginClosed = () => {this.loginVisible = false;};

    @action toggleRegisterOpen = () => {this.registerVisible = true;};

    @action toggleRegisterClosed = () => {this.registerVisible = false;};

    @action toggleForgotPasswordOpen = () => {this.forgotVisible = true;};

    @action toggleForgotPasswordClosed = () => {this.forgotVisible = false;};


    @action showCreateAccount = () => {
        this.loginVisible = false;
        this.forgotVisible = false;
        this.registerVisible = true;
    };

    @action showAlreadyRegistered = () => {
        this.registerVisible = false;
        this.forgotVisible = false;
        this.loginVisible = true;
    };

    @action showForgotPassword = () => {
        this.forgotVisible = true;
        this.loginVisible = false;
        this.registerVisible = false;
    };

    @action setRegisterEmail(event){
        this.registerEmail = event.target.value;
    }

    @action setRegisterPassword(event){
        this.registerPassword = event.target.value;
    }

    @action setRegisterPasswordConfirm(event){
        this.registerPasswordConfirm = event.target.value;
    }

    @action setRegisterName(event){
        this.registerName = event.target.value;
    }





    @action setPasswordConfirm(event){this.passwordConfirm = event.target.value;};


    // sets user data to user observable
    // user in app.js render method
    @action setUserData(user){
        console.log('calling setUserData: ' + user);
        this.user = user;
    }


    @action createUser = () => {
        firebase.auth().createUserWithEmailAndPassword(this.registerEmail, this.registerPassword)
            .then((data) => {

                firebase.firestore().collection('user').doc(data.user.uid).set({
                    id: data.user.uid,
                    email: data.user.email,
                    username: this.registerName,
                    likes: ['first'],
                })
                    .then((data) => {
                        console.log('user doc created on register: ' + data);
                        this.registerName = null;
                        this.registerEmail = null;
                        this.registerPassword = null;
                        this.registerPasswordConfirm = null;
                    })
                    .catch((error) => console.log('error creating user doc on register: ' + error));

            })
            .then(() => {this.registerVisible = false;})

            .catch((error) => {
                console.log('error creating user: ' + typeof error.code);
                this.registerName = null;
                this.registerEmail = null;
                this.registerPassword = null;
                this.registerPasswordConfirm = null;
                this.altErrorText = error.message;
            });
    };


    @action handleRegisterUser = () => {
        var validEmail = validator.isEmail(this.registerEmail);
        var passwordsMatch = validator.equals(this.registerPassword, this.registerPasswordConfirm);
        if (!validEmail && !passwordsMatch){
            this.invalidPasswords = true;
            this.invalidEmail = true;
            this.registerPassword = '';
            this.registerPasswordConfirm = '';
        } else if (!validEmail && passwordsMatch){
            this.invalidEmail = true;
            this.registerPassword = '';
            this.registerPasswordConfirm = '';
        } else if (validEmail && !passwordsMatch){
            this.invalidPasswords = true;
            this.registerPassword = '';
            this.registerPasswordConfirm = '';
        } else {
            this.createUser();
        }
    };


    @action handleSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((data) => {
                console.log('successful login: ' + data);
            })
            .then(() => {this.loginVisible = false;})
            .catch((error) => console.log('error signing in: ' + error));
    };

    @action changePasswordEmail = () => {
        firebase.auth().sendPasswordResetEmail(this.email)
            .then(function() {
                console.log("got it");
            })
            .catch(function(error) {
                console.log("error" + error);
            });
    };

    @action deleteAccount = () => {
        var aUser = firebase.auth().currentUser;
        aUser.delete().then(function() {
            console.log("ur accounts gone dude")
        }).catch(function(error){
            console.log("uhhhhhhhhhhh rocky1818" + error);
        })
    }
}



export default new AuthStore();