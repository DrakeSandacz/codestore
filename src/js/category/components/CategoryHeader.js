import React, { Component } from 'react';
import '../../../css/category/components/categoryheader.css';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import {inject, observer} from 'mobx-react';
import {faCaretUp} from "@fortawesome/free-solid-svg-icons/index";

@inject('CategoryStore')
@observer
export default class CategorySidebar extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
        };

        this.onVisibleChange = this.onVisibleChange.bind(this);



    }

    componentDidMount() {


    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }



    onVisibleChange(visible) {
        console.log(visible);
    }

    render() {

        const {CategoryStore} = this.props;

        const menu = (
            <Menu onSelect={CategoryStore.handleCategoryChange}>
                <MenuItem key="0">All</MenuItem>
                <Divider />
                <MenuItem key="1">React</MenuItem>
                <Divider />
                <MenuItem key="2">Python</MenuItem>
                <Divider />
                <MenuItem key="3">PHP</MenuItem>
                <Divider />
                <MenuItem key="4">Node.js</MenuItem>
                <Divider />
                <MenuItem key="5">Machine Learning</MenuItem>
                <Divider/>
                <MenuItem key="6">HTML/CSS</MenuItem>
                <Divider/>
                <MenuItem key="7">Java</MenuItem>
                <Divider/>
                <MenuItem key="8">Swift</MenuItem>
            </Menu>
        );


        return (
            <div className = "categoryHeader" >

                <div className="categoryHeaderColumn">
                    <h1>Explore {this.props.category}</h1>
                </div>

                <div className="categoryHeaderColumn">
                    <Dropdown
                        trigger={['click']}
                        overlay={menu}
                        animation="slide-up"
                        onVisibleChange={this.onVisibleChange}
                    >
                        <button style={{textTransform: 'capitalize'}} className="categorySelectButton">{this.props.category} <span><FontAwesomeIcon color="#000" icon={faCaretDown}/></span></button>
                    </Dropdown>

                </div>




            </div>
        );
    }
};

