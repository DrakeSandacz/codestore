import {observable, action} from 'mobx';

import firebase from 'firebase';


class UploadStore{


    @observable title = null;
    @observable price = null;
    @observable category = null;
    @observable description = null;
    @observable editorHtml = ''; // for quill
    @observable tags = [];
    @observable imagePreviews = [];
    @observable imageDownloadUrls = [];
    @observable zipUrl = null;
    @observable zipFile = null;

    // @observable images = null;
    // @observable imageUrlArray = null;




    @action handleTitleChange(event){
        this.title = event.target.value;
    };

    @action handlePriceChange(event){
        this.price = event.target.value;
    };

    @action handleCategoryChange(event){
        this.category = event.target.value;
    };

    @action handleDescriptionChange(event){
        this.description = event.target.value;
    };

    @action handleHtmlChange = (html) => {
        this.editorHtml = html;
    };

    @action checkHtml = () => {
        console.log('check html');
        console.log(this.editorHtml);
    };

    @action handleTagsInput = (tags) =>{
        this.tags = tags;
    };


    // gets zip file download url
    // sets zipUrl observable
    // works with handleZipChange function
    @action getZipUrl(doc){
        console.log('getZipUrl called');
       doc.ref.getDownloadURL().then((downloadUrl) => {
           console.log('zip download url: ' + downloadUrl);
           this.zipUrl = downloadUrl;
       });

    }




    // Handles zip file input change
    // uploads to cloud storage
    // gets and sets zipUrl observable
    @action handleZipChange(event) {
        const storageRef = firebase.storage().ref();
        const zip = event.target.files[0];
        this.zipFile = event.target.files[0];

        storageRef.child('zip/' + zip.name).put(zip)
            .then((doc) => {this.getZipUrl(doc);}).catch((error) => console.log('error uploading zip' + error));

    }



    // gets image download url after uploading to firebase storage
    // pushes image download url to imageDownloadUrls array
    @action getImageDownloadUrl(doc){
        console.log('getImageDownloadUrl called');
        doc.ref.getDownloadURL().then((downloadUrl) => {
            console.log('image download url: ' + downloadUrl);
            this.imageDownloadUrls.push(downloadUrl);
        });
    }


    // used when selecting image to upload
    // sets preview images
    // uploads image to firebase storage
    @action handleImage(event){
        const storageRef = firebase.storage().ref();
        const image = event.target.files[0];
        // const imageLocalUrl = URL.createObjectURL(image);
        const previewObj = new Object({name: image.name, localUrl: URL.createObjectURL(image)});
        this.imagePreviews.push(previewObj);

        storageRef.child('images/' + image.name).put(image)
            .then((doc) => {this.getImageDownloadUrl(doc)}).catch((error) => console.log('error uploading zip: ' + error));

    }





    @action addFirstTemplate = (authorId, docId) => {
        firebase.firestore().collection('user').doc(authorId).set({
            templates: [docId]
        }, {merge: true});

    }


    @action updateAuthorTemplates = (authorId, docId, templateArray) => {
        const templates = templateArray;
        templates.push(docId);

        firebase.firestore().collection('user').doc(authorId).set({
            templates: templates
        }, {merge: true});


    }


    @action addAuthorTemplateReference = (author, docId) => {
        const authorId = author.uid;

        firebase.firestore().collection('user').doc(authorId).get()
            .then((author) => {
                const authorTemplates = author.data().templates;

                if(!authorTemplates){
                    this.addFirstTemplate(authorId, docId);

                } else {
                    this.updateAuthorTemplates(authorId, docId, authorTemplates);
                }

            }).catch((error) => console.log('error: ' + error));

    }



    @action uploadTemplate = (user) => {
        const templateAuthor = new Object();
        templateAuthor.uid = user.id;
        templateAuthor.username = user.username;


        // const authorId = uid;

        console.log('uploadTemplate called');
        firebase.firestore().collection('templates').add({
            title: this.title,
            price: parseInt(this.price),
            category: this.category,
            description: this.editorHtml,
            tags: this.tags,
            images: this.imageDownloadUrls,
            zipUrl: this.zipUrl,
            dateCreated: new Date(),
            authorId: templateAuthor.uid,
            authorName: templateAuthor.username,
            active: 0,
        }).then((doc) => {
            console.log('successful template upload: ' + doc.id);
            this.addAuthorTemplateReference(templateAuthor, doc.id);

        }).catch((error) => console.log(error));


    }



}


export default new UploadStore();

