// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Wrapper = styled.div`
    width: 100%;
    padding: 20px 50px;

    h1 {
        font-size: 28px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
`;

const TextContainer = styled.div`

    h2 {
        font-size: 20px;
    }

    ul {
        list-style: none;
    }

    .label {
        color: #90261F;
        font-weight: bold;
        padding: 5px;
    }

    .data {
        color: #555;
        margin-left: 7px;
        font-weight: normal;
    }

    pre {
        font-family: inherit;
        font-size: inherit;
        padding: 5px;
        line-height: 1.4;
        margin: 0;
    }
`;

const PostersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    img {
        display: block;
        width: 49%;
    }

`;

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
        <Wrapper>
            <h1>Opieka psychologiczna</h1>
            <Container>
                <TextContainer>
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

                </TextContainer>
                <PostersContainer>
                    <img
                        src={posterGeneral.url}
                        alt="poster-1"
                    />
                    <img
                        src={posterPupil.url}
                        alt="poster-2"
                    />
                </PostersContainer>           
            </Container>
        </Wrapper>
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
        url
      }
      posterPupil {
        url
      }
    }
  }
`

export default PsychoCare;

/* https://www.gov.pl/web/cea/specjalistyczne-poradnie-cea */

/* SPPP CEA w Supraślu
Psycholog: Małgorzata Mozerys-Ćwikła
Adres: PLSP im. A. Grottgera, Plac Tadeusza Kościuszki 1, 16-030 Supraśl
Dyżury: wtorek 8.00 - 11.00, piątek 12.00 - 15.00
Kontakt: tel. 85 718-32-16, tel. kom. 501 726 813, e-mail: mozeryscwikla@cea.art.pl
Skype: SPPPCEASuprasl
Obszar działalności: region warmińsko-mazurski i podlaski */