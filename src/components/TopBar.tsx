import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/NavigationMenu';
import { Search } from '@/components/Search';
import { Button } from './ui/Button';
import { LayoutGrid, LayoutList } from 'lucide-react';
import { Separator } from '@/components/ui/Separator';
import Link from 'next/link';

export const TopBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-2 h-6 w-6"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span className="hidden font-bold sm:inline-block">Devvit</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Search />
        </NavigationMenuItem>

        <NavigationMenuItem className="inline-flex rounded-md bg-zinc-100 dark:bg-slate-600">
          <Button variant="ghost">
            <LayoutList width={16} height={16} />
          </Button>
          <Separator
            orientation="vertical"
            className="mx-1.5 h-5 self-center"
          />
          <Button variant="ghost">
            <LayoutGrid width={16} />
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
