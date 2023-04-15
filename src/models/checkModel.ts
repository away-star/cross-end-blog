import { useState } from 'react';

export default () =>{
    const [isCoverModalOpen, setIsCoverModalOpen] = useState<boolean>(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);


    return { isCoverModalOpen, setIsCoverModalOpen ,isInfoModalOpen, setIsInfoModalOpen};
};
