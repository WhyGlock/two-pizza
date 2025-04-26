import React from 'react';
import Image from 'next/image';

import { Container } from './container';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { SearchInput } from './search-input';
import { cn } from '@/shared/lib/utils';
import { CartDrawer } from './cart-drawer';
import Link from 'next/link';
import { CartButton } from './cart-button';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={35} height={35} alt="Logo" />
          <div>
            <h1 className="text-2xl uppercase font-black">ДВЕ ПИЦЦЫ</h1>
            <p className="text-sm text-gray-400 leading-3">вкуснее чем одна...</p>
          </div>
        </div>
        </Link>
        
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};
