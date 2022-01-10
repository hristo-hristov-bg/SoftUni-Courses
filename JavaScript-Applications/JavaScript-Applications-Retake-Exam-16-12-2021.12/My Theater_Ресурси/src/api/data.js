import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllListings() {
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function getListingsById(id) {
    return api.get('/data/theaters/' + id);
}

export async function getMyListings(userId) {
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createListing(listing) {
    return api.post('/data/theaters', listing);
}

export async function editListing(id, listing) {
    return api.put('/data/theaters/' + id, listing);
}

export async function deleteListing(id) {
    return api.del('/data/theaters/' + id);
}