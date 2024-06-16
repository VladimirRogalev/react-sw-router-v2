import React, {Component} from 'react';
// TODO Class -> func
class Footer extends Component {
    render() {
        return (
            <footer className="row align-items-center">
                <div className="btn btn-danger col-2 offset-2 h-50">
                    <p className="text-center m-0">Send me an <span className="email">email</span></p>
                </div>
            </footer>
        );
    }
}

export default Footer;