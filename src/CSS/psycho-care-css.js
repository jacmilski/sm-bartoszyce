import styled from 'styled-components';

const PsychoCareCss = {
    Wrapper: styled.div`
        width: 100%;
        padding: 20px 50px;

        h1 {
            font-size: 28px;
        }
    `,

    Container: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
    `,

    TextContainer: styled.div`

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
    `,

    PostersContainer: styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;

        img {
            display: block;
            width: 95%;
        }

    `,
}

export default PsychoCareCss;