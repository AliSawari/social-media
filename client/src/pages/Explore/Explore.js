import React from 'react'
import MainLayout from '../../components/MainLayout'
import SearchBox from '../Main/Header/SearchBox'
import LeftSideBar from '../Main/LeftSideBar/LeftSideBar'
import RightSide from '../Main/RightSide/RightSide'
import TopNavbar from '../Main/TopNavbar/TopNavbar'
import ExploreList from './ExploreList'

const Explore = () => {
    return (
        <MainLayout>
            <LeftSideBar />
            <div className="w-4/6 px-14 flex flex-col">
                <div className="w-full flex">
                    <SearchBox />
                    <TopNavbar />
                </div>                
                <ExploreList />
            </div>
            <RightSide />
        </MainLayout>
    )
}

export default Explore