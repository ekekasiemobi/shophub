'use client'
import React from 'react'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import z from 'zod/v3'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import BackButton from '../../component/BackButton'


const formSchema = z.object({
    name:z.string().min(2, 'Product name must be at least 3 characters.'),
    category:z.string().min(2, 'Category must be at least 5 characters.'),
    description:z.string().min(10, 'Product description must be at least 10 characters.'),
    brand:z.string().min(3, 'Brand must be at least 3 characters.'),
});
type FormValues = z.infer<typeof formSchema>;

const AddProducts = () => {
      const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {name: "", category: "", description:"", brand:""},
    });

    function onSubmit(data: FormValues){
        console.log(data);
    }

  return (
    <div className='flex mni-h-screen flex-col items-center justify-center p-6 space-y-12'>
      <div className=''><BackButton text='Back to Products' link='/admin/products'/></div>
        <div className='w-full max-w-md border rounded-2xl p-6 shadow-sm'>
            <h2 className='text-xl font-semibold mb-4 text-center'>New Products</h2>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldSet>
                    <FieldLegend>Product Information</FieldLegend>
                    <FieldDescription>This information will appear on new products category</FieldDescription>
                    <FieldGroup>
                        <Controller name="name" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="name">Product</FieldLabel>
                                <Input id="name" {...field} placeholder="Product" aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )} />

                        <Controller name="category" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="category">Category</FieldLabel>
                                <Input id="category" {...field} placeholder="Category" data-invalid={fieldState.invalid}/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )} />

                        <Controller name="description" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="name">Description</FieldLabel>
                               <Textarea id="description" {...field} placeholder='Product details' data-invalid={fieldState.invalid}/>
                               {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )} />
                    </FieldGroup>
                </FieldSet>
                <FieldSeparator />
                <FieldGroup>
                    <Controller name="brand" control={form.control} render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="brand">Brand</FieldLabel>
                            <Input id="brand" {...field} placeholder="Product Brand" aria-invalid={fieldState.invalid}/>
                            {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                        </Field>
                        )} />
                </FieldGroup>
                <div className='flex justify-center'><Button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mt-4'>Add Product</Button></div>
            </form>
        </div>
    </div>
  )
}

export default AddProducts
