import React from "react";
import "./Book.css";
import imageNotFound from "../../images/imageNotFound.png";
import { _ } from "gridjs-react";
import { Link } from "react-router-dom";

export const Book = ({ data }) => {
  const rows = [];
  let cells = [];
  return (
    <div>
      {data.forEach(function (item, index) {
        let image = item.image ? item.image : imageNotFound;
        let id = item.id;

        cells.push(
          <td key={item.id}>
            <div className="col-auto ms-3 mb-2 w-25" id="book-block">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  key={item.id}
                  src={image ? `${image}` : `${imageNotFound}`}
                  className="card-img-top shadow p-3 mb-2 bg-body-tertiary rounded"
                  id="image"
                  alt={item.title}
                  title={item.description}
                />
                <div className="card-body">
                  <h5 className="card-title text-start fw-bold" key={item.id}>
                    {`${item.title.substring(0, 24)}...`}
                  </h5>

                  <p className="card-text text-start" key={item.id}>
                    {`${item.author.substring(0, 26)}...`}
                  </p>
                </div>
                <div className="card-body">
                  <h6
                    className="short-description text-start fs-6"
                    id="short-description"
                    key={item.id}
                  >
                    {`${item.shortDescription.substring(0, 28)}...`}
                  </h6>
                </div>
                <div
                  className="card-body d-flex justify-content-between"
                  key={item.id}
                >
                  <p className="card-text me-auto p-2" key={item.id}>
                    {item.price} $
                  </p>

                  <Link
                    to={`/books/${id}`}
                    href="#"
                    className="view-btn btn btn-primary h-25"
                    id="btn-review"
                    rel="noopener noreferrer"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </td>
        );

        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          rows.push(<tr key={index}>{cells}</tr>);
          cells = [];
        }
      })}

      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Book;
