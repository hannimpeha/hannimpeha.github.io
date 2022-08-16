import React, {Component} from 'react';

const BlogContext = React.createContext();

export class Provider extends Component {
    state = {
        blogs: [
            {
                title: "Guil",
                content: "Guil",
                id: 1
            },
            {
                title: "Treasure",
                content: "Guil",
                id: 2
            },
            {
                title: "Ashley",
                content: "Guil",
                id: 3
            },
            {
                title: "James",
                content: "Guil",
                id: 4
            }
        ]
    };
    prevBlogId = 4;

    handleAddBlog = (title) => {
        this.setState( prevState => {
            return {
                blogs: [
                    ...prevState.blogs,
                    {
                        title,
                        contents: null,
                        id: this.prevBlogId += 1
                    }
                ]
            };
        });
    }

    handleRemoveBlog = (id) => {
        this.setState( prevState => {
            return {
                blogs: prevState.blogs.filter(p => p.id !== id)
            };
        });
    }
    render() {
        return (
            <BlogContext.Provider value={{
                blogs: this.state.blogs,
                actions: {
                    removeBlog: this.handleRemoveBlog,
                    addBlog: this.handleAddBlog,
                }
            }}>
                { this.props.children }
            </BlogContext.Provider>
        );
    }
}

export const Consumer = BlogContext.Consumer;

