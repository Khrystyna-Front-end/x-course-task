import React, { useState } from "react";
import "./BookList.css";
import Book from "../BookList/Book.js";
import { books } from "../.././data.js";

function BookList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
  };

  const search = (data) => {
    if (selectedFilter === 1) {
      return data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (selectedFilter === 2) {
      return data.filter((item) => item.price >= 0 && item.price <= 15);
      // .sort(sortByPrice);
    } else if (selectedFilter === 3) {
      return books.filter((item) => item.price > 15 && item.price <= 30);
      // .sort(sortByPrice);
    } else if (selectedFilter === 4) {
      return books.filter((item) => item.price > 30);
      // .sort(sortByPrice);
    }
  };

  return (
    <>
      <div class="main-search-block">
        {" "}
        <form
          class="row justify-content-center mt-5"
          id="search-form"
          onSubmit={handleSearchSubmit}
        >
          {" "}
          <div class="col-auto">
            {" "}
            <input
              type="text"
              class="form-control"
              placeholder="Search by book name"
              id="search-text-input"
              autocomplete="off"
              required
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>
          <div class="dropdown col-auto">
            <select
              id="filterByPrice"
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="Price"
              onChange={(e) => handleFilterChange(parseInt(e.target.value))}
            >
              <option value={1}>Price 💰</option>
              <option value={2}>$0-$15</option>
              <option value={3}>$15-$30</option>
              <option value={4}>$30+</option>
            </select>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-outline-info" title="Search">
              🔍 📚
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center mt-5" id="book-shelf">
        <Book data={search(books)} />
      </div>
          </>
  );
}

export default BookList;
