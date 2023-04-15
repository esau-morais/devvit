import { currentUser } from '@clerk/nextjs/app-beta';

const Page = async () => {
  const user = await currentUser();

  return <div>{user ? 'hello' : 'sign in'}</div>;
};

export default Page;
