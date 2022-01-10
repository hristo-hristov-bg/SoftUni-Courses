import { html } from '../lib.js';


export const albumPreview = (albums) => html`
<div class="card-box">
    <img src=${albums.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">${albums.name}</p>
            <p class="artist">${albums.artist}</p>
            <p class="genre">${albums.genre}</p>
            <p class="price">Price: $${albums.price}</p>
            <p class="date">Release Date: ${albums.releaseDate}</p>
        </div>
        <div class="btn-group">
            <a href="/details/${albums._id}" id="details">Details</a>
        </div>
    </div>
</div>`;

