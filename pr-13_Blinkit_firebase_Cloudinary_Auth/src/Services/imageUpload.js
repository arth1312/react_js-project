import axios from "axios";

export const uploadImage = async (data) => {
    try {
        let formData = new FormData();
        formData.append('file', data);
        formData.append('upload_preset', "blinkit");
        formData.append('cloud_name', 'davzjvwtf');

        const res = await axios.post(`https://api.cloudinary.com/v1_1/davzjvwtf/image/upload`, formData);
        return res.data.secure_url;
    } catch (error) {
        console.error("Error uploading image:", error);
    }
};
