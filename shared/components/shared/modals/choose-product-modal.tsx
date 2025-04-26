'use client';

import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { Product } from '@prisma/client';
import { Title } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import React  from 'react'
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
    const router = useRouter();
    const firstItem = product.items[0];
    const izPizzaForm = Boolean(firstItem.pizzaType);
    const addCartItem = useCartStore(state => state.addCartItem);

    const onAddProduct = () => {
        addCartItem({
            productItemId: firstItem.id,
        });
    };

    const onAddPizaa = (productItemId: number, ingredients: number[]) => {
        addCartItem({
            productItemId,
            ingredients,
        });
    }

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
                {izPizzaForm ? (
                    <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items} onSubmit={onAddPizaa}/>
                ): ( 
                <ChooseProductForm imageUrl={product.imageUrl} name={product.name} price={firstItem.price} onSubmit={onAddProduct} />
                )}
            </DialogContent>    
        </Dialog>
    );
}