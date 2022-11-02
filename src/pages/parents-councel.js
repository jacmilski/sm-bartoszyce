// @ts-nocheck
import React from "react"
import DocumentsPreview from "../components/DocumentsPreview/DocumentsPreview"
import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload"
import Councel from "../CSS/parents-councel-css"
import { graphql } from "gatsby"

const ParentsCouncel = ({ data }) => {
  const {
    datoCmsParentsCounsel: {
      heading,
      member,
      document: { url },
    },
  } = data

  return (
    <Councel.Wrapper>
      <Councel.InsideWrapper>
        <Councel.InfoLabel>
          <h3>{heading}</h3>
          <Councel.List className="list">
            {member.map(item => (
              <Councel.ListItem className="item" key={item.id}>
                <span>{item.role}:</span>
                <span>{item.aMember}</span>
              </Councel.ListItem>
            ))}
          </Councel.List>
        </Councel.InfoLabel>
      </Councel.InsideWrapper>
      <Councel.DocumentElementWrapper>
        <DocumentsPreview title={`Regulamin Rady Rodziców`} />
        <a href={`${url}`} download title="pobierz">
          <FaFileDownload className="icon" />
        </a>
      </Councel.DocumentElementWrapper>
    </Councel.Wrapper>
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
