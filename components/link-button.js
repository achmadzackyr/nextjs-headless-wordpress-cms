import { HOME_URL } from '../lib/constants';

export default function LinkButton({ uri, text }) {
  return (
    <div className="text-center mb-8">
      <a
        className="bg-red-600 hover:bg-red-700 px-4 py-3 text-white font-bold"
        href={`${HOME_URL}/${uri}`}
      >
        {text}
      </a>
    </div>
  );
}
