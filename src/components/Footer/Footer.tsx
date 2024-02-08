const Footer = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="border-t ">
      <div className="">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm ">
            <a
              href="https://github.com/xbiwas"
              target="_blank"
              className="hover:underline"
            >
              Biwas
            </a>
            {currentDate.slice(4, 8)}. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
