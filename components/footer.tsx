const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center sm:text-xs md:text-sm text-black">
          &copy; {new Date().getFullYear()} LuxeAura, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
