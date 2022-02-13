import React from 'react'
import Modal from '../../../components/Modal/Modal';
import PostDropdownItem from './PostItemOptionDropdown';
import httpClient from '../../../api/client';
import swal from 'sweetalert2'
const ReportModal = ({ show, closeReportModal, id }) => {

    const handleClickReport = async (type) => {
        try {
            await httpClient.post("report/add", { id, type });
            swal.fire({
                title: "Success",
                text: "report sended",
                icon: "success",
                didClose: () => {
                    closeReportModal();
                }
            });
        } catch (error) {
            console.log(error);
            swal.fire({
                title: "Failed",
                text: "Send report failed",
                icon: "error",
                didClose: () => {
                    closeReportModal();
                }
            });
        }
    }
    return (
        <Modal show={show} closeModal={closeReportModal} title="Report Post" size="xs">
            <ul>
                <PostDropdownItem title="Spam" type="button" clickButton={() => handleClickReport("spam")} />
                <PostDropdownItem title="Violence" type="button" clickButton={() => handleClickReport("violence")} />
                <PostDropdownItem title="Child Abuse" type="button" clickButton={() => handleClickReport("child abuse")} />
                <PostDropdownItem title="Pornography" type="button" clickButton={() => handleClickReport("pornography")} />
                <PostDropdownItem title="Other" type="button" clickButton={() => handleClickReport("other")} />
            </ul>
        </Modal>
    )
}

export default ReportModal