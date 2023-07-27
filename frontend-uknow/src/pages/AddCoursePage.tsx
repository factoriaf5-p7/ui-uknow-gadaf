import { useState } from "react";
import axios from "axios";
import { Header } from '../components/Header/Header'
import { NavbarBottom } from '../components/NavbarBottom/NavbarBottom'
import { NavbarDesk } from '../components/NavbarDesk/NavbarDesk'

interface FormType {
    id: string;
    name: string;
    price: string;
    topic: string;
    difficulty: string;
    tags: string;
    content: string;
}

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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setNewCourse((prevNewCourse) => ({
            ...prevNewCourse,
            [name]: value,
        }));
    };

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
        <Header />
            <NavbarDesk />
            <form onSubmit={handleSubmit}>
                <label>
                    Id:
                    <input
                        type='text'
                        name='id'
                        value={newCourse.id}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        value={newCourse.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Price:
                    <input
                        type='number'
                        name='price'
                        value={newCourse.price}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Topic:
                    <textarea
                        name='topic'
                        value={newCourse.topic}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Difficulty:
                    <input
                        type='text'
                        name='difficulty'
                        value={newCourse.difficulty}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Tags:
                    <input
                        type='text'
                        name='tags'
                        value={newCourse.tags}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Attenuation Level:
                    <input
                        type='text'
                        name='content'
                        value={newCourse.content}
                        onChange={handleChange}
                    />
                </label>

                <button type='submit'>Add Course</button>
            </form>
            <NavbarBottom />
        </>
    )
}

