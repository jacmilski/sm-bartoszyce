// @ts-nocheck
import React from "react"
import ContactCss from "../CSS/contact-css"
import DocumentsPreview from "../components/DocumentsPreview/DocumentsPreview"
import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload"
import styled from "styled-components"
import { graphql } from "gatsby"

const Wrapper = styled(ContactCss.Wrapper)`
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 30px;
`

const InsideWrapper = styled(ContactCss.InsideWrapper)``;

const InfoLabel = styled(ContactCss.InfoLabel)`
  display: flex;
  flex-direction: column;
  .item {
    padding: 6px 0;
  }
  .item span {
    padding: 0 10px;
    font-style: italic;
  }

  .item span:first-of-type {
    color: #66ADB4;
    font-style: normal;
  }
`

const DocumentElementWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

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
`

const ParentsCouncel = ({ data }) => {
  const {
    datoCmsParentsCounsel: {
      heading,
      member,
      document: { url },
    },
  } = data

  return (
    <Wrapper>
      <InsideWrapper>
        <InfoLabel>
          <h3>{heading}</h3>
          <ul className="list">
            {member.map(item => (
              <li className="item" key={item.id}>
                <span>{item.role}:</span>
                <span>{item.aMember}</span>
              </li>
            ))}
          </ul>
        </InfoLabel>
      </InsideWrapper>
      <DocumentElementWrapper>
        <DocumentsPreview title={`Regulamin Rady Rodziców`} />
        <a href={`${url}`} download title="pobierz">
          <FaFileDownload className="icon" />
        </a>
      </DocumentElementWrapper>
    </Wrapper>
  )
}

export const query = graphql`
  query {
    datoCmsParentsCounsel {
      id
      heading
      document {
        url
      }
      member {
        id
        aMember
        role
      }
    }
  }
`

export default ParentsCouncel
