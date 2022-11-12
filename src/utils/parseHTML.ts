export default function parseHTML(html: string) {
    return new DOMParser().parseFromString(html, 'text/html').body.textContent;
}