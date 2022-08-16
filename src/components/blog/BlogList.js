import React from 'react';
import { Consumer } from './Context';
import BlogMgmt from "./BlogMgmt";

const BlogList = () => {
    return (
        <Consumer>
            { ({ blogs }) => (
                <React.Fragment>
                    {blogs.map( (blog, index) =>
                        <BlogMgmt
                            key={blog.id.toString()}
                            index={index}
                        />
                    )}
                </React.Fragment>
            )}
        </Consumer>
    );
}

export default BlogList;