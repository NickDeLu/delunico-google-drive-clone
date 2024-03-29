import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function File({ file }) {
    return (
        <a href={file.url} rel="noreferrer" target="_blank" className="btn btn-outline-dark text-truncate w-100">
            <FontAwesomeIcon icon={faFile} className="mx-2" />
            {file.name}
        </a>
    )
}
