'use client'

import React from 'react';

import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui/input';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';
import { Title } from './title';
import { RangeSlider } from '../ui/range-slider';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
  
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));
  
  const [prices, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 5000});


  const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ 
      ...prices,
      [name]: value,
    })
  }

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selectedIds={pizzaTypes}
        items={[
          { text: 'Тонкое', value: '1'},
          { text: 'Традиционное', value: '2'},
        ]}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selectedIds={sizes}
        items={[
          { text: '20 см', value: '20'},
          { text: '30 см', value: '30'},
          { text: '40 см', value: '40'},
        ]}

      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={30000} value={String(prices.priceFrom)} onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
          <Input type="number" min={100} max={30000} placeholder="30000" value={String(prices.priceTo)} onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[
          prices.priceFrom,
          prices.priceTo,
        ]} 
       onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })} 
        />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Ингредиенты"
        name='ingredients'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}

      />
    </div>
  );
};
