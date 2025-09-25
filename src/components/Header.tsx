const Header = () => {

    return (
        <header className='w-full'>
            <a href='/' className='flex items-center justify-center flex-col gap-3 py-10'>
                <h1 className='text-7xl font-bold'>Faux <span className='text-blue-700'>Magazine</span></h1>
                <p className='font-medium text-gray-500'>Share your thoughts, experience and ideas.</p>
            </a>
        </header>
    )
}

export default Header