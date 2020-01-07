import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <p>{console.log(this.props.data)}</p>
            </div>
        );
    }
}

export default Home;