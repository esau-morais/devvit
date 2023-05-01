'use client';

import { api } from '@/utils/api';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { type Prisma } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Textarea } from './ui/Textarea';

export const Form = () => {
  const router = useRouter();
  const [input, setInput] = useState<Prisma.DevvitCreateInput>({
    title: '',
    content: '',
    authorId: '',
  });

  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.devvits.create.useMutation({
    onSuccess: () => {
      toast.success('Devvit posted successfully!');
      router.push('/');

      void ctx.devvits.getAll.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error('Failed to post! Please try again later.');
      }
    },
  });

  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        mutate(input);
      }}
    >
      <Tabs defaultValue="post">
        <TabsList>
          <TabsTrigger value="post">Post</TabsTrigger>
          <TabsTrigger value="media">Images & Video</TabsTrigger>
          <TabsTrigger value="link">Link</TabsTrigger>
        </TabsList>
        <TabsContent className="space-y-4" value="post">
          <Input
            placeholder="Title"
            value={input.title}
            onChange={(e) =>
              setInput((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
            disabled={isPosting}
          />
          <Textarea
            placeholder="Text (optional)"
            value={input.content ?? ''}
            onChange={(e) =>
              setInput((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
            disabled={isPosting}
          />
        </TabsContent>
        <TabsContent value="media">
          <Input placeholder="Title" />
        </TabsContent>
        <TabsContent className="space-y-4" value="link">
          <Input placeholder="Link" />
          <Input placeholder="Url" />
        </TabsContent>
      </Tabs>

      <Button className="mt-4 self-end" type="submit" disabled={isPosting}>
        Post
      </Button>
    </form>
  );
};
