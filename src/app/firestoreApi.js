import {createApi,fakeBaseQuery } from "@reduxjs/toolkit/dist/query";

export const firestoreApi = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Post","User","Comment"],
    endpoints: () => ({}),
})