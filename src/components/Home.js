import { ReactComponent as MyIcon } from '../reddit.svg';
export function Home() {
    return (
        <>
            <h2 className="display-2 text-light text-center">
                Simple <span className="text-danger">Reddit <MyIcon className="myIconSize" /></span>
            </h2>
            <p style={{fontSize:"25px"}} className='m-5 text-white text-center'>
                Click on a <span className='text-danger'>subreddit</span> in the navbar to get started!
            </p>
            
        </>
    )
}
