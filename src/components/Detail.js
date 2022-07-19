import React from "react";

function Detail({ selected, closeDetail }) {
  return (
    <section className="detail">
      <div className="content">
        <h2>{selected.Title}</h2>
        <span>Release Date: {selected.Year}</span>
        <p className="rating">IMDB Rating: {selected.imdbRating} &#9734;</p>

        <div className="about">
          <img src={selected.Poster} alt="" />
            <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closeDetail}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Detail;
