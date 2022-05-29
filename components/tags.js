export default function Tags({ tags, videoUrl }) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        Tagged
        {tags.edges.map((tag, index) =>
          index == 0 ? (
            <span key={index} className="ml-4 font-normal">
              <a href={videoUrl}>{tags.edges[0].node.name}</a>
            </span>
          ) : (
            <span key={index} className="ml-4 font-normal">
              {tag.node.name}
            </span>
          )
        )}
      </p>
    </div>
  );
}
