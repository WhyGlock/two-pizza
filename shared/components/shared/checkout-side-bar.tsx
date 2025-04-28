import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemDetails } from "./checkout-details";
import { ArrowRightToLineIcon, Package, Percent, TruckIcon } from "lucide-react";
import { Button } from "../ui/button";

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
    totalAmount: number;
    className?: string;
}

export const CheckoutSideBar: React.FC<Props> = ({className, totalAmount}) => {
    
    const vatPriced = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPriced;

    return (
        <WhiteBlock className="p-6 sticky top-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xl">Итого:</span>
                    <span className="text-4xl font-extralight">{totalPrice}</span> 
                </div>

            <CheckoutItemDetails 
            title={
                <div className="flex items-center">
                <Package size={24} className="mr-2 text-gray-300"/>
                Стоимость корзины:
                </div>
            } 
            value={`${totalAmount} ₽`}
             />
            <CheckoutItemDetails title={
                <div className="flex items-center">
                <Percent size={24} className="mr-2 text-gray-300"/>
                Налоги:
                </div>
            }  value={`${vatPriced} ₽`} />
            <CheckoutItemDetails title={
                <div className="flex items-center">
                <TruckIcon size={24} className="mr-2 text-gray-300"/>
                Доставка:
                </div>
            }  value={`${DELIVERY_PRICE} ₽`} />

            <Button 
            type="submit"
            className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
            Оплатить
            <ArrowRightToLineIcon className="w-5 ml-2"/>
            </Button> 
            </WhiteBlock>
    )
}