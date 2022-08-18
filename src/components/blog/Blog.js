import React, {Component} from 'react';
import BlogList from "./BlogList";
import AddBlog from "./AddBlog";
import {Provider} from "./Context";

const Blog =()=> {
        return (
            <Provider>
                <div className="Blog">
                    <BlogList/>
                    <AddBlog/>
                </div>
            </Provider>
        );
}

export default Blog;