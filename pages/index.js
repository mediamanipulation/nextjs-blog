
import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout'
import AuthorIntro from 'components/AuthorIntro'
// import CardListItem from 'components/CardListItem'
import CardItem from 'components/CardItem'
// import client from '../lib/sanity'

import { getAllBlogs } from '../lib/api'

export default function Home({ blogs }) {
// debugger
  return (
    <PageLayout>
      <div className='blog-detail-page'>
        <AuthorIntro />
        <hr />
        {/* {JSON.stringify(blogs)}
        {console.log(JSON.stringify(blogs))} */}
        {/* className from props */}
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              {/* CardListItem STARTS */}
              {/* <CardListItem /> */}
              {/* CardListItem ENDS */}
            </Col>
            {blogs.map(blog =>
              <Col key={blog.slug} md="4">
                <CardItem
                  title={blog.title}
                  subtitle={blog.subtitle}
                  date={blog.date}
                  image={blog.coverImage}
                  link={{
                    href: '/blogs/[slug]',
                    as: `/blogs/${blog.slug}`
                  }}
                  author={blog.author}
                />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </PageLayout>
  )
}


export async function getStaticProps() {
  const blogs = await getAllBlogs()
  return {
    props: {
      blogs,
    }
  }
}


// export async function getAllBlogs() {
//   const results = await client
//     .fetch(`*[_type == "blog"]{title, subtitle, slug}`);
//   return results;
// }