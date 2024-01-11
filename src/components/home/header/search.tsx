import { Search as SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Search() {
    const handleClickSearch = () => {};
    return (
        <div>
            <Input
                type="search"
                placeholder="Tìm truyện..."
                className="hidden md:block md:w-[100px] lg:w-[300px]"
            />

            <Button
                className="md:hidden"
                variant="outline"
                size="icon"
                onClick={handleClickSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
}
