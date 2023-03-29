import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../css/product/productPage.css';
import SideBar from './components/sideBar';
import ProductDetails from './components/productDetails';

import firebase from 'firebase';


import {inject, observer} from 'mobx-react';
@inject('ProductStore', 'AuthStore')
@observer
export default class ProductPage extends Component {

    constructor(props) {
        super(props);
        const {cookies} = props;
        this.state = {
            sidebarStopPoint: 0,
            templateId: null,
            price: null,
            images: null,
            title: null,
            description: null,
            tags: [],
            authorId: null,
            authorName: null,
            comments: null,
            loading: true,
        };
        const {match: { params } } = this.props;
        this.tempId = params.templateId;
        console.log('constructor: ' + params.templateId);
    }

    componentDidMount () {
        window.scrollTo(0,0);
        const height = document.getElementById('productPage').clientHeight;
        // this.setState({sidebarStopPoint: height - 400});
    }

    componentWillMount(){
        console.log('templateId: ' + this.tempId);


        this.productListener = firebase.firestore().collection('templates').doc(this.tempId)
            .onSnapshot((doc) => {
                this.getProductComments(doc);

                const templateId = doc.id;
                const title = doc.data().title;
                const description = doc.data().description;
                const images = doc.data().images;
                const price = doc.data().price;
                const tags = doc.data().tags;
                const authorName = doc.data().authorName;
                const authorId = doc.data().authorId;



                this.setState({
                    templateId: templateId,
                    title: title,
                    description: description,
                    images: images,
                    price: price,
                    tags:  tags,
                    authorId: authorId,
                    authorName: authorName,
                    loading: false,
                });
            });


        // firebase.firestore().collection('templates').doc(this.tempId).get()
        //     .then((doc) => {
        //         const templateId = doc.id;
        //         const title = doc.data().title;
        //         const description = doc.data().description;
        //         const images = doc.data().images;
        //         const price = doc.data().price;
        //         const tags = doc.data().tags;
        //         const authorName = doc.data().authorName;
        //         const authorId = doc.data().authorId;
        //
        //
        //
        //         this.setState({
        //             templateId: templateId,
        //             title: title,
        //             description: description,
        //             images: images,
        //             price: price,
        //             tags:  tags,
        //             authorId: authorId,
        //             authorName: authorName,
        //             loading: false,
        //         });
        //     })
        //     .catch((error) => console.log('error loading template ' + error));
    }


    getProductComments = (doc) => {
        this.setState({comments: null});

        doc.ref.collection('comments').get().then((comments) => {
            var commentArray = [];
            comments.forEach((comment) => {commentArray.push(comment.data());});
            this.setState({comments: commentArray});
        });

    }


    componentWillUnmount(){
        this.productListener();
    }



    userLikedProduct(array, value){
        if(array === null){
            return false;
        } else {
            if(array.indexOf(value) > -1){
                return true;
            } else {
                return false;
            }
        }
    }



    render() {

        const {ProductStore, AuthStore} = this.props;
        const liked = AuthStore.user === null ? false : this.userLikedProduct(AuthStore.user.likes, this.state.templateId);



        return (
            <div id="productPage" className="productPage">

                <div style={this.state.loading ? {} : {display: 'none'}} className="loadingIndicatorContainer"><div class="loading"></div></div>
                <SideBar
                    liked={liked}
                    authorName={this.state.authorName}
                    authorId={this.state.authorId}
                    loading={this.state.loading}
                    sidebarStopPoint={this.state.sidebarStopPoint}
                    price={this.state.price}
                    title={this.state.title}
                    tags={this.state.tags}
                    templateId={this.state.templateId}
                />
                <ProductDetails
                    description={this.state.description}
                    loading={this.state.loading}
                    images={this.state.images}
                    templateId={this.state.templateId}
                    comments={this.state.comments}
                />

            </div>
        );
    }
};

