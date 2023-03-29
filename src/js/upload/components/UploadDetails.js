import React, {Component} from 'react';
import '../../../css/upload/components/UploadDetails.css'
import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'


import {inject, observer} from 'mobx-react';

@inject('UploadStore')
@observer
export default class UploadDetails extends Component {
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
            <div className="uploadDetailsContainer">

                <div className="row">

                    <div style={{alignSelf: 'flex-start'}} className="uploadDetailInputContainer">
                        <div className="column"><p>Title:</p></div>
                        <div className="column">
                            <input type="text"
                                   className="titleInput"
                                   placeholder="Enter title here"
                                   value={UploadStore.title}
                                   onChange={(event) => UploadStore.handleTitleChange(event)}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="uploadDetailInputContainer">
                        <div className="column"><p>Category:</p></div>
                        <div className="column">
                            <select value={UploadStore.category} className="categorySelect" onChange={(event) => {UploadStore.handleCategoryChange(event)}}>
                                <option value="">Select Category</option>
                                <option value="HTML/CSS">HTML/CSS</option>
                                <option value="React">React</option>
                                <option value="Swift">Swift</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value="PHP">PHP</option>
                                <option value="Node.js">Node.js</option>
                                <option value="Machine Learning">Machine Learning</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div style={{alignSelf: 'flex-end'}} className="uploadDetailInputContainer">
                        <div className="column"><p>Price:</p></div>
                        <div className="priceInputColumn">
                            <div className="dollarSymbolContainer">
                                <p>$</p>
                            </div>

                            <input
                                type="number"
                                style={{border: 'none', backgroundColor: 'whitesmoke', width: '100%', borderBottomRightRadius: 5}}
                                value={UploadStore.price}
                                onChange={(event) => UploadStore.handlePriceChange(event)}
                                placeholder={0}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
