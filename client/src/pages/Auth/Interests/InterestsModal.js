import React, { useEffect, useState } from 'react';
import httpClient from '../../../api/client';
import Modal from '../../../components/Modal/Modal';
import InterestItem from './InterestItem';
import swal from 'sweetalert2';
const InterestsModal = ({ data , setUserInfo }) => {
  const [show, setShow] = useState();
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  useEffect(() => {
    setShow(data?.interests.length === 0);
    const fetchData = async () => {
      try {
        const { data: interests } = await httpClient.get("interests/list");
        setInterests(interests);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [data]);



  const handleSelectItem = (title) => {
    if (selectedInterests.includes(title)) {
      setSelectedInterests(selecteds => selecteds.filter(item => item !== title));
      return;
    }
    setSelectedInterests(selecteds => [...selecteds, title]);
  }

  const handleClickNext = async () => {
    if (selectedInterests.length < 5) {
      swal.fire({
        title: "Please",
        text: "You must select 5 interest",
        icon: "error"
      });
      return;
    }

    await httpClient.post("users/set-interests", { data: selectedInterests, id: data.id });
    setUserInfo(data);
  }

  return (
    <Modal show={show} title="Select your interests">
      <div className='w-full flex flex-wrap gap-3'>
        {interests.map(interest => (
          <InterestItem selectInterestItem={handleSelectItem} key={interest._id} isSelected={selectedInterests.includes(interest.title)}>{interest.title}</InterestItem>
        ))}
        <button className='button mt-5' onClick={handleClickNext}>Next</button>
      </div>
    </Modal>
  )
}

export default InterestsModal