export async function fetchGenres() {
    const res = await fetch('http://localhost:8000/api/genres/');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}