export default function Nav() {
    return (
      <nav className="absolute z-10 w-full border-b border-black/5 ddkkborder-white/5 lg:border-transparent astro-ES6RJE63">
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4 astro-ES6RJE63">
      <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max astro-ES6RJE63">
        <a
          href="/#home"
          aria-label="logo"
          className="flex items-center space-x-2 astro-ES6RJE63"
        >
          <div aria-hidden="true" className="flex space-x-1 astro-ES6RJE63">
            <div className="h-4 w-4 rounded-full bg-gray-900 ddkkbg-white astro-ES6RJE63" />
            <div className="h-6 w-2 bg-purple-500 astro-ES6RJE63" />
          </div>
          <span className="text-2xl font-bold text-gray-900 ddkktext-white astro-ES6RJE63">
            Astrolus
          </span>
        </a>
        <div className="relative flex max-h-10 items-center lg:hidden astro-ES6RJE63">
          <button
            aria-label="humburger"
            id="hamburger"
            className="relative -mr-6 p-6 astro-ES6RJE63"
          >
            <div
              aria-hidden="true"
              id="line"
              className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 ddkkbg-gray-300 astro-ES6RJE63"
            />
            <div
              aria-hidden="true"
              id="line2"
              className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 ddkkbg-gray-300 astro-ES6RJE63"
            />
          </button>
        </div>
      </div>
      <div
        id="navLayer"
        aria-hidden="true"
        className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 ddkkbg-gray-900/70 lg:hidden astro-ES6RJE63"
      />
      <div
        id="navlinks"
        className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 ddkkborder-gray-700 ddkkbg-gray-800 ddkkshadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none astro-ES6RJE63"
      >
        <div className="w-full text-gray-600 ddkktext-gray-200 lg:w-auto lg:pr-4 lg:pt-0 astro-ES6RJE63">
          <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm astro-ES6RJE63">
            <li className="astro-ES6RJE63">
              <a
                href="/#features"
                className="hover:text-purple-500 block transition ddkkhover:text-white md:px-4 astro-ES6RJE63"
              >
                <span className="astro-ES6RJE63">Features</span>
              </a>
            </li>
            <li className="astro-ES6RJE63">
              <a
                href="/#solution"
                className="hover:text-purple-500 block transition ddkkhover:text-white md:px-4 astro-ES6RJE63"
              >
                <span className="astro-ES6RJE63">Solution</span>
              </a>
            </li>
            <li className="astro-ES6RJE63">
              <a
                href="/#reviews"
                className="hover:text-purple-500 block transition ddkkhover:text-white md:px-4 astro-ES6RJE63"
              >
                <span className="astro-ES6RJE63">Reviews</span>
              </a>
            </li>
            <li className="astro-ES6RJE63">
              <a
                href="https://tailus.gumroad.com/l/astls-premium"
                target="_blank"
                className="flex gap-2 font-semibold text-gray-700 transition hover:text-purple-500 ddkktext-white ddkkhover:text-white md:px-4 astro-ES6RJE63"
              >
                <span className="astro-ES6RJE63">Premium</span>
                
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12 lg:mt-0 astro-ES6RJE63">
          <a
            href="/register"
            className="relative flex h-9 w-full items-center justify-center px-4 absolute inset-0 rounded-full bg-purple-500 transition duration-300 hover:scale-105 active:duration-75 active:scale-95 sm:w-max astro-ES6RJE63"
          >
            <span className="relative text-sm font-semibold text-white astro-ES6RJE63">
              {" "}
              Get Started
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

    );
  }
  