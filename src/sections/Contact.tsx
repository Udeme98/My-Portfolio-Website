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
          <form className="bg-slate-300 px-2 py-2 rounded-md flex flex-col gap-5 w-[50%]">
            <input type="text" name="name" id="" placeholder="Your Name" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              className=""
            />
            <textarea
              name="messsage"
              id=""
              placeholder="Type Message..."
            ></textarea>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
