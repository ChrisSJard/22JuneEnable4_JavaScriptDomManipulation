import React from "react";
import styles from '../BlogStyles.module.css';

const BlogBody = ({ content }) => {

    return (
        <section className={styles.bodyStyle}>
            {content}
        </section>
    );
}

export default BlogBody;