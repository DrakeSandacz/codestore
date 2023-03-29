import React, { Component } from 'react';
import '../../../css/account/components/accountNav.css';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import TemplatePreview from '../../templates/components/templatePreview';
import history from '../../history';
@inject('ProductStore', 'AuthStore')
@observer
export default class MyProjects extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            myProjects: null,
            loading: true,
            noProjects: null,
            getTemplateId: null,
        };
    }

    componentDidMount(){
        if(this.props.AuthStore.user === null){
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
                })
                .catch((error) => console.log('my projects error: ' + error));
        }
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const {ProductStore, AuthStore} = this.props;


        const Display = () => {

            if(this.state.myProjects == 0){
                // no projects
                return(
                    <div className="nothingExistsContainer">
                        <h4>You don't have any projects yet!</h4>
                        <h4>Upload your first one!</h4>
                        <div onClick={() => {history.push('/upload')}} className="publishButton"><p>Upload</p></div>
                    </div>
                );
            } else if(this.state.myProjects === null){
                return(
                    <div className="loadingIndicatorContainer"><div className="loading"></div></div>
                );

            } else {
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
                    />
                );
                return(
                        projects
                );
            }

        };

        // const myProjects = this.state.myProjects ? this.state.myProjects.map((template, i) =>
        //     <TemplatePreview
        //         key={i}
        //         previewImage={template.images[0]}
        //         author={template.authorName}
        //         name={template.title}
        //         price={template.price}/>) : <div className="loadingIndicatorContainer"><div class="loading"></div></div>;

        return (
            <div className="myProjectsContainer">
                <Display/>
            </div>
        );
    }
};

