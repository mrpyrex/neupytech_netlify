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
