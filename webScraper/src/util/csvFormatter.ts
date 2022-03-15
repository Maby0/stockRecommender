export default function doubleQuoteDoubler(text: string): string {
    return text.replace(/"/g, '""')
}