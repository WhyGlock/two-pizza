import { pizzaSizes, PizzaType } from '@/shared/constant/pizza';
import { ProductItem } from "@prisma/client";
import { Variant } from '../components/shared/group-variants';

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
    const filtredPizzasByType = items.filter((item) => item.pizzaType === type);
            return pizzaSizes.map((item) => ({
                name: item.name,
                value: item.value,
                disabled: !filtredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
        
            }));
};