import { gql } from "apollo-boost";

export const CREATE_CONTACT_MUTATION = gql`
  mutation(
    $company: String
    $email: String
    $enquiry: String
    $firstName: String
    $lastName: String
    $message: String
    $phone: String
  ) {
    createContact(
      company: $company
      email: $email
      enquiry: $enquiry
      firstName: $firstName
      lastName: $lastName
      message: $message
      phone: $phone
    ) {
      contact {
        id
        firstName
        lastName
        company
        email
        enquiry
        message
        phone
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation(
    $title: String!
    $content: String
    $thumb: String!
    $category: String!
  ) {
    createPost(
      title: $title
      content: $content
      thumb: $thumb
      category: $category
    ) {
      post {
        id
        title
        content
        thumb
        createdAt
        updatedAt
        published
        slug
      }
    }
  }
`;
