import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import { NewsWrapper } from '../CSS/index-css';

const DocumentsCss = {
    DocumentsWrapper: styled(NewsWrapper)`
    margin: 0;
`,

DocumentPageInfo: styled(PageInfo)`

`,

DocumentElementWrapper: styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
        text-decoration: none;
        color: #444444;
    }

    a:hover {
        font-weight: bold;
    }

    .icon {
        color: #90261F;
        font-size: 28px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;

        a {
            margin-right: 10px;
        }
    }
`,
}

export default DocumentsCss;