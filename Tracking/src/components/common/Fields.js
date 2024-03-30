import React from 'react';
import { TextInput } from 'react-native';


const Fields = (props) => {
    return (
        <TextInput className="rounded-xl py-4 bg-white ps-5 placeholder:text-slate-20 text-slate-700 px-2 my-2  w-[100%] placeholder:text-lg placeholder:px-4"{...props}></TextInput>
    );
}

export default Fields;