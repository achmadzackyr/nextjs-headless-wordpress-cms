import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import Categories from '../components/categories';
import YoutubePlayer from '../components/youtube-player';

export default function PostHeader({ title, coverImage, date, author, categories, videoUrl, uri }) {
  return (
    <>
      <a href={`https://chefotang.com/posts${uri}`}>
        <PostTitle>{title}</PostTitle>
      </a>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {videoUrl ? (
          <YoutubePlayer url={videoUrl} />
        ) : (
          <CoverImage title={title} coverImage={coverImage} />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Diposting pada <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
