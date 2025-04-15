import { Categories } from '@/components/shared/categories';
import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { Header } from '@/components/shared/header';
import { Pagination } from '@/components/shared/pagination';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { SortPopup } from '@/components/shared/sort-popup';
import { Title } from '@/components/shared/title';

export default function Home() {
  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <Header />

      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopup />
        </Container>
      </div>

      <Container className="grid grid-cols-6 gap-2 my-10">
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020"
        />
      </Container>

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  
                ]}
                categoryId={1} listClassName={''}              />
                <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 8,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: 'Гавайская-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  
                ]}
                categoryId={2} listClassName={''} 
                />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
