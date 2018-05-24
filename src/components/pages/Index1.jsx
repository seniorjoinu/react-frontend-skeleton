import React from 'react';
import './Index.scss';
import loadTest from "../../state/thunks";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {doNavigate} from "../../index";

class Index extends React.Component {
    static propTypes = {
        error: PropTypes.string,
        tests: PropTypes.arrayOf(PropTypes.string)
    };

    render() {
        return (
            <div className='index-page'>
                <h1 className='index-header'>Another page</h1>

                <button onClick={this.handleLoadClick}>Load async</button>
                { this.props.error && <div className='error'>There was an error! [{ this.props.error }]</div> }
                <div className='test'>Current tests: [{ this.props.tests.map(test => `${test}, `) }]</div>
                <button onClick={() => doNavigate('/')}>To index page</button>
            </div>
        )
    }

    handleLoadClick = () => loadTest();
}

const mapStateToProps = state => {
    return {...state.test}
};

export default connect(mapStateToProps)(Index);