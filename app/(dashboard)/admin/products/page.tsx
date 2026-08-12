'use client'
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import BackButton from '../component/BackButton';
import ProductPagination from '../products/productPagination';


export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    discountPercentage:number;
    rating:number;
    stock:number;
    availabilityStatus:string;
    images:string[];
   shippingInformation:string;
}

const Products = () => {
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
}, []);
                    
// const isLow = Products.availabilityStatus?.toLowercase() === 'low';

  return (
    
    <div className='mt-10 px-5'>
      <h3 className='text-2xl my-8 font-semibold text-center'>
        List of All Products
      </h3>
     <div className='flex justify-end'> <BackButton text="Go Back" link='/admin/products'/></div>
      <Table>
        {/* <TableCaption>A list of recent products</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead className='text-center'>Product Pictures</TableHead>
                    <TableHead>Product Details
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { products.map((product) =>(
                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell className='flex justify-center item-center my-1 mx-auto'>
                            <div className='flex items-center justify-center mx-20'>
                                {product.images.map((index)=> (
                                    <Image key={index} src={index} alt="Image" width={100} height={50} className='mt-12'/>
                                ))}
                            </div>
                        </TableCell>
                        <TableCell className='item-right'>
                                <TableRow className='border-none'>
                                    <TableCell className='font-semibold'>Name</TableCell>
                                    <TableCell>{product.title}</TableCell>
                                </TableRow>
                                <TableRow className='border-none'>
                                    <TableCell className='font-semibold'>Price</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                </TableRow>
                                <TableRow className='border-none'>
                                    <TableCell className='font-semibold'>Category</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                </TableRow>
                                <TableRow className='border-none'>
                                    <TableCell className='font-semibold'>Stock</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                </TableRow>
                                <TableRow className='border-none'>
                                    <TableCell className='font-semibold'>Shipping Information</TableCell>
                                    <TableCell>{product.shippingInformation}</TableCell>
                                </TableRow>
                                <TableRow className='border-none'>
                                    <TableCell className='font-semibold'>Product description</TableCell>
                                    <TableCell className=''>{product.description.split(' ').slice(0, 8).join(' ') + '...'}</TableCell>
                                </TableRow>
                                <TableRow className='flex item-center justify-center'>
                                    {/* Commented Code takes to the edit page of a single item */}
                                    {/* <Link href={`products/edit/${product.id}`}></Link> */}
                                    <TableCell><Link href={`products/edit/${product.id}`}>
                                    <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold
                                    py-2 px-4 rounded text-xs'>More Details</Button></Link></TableCell>
                                </TableRow>
                        </TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <ProductPagination />
    </div>
  )
}

export default Products

