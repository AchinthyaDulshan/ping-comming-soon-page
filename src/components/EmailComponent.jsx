import React from 'react'
import useEmailValidation from '../utils/useEmailValidation'

const EmailComponent = () => {

    const { email, setEmail, error, handleSubmit } = useEmailValidation();

    return (
        <div className='lg:w-full w-4/5'>
            <form action="/" method='post' noValidate onSubmit={(e) => handleSubmit(e)}>
                <div className='grid gap-2'>
                    <div className='grid lg:grid-flow-col gap-3'>
                        <input type="email" name="" id="userEmail" placeholder='Your email address...' className={`px-5 py-2 text-sm lg:text-base rounded-full border border-Pale-Blue text-Gray focus:outline-none focus:border-Blue focus:border  transition-all duration-200 ${error && ('border-Light-Red')}`} onChange={(e) => setEmail(e.target.value)} value={email} />
                        {error && <p className='text-Light-Red text-xs pt-1 ps-4 italic lg:hidden'>{error}</p>}
                        <input type="submit" value="Notify Me" className='px-5 py-2 rounded-full  bg-Blue font-semibold text-[#fff] text-sm shadow-lg shadow-Blue/30 hover:bg-Blue/80 transition-all duration-200 ' />
                    </div>
                    <div>
                        {error && <p className='text-Light-Red text-xs pt-1 ps-4 italic hidden lg:block'>{error}</p>}
                    </div>
                </div>
                <div>
                </div>
            </form>

        </div>
    )
}

export default EmailComponent