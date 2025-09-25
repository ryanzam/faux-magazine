const Testimony = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-14 py-20 px-5'>
            <h2 className='text-2xl md:text-5xl font-bold text-blue-500'>What people say about us</h2>

            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-[14px] md:text-2xl italic font-medium text-gray-900 dark:text-white">"Faux Magazine has been a game-changer for me. As someone who loves brainstorming creative solutions, this platform gave me a space to share my wildest ideas without judgment. I posted about a quirky business concept, and not only did I get constructive feedback, but I also connected with others who shared my vision. It’s inspiring to see a community that embraces both the good and the challenging experiences. This site truly fosters collaboration and growth!"</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="text-[12px] md:text-2xl pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                        <cite className="text-[12px] md:text-2xl ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at BuildDream</cite>
                    </div>
                </figcaption>
            </figure>

            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-[14px] md:text-2xl italic font-medium text-gray-900 dark:text-white">"Faux Magazone is my go-to when I’m stuck in a creative rut. Reading others’ stories—whether they’re triumphs or lessons learned—always sparks new ideas for my projects. I recently shared a failed attempt at a community event I organized, and the feedback I got helped me rethink my approach and try again with success. The diversity of thoughts and experiences here is unmatched!"</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="profile picture" />

                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="text-[12px] md:text-2xl pe-3 font-medium text-gray-900 dark:text-white">Ashmita Sharma</cite>
                        <cite className="text-[12px] md:text-2xl ps-3 text-sm text-gray-500 dark:text-gray-400">Marketing Professional</cite>
                    </div>
                </figcaption>
            </figure>

            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-[14px] md:text-2xl italic font-medium text-gray-900 dark:text-white">"I was hesitant to share my thoughts online, especially about a tough career setback I faced. But Faux Magazine's supportive community encouraged me to open up. Posting about my experience helped me process it and gain perspective from others who’d been through similar struggles. The mix of empathy and practical advice I received was incredible. This isn’t just a website—it’s a place where real, honest conversations happen."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="text-[12px] md:text-2xl pe-3 font-medium text-gray-900 dark:text-white">Cain Lawson</cite>
                        <cite className="text-[12px] md:text-2xl ps-3 text-sm text-gray-500 dark:text-gray-400">Enterpreneur</cite>
                    </div>
                </figcaption>
            </figure>


        </div>
    )
}

export default Testimony