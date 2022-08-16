import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Content = ({ index }) => {
    return (
        <Consumer>
            { ({blogs }) => (
                <div>
                    <span>{ blogs[index].content }</span>
                </div>
            )}
        </Consumer>
    );
}

Content.propTypes = {
    index: PropTypes.number
};

export default Content;