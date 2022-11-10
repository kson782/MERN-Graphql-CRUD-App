import { gql } from "@apollo/client";

export const CREATE_ANIME = gql`
    mutation createAnime($title: String!, $studio: String!) {
        createAnime(title: $title, studio: $studio) {
            id
            title
            studio
        }
    }
`;

export const DELETE_ANIME = gql`
    mutation deleteAnime($id: String!) {
        deleteAnime (id: $id) {
            id
            title
            studio
        }
    }
`;

export const UPDATE_ANIME = gql`
    mutation updateAnime($id: String!, $studio: String!) {
        updateAnime (id: $id, studio: $studio) {
            id
            title
            studio
        }
}
`