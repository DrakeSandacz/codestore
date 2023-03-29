import {observable, action} from 'mobx';

import history from '../../js/history';
import firebase from 'firebase';


class ProductStore{

    @observable templateId = '';
    @observable templateName = '';
    @observable templateDescription = '';
    @observable templateObject = null;
    @observable templatePrice = 0;
    @observable templateImages = null;
    @observable commentText = '';
    @observable deleteATemplate = null;
    @observable templateComments = [];



    @action navToProfile(authorId) {
        console.log('nav to profile doe');
        const navProfile = '/profile/' + authorId;
        history.push(navProfile);
    }

    @action setTemplateId(id) {
        console.log('set Template Id called: ' + id);
        this.templateId = id;
    }

    @action navToProductPage(templateId){
        console.log('navToProductPage called');
        const navUrl = '/productPage/' + templateId;
        history.push(navUrl);
    }

    
    @action handleNavigate(templateId){
        console.log('handle navigate called');


        firebase.firestore().collection('templates').doc(templateId).get()
            .then((doc) => {
                // use object instead individual fields
                this.templateName = doc.data().name;
                this.templateDescription = doc.data().description;
                this.templatePrice = doc.data().price;
                this.templateImages = doc.data().images;
                return doc.id
            })
            .then((id) => {
                console.log('2nd then template id: ' + id);
                const navUrl = '/productPage/' + id;
                history.push(navUrl);
            }).catch((error) => console.log('error with handle navigate: ' + error));


    }

/*
    @action deleteTemplate = (templateId) => {
        firebase.firestore().collection('templates').doc(templateId).delete()
            .then(function() {
                console.log("uhhhh ohhhh thicc");
            })
            .catch(function(error) {
                console.error("Error removing document: ", error);
            });
    };*/

    //handle user like on product
    @action handleLike(user, templateId){
        const likeArray = user.likes;
        likeArray.push(templateId);
        firebase.firestore().collection('user').doc(user.id).set({
            likes: likeArray
        }, {merge: true});
    }


    // handles when a user unlikes a product
    @action handleUnlike(user, templateId){
        const likeArray = user.likes;
        const index = likeArray.indexOf(templateId);
        if(index > -1){
            likeArray.splice(index, 1);
            firebase.firestore().collection('user').doc(user.id).set({
                likes: likeArray
            }, {merge: true});
        }

    }


    //handle comment input change
    @action handleCommentText = (html) => {
        this.commentText = html;
    };

    //handles adding comment to template
    @action handleCommentUpload(templateId, author){
        firebase.firestore().collection('templates').doc(templateId).collection('comments').add({
            authorId: author.id,
            authorName: author.username,
            text: this.commentText,
            dateCreated: new Date(),
        })
            .then((doc) => console.log(doc))
            .then(() => window.location.reload())
            .catch((error) => console.log(error));
    }


    @action getProductComments = (templateId) => {
        console.log(templateId);
        this.templateComments = [];

        firebase.firestore().collection('templates').doc(templateId).get()
            .then((doc) => {
                doc.ref.collection('comments').get().then((comments) => {
                    var commentArray = [];
                    comments.forEach((comment) => {commentArray.push(comment.data());});
                    this.templateComments = commentArray;
                });
            })
    }


}


export default new ProductStore();

