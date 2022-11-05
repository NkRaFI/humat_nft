import React, {useState} from "react";
import {Dropdown} from "@nextui-org/react";

export default function SelectedDropdown() {
    const [desc, setDesc] = useState("");
    let data = [
        {
            id: "",
            option: "Select option"
        },
        {
            id: 1,
            option: "Contact"
        },
        {
            id: 2,
            option: "About"
        },
        {
            id: 3,
            option: "Pricing"
        }
    ];
    let changed_data = [
        {
            id: 1,
            tex: "Author Contact Details"
        },
        {
            id: 2,
            tex: "About the Author"
        },
        {
            id: 3,
            tex: "Pricing Details"
        }
    ]
    let renderOptions = data.map((item, index) => {
        return (
            <option value={item.id} key={index}>{item.option}</option>
        )
    })
    const handleChange = (e) => {
        const updateData = changed_data?.filter(item => item.id == e.target.value);
        setDesc(updateData[0]?.tex);
        // console.log(updateData);
    }
    return (
        <>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select
                an option</label>
            <select name="" id="options" onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                {renderOptions}
            </select>
            <div className={`my-5`}>
                <p className={`pb-5 dark:text-white`}>{desc}</p>
            </div>
        </>
    );
}
