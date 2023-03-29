import React, {Component} from 'react';
import '../../../css/upload/components/UploadDescription.css';






import {inject, observer} from 'mobx-react';

@inject('UploadStore')
@observer
export default class UploadDescription extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
        };



    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const {UploadStore} = this.props;

        return (
            <div className="uploadDescriptionContainer">
                <div className="descriptionTabsContainer">
                    <div className="markdownTab">
                        <p>Description:</p>
                    </div>
                </div>

                <textarea
                    placeholder={"Enter all details about your product"}
                    value={UploadStore.description}
                    onChange={(event) => UploadStore.handleDescriptionChange(event)}
                />


            </div>
        );
    }
}
