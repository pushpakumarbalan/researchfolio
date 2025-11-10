import Image from "next/image";
import { socialLinks } from "./lib/config";
import VisitorMap from "./components/VisitorMap";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="rounded-lg bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-8 sm:mb-8"
        unoptimized
        width={280}
        height={320}
        priority
      />
      <h1 className="mb-8 text-2xl font-medium">Your R. Name!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS.
        </p>
        <p>
          Researchfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
          Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and {""}
          <a
            target="_blank"
            href="https://github.com/pushpakumarbalan/researchfolio"
          >
            more
          </a>
          .
        </p>
        <p>
          Researchfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>

            Deploy
{" "}
          your Researchfolio site with Vercel in minutes.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://www.github.com/pushpakumarbalan/" target="_blank">
            Pushpa Kumar
          </a>
          .
        </p>
      </div>

      {/* News Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">news</h2>
        <div className="space-y-2">
          <div className="flex">
            <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">Jan 15, 2016</span>
            <span className="text-sm ml-4">A simple inline announcement with Markdown emoji! ✨😊</span>
          </div>
          <div className="flex">
            <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">Nov 07, 2015</span>
            <span className="text-sm text-purple-600 dark:text-purple-400 ml-4">A long announcement with details</span>
          </div>
          <div className="flex">
            <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">Oct 22, 2015</span>
            <span className="text-sm ml-4">A simple inline announcement.</span>
          </div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">latest posts</h2>
        <div className="space-y-2">
          <div className="flex">
            <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">Mar 26, 2025</span>
            <a href="#" className="text-sm text-purple-600 dark:text-purple-400 hover:underline ml-4">a post with plotly.js</a>
          </div>
          <div className="flex">
            <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">Dec 04, 2024</span>
            <a href="#" className="text-sm text-purple-600 dark:text-purple-400 hover:underline ml-4">a post with image galleries</a>
          </div>
          <div className="flex">
            <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">May 14, 2024</span>
            <a href="#" className="text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center ml-4">
              Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Selected Publications Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">selected publications</h2>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-start space-x-4">
            <button className="bg-purple-600 text-white text-xs px-2 py-1 rounded">PhysRev</button>
            <div className="flex-1">
              <h3 className="font-medium text-sm mb-1">Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-medium">A. Einstein</span>**, <span className="font-medium">B. Podolsky</span>*, <span className="font-medium">N. Rosen</span>*†
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Phys. Rev., New Jersey. <a href="#" className="text-purple-600 dark:text-purple-400">More Information can be found here</a>, May 1935
              </p>
              <div className="flex space-x-2 mb-2">
                <button className="border border-gray-300 dark:border-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800">ABS</button>
                <button className="border border-gray-300 dark:border-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800">DOI</button>
                <button className="border border-gray-300 dark:border-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800">HTML</button>
                <button className="border border-gray-300 dark:border-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800">PDF</button>
                <button className="border border-gray-300 dark:border-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800">VIDEO</button>
              </div>
              <div className="flex space-x-4 text-xs text-gray-600 dark:text-gray-400">
                <span>Altmetric 821</span>
                <span>Citations 13k</span>
                <span>scholar N/A</span>
                <span>IN inspire 4.7K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Map Section */}
      <div className="mt-8">
        <VisitorMap />
      </div>
    </section>
  );
}
