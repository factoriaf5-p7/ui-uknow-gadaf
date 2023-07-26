import { useState } from "react";
import axios from "axios";

interface FormType {
    id: string;
    name: string;
    price: string;
    topic: string;
    difficulty: string;
    tags: string;
    content: string;
}

const DeleteCourse = ({ courseId }: { courseId: string }) => {
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

export const AddCoursePage = () => {
    const [newCourse, setNewCourse] = useState<FormType>({
        id: '',
        name: '',
        price: '',
        topic: '',
        difficulty: '',
        tags: '',
        content: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:5173/courses/',
                newCourse
            );
            console.log('Response', response.data)
            setNewCourse({
                id: '',
                name: '',
                price: '',
                topic: '',
                difficulty: '',
                tags: '',
                content: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add Course</button>
            </form>
            <DeleteCourse courseId={newCourse.id} />
        </>
    )
}

