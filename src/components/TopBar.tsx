import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/NavigationMenu';
import { Search } from '@/components/Search';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

export const TopBar = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <NavigationMenu className="bg-light/70 dark:bg-dark/70 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur">
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

        <NavigationMenuItem className="hidden md:block">
          <Search />
        </NavigationMenuItem>

        <NavigationMenuItem className="flex items-center space-x-2">
          <Link href="/submit" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex items-center">
              <Plus className="dark:text-slate-400 dark:hover:text-foreground" />
            </NavigationMenuLink>
          </Link>
          <ModeToggle />
          {!isSignedIn ? (
            <SignInButton />
          ) : (
            <>
              {isLoaded ? (
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: 32,
                        height: 32,
                      },
                    },
                  }}
                />
              ) : (
                <span className="inline-block h-8 w-8 animate-pulse rounded-full bg-zinc-300" />
              )}
            </>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
