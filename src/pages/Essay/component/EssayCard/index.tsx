import React, {useState} from 'react';
import styles from './index.less';
import ImageLayout from "@/pages/Essay/component/ImageLayout";
import {formatTime} from "@/utils/time";
import {Dropdown, MenuProps, message, Modal} from "antd";
import {EditTwoTone, ExclamationOutlined, MailOutlined} from "@ant-design/icons";
import {history, useModel} from "@@/exports";
import {deleteEssay} from "../../../../../services/content/api/essayController";

interface Iprop {
    content: string;
    urls: string[];
    mood: string;
    date: string
    id: string
}


const items: MenuProps['items'] = [
    {
        label: (
            <a style={{color: "red"}}>
                删除
            </a>
        ),
        icon: <ExclamationOutlined style={{color: "red"}}/>,
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: '编辑',
        icon: <EditTwoTone/>,
        key: '1',
    },
];


const EssayCard: React.FC<Iprop> = (props) => {

    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];



    const {content, urls, mood, date, id} = props;
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('此操作不可逆哦');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = async () => {
        setModalText('正在删除...');
        setConfirmLoading(true);
        const res = await deleteEssay({essayId: 0});
        if (res.code === 200) {
            message.success('删除成功');
            window.location.reload();
        } else {
            message.error('系统异常');
        }
        setConfirmLoading(false);
        setOpen(false);
    };

    const handleCancel = () => {
        ('Clicked cancel button');
        setOpen(false);
    };
    const onClick: MenuProps['onClick'] = ({key}) => {
        if (key === '0') {
            showModal();
        } else if (key === '1'){
            message.info('小星已经在加班开发了，会尽快上线该功能的')
        }
    };

    return (
        <>
            <Modal
                title="确认删除"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
            <div className={styles.task} draggable="true">
                <div className={styles.tags}>
                    <span className={styles.tag}>{formatTime(date).day}</span>
                    <Dropdown menu={{items, onClick}} >
                        <button className={styles.options} type={'button'} style={{display:idUrl===localStorage.getItem('loginInformationId')?'table':'none'}}>
                            <svg xmlSpace="preserve" viewBox="0 0 41.915 41.916"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000">
                                <g strokeWidth="0" id={styles.SVGRepo_bgCarrier}></g>
                                <g strokeLinejoin="round" strokeLinecap="round"
                                   id={styles.SVGRepo_tracerCarrier}></g>
                                <g id={styles.SVGRepo_iconCarrier}>
                                    <g>
                                        <g>
                                            <path
                                                d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path>
                                            <path
                                                d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path>
                                            <path
                                                d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </Dropdown>
                </div>
                <p>{content}</p>
                <ImageLayout images={urls}/>
            </div>

        </>
    )
}

export default EssayCard;
