import React from "react";
import { useQuery, gql } from "@apollo/client";

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

const Books = () => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title} by {author}
      </p>
    </div>
  ));
};

export default Books;
