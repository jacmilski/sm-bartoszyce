// @ts-nocheck
import React from 'react';
import Stuff from '../CSS/team-css';
import { graphql} from 'gatsby';

const Team = ({ data }) => {

    const { allMdx: { nodes }} = data;

    const infoData = {
        title: `Nasi nauczyciele`,
    }

    return (
        <>
            <Stuff.Heading>{infoData.title}</Stuff.Heading>
            <Stuff.TeachersWrapper>
                {nodes.map(teacher => (
                    <Stuff.TeacherCard key={teacher.id}>
                        <Stuff.InfoWrapper>
                            <Stuff.AvatarBox>
                                <Stuff.Avatar image={teacher.frontmatter?.image?.childImageSharp?.gatsbyImageData} />
                            </Stuff.AvatarBox>
                            <Stuff.InfoBox>
                                <h2>
                                    <span>{teacher.frontmatter?.name}</span>
                                </h2>
                                <h3>{teacher.frontmatter?.subject}</h3>
                                <p>{teacher.frontmatter?.description}</p>
                            </Stuff.InfoBox>
                        </Stuff.InfoWrapper>
                        <Stuff.PosterBox>
                            <Stuff.Poster image={teacher.frontmatter?.poster?.childImageSharp?.gatsbyImageData} alt="" />
                        </Stuff.PosterBox>
                    </Stuff.TeacherCard>
                ))}
            </Stuff.TeachersWrapper>
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