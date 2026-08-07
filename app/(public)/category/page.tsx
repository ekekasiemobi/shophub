'use client';

import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
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
        
    
        <aside className="lg:col-span-1 space-y-8 pr-4">
          
      
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
              <ul className="space-y-1 max-h-60 pr-2 ">
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

                return (
                  <div key={product.id} className="group space-y-3 cursor-pointer">
                    {/* Image Container */}
                    <div className="relative bg-[#EFEFEF] rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-4">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <h4 className="font-semibold text-white text-base truncate">{product.title}</h4>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, idx) => (
                          <svg
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < Math.round(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-600'
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="font-bold text-lg text-white">${discountedPrice}</span>
                        {product.discountPercentage > 0 && (
                          <>
                            <span className="text-gray-500 line-through text-sm">${product.price}</span>
                            <span className="bg-red-950 text-red-500 text-xs px-2 py-0.5 rounded-full font-medium">
                              -{Math.round(product.discountPercentage)}%
                            </span>
                          </>
                        )}
                      </div>
                    </div>
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