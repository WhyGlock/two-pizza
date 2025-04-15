import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Исправлено: передаём просто values, а не [values]
  const [selectedIds, { toggle }] = useSet(new Set<string>(values));

  React.useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.error("Ошибка при загрузке ингредиентов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
    selectedIds,
    onAddId: toggle,
  };
};
