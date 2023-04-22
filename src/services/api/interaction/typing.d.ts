declare namespace InteractAPI {
    interface messageData {
        id?: string;
        createTime?: string;
        content: string;
        updateTime?: string;
        open: boolean;
        hostId: string;
        deliverId?: string;
        deliverName?: string;
        deliverAvatar?: string;
    }
}
