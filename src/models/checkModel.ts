import { useState } from 'react';

export default function CheckModel() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    return { isModalOpen, setIsModalOpen };
};
