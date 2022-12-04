/** @format */

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const APIURL = process.env.REACT_APP_GRAPH_API;

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

export const getFiles = async(address) => {
  const query = gql `
        query {
            File(where: { User:{address:"${address}"} }) {
                id
                name
                fileType
                cid
                user
                createdAt
                updatedAt
            }
        }
    `;
  const res = await client.query({ query: gql(query) });
  console.log(res);
  return res;
};