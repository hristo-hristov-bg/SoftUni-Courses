import { getAllGames } from '../api/data.js';
import { html } from '../lib.js';
import { gamePreview } from './common.js';



const catalogTemplate = (game) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <div class="allGames">
    ${game.length == 0 
    ? html`<h3 class="no-articles">No articles yet</h3>`
    : html`<div class="allGames-info">
        ${game.map(gamePreview)}
        </div>`}
    </div>
</section>`;



export async function catalogPage(ctx) {
    const game = await getAllGames();
    ctx.render(catalogTemplate(game));
}