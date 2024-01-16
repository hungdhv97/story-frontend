export default function GenrePage({
    params,
}: {
    params: { genreSlug: string };
}) {
    return <div>Detail Genre Page {params.genreSlug}</div>;
}
