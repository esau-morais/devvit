import { Input } from '@/components/ui/Input';

export const Search = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input
        className="rounded-full"
        type="search"
        id="search"
        placeholder="Search"
      />
    </div>
  );
};
