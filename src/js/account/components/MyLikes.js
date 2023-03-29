import React, { Component } from 'react';
import '../../../css/account/components/accountNav.css';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import history from '../../../js/history';

import TemplatePreview from '../../templates/components/templatePreview';



@inject('ProductStore', 'AuthStore')
@observer
export default class MyLikes extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            noUser: true,
            likedTemplates: null,
            loading: true,
            noLikes: null,


        };

    }

    componentDidMount(){

        if(this.props.AuthStore.user === null){
            console.log('authstore user null');

        } else {
            console.log('authstore user NOT null');
            const userLikes = this.props.AuthStore.user.likes;

            if(!userLikes || userLikes.length == 0){
                console.log('nolikes');
                this.setState({loading: false, noLikes: true});

            } else {
                // this.waitForLikes(userLikes);
                userLikes.forEach((like) => {
                    firebase.firestore().collection('templates').doc(like).get()
                        .then((doc) => {
                            const likedObj = new Object(doc.data());
                            likedObj.id = doc.id;
                            likedObj.previewImage = doc.data().images[0];
                            this.updateLikedItems(likedObj);

                        }).catch((error) => console.log(error));

                })

            }


        }


    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }


    // waitForLikes = async (likes) => {
    //     console.log('waitForLikes: ' + likes);
    //
    //
    //     const likedItems = await this.getLikedItems(likes);
    //     if(likedItems) {
    //         console.log('waitForLikes LIKES PRESENT');
    //
    //     } else {
    //         console.log('waitForLikes LIKES NOT PRESENT');
    //
    //     }
    // }

    updateLikedItems = (doc) => {
        this.setState({
            likedTemplates: [...this.state.likedTemplates, doc]
        });
    }

    // getLikedItems = (likes) => {
    //     console.log('getLikedItems: ' + likes);
    //
    //     return new Promise((resolve, reject) => {
    //
    //
    //         // const likedArray = null;
    //
    //
    //         // likes.forEach((like) => {
    //         //     firebase.firestore().collection('templates').doc(like).get()
    //         //         .then((doc) => {
    //         //             const likedObj = new Object(doc.data());
    //         //             likedObj.id = doc.id;
    //         //             likedObj.previewImage = doc.data().images[0];
    //         //             likedArray.push(likedObj);
    //         //         }).catch((error) => console.log(error));
    //         //
    //         // });
    //
    //         if(likedArray){
    //             console.log('success: ' + likedArray);
    //             resolve('success');
    //
    //         } else {
    //             console.log('error: ' + likedArray);
    //             reject('error');
    //
    //         }
    //
    //
    //
    //
    //     });
    //
    // }


    navToCategories = () => {
        console.log('navToCategories');
        const navUrl = '/category/all/0';
        history.push(navUrl);
    }



    render() {

        const {ProductStore, AuthStore} = this.props;

        const Display = () => {

            if(this.state.loading){
                console.log('loading');
                return(
                    <div className="loadingIndicatorContainer"><div class="loading"></div></div>
                );
            } else if(this.state.noLikes){
                console.log('nolikes');

                return(
                    <div className="nothingExistsContainer">
                        <h4>You don't have any likes yet</h4>
                        <h4>Explore code!</h4>
                        <div onClick={this.navToCategories} className="publishButton"><p>Explore</p></div>
                    </div>
                );
            } else {
                const likedItems = this.state.likedTemplates.map((template, i) => <TemplatePreview key={i} title={template.title} previewImage={template.previewImage}/>);

                return(
                    likedItems
                );

            }

        };







        return (
            <div className="myLikesContainer">
                {/*<h4> liked items here</h4>*/}
                <Display/>
            </div>
        );
    }
};

