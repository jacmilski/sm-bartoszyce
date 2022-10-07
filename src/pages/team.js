// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { graphql} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const TeachersWrapper = styled.div`
    width: 95%;
    margin: 15px; auto;
    display: flex;
    flex-direction: column;

    font-family: 'Sansita', sans-serif;
`;

/* firstName, surname, image, poster, description , subject */

const TeacherCard = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    min-height: 300px;
    border-bottom: 1px solid #aaa;

    :first-of-type {
        border-top: 1px solid #aaa;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 65%;
`;

const AvatarBox = styled.div`
    width: 250px;
    height: 250px;
    border: 4px solid #90261f;

`;

const InfoBox = styled.div`
    width: 400px;
    height: 220px;
    padding: 10px;
    border-left: 2px solid #0172BE;

    h2 {
        font-size: 26px;
    }

    p {
        font-size: 20px;
    }
`;

const Avatar = styled(GatsbyImage)`
`;

const Poster = styled(GatsbyImage)`

`;

const PosterBox = styled.div`
    width: 37%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
`;

const Heading = styled.h1`
    padding: 0 40px;
    border-bottom: #aaa;
    font-size: 40px;
`;

const Team = ({ data }) => {

    const { allMdx: { nodes }} = data;

    const infoData = {
        title: `Nasi nauczyciele`,
    }

    return (
        <>
            <Heading>{infoData.title}</Heading>
            <TeachersWrapper>
                {nodes.map(teacher => (
                    <TeacherCard key={teacher.id}>
                        <InfoWrapper>
                            <AvatarBox>
                                <Avatar image={teacher.frontmatter?.image?.childImageSharp?.gatsbyImageData} />
                            </AvatarBox>
                            <InfoBox>
                                <h2>
                                    <span>{teacher.frontmatter?.name}</span>
                                </h2>
                                <h3>{teacher.frontmatter?.subject}</h3>
                                <p>{teacher.frontmatter?.description}</p>
                            </InfoBox>
                        </InfoWrapper>
                        <PosterBox>
                            <Poster image={teacher.frontmatter?.poster?.childImageSharp?.gatsbyImageData} alt="" />
                        </PosterBox>
                    </TeacherCard>
                ))}
            </TeachersWrapper>
        </>
    )
}

export const query = graphql`
    query {
        allMdx(
            filter: {frontmatter: {image: {absolutePath: {regex: "/avatars/"}}}}
            sort: {fields: frontmatter___id, order: ASC}
            ) {
            nodes {
                id
                frontmatter {
                    id
                    name
                    subject
                    description
                    slug
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                width: 255,
                                height: 255,
                                quality: 80,
                                placeholder: TRACED_SVG,
                                formats: AUTO,
                            )
                        }
                    }
                    poster {
                        childImageSharp {
                            gatsbyImageData(
                                width: 425,
                                height: 300,
                                quality: 80,
                                formats: AUTO,
                                placeholder: TRACED_SVG
                            )
                        }
                    }
                }
            }
        }
    }
`

export default Team;

/* childImageSharp {
                            gatsbyImageData(
                                width: 300,
                                quality: 80,
                                formats: PNG,
                                placeholder: TRACED_SVG
                            )
                        } */