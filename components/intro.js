import { HOME_URL } from '../lib/constants';

export default function Intro({ title, description }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-16 md:mb-12">
      <div className="flex-col md:flex-row flex items-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-4">
          <a href={HOME_URL}>{title}</a>
        </h1>
        <h4 className="text-center md:text-left text-lg mt-4 md:pl-4">{description}</h4>
      </div>
      <div className="flex inline-flex mt-4">
        <h4 className="text-lg">
          <a href={HOME_URL} className="mx-2">
            Home
          </a>
        </h4>
        <h4 className="text-lg">
          <a href={`${HOME_URL}/posts`} className="mx-2">
            Posts
          </a>
        </h4>
        {/* <h4 className="text-lg">
          <a href="#" className="mx-2">
            Category
          </a>
        </h4>
        <h4 className="text-lg">
          <a href="#" className="mx-2">
            Contact
          </a>
        </h4> */}
      </div>
    </section>
  );
}
