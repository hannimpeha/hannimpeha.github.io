import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

class BlogMgmt extends PureComponent {

    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired
    };

    render() {
        const { index } = this.props;

        return (
            <div>
                <Consumer>
                    { ({ actions, blogs }) => (
                        <span>
              <button onClick={() => actions.removeBlog(blogs[index].id)}>✖</button>
                            { blogs[index].title }
                        </span>
                    )}
                </Consumer>
            </div>
        );
    }
}

export default BlogMgmt;