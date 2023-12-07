import React from 'react';
import { useParams } from 'react-router-dom';

function BookInfo() {
  const params = useParams();
  const title = params.title;
  return <div>BookInfo</div>;
}

export default BookInfo;
