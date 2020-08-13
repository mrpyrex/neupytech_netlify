import { gql } from "apollo-boost";

export const GET_POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      thumb
      createdAt
      content
      slug
      category {
        id
        catTitle
      }
      author {
        id
        username
        firstName
        lastName
      }
    }
  }
`;

export const GET_POST_CATEGORY_QUERY = gql`
  query PostCatsQuery {
    postCats {
      id
      catDesc
      catTitle
      slug
      postSet {
        id
        title
      }
    }
  }
`;

export const GET_POSTDETAIL_QUERY = gql`
  query PostDetailQuery($id: Int!) {
    post(id: $id) {
      id
      title
      thumb
      createdAt
      content
      slug
      category {
        id
        catTitle
      }
      author {
        id
        username
        firstName
        lastName
      }
    }
  }
`;
