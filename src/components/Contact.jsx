function Contact() {
  return (
    <div className="contact  p-6 bg-white shadow-lg rounded-lg mt-10 font-poppins ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
      <p className="mb-4 text-center text-gray-600">If you have any questions, feel free to reach out!</p>
      
      <form className="space-y-4 flex flex-col *:justify-center items-center">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            className="w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className=" w-l bg-gray-800ll hover:bg-blue-600 text-white font-semibold py-2 px-4  transition"
        >
          Send
        </button>
      </form>

      <p className="mt-6 text-gray-500 text-center">
        Thank you for visiting our contact page! We will get back to you as soon as possible.
      </p>
    </div>
  );
}

export default Contact;
