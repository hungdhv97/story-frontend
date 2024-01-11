export default function StoryPage({ params }: { params: { slug: string } }) {
    return <div>Detail Story Page {params.slug}</div>;
}
