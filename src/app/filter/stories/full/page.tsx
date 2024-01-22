import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { FilterTable } from '@/components/FilterPage/FilterTable/FilterTable';

export default function FullStoryListPage() {
    const paths = [
        { title: 'Home', href: '/' },
        { title: 'Truyện Full', href: '/filter/stories/full' },
    ];

    return (
        <div className="container">
            <Breadcrumb paths={paths} />
            <FilterTable />
        </div>
    );
}
