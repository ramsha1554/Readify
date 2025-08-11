function Book(props) {
  return (
    <div className="   border border-black p-4 flex flex-col h-80">
      <h3 className="font-semibold text-lg mb-2">{props.title}</h3>
      <p className="text-gray-600 flex-grow">{props.description}</p>
      <img
        src=""
        alt={props.title}
        className="max-w-full max-h-32 object-contain mt-2 mx-auto" />
     <h3 className="text-gray-800 font-bold mt-2">₹499</h3>
      <p className="text-gray-600 mt-2">Author: {props.author || "Unknown"}</p>
      <button className="bg-gray-800 text-white px-4 py-2 mt-4 hover:text-yellow-400 transition">
        Add to Cart
      </button>
    </div>
  );
}

export default Book;

