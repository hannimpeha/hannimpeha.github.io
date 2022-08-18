import React, {PureComponent} from 'react';
import { Consumer } from './Context';

class AddBlog extends PureComponent {
    render() {
        const blogInputTitle = React.createRef();
        const blogInputContent = React.createRef();
        return (
            <Consumer>
                {({actions}) => {
                    const handleSubmit = (e) => {
                        e.preventDefault();
                        actions.addBlog(blogInputTitle.current.value,
                            blogInputContent.current.value);
                        // actions.e.currentTarget.reset();
                    }

                    return (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                ref={blogInputTitle}
                                placeholder="Enter Blog's Title"
                            />
                            <input
                                type="text"
                                ref={blogInputContent}
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
}
export default AddBlog;