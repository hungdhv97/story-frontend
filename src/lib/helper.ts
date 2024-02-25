export function convertNumberToStringWithDot(number: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
    })
        .format(number)
        .replace(/,/g, '.');
}
