import React from "react";

const Dropdown = ({ children, visibility }) => {
	return (
		<>
			{visibility && (
				<div className="fixed z-50 w-40 mt-20 text-center bg-white shadow-xl ml-28">
					{children}
				</div>
			)}
		</>
	);
};

export default Dropdown;
