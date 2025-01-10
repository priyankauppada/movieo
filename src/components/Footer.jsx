import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        {/* Logo and About */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
          <p className="mt-2 text-sm">
            Building beautiful web experiences with simplicity and efficiency.
          </p>
        </div>

        {/* Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22,12A10,10,0,1,0,12,22,10,10,0,1,0,22,12ZM12,2a10,10,0,0,1,0,20,10,10,0,0,1,0-20Zm1.93,5.5H10.74v1.83h1.15c.38,0,.48.19.48.5V11.5H10.74v1.83h1.63v4.31h2.23V13.33H15.7l.22-1.83h-1.56v-.69c0-.29.07-.58.56-.58h1V8.5h-1C13.93,8.5,13.93,7.5,13.93,7.5Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24,4.557a9.794,9.794,0,0,1-2.828.775,4.916,4.916,0,0,0,2.165-2.724A9.864,9.864,0,0,1,20.6,3.993,4.9,4.9,0,0,0,17.049,5.5a13.9,13.9,0,0,1-10.1-5.11,4.882,4.882,0,0,0,1.513,6.547A4.822,4.822,0,0,1,2.8,6.3V6.374a4.883,4.883,0,0,0,3.932,4.788,4.9,4.9,0,0,1-2.2.084,4.883,4.883,0,0,0,4.554,3.391A9.823,9.823,0,0,1,2,18.547a13.868,13.868,0,0,0,7.548,2.211c9.051,0,13.995-7.507,13.995-14.014,0-.213-.006-.426-.017-.637A10.006,10.006,0,0,0,24,4.557Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07,1.22.06,2,.24,2.47.41a5.41,5.41,0,0,1,1.95,1.12,5.41,5.41,0,0,1,1.12,1.95c.17.44.35,1.22.41,2.47.07,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.06,1.22-.24,2-.41,2.47a5.41,5.41,0,0,1-1.12,1.95,5.41,5.41,0,0,1-1.95,1.12c-.44.17-1.22.35-2.47.41-1.27.07-1.65.07-4.85.07s-3.58,0-4.85-.07c-1.22-.06-2-.24-2.47-.41a5.41,5.41,0,0,1-1.95-1.12,5.41,5.41,0,0,1-1.12-1.95c-.17-.44-.35-1.22-.41-2.47C2.16,15.58,2.16,15.2,2.16,12s0-3.58.07-4.85c.06-1.22.24-2,.41-2.47a5.41,5.41,0,0,1,1.12-1.95A5.41,5.41,0,0,1,5.66,2.57c.44-.17,1.22-.35,2.47-.41,1.27-.07,1.65-.07,4.85-.07ZM12,0C8.73,0,8.29,0,6.94.06,5.6.12,4.38.36,3.47.73A7.41,7.41,0,0,0,.73,3.47C.36,4.38.12,5.6.06,6.94,0,8.29,0,8.73,0,12s0,3.71.06,5.06c.06,1.34.3,2.56.67,3.47a7.41,7.41,0,0,0,2.74,2.74c.91.37,2.13.61,3.47.67C8.29,24,8.73,24,12,24s3.71,0,5.06-.06c1.34-.06,2.56-.3,3.47-.67a7.41,7.41,0,0,0,2.74-2.74c.37-.91.61-2.13.67-3.47.06-1.34.06-1.78.06-5.06s0-3.71-.06-5.06c-.06-1.34-.3-2.56-.67-3.47A7.41,7.41,0,0,0,18.53.73C17.62.36,16.4.12,15.06.06,13.71,0,13.27,0,12,0ZM12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84Zm0,10.32A4.16,4.16,0,1,1,16.16,12,4.16,4.16,0,0,1,12,16.16Zm4.41-10.78A1.16,1.16,0,1,1,15.25,5.16,1.16,1.16,0,0,1,16.41,5.38Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
