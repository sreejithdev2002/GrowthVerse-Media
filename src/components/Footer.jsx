function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#140d19] text-white py-8 px-10">
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        <h3 className="text-xl font-semibold tracking-wide">
          GrowthVerse Media
        </h3>

        <div className="w-16 h-0.5 bg-purple-900 rounded-full" />

        <p className="text-sm text-gray-400">
          Website developed with ❤️ by{" "}
          <a
            href="https://sreejithdev2002.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline font-medium"
          >
            SreejithDev2002
          </a>
        </p>

        <p className="text-xs text-gray-500">
          © {currentYear} GrowthVerse Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
