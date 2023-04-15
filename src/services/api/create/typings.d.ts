declare namespace CreatAPI {
    //注册请求体
    interface writeData {
        content: string;
        title: string;
        category: string;
        open: boolean;
        coverUrl: string;
        description: string;
    }

    interface essayData {

        id?:string
        createTime?: string;
        updateTime?: string;
        urls: string[];
        /** nick */
        content: string;
        /** email */
        open: boolean;
        mood: string;
    }


}
