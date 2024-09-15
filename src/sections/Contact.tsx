// const Contact = () => {
//   return (
//     <>
//       <section id="contacts" className="bg-slate-500 font-lato">
//         <div className="container mx-auto text-center py-8">
//           <h2 className="text-xl md:text-2xl uppercase text-red-800 font-semibold inline-block">
//             Contact Me
//           </h2>
//         </div>
//         <div className="container mx-auto text-center py-4 flex justify-center">
//           <form className="bg-slate-300 px-2 py-2 rounded-md flex flex-col gap-5 w-[50%]">
//             <input type="text" name="name" id="" placeholder="Your Name" />
//             <input
//               type="email"
//               name="email"
//               id=""
//               placeholder="Email Address"
//               className=""
//             />
//             <textarea
//               name="messsage"
//               id=""
//               placeholder="Type Message..."
//             ></textarea>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Contact;

const Contact = () => {
  return (
    <>
      <section id="contacts" className="bg-slate-500 font-lato">
        <div className="container mx-auto text-center py-8">
          <h2 className="text-xl md:text-2xl uppercase text-red-800 font-semibold inline-block">
            Contact Me
          </h2>
        </div>
        <div className="container mx-auto text-center py-4 flex justify-center">
          <form className="bg-slate-300 px-4 py-4 rounded-md flex flex-col gap-5 w-full md:w-[50%]">
            <label htmlFor="name" className="text-left text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="p-2 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-red-800"
            />

            <label htmlFor="email" className="text-left text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="p-2 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-red-800"
            />

            <label htmlFor="message" className="text-left text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message..."
              className="p-2 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-red-800"
            ></textarea>

            <button
              type="submit"
              className="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
