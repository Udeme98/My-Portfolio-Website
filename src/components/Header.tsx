const Header = () => {
  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center h-20 container mx-auto">
        <img src="/udemelogo.png" alt="website-logo" width="200" />
        <ul className="flex gap-4 uppercase">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
