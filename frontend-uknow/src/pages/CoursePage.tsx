import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Course } from "../components/Interfaces/CourseInterface";

export const CoursePage = () => {
    const { CourseId } = useParams<{ CourseId: string }>()
    const [course, setCourse] = useState<Course>()

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5173/HomePage/${CourseId}`
                )
                const data = await response.json()
                setCourse(data)
                console.log(data)
            } catch (error) {
                console.log('No se encuentra ese curso por su:', error)
            }
        }
        fetchCourse()
    }, [CourseId])

    return (
        <div>
            {course && (
                <>
                    <h2>{course.name}</h2>
                    <p>{course.price}</p>
                    <p>{course.topic}</p>
                    <p>Attenuation Level: {course.difficulty}</p>
                    <p>{course.tags}</p>
                    <p>{course.content}</p>
                </>
            )}
            {!course && <p>Cargando Curso...</p>}
        </div>
    )
}
