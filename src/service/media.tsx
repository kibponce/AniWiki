import { gql } from "../__generated__/gql";
import {
  MediaSort,
  CharacterRole,
  MediaFormat,
} from "../__generated__/graphql";
import { FragmentType, useFragment } from "../__generated__/fragment-masking";

export const mediaFragment = gql(`
  fragment MediaFields on Media {
    id
    title {
      english
      native
      userPreferred
    }
    coverImage {
      color
      extraLarge
      large
      medium
    }
    bannerImage
    studios {
      nodes {
        name
      }
    }
    description
    format
    duration
    status
    popularity
    favourites
  }
`);

export const getMediaListQuery = gql(`
  query GetMediaLists($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort, search: $search) {
        ...MediaFields
      }
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`);

export const getMediaDetails = gql(`
  query GetMediaDetails($mediaId: Int, $role: CharacterRole) {
    Media(id: $mediaId) {
      ...MediaFields
      characters(role: $role) {
        nodes {
          name {
            userPreferred
            full
            first
            last
          }
          image {
            large
            medium
          }
          gender
        }
      }
    }
  }
`);

// Media Fragment Type
export type Media = FragmentType<typeof mediaFragment>;

// parse Media item to consume
export const parseMediaFragment = (item: Media) =>
  useFragment(mediaFragment, item);

// enums
export { MediaSort, CharacterRole, MediaFormat };
