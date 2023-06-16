'use client'
import useUtilityStore from '@/app/store/UtilityStore'
import { ProgressBar } from 'react-loader-spinner'


const LoadingModal = () => {
    const { isLoading } = useUtilityStore();
    return (
        isLoading ? <div className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-screen w-full backdrop-blur-xl'>
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#F4442E'
                barColor='#51E5FF'
            />
        </div> : ""
    )
}

export default LoadingModal