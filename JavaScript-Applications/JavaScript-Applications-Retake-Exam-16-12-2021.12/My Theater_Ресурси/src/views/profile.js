import { get } from '../api/api.js';
import { getMyListings } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';




const myListingTemplate = (listing,email) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="/images/profilePic.png">
        </div>
        <h2>${email.email}</h2>
    </div>
    <div class="board">


        ${listing.length == 0
       ? html`<div class="no-events">
            <p>This user has no events yet!</p>
        </div>`
        : html`
            ${listing.map(listingPreviewMyList)}
        </div>
        `}

    </div>
</section>
`;


export async function myListingPage(ctx) {
    const userData = getUserData();
    const listing = await getMyListings(userData.id);
    const email = await getUserData(userData.email);
    ctx.render(myListingTemplate(listing, email));
}

const listingPreviewMyList = (listing) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${listing.imageUrl}>
        <h2>${listing.title}</h2>
        <h6>${listing.date}</h6>
        <a href="/details/${listing._id}" class="details-button">Details</a>
    </div>
</div>
`;