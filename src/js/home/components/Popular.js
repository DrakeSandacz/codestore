import React, { Component } from 'react';
import '../../../css/home/components/popular.css';

import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import TemplatePreview from '../../templates/components/templatePreview';




const templates = [
    {id: '5KWZs1vkPOveIwlw4uBw', authorName: 'itsluke', authorId: 'qJgpQDTQNIP7EZdZXH0HPau7Zlb2',  downloads: 0 , likes: 0, views: 0, title: 'Bank start kit', price: 44, category: "Java", previewImage: 'https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fplaceholder8.jpg?alt=media&token=1acbb6a7-9686-4328-b745-64083727113d'},
    {id: '6c5rZi336nsjn5v1rYfh', authorName: 'itsluke', authorId: 'qJgpQDTQNIP7EZdZXH0HPau7Zlb2',  downloads: 0 , likes: 0, views: 0, title: 'Finance UI', price: 50, category: "React", previewImage: 'https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fplaceholder6.png?alt=media&token=0f6dfded-4bd6-4a60-92ca-9a88c87c7317'},
    {id: 'JPWJa6vVF3WXFkXKw5uK', authorName: 'itsluke', authorId: 'qJgpQDTQNIP7EZdZXH0HPau7Zlb2',  downloads: 0 , likes: 0, views: 0, title: 'Task Ui Kit', price: 25, category: "Java", previewImage: 'https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fplaceholder7.png?alt=media&token=8dd333bd-fe87-442e-99ec-51485ed87401'},
    {id: 'Smwlu1aNE7NAPsFXJ6XX', authorName: 'itsluke', authorId: 'qJgpQDTQNIP7EZdZXH0HPau7Zlb2',  downloads: 0 , likes: 0, views: 0, title: 'Elegant Chat App', price: 500, category: "Swift", previewImage: 'https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fplaceholder5.png?alt=media&token=dd6ff064-3765-438e-8d68-acb1a6716756'},
    {id: 'W5qQlMRoGTUt5aTqMyg5', authorName: 'itsluke', authorId: 'qJgpQDTQNIP7EZdZXH0HPau7Zlb2',  downloads: 0 , likes: 0, views: 0, title: 'Music UI', price: 90, category: "HTML/CSS", previewImage: 'https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fplaceholder2.jpg?alt=media&token=c3a05002-f869-403f-9ca0-b7a131e81eeb'},
    {id: 'pH9VSdcHQe1WuprdO5oy', authorName: 'itsluke', authorId: 'qJgpQDTQNIP7EZdZXH0HPau7Zlb2',  downloads: 0 , likes: 0, views: 0, title: 'Machine Learning Starter', price: 10000, category: "Machine Learning"},


];


// const templates = [
//     {id: 'AY8bznNTryeYBoa582nB', author: 'Luke', downloads: 47, likes: 7, views: 20, name: 'THIS IS A TEMPLATE NAME FROM FIRESTORE', price: 45, imageUrl: 'https://picsum.photos/800/600?image=0' },
//     {id: 'US79rQtQ6n1yfK53PB20', author: 'Drake', downloads: 4, likes: 3, views: 10,  name: 'Template 5', price: 66, imageUrl: 'https://picsum.photos/800/600?image=1084'},
//     {id: 'YJy0tOaowDYIIiGFwd17', author: 'Robert', downloads: 10, likes: 1, views: 3,  name: 'Ultimate UI', price: 75, imageUrl: 'https://picsum.photos/800/600?image=1082'},
//     {id: 'bT4kRnpL0xy25FwRNZww', author: 'Luke', downloads: 65, likes: 200, views: 300,  name: 'This is a long template name lets see how it does', price: 30, imageUrl: 'https://picsum.photos/800/600?image=1069'},
//     {id: 'djXT6EybMqjcsf7g8voT', author: 'Drake', downloads: 55, likes: 3, views: 200,  name: 'The Template', price: 100, imageUrl: 'https://picsum.photos/800/600/?random'},
//     {id: 'ejBHn7OPHzW4UqnU38rT', author: 'Robert', downloads: 17, likes: 4, views: 25,  name: 'React-Native Finance', price: 77, imageUrl: 'https://picsum.photos/800/600/?random'},
// ];



@inject('ProductStore')
@observer
export default class Popular extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            filter: 0,
            templateArray: null,

        };

    }

    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }





    render() {


        const {ProductStore} = this.props;

        const listItems = templates.map((template, i) => <TemplatePreview key={i}
                                                                          category={template.category}
                                                                          previewImage={template.previewImage}
                                                                          templateId={template.id}
                                                                          authorName={template.authorName}
                                                                          authorId={template.authorId}
                                                                          downloadCount={template.downloads}
                                                                          likeCount={template.likes}
                                                                          viewCount={template.views}
                                                                          title={template.title}
                                                                          price={template.price}
        />);



        return (
            <div className="popularContainer">
                <div className="popularContainerHeader">
                    <h4>Popular Code</h4>
                </div>

                <div className="popularTemplatesContainer">
                    {listItems}
                </div>

            </div>
        );
    }
};

