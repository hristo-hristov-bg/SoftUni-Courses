import { deleteListing, getListingsById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';


const detailsTemplate = (listing, isOwner, onDelete, isLogged) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${listing.title}</h1>
            <div>
                <img src=${listing.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${listing.description}</p>
            <h4>Date: ${listing.date}</h4>
            <h4>Author: ${listing.author}</h4>
            <div class="buttons">
                ${listingControlsTemplate(listing, isOwner, onDelete, isLogged)}
            </div>
            <p class="likes">Likes: 0</p>
        </div>
    </div>
</section>`;


const listingControlsTemplate = (listing, isOwner, onDelete,isLogged) => {
    if (isOwner) {
        return html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn-delete">Delete</a>
            <a href="/edit/${listing._id}" class="btn-edit">Edit</a>
            `;
    } else if(isLogged != isOwner){
        return html`<a class="btn-like" href="#">Like</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {
    const listing = await getListingsById(ctx.params.id);

    const userData = getUserData();
    const isOwner = userData && userData.id == listing._ownerId;
    const isLogged = userData && userData._ownerId == userData.accsessToken;

    ctx.render(detailsTemplate(listing, isOwner, onDelete, isLogged));

    async function onDelete() {
        const choice = confirm(`Are You sure You want to delete ${listing.title}?`);

        if (choice) {
            await deleteListing(ctx.params.id);
            ctx.page.redirect('/profile');
        }
    }
}