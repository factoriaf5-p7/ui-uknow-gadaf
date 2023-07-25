import {Course} from "./CourseInterface"

export type FormType = Omit<Course,"image_url"|"_id">