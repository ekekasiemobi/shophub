"use client"
import { SearchIcon } from "lucide-react"
import {
    Field
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { useEffect, useMemo, useState } from "react";
import axios from "axios";


interface Product {
    id: number;
    title: string;
    category: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    role: string;
    // Add other necessary fields
}

const PagesSearch = () => {
    // State for Data
    const [products, setProducts] = useState<Product[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    
    // State for Filters
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState(''); // Applies to Users
    const [statusFilter, setStatusFilter] = useState(''); // Applies to Users (role)
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 10; // Set a valid number, 0 causes division errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch limited data for demo (remove limit=0 in production or set a reasonable number)
                const [productsRes, usersRes] = await Promise.all([
                    axios.get('https://dummyjson.com/products?limit=100'),
                    axios.get('https://dummyjson.com/users?limit=100')
                ]);

                setProducts(productsRes.data.products);
                setUsers(usersRes.data.users);
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Combined Filter Logic
    const { filteredUsers, filteredProducts } = useMemo(() => {
        const term = searchTerm.toLowerCase();

        // 1. Filter Products
        const fProducts = products.filter((product) => {
            const matchesSearch = 
                product.title.toLowerCase().includes(term) || 
                product.category.toLowerCase().includes(term);
            
            // Note: DummyJSON products don't have a direct 'gender' field, 
            // they use categories like 'mens-shirts'. You could add logic here 
            // to map category to gender if needed.
            return matchesSearch;
        });

        // 2. Filter Users
        const fUsers = users.filter((user) => {
            const matchesSearch =
                user.firstName.toLowerCase().includes(term) ||
                user.lastName.toLowerCase().includes(term) ||
                user.email.toLowerCase().includes(term) ||
                user.gender.toLowerCase().includes(term); // Allow searching gender directly

            const matchesGender = genderFilter ? user.gender === genderFilter : true;
            const matchesStatus = statusFilter ? user.role === statusFilter : true;
            
            return matchesSearch && matchesGender && matchesStatus;
        });

        return { filteredProducts: fProducts, filteredUsers: fUsers };
    }, [products, users, searchTerm, genderFilter, statusFilter]);

    // Pagination (Example for Users)
    const offset = currentPage * itemsPerPage;
    const currentUsers = filteredUsers.slice(offset, offset + itemsPerPage);

    return (
        <div className="p-4 space-y-4">
            {/* Search Input */}
            <Field className="max-w-sm">
                <InputGroup>
                    <InputGroupInput
                        id="global-search"
                        placeholder="Search products, users, or gender..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(0); // Reset page on new search
                        }}
                    />
                    <InputGroupAddon align="inline-end">
                        <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>
            </Field>


            {/* Results Display */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                {/* Product Results */}
                {/* <div>
                    <h3 className="font-bold mb-2">Products ({filteredProducts.length})</h3>
                    {filteredProducts.slice(0, 5).map(p => (
                        <div key={p.id} className="text-sm border-b py-1">{p.title} ({p.category})</div>
                    ))}
                </div> */}

                {/* User Results */}
                {/* <div>
                    <h3 className="font-bold mb-2">Users ({filteredUsers.length})</h3>
                    {currentUsers.map(u => (
                        <div key={u.id} className="text-sm border-b py-1">
                            {u.firstName} {u.lastName} - {u.gender}
                        </div>
                    ))}
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default PagesSearch;   