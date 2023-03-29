import {observable, action} from 'mobx';
import history from '../../js/history';
import firebase from 'firebase';


class CategoryStore{
    @observable category = 'All Categories';


    @action handleCategoryChange = ({key}) => {
        const categoryKey = parseInt(key);

        switch (categoryKey){
            case 0:
                history.push('/category/' + 'all/' + 0);
                window.location.reload();
                // this.category = "All Categories";
                break;
            case 1:
                history.push('/category/' + 'React/' + 0);
                window.location.reload();

                // this.category = "React";
                break;
            case 2:
                // this.category = "Python";
                history.push('/category/' + 'Python/' + 0);
                window.location.reload();

                break;
            case 3:
                // this.category = "PHP";
                history.push('/category/' + 'PHP/' + 0);
                window.location.reload();

                break;
            case 4:
                // this.category = "Node.js";
                history.push('/category/' + 'Node.js/' + 0);
                window.location.reload();

                break;
            case 5:
                // this.category = "Machine Learning";
                history.push('/category/' + 'ML/' + 0);
                window.location.reload();

                break;
            case 6:
                // this.category = "HTML/CSS";
                history.push('/category/' + 'HTML/' + 0);
                window.location.reload();

                break;
            case 7:
                // this.category = "Java";
                history.push('/category/' + 'Java/' + 0);
                window.location.reload();

                break;
            case 8:
                // this.category = "Swift";
                history.push('/category/' + 'Swift/' + 0);
                window.location.reload();

                break;
            default:
                history.push('/category/' + 'all/' + 0);
                window.location.reload();

            // this.category = "All Categories";
        }



    }





}


export default new CategoryStore();

