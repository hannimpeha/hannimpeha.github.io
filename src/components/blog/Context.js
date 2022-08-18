import React, {Component} from 'react';

const BlogContext = React.createContext();

export class Provider extends Component {
    state = {
        blogs: [
            {
                title: "Guil",
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
            },
            {
                title: "Treasure",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                    "Integer cursus placerat libero, vitae luctus nisi feugiat a. " +
                    "Aliquam ultrices convallis hendrerit. Pellentesque quis erat elit. " +
                    "Suspendisse potenti. Donec id tortor vitae erat semper commodo. " +
                    "Nunc maximus maximus aliquam. Suspendisse risus nisl, tincidunt " +
                    "id fringilla ac, dictum ac nisi. Cras elementum commodo arcu non " +
                    "rutrum. Etiam pharetra elit nisi, eget porta eros rutrum at. Fusce " +
                    "tincidunt mattis nunc, quis tempus nulla. Sed tempus ipsum sit amet " +
                    "eros facilisis, laoreet lacinia velit ullamcorper. Aenean semper " +
                    "aliquet purus. Duis imperdiet dictum leo ut hendrerit. In suscipit " +
                    "ac lectus eu mollis. Mauris id nunc et turpis sagittis efficitur. " +
                    "Pellentesque odio dui, maximus imperdiet massa fringilla, condimentum " +
                    "mattis purus.",
                id: 2
            },
            {
                title: "Ashley",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                    "Vestibulum felis eros, sollicitudin a scelerisque ac, mollis id " +
                    "mauris. Ut rutrum bibendum magna eget volutpat. Nullam et nulla sem. " +
                    "Fusce vitae scelerisque nisl, eu fermentum sem. Donec et pharetra " +
                    "lectus. Aliquam imperdiet elit sit amet cursus vestibulum. Proin " +
                    "felis quam, suscipit eget placerat vitae, auctor vel enim. Quisque " +
                    "turpis felis, volutpat in ex vel, auctor sodales ligula. Donec " +
                    "viverra sollicitudin arcu quis pellentesque. Curabitur vitae " +
                    "cursus ipsum. Morbi a pretium urna.",
                id: 3
            },
            {
                title: "James",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                    "Aliquam suscipit eros nulla, vel interdum purus molestie id. " +
                    "Suspendisse potenti. Pellentesque et vestibulum elit. Mauris " +
                    "vulputate ornare viverra. Nullam nec dui id orci interdum iaculis " +
                    "vel nec augue. Pellentesque habitant morbi tristique senectus et " +
                    "netus et malesuada fames ac turpis egestas. Mauris nec erat ac nibh" +
                    " hendrerit molestie. Phasellus ut purus non nisl scelerisque " +
                    "bibendum. Integer ultricies ligula libero, ac bibendum massa " +
                    "vulputate quis. In tempus venenatis orci, vel porttitor ipsum " +
                    "iaculis non. Donec et pellentesque tellus. Quisque egestas at " +
                    "leo ac vehicula. Donec a dapibus velit, feugiat finibus risus. " +
                    "Aliquam tincidunt neque a lobortis tincidunt. Ut et eleifend arcu. " +
                    "Quisque sit amet quam non erat consectetur blandit eu pharetra enim.",
                id: 4
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


    handleModifyBlog = (index, blogModifyContent) => {
        this.setState( prevState => {
            return {
                blogs: [
                    {
                        title: this.blogs[index].title.bold(),
                        content: this.blogs[index].content.bold(),
                        id: this.prevBlogId
                    }
                ]
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
                    modifyBlog: this.handleModifyBlog
                }
            }}>
                { this.props.children }
            </BlogContext.Provider>
        );
    }
}

export const Consumer = BlogContext.Consumer;

