import Image from 'next/image';

export default function Avatar({ author }) {
  //console.log('au', author.node.firstName);
  const auth = author.node;
  const name = auth
    ? auth.firstName && auth.lastName
      ? `${auth.firstName} ${auth.lastName}`
      : auth.name
    : null;

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image src={auth.avatar.url} layout="fill" className="rounded-full" alt={name} />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
