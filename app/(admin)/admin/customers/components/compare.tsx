"use client"
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

interface Userdata {
    id:number;
    firstName: string;
    lastName:string;
    email: string;
    role: string;
    phone: number;
    age:number;
    address:{
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: number;
    country: string;
  };
    accountStatus: string;
    gender:string;
}
interface ReactPaginateArguments {
  selected: number;
}


const CustomerTable = () => {
    
    const [users, setUsers] = useState<Userdata[]>([]);
    const [loading, setLoading] = useState(true);

    // filter is defined here: 
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Pagination State defined here
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    // Modal State
    const [selectedUser, setSelectedUser] = useState(null);


    // state Condition to fetch all user data
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/users');
                const data = res.data.users

                console.log(data)
                setUsers(data); 
            } catch (error) {
                console.error("Failed to fetch users!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);   

    // filter logic here
    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const matchesSearch = 
                user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesGender = genderFilter ? user.gender === genderFilter : true;
            const matchesStatus = statusFilter ? user.role === statusFilter : true; // Using 'role' as status proxy

            return matchesSearch && matchesGender && matchesStatus;
        });
    }, [users, searchTerm, genderFilter, statusFilter]);

    // Pagination Logic
    const offset = currentPage * itemsPerPage;
    const currentUsers = filteredUsers.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageClick = (event:ReactPaginateArguments) => {
        setCurrentPage(event.selected);
    };
    
    // // pagination reset
    //  useEffect(() => {
    //     setCurrentPage(0);
    // }, [searchTerm, genderFilter, statusFilter]);

    if (loading) return <div className='p-5'>Loading...</div>;

    return (
        <div className="mt-20 px-5">
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Phone</th>
                        <th className="py-2">Age</th>
                        <th className="py-2">Gender</th>
                        <th className="py-2">Address</th>
                        <th className="py-2">Accout Status</th>
                        <th className="py-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b">
                            <td className="py-2 text-left">{user.firstName} {user.lastName}</td>
                            <td className="py-2 text-left">{user.email}</td>
                            <td className="py-2">{user.phone}</td>
                            <td className="py-2">{user.age}</td>
                            <td className="py-2">{user.gender}</td>
                            <td className="py-2">{user.address.stateCode}</td>
                            <td className="py-2">{user.role}</td>
                            <td className="py-2">
                                {user.role === 'admin' ? (
                                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Admin</span>
                                ) : (
                                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Customer</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;   