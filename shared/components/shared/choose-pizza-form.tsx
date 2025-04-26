import { cn } from "@/shared/lib/utils";
import React from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui/button";
import { GroupVariants } from "./group-variants";
import { mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from "@/shared/constant/pizza";
import { IngredientItem } from "./ingredient-item";
import { Ingredient, ProductItem } from "@prisma/client";
import { useSet } from "react-use";
import { calcTotalPizzaPrice, getAvailablePizzaSizes, getPizzaDetails } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";

interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    loading?: boolean;
    onSubmit: (itemId: number, ingredients: number[]) => void;
}


export const ChoosePizzaForm: React.FC<Props> = ({ 
    name,
    items,
    imageUrl,
    ingredients,
    loading,
    onSubmit,
    className, 
}) => {
    const {size, type, selectedIngredients, availableSizes, currentItemId, setSize, setType, addIngredient} = usePizzaOptions(items);

    const { totalPrice } = getPizzaDetails(
        type,
        size,
        items,
        ingredients,
        selectedIngredients,
      );


    const handleClickAdd = () => {
        if (currentItemId) {
          onSubmit(currentItemId, Array.from(selectedIngredients));
        }
      };
    
    

    return ( <div className={cn(className, 'flex flex-1')}>
                      <ProductImage imageUrl={imageUrl} size={size} />
            
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <div className="flex flex-col gap-4 mt-5">
                <GroupVariants items={availableSizes} Value={String(size)} onClick={Value => setSize(Number(Value) as PizzaSize)} />
                <GroupVariants items={pizzaTypes} Value={String(type)} onClick={Value => setType(Number(Value) as PizzaType)} />
                </div>


                <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
                <div className="grid grid-cols-3 gap-2">
                    {ingredients.map((ingredient) => (
                        <IngredientItem
                        key={ingredient.id}
                        name={ingredient.name}
                        price={ingredient.price}
                        imageUrl={ingredient.imageUrl}
                        onClick={() => addIngredient(ingredient.id)}
                        active={selectedIngredients.has(ingredient.id)}
                    />
                    ))}
                </div>
                </div>


                <Button 
                loading={loading}
                onClick={handleClickAdd}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10 ">
                        Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};