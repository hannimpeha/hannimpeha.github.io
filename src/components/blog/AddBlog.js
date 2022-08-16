import React from 'react';
import { Consumer } from './Context';

const AddBlog = () => {
    const blogInput = React.createRef();
    return (
        <Consumer>
            { ({ actions }) => {
                const handleSubmit = (e) => {
                    e.preventDefault();
                    actions.addBlog(blogInput.current.value);
                    e.currentTarget.reset();
                }

                return (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            ref={blogInput}
                            placeholder="Enter Blog's Content"
                        />

                        <input
                            type="submit"
                            value="Add Blog"
                        />
                    </form>
                );
            }}
        </Consumer>
    );
}
export default AddBlog;