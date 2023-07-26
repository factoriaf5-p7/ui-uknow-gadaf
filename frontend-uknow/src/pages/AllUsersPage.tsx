import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../components/Interfaces/UserInterface";

export const AllUsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5173/users/"
                );
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log("Error al obtener los usuarios:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())

    );

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="bg-gray"
                placeholder="Buscar usuarios..."
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user._id} className="">
                        <Link to={`/users/${user._id}`}>Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
