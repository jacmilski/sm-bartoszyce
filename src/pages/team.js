// @ts-nocheck
import React from 'react';
import Stuff from '../CSS/team-css';
import { graphql} from 'gatsby';

const Team = ({ data }) => {

    const { allDatoCmsTeacher: { nodes }} = data;

    const infoData = {
        title: `Nasi nauczyciele`,
    }

    return (
        <>
            <Stuff.Heading>{infoData.title}</Stuff.Heading>
            <Stuff.TeachersWrapper>
                {nodes.map(teacher => (
                    <Stuff.TeacherCard key={teacher.id}>
                        <Stuff.AvatarBox>
                            <Stuff.Avatar image={teacher?.avatarPicture?.gatsbyImageData} alt="" />
                        </Stuff.AvatarBox>
                        <Stuff.InfoWrapper>
                            <Stuff.InfoBox>
                                <h2>
                                    <span>{teacher?.name}</span>
                                </h2>
                                <h3>{teacher?.subject}</h3>
                                <p>{teacher?.paragraph}</p>
                            </Stuff.InfoBox>
                        </Stuff.InfoWrapper>
                        <Stuff.PosterBox>
                            <Stuff.Poster image={teacher?.posterPicture?.gatsbyImageData} alt="" />
                        </Stuff.PosterBox>
                    </Stuff.TeacherCard>
                ))}
            </Stuff.TeachersWrapper>
        </>
    )
}

export const query = graphql`
    query {
        allDatoCmsTeacher {
            nodes {
                id
                name
                subject
                paragraph
                avatarPicture {
                    gatsbyImageData(width: 425, placeholder: TRACED_SVG)
                }
                posterPicture {
                    gatsbyImageData(placeholder: TRACED_SVG)
                }
            }
        }
    }
`;

export default Team;
