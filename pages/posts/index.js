import Head from 'next/head';
import Container from '../../components/container';
import MoreStories from '../../components/more-stories';
import Intro from '../../components/intro';
import Layout from '../../components/layout';
import { getAllPosts, getGeneralSetting, getHomePage } from '../../lib/api';
import parse from 'html-react-parser';

export default function Index({ allPosts, preview, generalSetting, homePage }) {
  const morePosts = allPosts.edges.slice(0);
  const yoastHead = parse(homePage.seo?.fullHead);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{homePage.seo?.title}</title>
        {yoastHead}
      </Head>
      <Container>
        <Intro title={generalSetting.title} description={generalSetting.description} />
        {morePosts.length > 0 && (
          <MoreStories posts={morePosts} showExcerpt={true} showAuthor={false} title="Semua Post" />
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts();
  const homePage = await getHomePage('9');
  const generalSetting = await getGeneralSetting();

  return {
    props: { allPosts, preview, generalSetting, homePage }
  };
}
