import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { CreatedCourses } from '../../components/CreatedCourses/CreatedCourses'

export const MyCourses = () => {
    const [profile, setProfile] = useState({
        _id: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
        wallet_balance: 0,
        created_courses: [],
        chat_notifications_sent: [],
        chat_notifications_recieved: [],
        profile: 'user',
        bought_courses: [],
        __v: 0
    })

    useEffect(() => {
        async function getData() {
            try {
                const token = localStorage.getItem('token')
                console.log(token)
                const response = await axios.get('http://localhost:3000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                console.log(response.data)
                setProfile(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])

    return (
        <Container>
            <CreatedCourses />
        </Container>
    )
}
