import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-64 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col justify-between">
        <figure className="h-2/3">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body h-1/3 flex flex-col justify-between">
          <h2 className="card-title text-lg font-semibold text-center truncate">
            {item.name}
          </h2>
          <div className="badge badge-secondary mx-auto">{item.category}</div>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-2 border-gray-300 hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
