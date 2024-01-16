export default function ChapterPage({
    params,
}: {
    params: { chapterId: string };
}) {
    return <div>Detail Chapter Page {params.chapterId}</div>;
}
