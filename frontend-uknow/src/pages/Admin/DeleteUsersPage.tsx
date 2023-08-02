import axios from "axios";


export const DeleteUser = ({ userId }: { userId: string }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5173/users/${userId}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete User</button>
    );
};