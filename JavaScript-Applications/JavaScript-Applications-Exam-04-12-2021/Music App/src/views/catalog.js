import { getAllAlbums } from '../api/data.js';
import { html } from '../lib.js';
import { albumPreview } from '../views/common.js';


const catalogTemplate = (albums) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.length == 0
    ? html`<p>No Albums in Catalog!</p>`
    : html`<ul class="other-books-list">
            ${albums.map(albumPreview)}
            </ul>`}
</section>`;

export async function catalogPage(ctx) {
    const albums = await getAllAlbums();

    ctx.render(catalogTemplate(albums));
}

