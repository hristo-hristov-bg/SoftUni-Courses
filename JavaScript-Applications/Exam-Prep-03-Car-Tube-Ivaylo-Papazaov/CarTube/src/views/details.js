import { deleteListing, getListingsById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';


const detailsTemplate = (car, isOwner, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        <div class="listings-buttons">
        ${carControlsTemplate(car, isOwner, onDelete)}
        </div>
    </div>
</section>`;


const carControlsTemplate = (car, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>`;
    } else {
        return null;
    };
}

export async function detailsPage(ctx) {
    const car = await getListingsById(ctx.params.id);

    const userData = getUserData();
    const isOwner = userData && userData.id == car._ownerId;

    ctx.render(detailsTemplate(car, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Are You sure You want to delete ${car.brand}?`);

        if (choice) {
            await deleteListing(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }
}