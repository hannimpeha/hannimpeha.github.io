import React, {Component} from 'react';

const BlogContext = React.createContext();

export class Provider extends Component {
    state = {
        blogs: [
            {
                title: "Hannah is Pretty",
                content: "Lorem ipsum dolor sit amet, " +
                    "consectetur adipiscing elit. Fusce tristique urna ligula, " +
                    "et porttitor odio molestie a. Aliquam vehicula consectetur " +
                    "vestibulum. Nullam eleifend rutrum dignissim. Nullam elementum " +
                    "turpis augue, eget cursus arcu sollicitudin vel. Vestibulum cursus, " +
                    "mauris sit amet tempus efficitur, metus nisl pharetra risus, " +
                    "et semper nunc nunc a orci. Integer consectetur nec ipsum nec " +
                    "condimentum. Cras cursus tortor et commodo faucibus. Nunc mauris " +
                    "nisi, ultrices quis risus in, fringilla luctus lorem. Morbi neque " +
                    "tellus, iaculis a congue non, luctus at mi. Cras rutrum libero vel " +
                    "dolor condimentum mattis. Nam eu laoreet lorem.",
                id: 1
            }
        ]
    };
    prevBlogId = 4;

    handleAddBlog = (title, content) => {
        this.setState( prevState => {
            return {
                blogs: [
                    ...prevState.blogs,
                    {
                        title,
                        content,
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