import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import LinkButton from '../components/link-button';
import { getAllPostsForHome, getGeneralSetting } from '../lib/api';
import parse from 'html-react-parser';

export default function Index({ allPosts: { posts, page }, preview, generalSetting }) {
  const morePosts = posts.edges.slice(0);
  const yoastHead = parse(page.seo?.fullHead);
  const homeContent = parse(page?.content);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{page.seo?.title}</title>
        {yoastHead}
      </Head>
      <Container>
        <Intro title={generalSetting.title} description={generalSetting.description} />
        {homeContent}
        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )} */}
        {morePosts.length > 0 && (
          <MoreStories
            posts={morePosts}
            showAuthor={false}
            showExcerpt={false}
            title="Post Terbaru"
          />
        )}
        <LinkButton uri="posts" text="Lihat Semua Post" />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const generalSetting = await getGeneralSetting();

  return {
    props: { allPosts, preview, generalSetting }
  };
}
