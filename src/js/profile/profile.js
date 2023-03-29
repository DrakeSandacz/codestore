import React, { Component } from 'react';
import firebase from 'firebase';
import profile from '../../css/profile/profile.css';
import {inject, observer} from 'mobx-react';
import ProfileHeader from './components/Header';
import ProfileTemplates from './components/profileTemplates';


@inject('AuthStore')
@observer
export default class Profile extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
        };

        const {match: { params } } = this.props;
        const userId = params.userId;
        console.log('userId' + userId);

    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    render() {
        // const listItems = templates.map((template, i) => <TemplatePreview key={i} templateId={template.id} author={template.author} downloads={template.downloads}  name={template.name}  price={template.price}/>);
        // const listItems = this.state.templateArray === null ? null : this.state.templateArray.map((template) => <TemplatePreview author={template.author} downloads={template.downloads}  name={template.name}  price={template.price}/>);

        const {AuthStore} = this.props;

        return (
            <div className="profile">
                <ProfileHeader/>
                <ProfileTemplates/>
            </div>
        );
    }
};

