// @ts-nocheck
import styled from 'styled-components';
import { PreviewWrapper, PreviewInfoLabel } from '../components/NewsPreview/newsPreview-css';

const ContactCss = {
    Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`,

    InsideWrapper: styled(PreviewWrapper)`
    width: 60%;
    height: 70%;
`,

    InfoLabel: styled(PreviewInfoLabel)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .title {
        font-size: 23px;
        padding: 12px 0;
    }

    .item {
        font-size: 19px;
        padding: 4px 0;
    }

    .item span {
        margin-right: 5px;
    }

    ul {
        width: 70%;
    }
`,
}

export default ContactCss;

