'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Card,
  CardDescription,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card"


interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  name: string;
  images: string;
}

export default function CategoryPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('smartphones');
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);


  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((data: string[]) => {
        setCategories(data);
        setLoadingCategories(false);
      })
      .catch((err) => {
        console.error('Failed to load categories:', err);
        setLoadingCategories(false);
      });
  }, []);

  
  useEffect(() => {
    if (!selectedCategory) return;

    setLoadingProducts(true);
    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoadingProducts(false);
      })
      .catch((err) => {
        console.error(`Failed to load products for ${selectedCategory}:`, err);
        setLoadingProducts(false);
      });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen text-white p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
    
        <aside className="lg:col-span-1 space-y-8 pr-4 sticky top-6 h-fit">
          
      
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Categories
            </h3>
            
            {loadingCategories ? (
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-5 bg-gray-900 animate-pulse rounded w-3/4"></div>
                ))}
              </div>
            ) : (
              <ul className="space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left capitalize px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-white text-black font-semibold'
                          : 'text-gray-400 hover:text-white hover:bg-gray-900'
                      }`}
                    >
                      {category.replace('-', ' ')}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        <main className="lg:col-span-3 flex flex-col justify-between">
          <div className="mb-6">
            <h1 className="text-2xl font-bold capitalize text-white">
              {selectedCategory.replace('-', ' ')}
            </h1>
            <p className="text-sm text-gray-400">Showing products for selected category</p>
          </div>

          {loadingProducts ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse space-y-3">
                  <div className="bg-gray-900 h-64 rounded-2xl"></div>
                  <div className="h-4 bg-gray-900 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-900 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No products found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => {
                const discountedPrice = (
                  product.price - (product.price * product.discountPercentage) / 100
                ).toFixed(2);
                const imageUrl = Array.isArray(product.images) ? product.images[0] : product.images || product.thumbnail;
                return (
                  <div key={product.id} className="group space-y-3 cursor-pointer">
                    <Card className="max-w-sm h-full hover:shadow-md transition-shadow " key={product.id}>
                <Image
                  className="w-full h-48 object-contain bg-[#F0EEED] p-2"
                  src={imageUrl}
                  alt={product.title || "Product Image"}
                  width={200} height={200}

                />

                <CardHeader className="p-4 space-y-2">
                  <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                    {product.title}
                  </CardTitle>

                  <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                    {"★".repeat(product.rating || 0)}
                    {"☆".repeat(5 - (product.rating || 0))}
                    <span className="text-gray-900 font-bold text-xs ml-1">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="text-[16px] font-black text-gray-900">
                      ${product.price}
                    </span>

                    {product.discountPercentage > 0 && (
                      <span className="text-xs font-bold bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-100">
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    )}
                  </div>

                  {product.name && (
                    <CardDescription className="line-clamp-2">
                      {product.name}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex items-center justify-between border-t border-gray-800 pt-6 mt-10">
            <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">
              <span>&larr;</span>
              <span>Previous</span>
            </button>
            <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">
              <span>Next</span>
              <span>&rarr;</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}