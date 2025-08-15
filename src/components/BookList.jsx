import React from "react";

const BookList = ({ebooks}) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
          >
            <a href={ebook.pdfUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={ebook.coverUrl}
                alt={ebook.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {ebook.title}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
