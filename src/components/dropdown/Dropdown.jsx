import React from "react";

const Dropdown = ({ children, visibility }) => {
	return (
		<>
			{visibility && (
				<div className="w-40 text-center bg-gray-200 shadow-lg">{children}</div>
			)}
		</>
	);
};

export default Dropdown;
