import styled from 'styled-components';
import ContactCss from "./contact-css";

const Councel = {
    Wrapper: styled(ContactCss.Wrapper)`
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 30px;
  
    @media screen and (max-width: 768px) {
      padding: 0 15px;
      width: 100%;
      height: 100%;
    }
  
    @media screen and (max-width: 480px) {
      width: 90%;
    }
  `,
  
  InsideWrapper: styled(ContactCss.InsideWrapper)`
  
    margin-top: 30px;
    @media screen and (max-width: 992px) {
      height: 60%;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `,
  
  InfoLabel: styled(ContactCss.InfoLabel)`
    display: flex;
    flex-direction: column;
    padding: 15px 0;

    span {
      margin-left: 4px;
      margin: 0;
      padding: 7px 0;
    }

    h4 {
      color: #66ADB4;
      margin: 7px 0 0 0;
    }
    
    @media screen and (max-width: 480px) {
      h3 {
        font-size: 16px;
      }
    }
  `,
  
  List: styled.ul``,
  
  ListItem: styled.li`
    padding: 6px 0;
  
    span {
      padding: 0 10px;
      font-style: italic;
  
      @media screen and (max-width: 768px) {
        font-size: 13px;
        padding: 0;
      }
    }
  
    span:first-of-type {
      color: #66ADB4;
      font-style: normal;
    }
  `,
  
  DocumentElementWrapper: styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  
    a {
      text-decoration: none;
      color: #444;
    }
  
    a:hover {
      font-weight: bold;
    }
  
    .icon {
      color: #90261f;
      font-size: 28px;
    }
  `,
}

export default Councel;