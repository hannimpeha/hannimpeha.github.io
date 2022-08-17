import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const ModifyBlog = ({ index }) => {
    const blogModifyTitle = "hannah";
    const blogModifyContent = "is pretty";

    return (
        <Consumer>
            { ({ actions, blogs }) => {
                const handleModify = (e) => {
                e.preventDefault();
                actions.modifyBlog(blogModifyTitle, blogModifyContent);
                actions.
                e.currentTarget.reset();
            }

            return (
                <form onSubmit={handleModify}>
                <input
                    type="text"
                    ref={blogModifyTitle}
                    placeholder="Enter Blog's ModifyTitle"
                    />
                <button onClick={() => actions.modifyBlog}>
                    Modify Title</button>
                <input
                    type="text"
                    ref={blogModifyContent}
                    placeholder="Enter Blog's ModifyBlog"
                    />
                <button onClick={() => actions.modifyBlog(blogs[index].content)}>
                    ModifyBlog</button>
                <input
                type="submit"
                value="Modify Blog"
                />
                </form>
                );
            }}
        </Consumer>
    );
}

ModifyBlog.propTypes = {
    index: PropTypes.number
};

export default ModifyBlog;