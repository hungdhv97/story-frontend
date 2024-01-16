export default function ChapterPage({
    params,
}: {
    params: { chapterSlug: string };
}) {
    return <div>Detail Chapter Page {params.chapterSlug}</div>;
}
