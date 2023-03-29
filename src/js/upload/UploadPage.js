import React, {Component} from 'react';
import '../../css/upload/UploadPage.css'
import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase';

import UploadPageHeader from './components/Header';
import ProductUploader from './components/ProductUploader';
import UploadDescription from './components/UploadDescription';
import UploadDetails from './components/UploadDetails';
import UploadQuill from './components/UploadQuill';
import UploadTagger from './components/UploadTagger';



// import history from '../../../js/history';
import {inject, observer} from 'mobx-react';

@inject('UploadStore')
@observer
export default class UploadPage extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            imageUrlArray: [],
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.imageUploadHandler = this.imageUploadHandler.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.uploadZip = this.uploadZip.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    //handles images changes
    handleImageChange(event) {
        const file = Array.from(event.target.files);
        this.setState({ file });
    }

    //handles image uploads
    imageUploadHandler() {
        const storageRef = firebase.storage().ref();
        this.state.file.forEach(function (file) {
            storageRef.child(`images/${file.name}`)
                .put(file)
                .then((doc) => {

                    // doc.ref.getDownloadURL().then(function (downloadUrl) {
                    //     console.log("File available at" +  downloadUrl);
                    //     this.setState({
                    //         imageUrlArray: [...this.state.imageUrlArray, downloadUrl]
                    //     }.bind(this));
                    // });

                });
        });
    };

    //handle Zip file change
    handleZipChange(event){
        const zipFile = event.target.files[0];
        this.setState({ zipFile });
    }

    //handle zip upload
    uploadZip(){
        const storageRef = firebase.storage().ref();
        storageRef.child('zip/' + this.state.zipFile.name).put(this.state.zipFile);
    };

    render() {
        const {UploadStore} = this.props;

        return (
            <div className="uploadPage">
                <UploadPageHeader/>
                <UploadDetails/>
                <UploadQuill/>
                <ProductUploader/>
                <UploadTagger/>
            </div>
        );
    }
}
