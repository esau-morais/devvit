import { Input } from '@/components/ui/Input';
import { SearchIcon } from 'lucide-react';

export const Search = () => {
  return (
    <div className="relative grid w-full max-w-sm items-center gap-2">
      <Input
        className="from-bg-[#EBEBEB] rounded-full bg-gradient-to-l from-10% pl-8"
        type="search"
        id="search"
        placeholder="Search"
      />
      <SearchIcon className="absolute left-2" width={16} height={16} />
    </div>
  );
};
