import { useState } from 'react';

export default () =>{
    const [writeData,setWriteData] = useState(
        {
            content: '',
            title: '',
        }
    );

    const updateWriteData = (key: keyof CreatAPI.writeData, value: string) => {
        setWriteData({ ...writeData, [key]: value });
    };

    return { writeData, updateWriteData,setWriteData};
};
