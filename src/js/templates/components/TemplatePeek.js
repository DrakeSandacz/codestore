import React, {Component} from 'react';
import '../../../css/templates/components/templatePeek.css';
import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

import history from '../../../js/history';
import {inject, observer} from 'mobx-react';

@inject('ProductStore')
@observer
export default class TemplatePeek extends Component {
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

    handleNavigateTemplate = () => {
        history.push(`/productPage`);
    };

    render() {

        const {ProductStore} = this.props;

        const imageUrl = 'url(/' + this.props.imageUrl + ')';

        return (
            <div onClick={() => ProductStore.handleNavigate(this.props.templateId)} style={{backgroundImage: "url(" + this.props.imageUrl + ")"}} className="templatePeekContainer">
                <div className="templatePeekInfoContainer">
                    <div className="textContainer"><h4>{this.props.name}</h4></div>
                    <div className="textContainer"><p>by {this.props.author}</p></div>
                </div>
            </div>
        );
    }
}
