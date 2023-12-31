import { gql } from "apollo-server";

export default gql`
  type TokenResponse {
    status: String!
    access_token: String!
  }

  type UserResponse {
    status: String!
    user: User!
  }

  type User {
    _id: String!
    armynumber: String!
    nickname: String!
    password: String!
    role: String!
    militarybase: String!
  }
`;
