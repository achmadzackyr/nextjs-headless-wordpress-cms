import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import Intro from '../../components/intro';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts, getGeneralSetting } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import Tags from '../../components/tags';
import parse from 'html-react-parser';

export default function Post({ post, posts, preview, seo, generalSetting }) {
  const router = useRouter();
  const morePosts = posts?.edges;
  const yoastHead = parse(seo ? seo.fullHead : '');

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        <Intro
          title={generalSetting?.title}
          description={generalSetting?.description}
          url={generalSetting?.url}
        />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{seo.title}</title>
                {yoastHead}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
                videoUrl={post.video.url}
                uri={post.uri}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} videoUrl={post.video.url} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} title="Post Lainnya" />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);
  const generalSetting = await getGeneralSetting();

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      seo: data.post.seo,
      generalSetting
    }
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true
  };
}
