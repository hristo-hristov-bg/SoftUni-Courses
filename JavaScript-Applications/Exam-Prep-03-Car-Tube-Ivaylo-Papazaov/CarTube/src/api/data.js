import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllListings() {
    return api.get('/data/cars?sortBy=_createdOn%20desc');
}

export async function getListingsById(id) {
    return api.get('/data/cars/' + id);
}

export async function getMyListings(userId) {
    return api.get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createListing(listing) {
    return api.post('/data/cars', listing);
}

export async function editListing(id, listing) {
    return api.put('/data/cars/' + id, listing);
}

export async function deleteListing(id) {
    return api.del('/data/cars/' + id);
}