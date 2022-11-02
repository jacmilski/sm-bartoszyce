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
    @media screen and (max-width: 768px) {
        margin: 10px 0;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        margin: 10px 0;
        width: 100%;
    }
`,

TeacherCard: styled.div`
    position: relative;
    display: flex;
    width: 100%;
    min-height: 300px;
    border-bottom: 1px solid #aaa;

    :first-of-type {
        border-top: 1px solid #aaa;
    }

    @media screen and (max-width: 992px) {
        position: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 768px) {
        position: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 480px) {
        position: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,

InfoWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 65%;

    @media screen and (max-width: 992px) {
        flex-direction: row;
        align-items: center;
        width: 95%;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`,

AvatarBox: styled.div`
    margin: 15px 0;
    width: 250px;
    height: 250px;


    @media screen and (max-width: 1200px) {
        min-width: 150px;
        min-height: 150px;
        border: none;
        margin-right: 15px;
    }
    @media screen and (max-width: 992px) {
        min-width: 150px;
        min-height: 150px;
        border: none;
        margin-right: 20px;
    }
`,

InfoBox: styled.div`
    width: 400px;
    height: 220px;
    padding: 0 15px;

    h2 {
        font-size: 28px;
        border-left: 4px solid #0172BE;
        padding-left: 4px;
        margin: 0;
    }

    h3 {
        font-size: 24px;
        margin-top: 4px;
    }

    p {
        font-size: 20px;
    }

    @media screen and (max-width: 1200px) {
        max-width: 83%;
        border-left: none;
        min-height: 150px;

        h2 {
            border-left: 4px solid #0172BE;
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
        max-width: 83%;
        border-left: none;
        min-height: 150px;

        h2 {
            border-left: 4px solid #0172BE;
            padding: 0 5px;
            font-size: 28px;
        }

        h3 {
            margin: 0;
            padding: 0;
            font-size: 24px;
        }

        p {
            margin: 0;
            padding: 5px 0;
            font-size: 20px;
        }
    }
    @media screen and (max-width: 768px) {
        max-width: 83%;
        border-left: none;
        min-height: 150px;

        h2 {
            border-left: 4px solid #0172BE;
            padding: 0 5px;
            font-size: 24px;
        }

        h3 {
            margin: 0;
            padding: 0;
            font-size: 20px;
        }

        p {
            margin: 0;
            padding: 5px 0;
            font-size: 18px;
        }
    }
`,

Avatar: styled(GatsbyImage)`
`,

Poster: styled(GatsbyImage)`

`,

PosterBox: styled.div`
    width: 37%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    overflow: hidden;

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

    @media screen and (max-width: 480px) {
        padding: 0 15px;
        font-size: 28px;
        text-align: center;
    }
`,
}

export default Stuff;

