import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between  items-center py-12 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Hub</h1>
            <img src={Profile} alt="" />
        </div>
        
    );
};

export default Header;