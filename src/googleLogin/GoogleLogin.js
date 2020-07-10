import React, { Component } from 'react';
import { gapi, loadAuth2WithProps } from 'gapi-script'
import './GoogleLogin.css';

const UserCard = (props) => {
    return (
        <div>
            <h2>{props.user.name}</h2>
            <img src={props.user.profileImg} alt="user profile" />
        </div>
    );
}

class GoogleLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    async componentDidMount() {
        let auth2 = await loadAuth2WithProps({
            apiKey: 'AIzaSyCoHBbrOs12Ji_eZRM4B6Hy-R73J_kv64Y',
            clientId: '191135084193-hl3f64o9slp3rmdfdsfouose42l673u9.apps.googleusercontent.com',
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
            scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
        })
        if (auth2.isSignedIn.get()) {
            this.updateUser(auth2.currentUser.get())
        } else {
            this.attachSignin(document.getElementById('customBtn'), auth2);
        }
    }
    async componentDidUpdate() {
        if(!this.state.user) {
            let auth2 = await loadAuth2WithProps({
                apiKey: 'AIzaSyCoHBbrOs12Ji_eZRM4B6Hy-R73J_kv64Y',
                clientId: '191135084193-hl3f64o9slp3rmdfdsfouose42l673u9.apps.googleusercontent.com',
                discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
                scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
            })
            this.attachSignin(document.getElementById('customBtn'), auth2);
        }
    }
    updateUser(currentUser) {
        let name = currentUser.getBasicProfile().getName()
        let profileImg = currentUser.getBasicProfile().getImageUrl()
        this.setState({
            user: {
                name: name,
                profileImg: profileImg
            }
        })
    }
    attachSignin(element, auth2) {
        auth2.attachClickHandler(element, {},
            (googleUser) => {
                this.updateUser(googleUser);
            }, (error) => {
                console.log(JSON.stringify(error))
            });
    }
    signOut = () => {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.setState({ user: null })
            console.log('User signed out.');
        });
    }
    render() {
        if(this.state.user) {
            return (
                <div className="container">
                    <UserCard user={this.state.user} />
                    <div id="" className="btn logout" onClick={this.signOut}>
                        Logout
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div id="customBtn" className="btn login">
                        Login
                    </div>
                </div>
            );
        }
    }
}

export default GoogleLogin;