import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/NavigationMenu';
import { Search } from '@/components/Search';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export const TopBar = () => {
  return (
    <NavigationMenu className="border-b border-b-zinc-300 bg-light/70 backdrop-blur-md dark:border-b-dark-secondary dark:bg-dark/70">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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

        <NavigationMenuItem className="flex items-center space-x-2">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
