import { Course } from "./Interfaces/CourseInterface"

export type FormType = Omit<Course, "image_url" | "_id">