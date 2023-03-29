import React, { Component } from 'react';
import '../../../css/home/components/templateCategory.css';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import TemplatePeek from '../../templates/components/TemplatePeek';




const templates = [
    {id: 'AY8bznNTryeYBoa582nB', author: 'Luke', downloads: 47, name: 'THIS IS A TEMPLATE NAME FROM FIRESTORE', price: 45},
    {id: 'US79rQtQ6n1yfK53PB20', author: 'Drake', downloads: 4, name: 'Template 5', price: 66},
    {id: 'YJy0tOaowDYIIiGFwd17', author: 'Robert', downloads: 10, name: 'Ultimate UI', price: 75},
    {id: 'bT4kRnpL0xy25FwRNZww', author: 'Luke', downloads: 65, name: 'This is a long template name lets see how it does', price: 30},
    // {id: 'djXT6EybMqjcsf7g8voT', author: 'Drake', downloads: 55, name: 'The Template', price: 100},
    // {id: 'ejBHn7OPHzW4UqnU38rT', author: 'Robert', downloads: 17, name: 'React-Native Finance', price: 77},
];



@inject('ProductStore')
@observer
export default class TemplateCategory extends Component {

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

        const templatePreviews = this.props.data.map((template, i) => <TemplatePeek key={i} templateId={template.id} author={template.author} name={template.name} imageUrl={template.imageUrl}/>);
        // const listItems = templates.map((template, i) => <TemplatePreview key={i} templateId={template.id} author={template.author} downloads={template.downloads}  name={template.name}  price={template.price}/>);
        // const listItems = this.state.templateArray === null ? null : this.state.templateArray.map((template) => <TemplatePreview author={template.author} downloads={template.downloads}  name={template.name}  price={template.price}/>);

        const {ProductStore} = this.props;


        return (
            <div className="templateCategoryContainer">

                <div className="templateCategoryHeader">
                    <h4>{this.props.categoryName}</h4>

                    <p>See all</p>
                </div>

                <div className="templateCategoryPreview">
                    {templatePreviews}
                    {/*<div className="depthShadow"></div>*/}
                </div>

            </div>
        );
    }
};

