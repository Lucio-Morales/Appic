import { useState } from "react";
import styles from "./PostImage.module.css";

const PostImage = () => {
  const [formData, setFormData] = useState({
    imageFile: null,
    description: "",
  });

  return (
    <div className={styles.container}>
      <form></form>
    </div>
  );
};

export default PostImage;
