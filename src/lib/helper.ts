export function convertNumberToStringWithDot(number: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
    })
        .format(number)
        .replace(/,/g, '.');
}

export const getTitle = (title: string) => {
    const words = title.split(' ');
    if (words.length > 10) {
        const firstOpenParenthesisIndex = title.indexOf('(');
        if (firstOpenParenthesisIndex !== -1) {
            return title.slice(0, firstOpenParenthesisIndex).trim();
        }
    }
    return title;
};
