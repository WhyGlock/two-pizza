import { Cart } from "@prisma/client";
import { CartDTO } from "../services/dto/cart";
import { it } from "node:test";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";



export type CartStateItem = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    pizzaSize?: number | null;
    pizaaType?: number | null;
    ingredients: Array<{name: string; price: number}>;
};

interface ReturnProps {
    items: CartStateItem[];
    totalAmount: number;
}

export const getCartDetails = (data: CartDTO) => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        price: calcCartItemTotalPrice(item),
        pizzaSize: item.productItem.size,
        type: item.productItem.pizzaType,
        ingredients: item.ingredients.map((ingredient) => ({
            name: ingredient.name,
            price: ingredient.price,
        })),
}));

    return  {
        items,
        totalAmount: data.totalAmount,

    };
};