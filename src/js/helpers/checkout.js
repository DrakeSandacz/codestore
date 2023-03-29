import {observable, action} from 'mobx';
import history from '../../js/history';
import firebase from 'firebase';


class CheckoutStore{
    @observable checkoutVisible = false;

    @action toggleCheckoutOpen = () => {this.checkoutVisible = true;}
    @action toggleCheckoutClosed = () => {this.checkoutVisible = false;}





}

export default new CheckoutStore();
