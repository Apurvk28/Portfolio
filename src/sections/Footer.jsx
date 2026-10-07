const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      <div className="flex flex-wrap gap-2">
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Terms & Conditions
        </a>
        <span>|</span>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Privacy Policy
        </a>
        <span>|</span>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Contact Us
        </a>
      </div>

      <p>© 2025 Apurv. All rights reserved.</p>
    </section>
  );
};

export default Footer;
