export default function StoryPage({ params }: { params: { slug: string } }) {
    return <div>List Stories follow Genre {params.slug}</div>;
}
