import React, {Component} from 'react';
import '../../../css/upload/components/ProductUploader.css';


import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'

import firebase from 'firebase';






// import history from '../../../js/history';
import {inject, observer} from 'mobx-react';

@inject('UploadStore')
@observer
export default class ProductUploader extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            selectedFile: null,
        };

        // this.fileChangedHandler = this.fileChangedHandler.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.fileUploadHandler = this.fileUploadHandler.bind(this);


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


    //handle Zip file change
    handleZipChange(event){
        const zipFile = event.target.files[0];
        this.setState({ zipFile });
    }

    //handle zip upload
    uploadZip = () => {
        const storageRef = firebase.storage().ref();
        storageRef.child('zip/' + this.state.zipFile.name).put(this.state.zipFile);
    };

    render() {
        const {UploadStore} = this.props;
        const previewImages = UploadStore.imagePreviews ? UploadStore.imagePreviews.map((image, i) => <img key={i} className="imagePreview" src={image.localUrl} /> ) : null;

        return (
            <div className="productUploaderContainer">



                <div className="uploadRow">
                    <div className="imageButtonWrapper">
                        <button className="imageButton">Upload Image</button>
                        <input type="file" onChange={(event) => UploadStore.handleImage(event)}/>
                    </div>

                    <div style={!UploadStore.imagePreviews.length ? {display: 'none', height: 0} : {display: 'flex', height: 140}} className="imagePreviewsContainer">
                        {previewImages}
                    </div>

                </div>


                <div className="uploadRow">
                    <FontAwesomeIcon style={UploadStore.zipFile ? {fontSize: 60, paddingBottom: 10} : {display: 'none'}} icon={faFileCode}/>
                    <p style={UploadStore.zipFile ? {} : {display: 'none'} }>{UploadStore.zipFile ? UploadStore.zipFile.name : null}</p>
                    <p style={UploadStore.zipFile ? {display: 'none'} : {}}>Upload your code</p>
                    <div className="zipButtonWrapper">
                        <button className="zipButton">{UploadStore.zipFile ? 'Change file' : 'Upload Product Zip'}</button>
                        <input type="file" name="myfile" accept=".zip" onChange={(event) => UploadStore.handleZipChange(event)} />
                    </div>
                </div>








            </div>
        );
    }
}