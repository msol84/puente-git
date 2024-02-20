// Datos del archivo JSON
data = {
    etiquetas_en_linea: [
        'a',
        'abbr',
        'acronym',
        'b',
        'bdi',
        'bdo',
        'br',
        'cite',
        'code',
        'data',
        'em',
        'i',
        'img',
        'kbd',
        'mark',
        'q',
        'samp',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'time',
        'u',
        'var',
    ],
    etiquetas_en_bloque: [
        'address',
        'article',
        'aside',
        'blockquote',
        'dd',
        'div',
        'dl',
        'dt',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1 ... h6',
        'header',
        'hgroup',
        'hr',
        'li',
        'main',
        'nav',
        'ol',
        'p',
        'pre',
        'section',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'tr',
        'ul',
    ],
};

const BlockLabels = document.getElementById('etiquetasBloque');
const LineLabels = document.getElementById('etiquetasLinea');

data.etiquetas_en_linea.forEach((label) => {
    const li = document.createElement('li');
    li.textContent = label;
    LineLabels.appendChild(li);
});

data.etiquetas_en_bloque.forEach((label) => {
    const li = document.createElement('li');
    li.textContent = label;
    BlockLabels.appendChild(li);
});
