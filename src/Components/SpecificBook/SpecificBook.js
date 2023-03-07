import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import imageNotFound from "../../images/imageNotFound.png";

import "./SpecificBook.css";
import BookForm from "./BookForm.js";

function SpecificBook({ data }) {
  const [singleItem, setSingleItem] = useState([]);

  const { id } = useParams();
  let image = singleItem.image ? singleItem.image : imageNotFound;

  useEffect(() => {
    const findItem = () => {
      // const newBook = data.find((item) => item[id] === { id });

      const newBook = data[id - 1];
      console.log(data);
      console.log(data[id - 1]);
      console.log(data[id].title);
      setSingleItem(newBook);
    };
    findItem();
  }, [id]);

  return (
    <div className="main">
      <div className="main-content row">
        <div className="section col-4 book-review">
          <div className="book-cover">
            <img
              src={image ? `${image}` : `${imageNotFound}`}
              alt={singleItem.title}
              title={singleItem.title}
              className="img-fluid shadow p-3 mb-5 bg-body-tertiary rounded"
            />
          </div>
        </div>

        <div className="section col-4 book-items text-start">
          <h4 className="book-name fw-bold fs-5">Book name:</h4>
          <p> {singleItem.title} </p>
          <h4 className="book-author fw-bold fs-5">Book author:</h4>
          <p> {singleItem.author}</p>
          <h4 className="book-level fw-bold fs-5">Book level:</h4>
          <p>{singleItem.level}</p>
          <h4 className="book-tags fw-bold fs-5">Book tags:</h4>
          <p>{singleItem.tags}</p>
          <h4 className="short-description fw-bold fs-5">ShortDescription:</h4>
          <p>{singleItem.shortDescription}</p>
        </div>
        <BookForm />
      </div>
      <div className="row mb-2">
        <div className="book-description col-11 ps-5">
          <h4 className="title-book-description fw-bold fs-5 m-2">
            Book description
          </h4>
          <p className="text-description p-3">{singleItem.description}</p>
        </div>
      </div>
    </div>
  );
}
export default SpecificBook;
