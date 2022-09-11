import React from "react";
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";

// every react component has access to a unique props object
// which holds the attributes passed to the component
// - props is an object that has properties we can access
const BlogPost = (props) => {
// we can also directly grab the properties by destructuring the props object:
// const BlogPost = ({ title, description, content }) =>

    return (
        <article>
            {/* passing data from the props to each component
                that requires it
            */}
            <BlogHeader title={props.data.title} 
                        description={props.data.description} />
            <BlogBody content={props.data.content} />
        </article>
    );
}

export default BlogPost;