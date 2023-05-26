import { CreateApi,createApi,fakeBaseQuery } from "@reduxjs/toolkit/dist/query";
import {doc,collection, getDocs, getDoc} from "firebase/firestore";
import { firestore } from "../../firebase";
import { firestoreApi } from "../apiSlice";


export const postsApi = firestoreApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            async queryFn() {
                try {
                    const ref = collection(firestore, "posts");
                    const querySnapshot = await getDocs(ref);
                    let posts = [];
                    querySnapshot.forEach((doc) => {
                        posts.push({id: doc.id, ...doc.data()})
                    });
                    return{ data: posts };
                } catch (error) {
                    console.error(error.message)
                    return {error: error.message}
                }
            },
            providesTags: ["Post"]
        }),
        getSinglePost: builder.query({
            async queryFn(id) {
                try{
                    const docRef = doc(firestore,"posts",id);
                    const querySnapshot = await getDoc(docRef);
                    return {data: querySnapshot.data()};
                } catch (error) {
                    return {error};
                }
            },
            providesTags: ["Post"]
        }),
    })
})

export const {
    usegetPostsQuery,
    useGetSinglePostQuery,
} = postsApi;
