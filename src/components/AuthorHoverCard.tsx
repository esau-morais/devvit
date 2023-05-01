import {} from '@prisma/client';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/HoverCard';
import Image from 'next/image';

type Author = {
  username: string;
  id: string;
  profileImageUrl: string;
  externalUsername: string | null;
};

const AuthorHoverCard = (author: Author) => {
  const { username, profileImageUrl } = author;

  return (
    <HoverCard>
      <HoverCardTrigger className="underline">u/{username}</HoverCardTrigger>
      <HoverCardContent>
        <div className="flex items-center">
          <Image
            className="mr-2 rounded-full"
            src={profileImageUrl}
            alt={username}
            width={48}
            height={48}
            priority
          />
          <p>u/{username}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AuthorHoverCard;
