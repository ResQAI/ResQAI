
export default function Profile(){
    return (
        <>
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 ">
    
    <div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 ">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <img className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src="/images/users/bonnie-green-2x.png" alt="Jese picture" />
                <div>
                    <h3 className="mb-1 text-xl font-bold text-gray-900 ">Profile picture</h3>
                    <div className="mb-4 text-sm text-gray-500 ">
                        JPG, GIF or PNG. Max size of 800K
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                            <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg>
                            Upload picture
                        </button>
                        <button type="button" className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div className="col-span-3">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2  sm:p-6 ">
            <h3 className="mb-4 text-xl font-semibold ">General information</h3>
            <form action="#">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                        <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="Bonnie" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                        <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="Green" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 ">Country</label>
                        <input type="text" name="country" id="country" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="United States" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 ">City</label>
                        <input type="text" name="city" id="city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="e.g. San Francisco" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
                        <input type="text" name="address" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="e.g. CalihtmlFornia" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="example@company.com" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                        <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="e.g. +(12)3456 789" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 ">Birthday</label>
                        <input type="number" name="birthday" id="birthday" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="15/08/1990" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="organization" className="block mb-2 text-sm font-medium text-gray-900 ">Organization</label>
                        <input type="text" name="organization" id="organization" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="Company Name" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 ">Role</label>
                        <input type="text" name="role" id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="React Developer" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 ">Department</label>
                        <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="Development" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="zip-code" className="block mb-2 text-sm font-medium text-gray-900 ">Zip/postal code</label>
                        <input type="number" name="zip-code" id="zip-code" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dkbg-gray-700 dkborder-gray-600 dkplaceholder-gray-400 dktext-white dkfocus:ring-primary-500 dkfocus:border-primary-500" placeholder="123456" required />
                    </div>
                    <div className="col-span-6 sm:col-full">
                        <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit">Save all</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2  sm:p-6 ">
            <h3 className="mb-4 text-xl font-semibold ">Password information</h3>
            <form action="#">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="current-password" className="block mb-2 text-sm font-medium text-gray-900 ">Current password</label>
                        <input type="text" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="••••••••" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">New password</label>
                        <input data-popover-target="popover-password" data-popover-placement="bottom" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="••••••••" required />
                        <div data-popover id="popover-password" role="tooltip" className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 ">
                            <div className="p-3 space-y-2">
                                <h3 className="font-semibold text-gray-900 ">Must have at least 6 characters</h3>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="h-1 bg-orange-300 "></div>
                                    <div className="h-1 bg-orange-300 "></div>
                                    <div className="h-1 bg-gray-200 "></div>
                                    <div className="h-1 bg-gray-200 "></div>
                                </div>
                                <p>It’s better to have:</p>
                                <ul>
                                    <li className="flex items-center mb-1">
                                        <svg className="w-4 h-4 mr-2 text-green-400 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        Upper & lower case letters
                                    </li>
                                    <li className="flex items-center mb-1">
                                        <svg className="w-4 h-4 mr-2 text-gray-300 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        A symbol (#$&)
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-gray-300 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        A longer password (min. 12 chars.)
                                    </li>
                                </ul>
                        </div>
                        <div data-popper-arrow></div>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                        <input type="text" name="confirm-password" id="confirm-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="••••••••" required />
                    </div>
                    <div className="col-span-6 sm:col-full">
                        <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit">Save all</button>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
    
</div>
</>
    )
}
