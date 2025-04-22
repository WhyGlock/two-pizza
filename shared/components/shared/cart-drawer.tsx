'use client'

import { Button } from '@/shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { CartDrawerItem, CartItem } from './cart-item';
import { ArrowRight } from 'lucide-react';
import { getCartItemDetails } from '@/shared/lib';
import { useCartStore } from '@/shared/store';
import React from 'react';
import { PizzaSize, PizzaType } from '@/shared/constant/pizza';

interface Props {
  className?: string; 
}

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const totalAmount = useCartStore(state => state.totalAmount);
  const items = useCartStore(state => state.items);
  const fetchCartItems = useCartStore(state => state.fetchCartItems);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1">
          {items.map((item) => (
            <div key={item.id} className="mb-2">
              <CartDrawerItem
                id={item.id}
                imageUrl={item.imageUrl}
                details={item.pizzaSize && item.pizaaType
                  ? getCartItemDetails(item.ingredients, item.pizaaType as PizzaType, item.pizzaSize as PizzaSize)
                  : ''
                }
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>
          </div>
        </SheetFooter>

        <SheetFooter className="-mx-6 bg-white p-5">
          <Button type="submit" className="w-full h-12 text-base">
            Оформить заказ
            <ArrowRight className="w-5 ml-2" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
