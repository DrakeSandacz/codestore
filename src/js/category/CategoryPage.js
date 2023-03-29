import React, { Component } from 'react';
import '../../css/category/categorypage.css';
import CategoryHeader from './components/CategoryHeader';
import TemplatePreview from '../templates/components/templatePreview';
import history from '../../js/history';

import firebase from 'firebase';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import {inject, observer} from 'mobx-react';

@inject('ProductStore')
@observer
export default class CategoryPage extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            templates: null,
        };
        const {match: { params } } = this.props;
        this.category = params.category;
        this.page = params.page;

        this.queryCursor = () => {
            if(this.page == 0){
                return 0;
            } else {
                console.log('else: ' +((this.page * 6) + 1) );
                return (((this.page * 6) + 1));
            }
        };





    }

    componentDidMount() {

        const pageCursor = this.queryCursor();
        console.log('pageCursor: ' + pageCursor);


        if(this.category === 'all'){



            firebase.firestore().collection('templates').get()
                .then((querySnapshot) => {
                    this.setState({templates: null});
                    var templateArray = [];
                    querySnapshot.forEach((doc) => {
                        const templateObj = new Object(doc.data());
                        templateObj.id = doc.id;
                        templateObj.previewImage = doc.data().images[0];
                        templateArray.push(templateObj);
                    });
                    this.setState({templates: templateArray});

                })
                .catch((error) => console.log('getting all templates error: ' + error));


            // firebase.firestore().collection('templates').orderBy("dateCreated").startAt(pageCursor).get()
            //     .then((querySnapshot) => {
            //         this.setState({templates: null});
            //         var templateArray = [];
            //         querySnapshot.forEach((doc) => {
            //             const templateObj = new Object(doc.data());
            //             templateObj.id = doc.id;
            //             templateArray.push(templateObj);
            //         });
            //         this.setState({templates: templateArray});
            //     }).catch((error) => console.log(error));


        } else {

            firebase.firestore().collection('templates').where("category", "==", this.category).get()
                .then((querySnapshot) => {
                    this.setState({templates: null});
                    var templateArray = [];
                    querySnapshot.forEach((doc) => {
                        const templateObj = new Object(doc.data());
                        templateObj.id = doc.id;
                        templateObj.previewImage = doc.data().images[0];
                        templateArray.push(templateObj);
                    });
                    this.setState({templates: templateArray});

                }).catch((error) => console.log('error getting category templates: ' + error));



            // firebase.firestore().collection('templates').where("category", "==", this.category).orderBy("dateCreated").startAt(pageCursor).get()
            //     .then((querySnapshot) => {
            //         var templateArray = [];
            //         querySnapshot.forEach((doc) => {
            //             const templateObj = new Object(doc.data());
            //             templateObj.id = doc.id;
            //             templateArray.push(templateObj);
            //         });
            //         this.setState({templates: templateArray});
            //     }).catch((error) => console.log(error));

        }


    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }


    // getData = () =>{
    //     console.log('get data called');
    //
    //
    //     firebase.firestore().collection('templates').orderBy("number").startAt(0).limit(6).get()
    //         .then((querySnapshot) => {
    //             console.log('querySnapshot' + querySnapshot.docs.length);
    //         }).catch((error) => console.log(error));
    //
    //
    // };




    render() {

        // const nextPage = () => {
        //     history.push('/category/' + this.category + '/' + 1);
        //     window.location.reload();
        //
        // };


        const Display = () => {

            if(this.state.templates == 0){
                // no templates exist
                return(
                    <div className="nothingExistsContainer">
                        <h4>No {this.category} code yet.</h4>
                        <h4>Be the first in this category!</h4>
                        <div onClick={() => {this.props.history.push('/upload')}} className="publishButton"><p>Upload</p></div>
                    </div>
                );

            } else if (this.state.templates === null){
                //loading

                return(
                    <div className="categoryProductsContainer">
                        <div className="loadingIndicatorContainer"><div className="loading"></div></div>
                    </div>
                );


            } else {
                //templates exist
                return(
                    <div className="categoryProductsContainer">
                        {this.state.templates.map((template, i) => <TemplatePreview key={i}
                                                                                    category={template.category}
                                                                                   title={template.title}
                                                                                   previewImage={template.previewImage}
                                                                                   templateId={template.id}
                                                                                   authorName={template.authorName}
                                                                                   authorId={template.authorId}
                                                                                   price={template.price}

                    />)}
                    </div>
                );
            }
        };




        return (
            <div className="categoryPage">
                <CategoryHeader category={this.category}/>
                <Display/>
            </div>
        );
    }
};

