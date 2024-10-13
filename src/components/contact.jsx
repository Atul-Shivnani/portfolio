const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      alert("Message Sent!");
    };
  
    return (
      <div className="flex justify-center items-center h-dvh w-dvw snap-center" id="contact">
        <form
          className="rounded-lg shadow-2xl flex gap-4 flex-col p-10 shadow-neutral-500 w-5/6"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            required
            placeholder="Enter your name"
            className="p-2 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
  
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            className="p-2 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
  
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Type your message here"
            rows="4"
            className="p-2 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
  
          <button
            type="submit"
            className=" w-fit p-10 rounded-lg shadow-xl bg-purple-400 hover:bg-purple-500 hover:shadow-2xl shadow-neutral-500 py-2 border border-purple-500 transition-all ease-in-out delay-75"
          >
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  