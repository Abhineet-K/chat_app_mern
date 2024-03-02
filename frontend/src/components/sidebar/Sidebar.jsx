import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
	return (
		<div className='border-r border-amber-700 p-4 flex flex-col'>
			<SearchInput />
			<div><hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-25 dark:opacity-100" /></div>
			{/* <div className='divider px-3'></div> */}
			<Conversations />
			{/* <Conversations /> */}
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
