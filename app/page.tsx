import { Categories } from '@/components/shared/categories';
import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { Header } from '@/components/shared/header';
import { Pagination } from '@/components/shared/pagination';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { SortPopup } from '@/components/shared/sort-popup';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';
import { prisma } from '@/prisma/prisma-client';
import { AwardIcon } from 'lucide-react';
import { Turret_Road } from 'next/font/google';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <Header />

      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)}/>


      <Container className="grid grid-cols-6 gap-2 my-10">
  
      </Container>

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) => 
                  category.products.length > 0 && (
                   <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products} 
                      listClassName={''}                   />
                  ),
                
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
