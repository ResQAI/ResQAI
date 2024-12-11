
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
                        <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Bonnie" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                        <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Green" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 ">Country</label>
                        <input type="text" name="country" id="country" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="United States" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 ">City</label>
                        <input type="text" name="city" id="city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="e.g. San Francisco" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
                        <input type="text" name="address" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="e.g. CalihtmlFornia" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="example@company.com" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                        <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="e.g. +(12)3456 789" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 ">Birthday</label>
                        <input type="number" name="birthday" id="birthday" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="15/08/1990" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="organization" className="block mb-2 text-sm font-medium text-gray-900 ">Organization</label>
                        <input type="text" name="organization" id="organization" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Company Name" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 ">Role</label>
                        <input type="text" name="role" id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="React Developer" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 ">Department</label>
                        <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Development" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="zip-code" className="block mb-2 text-sm font-medium text-gray-900 ">Zip/postal code</label>
                        <input type="number" name="zip-code" id="zip-code" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="123456" required />
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


// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import { 
//     Upload, User, Shield, MapPin, Mail, Phone, Award, FileText, 
//     Globe, Building, Users, Check, X, Edit, Save, 
//     CreditCard, Lock, Briefcase, Calendar, ChevronDown
// } from 'lucide-react';

// export default function CoordinationProfile({ userType="national" }) {
//     const [profileImage, setProfileImage] = useState('/images/default-profile.png');
//     const [isEditing, setIsEditing] = useState(false);
//     const [activeTab, setActiveTab] = useState('profile');
//     const fileInputRef = useRef(null);

//     // Expanded profile configuration with more detailed fields and sections
//     const profileConfig = {
//         'national': {
//             title: 'National Disaster Coordination Committee Profile',
//             icon: <Shield className="h-12 w-12 text-blue-600" />,
//             additionalFields: [
//                 { name: 'authorityLevel', label: 'Authority Level', type: 'select', 
//                   options: ['Primary', 'Secondary', 'Emergency Response Lead', 'Strategic Planner'] },
//                 { name: 'jurisdictionCoverage', label: 'Jurisdiction Coverage', type: 'text' },
//                 { name: 'emergencyResponseCount', label: 'Total Emergency Responses', type: 'number' },
//                 { name: 'decisionMakingPower', label: 'Decision Making Power', type: 'select', 
//                   options: ['High', 'Medium', 'Limited'] }
//             ],
//             backgroundClass: 'bg-gradient-to-r from-blue-100 to-blue-200',
//             expertiseAreas: [
//                 'National Disaster Management',
//                 'Inter-Agency Coordination',
//                 'Strategic Resource Allocation',
//                 'Policy Development'
//             ]
//         },
//         'state': {
//             title: 'State Disaster Coordination Committee Profile',
//             icon: <MapPin className="h-12 w-12 text-green-600" />,
//             additionalFields: [
//                 { name: 'stateName', label: 'State', type: 'text' },
//                 { name: 'districtsCovered', label: 'Districts Covered', type: 'number' },
//                 { name: 'disasterResponseTeamSize', label: 'Response Team Size', type: 'number' },
//                 { name: 'resourceAllocation', label: 'Resource Allocation Capacity', type: 'select', 
//                   options: ['High', 'Medium', 'Limited'] }
//             ],
//             backgroundClass: 'bg-gradient-to-r from-green-100 to-green-200',
//             expertiseAreas: [
//                 'Regional Disaster Preparedness',
//                 'Local Resource Management',
//                 'Community Resilience Planning',
//                 'Inter-District Coordination'
//             ]
//         }
//     };

//     const [profileData, setProfileData] = useState({
//         personalInfo: {
//             firstName: 'NDMA',
//             lastName: 'Rodriguez',
//             email: 'michael.rodriguez@disasterresponse.gov',
//             phone: '+1 (555) 123-4567',
//             birthDate: '1978-03-15',
//             nationality: 'United States'
//         },
//         professionalInfo: {
//             organization: 'National Emergency Management Agency',
//             position: 'Senior Disaster Coordination Specialist',
//             department: 'Emergency Response Division',
//             yearsOfExperience: 15,
//             professionalCertifications: [
//                 'Certified Emergency Manager (CEM)',
//                 'Homeland Security Certificate'
//             ]
//         },
//         securitySettings: {
//             twoFactorAuth: true,
//             lastPasswordChange: '2024-01-15',
//             accessLevel: 'High Clearance'
//         },
//         additionalInfo: {
//             authorityLevel: 'Emergency Response Lead',
//             jurisdictionCoverage: 'National',
//             emergencyResponseCount: 87,
//             decisionMakingPower: 'High'
//         }
//     });

//     const currentConfig = profileConfig[userType] || profileConfig['national'];

//     const handleInputChange = (section: any, e: any) => {
//         const { name, value } = e.target;
//         setProfileData(prev => ({
//             ...prev,
//             [section]: {
//                 ...prev[section],
//                 [name]: value
//             }
//         }));
//     };

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setProfileImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const renderProfileTabs = () => {
//         const tabs = [
//             { id: 'profile', label: 'Personal', icon: <User className="mr-2 h-5 w-5" /> },
//             { id: 'professional', label: 'Professional', icon: <Briefcase className="mr-2 h-5 w-5" /> },
//             { id: 'security', label: 'Security', icon: <Lock className="mr-2 h-5 w-5" /> }
//         ];

//         return (
//             <div className="flex border-b mb-6">
//                 {tabs.map(tab => (
//                     <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`flex items-center px-4 py-2 ${
//                             activeTab === tab.id 
//                             ? 'border-b-2 border-blue-600 text-blue-600' 
//                             : 'text-gray-500'
//                         }`}
//                     >
//                         {tab.icon}
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>
//         );
//     };

//     const renderPersonalInfoForm = () => {
//         const personalFields = [
//             { 
//                 icon: <User className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'First Name', 
//                 name: 'firstName',
//                 type: 'text'
//             },
//             { 
//                 icon: <User className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Last Name', 
//                 name: 'lastName',
//                 type: 'text'
//             },
//             { 
//                 icon: <Mail className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Email', 
//                 name: 'email',
//                 type: 'email'
//             },
//             { 
//                 icon: <Phone className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Phone', 
//                 name: 'phone',
//                 type: 'tel'
//             },
//             { 
//                 icon: <Calendar className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Birth Date', 
//                 name: 'birthDate',
//                 type: 'date'
//             },
//             { 
//                 icon: <Globe className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Nationality', 
//                 name: 'nationality',
//                 type: 'text'
//             }
//         ];

//         return (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {personalFields.map((field) => (
//                     <div key={field.name}>
//                         <label className=" text-sm font-medium text-gray-700 flex items-center">
//                             {field.icon}
//                             {field.label}
//                         </label>
//                         <input 
//                             type={field.type} 
//                             name={field.name} 
//                             value={profileData.personalInfo[field.name] || ''}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
//                             onChange={(e) => handleInputChange('personalInfo', e)}
//                             disabled={!isEditing}
//                         />
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     const renderProfessionalInfoForm = () => {
//         const professionalFields = [
//             { 
//                 icon: <Building className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Organization', 
//                 name: 'organization',
//                 type: 'text'
//             },
//             { 
//                 icon: <Briefcase className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Position', 
//                 name: 'position',
//                 type: 'text'
//             },
//             { 
//                 icon: <Users className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Department', 
//                 name: 'department',
//                 type: 'text'
//             },
//             { 
//                 icon: <Award className="mr-2 h-5 w-5 text-gray-500" />, 
//                 label: 'Years of Experience', 
//                 name: 'yearsOfExperience',
//                 type: 'number'
//             }
//         ];

//         return (
//             <div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     {professionalFields.map((field) => (
//                         <div key={field.name}>
//                             <label className=" text-sm font-medium text-gray-700 flex items-center">
//                                 {field.icon}
//                                 {field.label}
//                             </label>
//                             <input 
//                                 type={field.type} 
//                                 name={field.name} 
//                                 value={profileData.professionalInfo[field.name] || ''}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
//                                 onChange={(e) => handleInputChange('professionalInfo', e)}
//                                 disabled={!isEditing}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Certifications Section */}
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                         <Award className="mr-2 h-6 w-6 text-blue-600" />
//                         Professional Certifications
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                         {profileData.professionalInfo.professionalCertifications.map((cert, index) => (
//                             <span 
//                                 key={index} 
//                                 className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
//                             >
//                                 {cert}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const renderSecuritySettingsForm = () => {
//         return (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Two-Factor Authentication */}
//                 <div>
//                     <label className=" text-sm font-medium text-gray-700 flex items-center">
//                         <Lock className="mr-2 h-5 w-5 text-gray-500" />
//                         Two-Factor Authentication
//                     </label>
//                     <div className="flex items-center mt-2">
//                         <input 
//                             type="checkbox" 
//                             name="twoFactorAuth" 
//                             checked={profileData.securitySettings.twoFactorAuth || false}
//                             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                             onChange={(e) => handleInputChange('securitySettings', {
//                                 target: { 
//                                     name: e.target.name, 
//                                     value: e.target.checked 
//                                 }
//                             })}
//                             disabled={!isEditing}
//                         />
//                         <span className="ml-2 text-sm text-gray-600">Enable Two-Factor Authentication</span>
//                     </div>
//                 </div>

//                 {/* Last Password Change */}
//                 <div>
//                     <label className=" text-sm font-medium text-gray-700 flex items-center">
//                         <Calendar className="mr-2 h-5 w-5 text-gray-500" />
//                         Last Password Change
//                     </label>
//                     <input 
//                         type="date" 
//                         name="lastPasswordChange" 
//                         value={profileData.securitySettings.lastPasswordChange || ''}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
//                         onChange={(e) => handleInputChange('securitySettings', e)}
//                         disabled={!isEditing}
//                     />
//                 </div>

//                 {/* Access Level */}
//                 <div>
//                     <label className=" text-sm font-medium text-gray-700 flex items-center">
//                         <Shield className="mr-2 h-5 w-5 text-gray-500" />
//                         Access Level
//                     </label>
//                     <select 
//                         name="accessLevel"
//                         value={profileData.securitySettings.accessLevel || ''}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
//                         onChange={(e) => handleInputChange('securitySettings', e)}
//                         disabled={!isEditing}
//                     >
//                         <option value="High Clearance">High Clearance</option>
//                         <option value="Medium Clearance">Medium Clearance</option>
//                         <option value="Standard Access">Standard Access</option>
//                     </select>
//                 </div>
//             </div>
//         );
//     };

//     const renderExpertiseSection = () => {
//         return (
//             <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                     <Award className="mr-2 h-6 w-6 text-blue-600" />
//                     Expertise Areas
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                     {currentConfig.expertiseAreas.map((area, index) => (
//                         <span 
//                             key={index} 
//                             className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
//                         >
//                             {area}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className={`min-h-screen p-8 ${currentConfig.backgroundClass}`}>
//   <div className="container mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
//     {/* Header Section */}
//     <div className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-200">
//       <div className="flex items-center">
//         {currentConfig.icon}
//         <div className="ml-4">
//           <h1 className="text-3xl font-semibold text-gray-800">{currentConfig.title}</h1>
//           <p className="text-sm text-gray-500">Manage and update your profile information</p>
//         </div>
//       </div>
//       <div>
//         {!isEditing ? (
//           <button 
//             onClick={() => setIsEditing(true)}
//             className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <Edit className="mr-2 h-5 w-5" />
//             Edit Profile
//           </button>
//         ) : (
//           <div className="flex space-x-4">
//             <button 
//               onClick={() => setIsEditing(false)}
//               className="flex items-center px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
//             >
//               <X className="mr-2 h-5 w-5" />
//               Cancel
//             </button>
//             <button 
//               onClick={() => {
//                 // Save logic here
//                 setIsEditing(false);
//               }}
//               className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               <Save className="mr-2 h-5 w-5" />
//               Save Changes
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
                    
//     {/* Profile Content */}
//     <div className="p-6">
//       {renderProfileTabs()}

//       {activeTab === 'profile' && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Profile Image Section */}
//           <div className="md:col-span-1 flex flex-col items-center">
//             <div className="relative">
//               <img 
//                 src="https://upload.wikimedia.org/wikipedia/en/6/6b/National_Disaster_Management_Authority_Logo.png"
//                 alt="Profile" 
//                 className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
//               />
//               {isEditing && (
//                 <>
//                   <input 
//                     type="file" 
//                     ref={fileInputRef}
//                     onChange={handleImageUpload}
//                     className="hidden" 
//                     accept="image/*"
//                   />
//                   <button 
//                     onClick={() => fileInputRef.current.click()}
//                     className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700"
//                   >
//                     <Upload className="h-5 w-5" />
//                   </button>
//                 </>
//               )}
//             </div>
//             <div className="mt-4 text-center">
//               <p className="text-xs text-gray-500">JPG, GIF, or PNG. Max size 800K</p>
//             </div>
//           </div>

//           {/* Profile Form */}
//           <div className="md:col-span-2">
//             {renderPersonalInfoForm()}
//             {renderExpertiseSection()}
//           </div>
//         </div>
//       )}

//       {activeTab === 'professional' && (
//         <div>
//           {renderProfessionalInfoForm()}
//         </div>
//       )}

//       {activeTab === 'security' && (
//         <div>
//           {renderSecuritySettingsForm()}
//         </div>
//       )}
//     </div>
//   </div>
// </div>

        
//     ); 

// }