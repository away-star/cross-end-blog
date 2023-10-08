import {useState} from 'react';

export default () => {
    const [postWriteData, setPostWriteData] = useState<ContentAPI.PostRequest>(
        {});




    return {postWriteData, setPostWriteData};
};
