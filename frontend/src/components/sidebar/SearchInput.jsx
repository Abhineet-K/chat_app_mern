// import { IoSearchSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full bg-amber-600 text-white  placeholder:text-white' />
			<button type='submit' className='btn btn-circle bg-amber-600 text-white hover:bg-opacity-10 hover:bg-gray-300 '>
			<FaSearch className='w-12 h-12 p-2.5 rounded-full hover:text-amber-600'/>
			
				{/* <IoSearchSharp className='w-6 h-6 outline-none' /> */}
			</button>
		</form>
	);
};
export default SearchInput;