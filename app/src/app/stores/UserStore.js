import alt from '../alt';

import UserActions from '../actions/UserActions';

class UserStore {
    constructor(){
        this.user = {
            name: 'No User',
            img: 'https://amploprod.s3.amazonaws.com/assets/no-user-image-square-9f6a473a32ad639f619216331d10d61ce1b35c9271d5683920960e1a5ee45bb8.jpg'
        };

        this.bindListeners({
            loadUser: UserActions.LOAD_USER
        });
    }

    loadUser(user){
        this.user = {
            name: 'Joshua',
            img: 'http://i.imgur.com/H357yaH.jpg'
        };

        console.log('ni wut?')
    }
}

export default alt.createStore(UserStore, 'UserStore');


