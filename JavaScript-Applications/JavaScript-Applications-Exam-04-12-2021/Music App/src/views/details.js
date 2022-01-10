import { deleteAlbum, getAlbumById, getAllAlbums } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';



const detailsTemplate = (albums, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${albums.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${albums.name}</h1>
                <h3>Artist: ${albums.artist}</h3>
                <h4>Genre: ${albums.genre}</h4>
                <h4>Price: $${albums.price}</h4>
                <h4>Date: ${albums.releaseDate}</h4>
                <p>Description: ${albums.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${isOwner ?
                html`<div class="actionBtn">
                <a href="/edit/${albums._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="/catalog" class="remove">Delete</a>
            </div>` : null}
            
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const albums = await getAlbumById(ctx.params.id);

    const userData = getUserData();
    const isOwner = userData && albums._ownerId == userData.id;
    ctx.render(detailsTemplate(albums, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are You sure You want to delete this album?');

        if(choice) {
            await deleteAlbum(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }
}





