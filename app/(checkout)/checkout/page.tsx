'use client';

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

import {  CheckoutSideBar, Container, Title } from "@/shared/components/shared";
import { useCart } from "@/shared/hooks";

import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalInfo } from "@/shared/components/shared/checkout-form";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/components/shared/checkout-form/checkout-from-schema";
import { cn } from "@/shared/lib/utils";


export default function CheckoutPage() {

    const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        }
    });

    const onSubmit = (data: CheckoutFormValues) => {
        console.log(data)
    };

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
      };


    return ( <Container className="mt-12">
        <Title text="Оформление заказа" size="lg" className="font-extralight mb-8"/>


       <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-10">
        {/* Левая часть */}
        <div className="flex flex-col gap-10 flex-1 mb-20">

        <CheckoutCart onClickCountButton={onClickCountButton} removeCartItem={removeCartItem} items={items} loading={loading}/>

        <CheckoutPersonalInfo className={cn({'opacity-40 pointer-events-none' : loading})} />
    
        <CheckoutAddressForm className={cn({'opacity-40 pointer-events-none' : loading})} />

        </div>
        
        {/* Правая часть */}
        <div className="w-[450px]">
            <CheckoutSideBar totalAmount={totalAmount} loading={loading}/>
        </div>
        </div>
            </form>
       </FormProvider>
    </Container>
    );
}