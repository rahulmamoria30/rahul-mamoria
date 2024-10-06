import Link from "next/link";
import Image from "next/image";
import skillsData from "./skills-data.js";

export default function Skills() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 border border-gray-600 rounded-lg transition-transform duration-300 transform hover:scale-105`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-2">
              <span className="text-gray-100 mr-3">{skill.icon}</span>
              <h3 className="text-lg font-semibold">
                <span className="text-gray-300 hover:text-gray-100 transition-colors">
                  {skill.name}
                </span>
              </h3>
            </div>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </section>

      {/* Coding Profiles Section */}
      <div className="mt-12">
        <h2 className="text-2xl text-gray-100 mb-6">Coding Profiles</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <Link
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-200 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Image
              src="/images/leetcode.svg"
              alt="LeetCode"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>LeetCode</span>
          </Link>

          <Link
            href="https://www.geeksforgeeks.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-200 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GeeksforGeeks"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>GeeksforGeeks</span>
          </Link>

          <Link
            href="https://www.codechef.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-200 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Image
              src="/images/codechef.png"
              alt="CodeChef"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>CodeChef</span>
          </Link>

          <Link
            href="https://codeforces.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-200 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Image
              src="https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg"
              alt="Codeforces"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>Codeforces</span>
          </Link>
        </div>
      </div>
    </>
  );
}
