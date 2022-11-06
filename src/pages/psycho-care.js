// @ts-nocheck
import React from 'react';
import PsychoCareCss from '../CSS/psycho-care-css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const PsychoCare = ({ data }) => {

    console.log(data.datoCmsPsychoCare.posterGeneral.url)

    const { datoCmsPsychoCare: {
        clinicName,
        address,
        psychologist,
        email,
        phoneNumber,
        skype,
        region,
        duty,
        posterGeneral,
        posterPupil,
    } } = data;

    return (
        <PsychoCareCss.Wrapper>
            <h1>Opieka psychologiczna</h1>
            <PsychoCareCss.Container>
                <PsychoCareCss.TextContainer>
                    <h2>{clinicName}</h2>
                    <ul className='list'>
                        <li className='label'>Psycholog:
                            <span className='data'>{psychologist}</span>
                        </li>
                        <li className='label'>Adres:
                            <span className='data'><pre>{address}</pre></span>
                        </li>
                        <li className='label'>Dyżury:
                            <span className='data'>{duty}</span>
                        </li>
                        <li className='label'>Telefon:
                            <span className='data'>{phoneNumber}</span>
                        </li>
                        <li className='label'>Email:
                            <span className='data'>{email}</span>
                        </li>
                        <li className='label'>Skype:
                            <span className='data'>{skype}</span>
                        </li>
                        <li className='label'>Region:
                            <span className='data'>{region}</span>
                        </li>
                        <li className='label'>Link:
                            <a 
                                className='link data'
                                href='https://www.gov.pl/web/cea/specjalistyczne-poradnie-cea'
                                target='_blanc'
                            >
                                    Specjalistyczne Poradnie CEA
                            </a>
                        </li>
                    </ul>

                </PsychoCareCss.TextContainer>
                <PsychoCareCss.PostersContainer>
                    <GatsbyImage
                        image={posterGeneral.gatsbyImageData}
                        alt="poster-1"
                    />
                    <GatsbyImage
                        image={posterPupil.gatsbyImageData}
                        alt="poster-2"
                    />
                </PsychoCareCss.PostersContainer>           
            </PsychoCareCss.Container>
        </PsychoCareCss.Wrapper>
    )
}

export const query = graphql`
  query {
    datoCmsPsychoCare {
      clinicName
      psychologist
      address
      email
      phoneNumber
      skype
      region
      duty
      posterGeneral {
        gatsbyImageData(placeholder: TRACED_SVG, width: 700)
      }
      posterPupil {
        gatsbyImageData(placeholder: TRACED_SVG, width: 700)
      }
    }
  }
`;

export const Head = () => <Seo title='Opieka psychologiczna' />

export default PsychoCare;
