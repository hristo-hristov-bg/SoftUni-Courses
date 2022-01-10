import { getAllListings } from '../api/data.js';
import { html } from '../lib.js';
import { carPreview } from './common.js';



const myListingsTemplate = (cars) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    ${cars.length == 0 
    ? html`<p class="no-cars">No cars in database.</p>`
    : html`<div class="listings">
        ${cars.map(carPreview)}
        </div>`}     
</section>`;



export async function myListingsPage(ctx) {
    const cars = await getAllListings();
    ctx.render(myListingsTemplate(cars));
}