import React, { Component } from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import productTemplate from '../../../css/product/productTemplate.css';
const templates = [
    {id: 'AY8bznNTryeYBoa582nB', author: 'Luke', downloads: 47, name: 'THIS IS A TEMPLATE NAME FROM FIRESTORE', price: 45},
    {id: 'US79rQtQ6n1yfK53PB20', author: 'Drake', downloads: 4, name: 'Template 5', price: 66},
    {id: 'YJy0tOaowDYIIiGFwd17', author: 'Robert', downloads: 10, name: 'Ultimate UI', price: 75},
    {id: 'bT4kRnpL0xy25FwRNZww', author: 'Luke', downloads: 65, name: 'This is a long template name lets see how it does', price: 30},
    {id: 'djXT6EybMqjcsf7g8voT', author: 'Drake', downloads: 55, name: 'The Template', price: 100},
    {id: 'ejBHn7OPHzW4UqnU38rT', author: 'Robert', downloads: 17, name: 'React-Native Finance', price: 77},
];

@inject('ProductStore')
@observer
export default class ProductTemplate extends Component {

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

        return (
            <div className="productAndCommentContainer">



            </div>
        );
    }
};

