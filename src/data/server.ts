export async function getData(url: string) {
    return fetch(url).then(res => res.json());
}