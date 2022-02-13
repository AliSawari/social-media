import React, { useState } from 'react'
import Modal from '../../../components/Modal/Modal';
import PostDropdownItem from './PostItemOptionDropdown';
const ReportModal = ({ show, closeReportModal }) => {

    return (
        <Modal show={show} closeModal={closeReportModal} title="Report Post" size="xs">
            <ul>
                <PostDropdownItem title="Spam" link="/post/report" />
                <PostDropdownItem title="Violence" link="/post/report" />
                <PostDropdownItem title="Child Abuse" link="/post/report" />
                <PostDropdownItem title="Pornography" link="/post/report" />
            </ul>
        </Modal>
    )
}

export default ReportModal