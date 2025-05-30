
import { ChooseProductModal, ProductImage, Title } from '@/shared/components/shared';
import { Container } from '@/shared/components/shared/container';
import { GroupVariants } from '@//shared/components/shared/group-variants';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProducModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product}/>
}
