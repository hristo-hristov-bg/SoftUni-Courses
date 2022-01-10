import { getAllGames } from '../api/data.js';
import { html } from '../lib.js';



const homeTemplate = (game) => html`
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

        <!-- Display div: with information about every game (if any) -->

        ${game.length == 0 
    ? html`<p class="no-articles">No games yet</p>`
    : html`
        ${game.map(gamePreviewHome)}
        `}

        <!-- Display paragraph: If there is no games  -->
        
    </div>
</section>`;



export async function homePage(ctx) {
    const listings = await getAllGames();
    ctx.render(homeTemplate(listings));
}

const gamePreviewHome = (game) => html`
<div class="game">
    <div class="image-wrap">
        <img src=${game.imageUrl}>
    </div>
    <h3>${game.title}</h3>
    <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
        <a href="/details/${game._id}" class="btn details-btn">Details</a>
    </div>
</div>`;