import React from 'react'
import Modal from '../../../components/Modal/Modal';
import PostDropdownItem from './PostItemOptionDropdown';
const SharePostModal = ({ show, closeReportModal , link }) => {
    return (
        <Modal show={show} closeModal={closeReportModal} title="Share Post" size="xs">
            <ul>
                <PostDropdownItem title="Share to Direct" type="button" />
                <PostDropdownItem title="Share to Twitter" type="link" link={`https://twitter.com/intent/tweet?url=http://localhost:3000/p/${link}&via=getboldify&text=here a post for you`} />
                <PostDropdownItem title="Share via Email" type="button" />
                <PostDropdownItem title="Share to Telegram" type="button" />
            </ul>
        </Modal>
    )
}

export default SharePostModal