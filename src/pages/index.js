import React from 'react'
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ul>
            {data.allStrapiArticle.edges.map(el => (
                <li key={el.node.id}>
                    <h2>
                        <Link to={`/${el.node.id}`}/>
                        {el.node.title}
                    </h2>
                </li>
            ))}
        </ul>

        <Link to="/page-2/">Go to page 2</Link>
        <br/>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiArticle {
            edges {
                node {
                    id
                    title
                    content
                }
            }
        }
    }
`;
