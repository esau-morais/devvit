import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Devvits } from '@/components/Devvits';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/Separator';
import Link from 'next/link';

const Page = () => {
  return (
    <section className="grid grid-cols-5 space-x-8">
      <div className="col-span-full md:col-span-3">
        <Devvits />
      </div>
      <div className="hidden md:sticky md:top-16 md:col-span-2 md:block md:h-[calc(100vh-4rem)]">
        <Card>
          <CardHeader>
            <CardTitle>Home</CardTitle>
            <CardDescription>
              Your personal Devvit frontpage. Come here to check in with your
              favorite communities.
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardFooter>
            <Link
              href="/submit"
              className="mt-2 inline-flex w-full items-center"
            >
              <Plus className="mr-2 h-4 w-4" /> Create post
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Page;
