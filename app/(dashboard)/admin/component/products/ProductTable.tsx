'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    discountPercentage:number;
    rating:number;
    stock:number;
    total:number;
}

interface ProductTableProps{
    limit?: number;
    title?: string;
}
const ProductTable = ({ limit, title }: ProductTableProps) => {
    const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
    async function FetchProducts(){
    try{
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products)
    } catch(error){
        if (axios.isAxiosError(error)){
            console.error(error.message);
        } else {
            console.error("An unexpected error occurred", error)
        }
    }
}
FetchProducts();
}, [limit]);

  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold'>
        {title ? title : 'Products'}
      </h3>
      <Table>
        {/* <TableCaption>A list of recent products</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>View Product</TableHead>
                    <TableHead>Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { products.map((product) =>(
                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell><Link href={`/products/details/${product.id}`}><Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>Views Details</Button></Link></TableCell>
                    </TableRow>
                ))}
            </TableBody>
      </Table>
    </div>
  )
}

export default ProductTable;