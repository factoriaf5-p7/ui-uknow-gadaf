import axios from "axios";

// interface FormType {
//     id: string;
//     name: string;
//     price: string;
//     topic: string;
//     difficulty: string;
//     tags: string;
//     content: string;
// }

export const DeleteCourse = ({ courseId }: { courseId: string }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5173/courses/${courseId}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};




