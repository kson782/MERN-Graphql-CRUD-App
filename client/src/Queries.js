import { gql } from "@apollo/client";

export const GET_ANIMES = gql`
    query getAnimes {
        animes {
            id
            title
            studio
        }
    }
`;

export const GET_ANIME = gql`
    query getAnime($id: String!) {
        anime(id: $id) {
            id
            title
            studio
        }
    }
`;