function quoteFormatter(text: string): string {
    return text.replace(/"/g, '""')
}

function htmlTagStrip(text: string): string {
    // remove html tags
    const asd = text.replace(/<[^>]+>/g, ' ');
    // replace multiple spaces with single space
    return asd.replace(/  +/g, ' ');
}

export { quoteFormatter, htmlTagStrip}