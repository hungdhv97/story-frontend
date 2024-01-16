import Breadcrumb from '@/components/story/breadcrumb';

export default function StoryPage({
    params,
}: {
    params: { storySlug: string };
}) {
    const paths = [
        { title: 'Home', href: '/' },
        { title: 'Category', href: '/category' },
    ];
    return (
        <div className="container">
            <Breadcrumb paths={paths} />
        </div>
    );
}
