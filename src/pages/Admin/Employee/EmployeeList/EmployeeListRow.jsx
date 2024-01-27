import React from 'react';
import useRestauarantAndBranch from '../../../../Hooks/useRestauarantAndBranch';

const EmployeeListRow = ({ employee }) => {
    const { branchName, restaurantName } = useRestauarantAndBranch();
    let statusStyle, paymentStatus, icon;
    // switch (category.status) {
    //     case 'Active':
    //         statusStyle = 'bg-emerald-100 text-emerald-700'
    //         icon = <MdOutlineCheckCircle className="-ms-1 me-1.5 h-4 w-4" />
    //         break
    //     case 'Inactive':
    //         statusStyle = 'bg-red-100 text-red-700'
    //         icon = <MdClear className="-ms-1 me-1.5 h-4 w-4" />
    //         break
    // }
    return (

        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex items-center gap-5'>
                        <div className='w-full'>
                            <img
                                alt='profile'
                                src={employee?.profilePhoto}
                                className='mx-auto object-cover rounded md:h-10 md:w-15'
                            />
                        </div>
                        <div>
                            <span className='text-gray-900 whitespace-no-wrap block'>{employee?.firstName} {employee?.lastName}</span>
                        </div>
                    </div>
                    <div className='ml-3'>
                        {/* <p className='text-gray-900 whitespace-no-wrap'>{category?.categoryID}</p> */}
                    </div>
                </div>
            </td>
            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center '>
                 
                <span className='text-gray-600 whitespace-no-wrap block'>{category?.status}</span>
            </td> */}
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {employee?.nid}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {employee?.email}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {employee?.role}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {employee?.email}
                </span>
            </td>
            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <span className={`inline-flex items-center justify-center rounded-full  px-2.5 py-0.5 ${paymentStatus}`}><p className="whitespace-nowrap text-sm text-center">{category?.payment_status}</p></span>
            </td> */}
            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                    <Link to={`/restaurant/${restaurantName}/branch/${branchName}/edit-category/:${category?.categoryID}`} title="Edit category" className="inline-flex ml-3 cursor-pointer text-gray-500 transition-colors duration-300 hover:border-b-2 hover:border-b-blue-400"><BiEditAlt size={25} /></Link>
                    <span title="Delete category" onClick={() => handleDeletecategory(employee.categoryID)} className="inline-flex ml-3 cursor-pointer text-red-500 transition-colors duration-300 hover:border-b-2 hover:border-b-blue-400"><MdClear size={25} /></span>
                </td> */}
        </tr>

    );
};

export default EmployeeListRow;