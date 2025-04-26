'use client';

import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import React  from 'react'
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';


interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
    const router = useRouter();
    const firstItem = product.items[0];
    const izPizzaForm = Boolean(firstItem.pizzaType);
    const addCartItem = useCartStore(state => state.addCartItem);
    const loding = useCartStore(state => state.loading);

     const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
       try {
        
        const itemId = productItemId ?? firstItem.id;
       
         await addCartItem({
            productItemId: itemId,
            ingredients,
        });

        toast.success(product.name  +  ' добавлен(а) в корзину!');
        router.back();

    } catch (error) {
        toast.error('Не удалось добавить' + product.name + ' в корзину!');
        console.error(error);
        }
    }
     

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
                {izPizzaForm ? (
                    <ChoosePizzaForm 
                    imageUrl={product.imageUrl}
                     name={product.name}
                      ingredients={product.ingredients} 
                      items={product.items} 
                      onSubmit={onSubmit}
                      loading={loding}
                      />
                ): ( 
                <ChooseProductForm 
                imageUrl={product.imageUrl} 
                name={product.name} 
                price={firstItem.price} 
                onSubmit={onSubmit} 
                loading={loding}
                />
                )}
            </DialogContent>    
        </Dialog>
    );
}