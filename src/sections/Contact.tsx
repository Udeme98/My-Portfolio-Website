import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <section id="contacts" className="bg-slate-500 font-lato">
        <div className="container mx-auto text-center py-8">
          <h2 className="text-xl md:text-2xl uppercase text-red-700 font-semibold inline-block">
            Contact Me
          </h2>
        </div>
        <div className="container mx-auto text-center py-4 flex justify-center">
          <form className="bg-slate-300 px-4 py-4 rounded-md flex flex-col gap-7 w-full md:w-[50%]">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Your Name"
              placeholder="Your Name"
              className="p-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-red-600 font-lato"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email Address"
              placeholder="Email Address"
              className="p-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-red-600 font-lato"
              required
            />

            <textarea
              name="message"
              id="message"
              aria-label="Your Message"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              rows={7}
              className="p-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-red-600 font-lato"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-600 font-mono"
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
