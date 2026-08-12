'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    discountPercentage:number;
    rating:number;
    stock:number;
    shippingInformation:string;
    images:string[];
}

interface ProductTableProps{
    limit?: number;
    title?: string;
    // images?:string;
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
// Filter posts to limit
    const limitProducts = limit ? products.slice(0, limit): products;
  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-10 font-semibold text-center'>
        {title ? title : 'Products'}
      </h3>
      <Table>
        {/* <TableCaption>A list of recent products</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead className='text-center'>Product</TableHead>
                    <TableHead className='text-center'>Name of Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Shipping Information</TableHead>
                    <TableHead>View Product</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { limitProducts.map((product) =>(
                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell className='justify-center'>
                            <div className='flex flex-row gap-3 ml-3 '>
                                {/* {product.images.map((index) => (
                                    <Image key={index} src={index} alt="Image" width={100} height={50}/>
                                ))} */}
                                {product.images && product.images.length > 0 && (
                                    <Image src={product.images[0]} alt={product.title} width={100} height={100} />
                                )}
                            </div>
                        </TableCell>
                        <TableCell className='text-center'>{product.title}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.shippingInformation}</TableCell>
                        <TableCell><Link href={`/products/details/${product.id}`}>
                        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold
                         py-2 px-4 rounded text-xs'>Views Details</Button></Link></TableCell>
                    </TableRow>
                ))}
            </TableBody>
      </Table>
      <div className='flex item-center justify-center mt-3 mb-10'>
        <Link href="admin/products">
            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold
            py-2 px-4 rounded text-xs'>All Products</Button>
        </Link>
      </div>
    </div>
  )
}

export default ProductTable;