
import React from "react";

interface StatusProps {
    type: string | null;
    text: string | null;
}

const Status: React.FC<StatusProps> = ({ type, text }) => {
    const getStatusStyle = () => {
        switch (type) {
            case "pending":
                return "text-yellow-700";
            case "error":
                return "text-red-700";
            case "success":
                return "text-green-700";
            default:
                return "";
        }
    };

    return (

        <div className={`px-4 py-2 ${getStatusStyle()}`}>
            {text}
        </div>
    );
};

export default Status;
