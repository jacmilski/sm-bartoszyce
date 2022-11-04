// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import{ graphql } from 'gatsby';

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
`;

const Heading = styled.h1`
    font-size: 34px;
    margin: 0;
`;

const PlansWrapper = styled.div`
    h2 {
        font-size: 22px;
    }
`;

const Plans = ({ data }) => {

    const { allDatoCmsLessonsPlan: { nodes } } = data;

    return (
        <MainWrapper>
            <Heading>Plany lekcji</Heading>
            {nodes.map(plan => (
                <PlansWrapper key={plan.id}>
                    <h2>{plan.heading}</h2>
                    <iframe
                        src={plan.lessonTable.url}
                        title={plan.heading}
                        width='100%'
                        height='400px'
                    ></iframe>
                <hr />
                </PlansWrapper>
            ))}
        </MainWrapper>
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
`

export default Plans;