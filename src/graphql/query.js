import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      slug
      content
      category {
        id
        name
        slug
      }
      postImage
      author {
        id
        lastName
        firstName
      }
      createdAt
      updatedAt
      likes {
        id
        user {
          id
          lastName
          firstName
        }
      }
      comments {
        id
        content
        user {
          id
          lastName
          firstName
        }
      }
    }
  }
`;

export const GET_PROJECTS_QUERY = gql`
  query PeojectsQuery {
    projects {
      id
      title
      description
      projectUrl
      projectImage
      slug
      projectstackSet {
        id
        name
        stackLogo
      }
      category {
        id
        name
      }
      createdAt
      updatedAt
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

export const GET_PROJECT_DETAIL = gql`
  query ProjectDetailQuery($slug: String!) {
    project(slug: $slug) {
      id
      title
      description
      projectUrl
      projectImage
      slug
      client
      industry
      projectstackSet {
        id
        name
        stackLogo
      }
      category {
        id
        name
      }
      createdAt
      updatedAt
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
