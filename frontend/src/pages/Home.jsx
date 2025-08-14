import React, { useState } from "react";

const Home = () => {
  return (
    <div className="scroll-smooth">
     <section
  className="min-h-screen bg-gradient-to-br from-blue-950 via-stone-900 to-blue-800 bg-cover flex flex-col justify-center items-center text-white text-center"
>
        <section className="min-h-screen flex flex-col justify-start pt-4">
          <p className="text-4xl sm:text-6xl md:text-9xl text-blue-200 mb-6 px-4 mt-20">
            LedgerFlow
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl text-white mb-6 px-4">
            Manage your store's finances with ease
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl text-white mb-6 px-2">
            Your all-in-one inventory and billing solution
          </p>
        </section>
        <a
          href="#dashboard"
          className="absolute top-52 left-6 sm:top-16 sm:left-10 bg-blue-600 text-white py-2 px-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>

      <section
        id="dashboard"
        className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-800 flex flex-col md:flex-row justify-between items-start p-4 sm:p-8"
      >
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-2xl sm:text-4xl md:text-5xl text-white mb-6">
            Everything you need in one place!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              title="Manage Inventory"
              info="View, add, and update your product stock."
            />
            <Card
              title="Sales Report"
              info="Analyze your sales data and trends."
            />
            <Card
              title="Generate Bill"
              info="Create and print bills for your customers."
            />
          </div>
          
           <div className="flex flex-col sm:flex-row justify-center items-center gap-16 mt-96 pt-16">
            <img
              src="https://www.sweetprocess.com/wp-content/uploads/2024/03/Picture17.jpg"
              alt="Inventory"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://salesblink.io/blog/wp-content/uploads/2024/01/What-Are-The-Key-Elements-Of-A-Sales-Report_-sales-reporting-salesblink-1024x538.webp"
              alt="Sales Report"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://www.billdu.com/wp-content/uploads/2021/04/Invoice-Payment-Terms-1.png"
              alt="Sales Report"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        
        </div>

        <div className="w-full max-w-lg mt-8 md:mt-0 md:ml-16 pt-8">
          <Form />
        </div>
      </section>
    </div>
  );
};

const Card = ({ title, info }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-4 sm:p-6 shadow-lg text-gray-800 w-full mx-auto">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-base sm:text-lg">{info}</p>
    </div>
  );
};

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.name.trim() ||
      !data.email.trim() ||
      !data.subject.trim() ||
      !data.message.trim()
    ) {
      setIsError(true);
      setStatus("Please fill in all fields.");
      return;
    }

    if (!validateEmail(data.email)) {
      setIsError(true);
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsError(false);
    setStatus("Thank you for your message! We will be in touch shortly.");
    setData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
        Get In Touch
      </h1>
      {status && (
        <div
          className={`text-center mb-4 ${
            isError ? "text-red-600" : "text-blue-600"
          }`}
        >
          {status}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={data.subject}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Your Message
          </label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleInput}
            rows="4"
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Home;