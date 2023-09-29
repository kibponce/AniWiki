import { gql } from "../__generated__/gql";
import { MediaSort } from "../__generated__/graphql";
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

// Media Fragment Type
export type Media = FragmentType<typeof mediaFragment>;

// parse Media item to consume
export const parseMediaFragment = (item: Media) =>
  useFragment(mediaFragment, item);

// enums
export { MediaSort };
