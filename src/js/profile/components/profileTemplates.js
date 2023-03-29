import React, { Component } from 'react';
import firebase from 'firebase';
import profiletemplates from '../../../css/profile/components/profileTemplates.css';
import {inject, observer} from 'mobx-react';
import TemplatePreview from '../../templates/components/templatePreview';
import history from '../../history';

@inject('ProductStore', 'AuthStore')
@observer
export default class ProfileTemplates extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            myProjects: [],
            loading: true,
            noProjects: null,
            getTemplateId: null,
        };
    }



    componentDidMount() {
        if (this.props.AuthStore.user === null) {
            // handle no user logic
        } else {
            firebase.firestore().collection('templates').where('authorId', '==', this.props.AuthStore.user.id).get()
                .then((querySnapshot) => {
                    var array = [];
                    querySnapshot.forEach((doc) => {
                        const project = new Object(doc.data());
                        project.id = doc.id;
                        project.previewImage = doc.data().images[0];
                        array.push(project);
                    });
                    this.setState({
                        myProjects: array
                    });
                    console.log("yes" + this.state.myProjects);
                })
                .catch((error) => console.log('my projects error: ' + error));
        };
    }

    render() {

        const {ProductStore, AuthStore} = this.props;
            if (this.state.myProjects == 0) {
                return (
                    <div className="profileInfoContainer">
                        <div className="profileLinkContainer">
                            <div className="profileLinkHighlight">
                                <p className="profileLink">Projects</p>
                            </div>
                        </div>
                        <div>
                            <h1 style={{color: 'white',}}>
                                Oops!
                            </h1>
                            <h2 style={{color: 'white',}}>
                                Looks like this user has no templates uploaded!
                            </h2>
                        </div>
                    </div>
                );
            }
            else {
                const projects = this.state.myProjects.map((template, i) =>
                    <TemplatePreview
                        key={i}
                        category={template.category}
                        previewImage={template.previewImage}
                        authorName={template.authorName}
                        authorId={template.authorId}
                        title={template.title}
                        price={template.price}
                        templateId={template.id}
                    />);
                return (
                    projects
                );
            }
        };
};

