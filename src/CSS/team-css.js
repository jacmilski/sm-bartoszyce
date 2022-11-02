// @ts-nocheck
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const Stuff = {
TeachersWrapper: styled.div`
    width: 95%;
    margin: 15px; auto;
    display: flex;
    flex-direction: column;

    font-family: 'Sansita', sans-serif;

    @media screen and (max-width: 992px) {
        margin: 10px 0;
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`,

TeacherCard: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 250px;
    border-bottom: 1px solid #aaa;

    :first-of-type {
        border-top: 1px solid #aaa;
    }

    @media screen and (max-width: 992px) {
        justify-content: center;
    }
    @media screen and (max-width: 768px) {
        position: none;
        flex-direction: column;
    }
`,

InfoWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 35%;

    @media screen and (max-width: 992px) {
        flex-direction: row;
        width: 65%;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding: 0;
    }
    @media screen and (max-width: 480px) {
        padding: 0;
    }
`,

AvatarBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 25%;
    height: 250px;


    @media screen and (max-width: 1200px) {
        min-width: 150px;
        min-height: 150px;
        border: none;
        margin-right: 15px;
    }
    @media screen and (max-width: 992px) {
        margin-right: 20px;
    }
    @media screen and (max-width: 768px) {
        align-self: flex-start;
        margin: 0 40px;
        min-width: 200px;
        height: 200px;

    }
    @media screen and (max-width: 480px) {
        align-self: center;
        margin: 10px 0px 30px;
        height: 180px;
    }
`,

InfoBox: styled.div`
    width: 100%;

    h2 {
        font-size: 26px;
        border-left: 3px solid #0172BE;
        padding-left: 4px;
        margin: 0;
    }

    h3 {
        font-size: 22px;
        margin-top: 4px;
    }

    p {
        font-size: 18px;
    }

    @media screen and (max-width: 1200px) {
        max-width: 83%;
        border-left: none;
        min-height: 150px;

        h2 {
            padding: 0 3px;
            font-size: 22px;
            margin: 0 0 5px;
        }

        h3 {
            margin: 0;
            padding: 0;
            font-size: 18px;
        }

        p {
            margin: 7px 0;
            padding: 4px 0;
            font-size: 16px;
        }
    }
    @media screen and (max-width: 992px) {
        padding: 10px 0;

        h2 {
            padding: 0 5px;
            font-size: 23px;
        }

        h3 {
            font-size: 20px;
        }

        p {
            margin: 0;
            padding: 5px 0;
            font-size: 18px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        min-height: 100px;

        h2 {
            font-size: 20px;
        }

        h3 {
            font-size: 17px;
        }

        p {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 480px) {

        h2 {
            font-size: 20px;
        }

        h3 {
            font-size: 17px;
        }

        p {
            font-size: 14px;
        }
    }
`,

Avatar: styled(GatsbyImage)`
`,

Poster: styled(GatsbyImage)`

`,

PosterBox: styled.div`
    display: flex;
    justify-content: flex-end;
    width: 35%;
    padding: 20px 0;

    @media screen and (max-width: 1500px) {
        top: 15px;
    }
    @media screen and (max-width: 1200px) {
        top: 24px;
    }

    @media screen and (max-width: 992px) {
        display: none;
    }
`,

Heading: styled.h1`
    padding: 0 40px;
    border-bottom: #aaa;
    font-size: 40px;

    @media screen and (max-width: 768px) {
        padding: 0 15px;
        font-size: 26px;
    }
    @media screen and (max-width: 480px) {
        font-size: 28px;
        text-align: center;
    }
`,
}

export default Stuff;

