import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filter.name],
  (items, filter) => items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
);

export const selectNameFilter = state => state.filter.name;