import React from 'react';
import BlogList from "./BlogList";
import AddBlog from "./AddBlog";
import {Provider} from "./Context";

const Blog = () => {
    return (
        <Provider>
        <div>
            <BlogList />
            <AddBlog />
        </div>
        </Provider>
        );
}
export default Blog;