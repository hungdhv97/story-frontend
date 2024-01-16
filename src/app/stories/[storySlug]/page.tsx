export default function StoryPage({
    params,
}: {
    params: { storySlug: string };
}) {
    return <div>Detail Story Page {params.storySlug}</div>;
}
