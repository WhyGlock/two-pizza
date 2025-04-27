'use client';

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import React from "react";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";

interface Props {
    product: ProductWithRelations;
    onSubmit: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({onSubmit: _onSubmit, product}) => {
    const addCartItem = useCartStore(state => state.addCartItem);
    const loding = useCartStore(state => state.loading);
    
    const firstItem = product.items[0];
    const izPizzaForm = Boolean(firstItem.pizzaType);

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
         
         const itemId = productItemId ?? firstItem.id;
        
          await addCartItem({
             productItemId: itemId,
             ingredients,
         });
    
         toast.success(product.name  +  ' добавлен(а) в корзину!');
         _onSubmit?.();
     } catch (error) {
         toast.error('Не удалось добавить' + product.name + ' в корзину!');
         console.error(error);
         }
    };

    if (izPizzaForm) {
        return <ChoosePizzaForm 
        imageUrl={product.imageUrl}
         name={product.name}
          ingredients={product.ingredients} 
          items={product.items} 
          onSubmit={onSubmit}
          loading={loding}
          />
    };

    return <ChooseProductForm 
    imageUrl={product.imageUrl} 
    name={product.name} 
    price={firstItem.price} 
    onSubmit={onSubmit} 
    loading={loding}
    />

}
