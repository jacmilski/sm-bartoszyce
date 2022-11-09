// @ts-nocheck
import React from 'react';
import PlansCss from '../CSS/plans-css';
import PageInfo from '../components/PageInfo';
import{ graphql } from 'gatsby';
import Seo from '../components/seo';

const Plans = ({ data }) => {

    const { allDatoCmsLessonsPlan: { nodes } } = data;

    return (
      Boolean(nodes.length) ? (
          <PlansCss.MainWrapper>
            <PlansCss.Heading>Plany lekcji</PlansCss.Heading>
            {nodes.map(plan => (
                <PlansCss.ContentWrapper key={plan.id}>
                    <h2>{plan.heading}</h2>
                    <iframe
                        src={plan.lessonTable.url}
                        title={plan.heading}
                        width='100%'
                        height='400px'
                    ></iframe>
                <hr />
                </PlansCss.ContentWrapper>
            ))}
        </PlansCss.MainWrapper>
      )  : (
        <PageInfo title='Brak planów lekcji' />
      )
    )
}

export const query = graphql`
  query {
    allDatoCmsLessonsPlan {
      nodes {
        id
        heading
        lessonTable {
          url
        }
      }
    }
  }
`;

export const Head = () => <Seo title='Plany lekcji' />

export default Plans;