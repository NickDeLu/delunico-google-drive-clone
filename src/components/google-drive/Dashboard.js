import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import { useFolder } from '../../hooks/useFolder'
import Navbar from './Navbar'
import Folder from './Folder'
import { useParams, useLocation } from 'react-router-dom'
import FolderBreadCrumbs from './FolderBreadCrumbs'
import AddFileButton from './AddFileButton'
import File from './File'

export default function Dashboard() {
    const {folderId} = useParams()
    const { state = {} } = useLocation() 
    const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

    return (
        <div className="zoom">
        <Navbar />
        <Container fluid>
            <div className="d-flex align-items-center p-2">
                <FolderBreadCrumbs currentFolder={folder}></FolderBreadCrumbs>
                <AddFileButton currentFolder={folder}></AddFileButton>
                <AddFolderButton currentFolder={folder}></AddFolderButton>
            </div>
            {childFolders.length > 0 && (
                <div className="d-flex flex-wrap">

                    {childFolders.map(childFolder  => (
                        <div key={childFolder.id} style={{maxWidth:'250px'}}
                        className="p-2">
                            <Folder folder={ childFolder }></Folder>
                        </div>
                    ))}

                </div>
            )}
            {childFolders.length > 0 && childFiles.length > 0 && (<><hr></hr><div className="mx-2">Files</div></>)}
            {childFiles.length > 0 && (
                <div className="d-flex flex-wrap">

                    {childFiles.map(childFile  => (
                        <div key={childFile.id} style={{maxWidth:'250px'}}
                        className="p-2">
                            <File file={ childFile }></File>
                        </div>
                    ))}

                </div>
            )}
        </Container>
         </div>
    )
}
