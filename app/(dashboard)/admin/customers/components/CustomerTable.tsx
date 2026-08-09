"use client"
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

interface Userdata {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phone: number;
    age: number;
    address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: number;
        country: string;
    };
    accountStatus: string;
    gender: string;
    company: {
        address: string
        city: string
        name:string
    }
}
interface ReactPaginateArguments {
    selected: number;
}

const CustomerTable = () => {
    const [users, setUsers] = useState<Userdata[]>([]);
    const [loading, setLoading] = useState(true);

    // Filter & Search State
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    // Modal State
    const [selectedUser, setSelectedUser] = useState<Userdata | null>(null);

    // Fetch Data
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

    // Filter Logic
    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const matchesSearch =
                user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesGender = genderFilter ? user.gender === genderFilter : true;
            const matchesStatus = statusFilter ? user.role === statusFilter : true;
            return matchesSearch && matchesGender && matchesStatus;
        });
    }, [users, searchTerm, genderFilter, statusFilter]);

    // Pagination Logic
    const offset = currentPage * itemsPerPage;
    const currentUsers = filteredUsers.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageClick = (event: ReactPaginateArguments) => {
        setCurrentPage(event.selected);
    };


    if (loading) return <div className="p-10 text-center">Loading customers...</div>;

    return (
        <div className="mt-10 px-5 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Customer Dashboard</h2>

            {/* Controls: Search & Filters */}
            <div className="flex flex-wrap gap-4 mb-6 bg-[#ededed] p-4 rounded-lg shadow-sm">
                <input
                    type="text"
                    placeholder="Search name or email..."
                    className="border p-2 rounded w-full md:w-1/3"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(0); 
                    }}
                />
                <select
                    className="border p-2 rounded"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                >
                    <option value="">All Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <select
                    className="border p-2 rounded"
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setCurrentPage(0); 
                    }}
                >
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#9A9A9A] text-[#ededed]">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Age</th>
                            <th className="p-3">Gender</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length > 0 ? (
                            currentUsers.map((user) => (
                                <tr key={user.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 font-medium">{user.firstName} {user.lastName}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3">{user.phone}</td>
                                    <td className="p-3">{user.age}</td>
                                    <td className="p-3 capitalize">{user.gender}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded text-xs ${user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => setSelectedUser(user)}
                                            className="text-blue-600 hover:underline text-sm font-semibold"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={1} className="p-4 text-center text-gray-500">No customers found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    renderOnZeroPageCount={null}
                    containerClassName="flex gap-2"
                    pageClassName="border px-3 py-1 rounded hover:text-[#626262] hover:bg-gray-200 cursor-pointer"
                    activeClassName="bg-[#626262] text-[#ededed] border-[#626262]"
                    previousClassName="border px-3 py-1 rounded hover:bg-gray-200 cursor-pointer"
                    nextClassName="border px-3 py-1 rounded hover:bg-gray-200 cursor-pointer"
                    disabledClassName="opacity-50 cursor-not-allowed"
                />
            </div>

            {/* Customer Details Modal */}
            {selectedUser && (
                <div className="fixed inset-0 bg-[#626262] bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
                        <button
                            onClick={() => setSelectedUser(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-bold mb-4 border-b pb-2">Customer Details</h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Full Name</p>
                                <p className="font-medium">{selectedUser.firstName} {selectedUser.lastName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{selectedUser.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium">{selectedUser.phone}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Age / Gender</p>
                                <p className="font-medium">{selectedUser.age} / {selectedUser.gender}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-sm text-gray-500">Address</p>
                                <p className="font-medium">
                                    {selectedUser.address.address}, {selectedUser.address.city}<br />
                                    {selectedUser.address.state}, {selectedUser.address.postalCode}<br />
                                    {selectedUser.address.country}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Role</p>
                                <p className="font-medium capitalize">{selectedUser.role}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Company</p>
                                <p className="font-medium">{selectedUser.company.name}</p>
                            </div>
                        </div>

                        <div className="mt-6 text-right">
                            <button
                                onClick={() => setSelectedUser(null)}
                                className="bg-[#626262] text-white px-4 py-2 rounded hover:bg-gray-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerTable;

