declare namespace SocialAPI {
  type chatActionParams = {
    to_user_id: number | string;
    content: string;
  };

  type chatMessagePageParams = {
    to_user_id: number | string;
    step: number | string;
    lastUpdateDate?: string;
  };

  type leaveMessagePageParams = {
    user_id?: number | string;
    step: number | string;
    lastUpdateDate?: string;
  };

  type MessageChat = {
    /** id主键 */
    id?: number | string;
    /** 消息内容 */
    content?: string;
    /** 留言者id */
    authorId?: number | string;
    /** 留言对象id */
    toUserId?: number | string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number | string;
  };

  type MessageLeave = {
    /** id主键 */
    id?: number | string;
    /** 留言内容 */
    content?: string;
    /** 回复内容内容 */
    response?: string;
    /** 留言者id */
    authorId?: number | string;
    /** 留言对象id */
    toUserId?: number | string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number | string;
  };

  type messageLeaveActionParams = {
    to_user_id: number | string;
    content: string;
  };

  type Null = true;

  type removeChatMessage1Params = {
    messageChatId: string;
  };

  type removeChatMessageParams = {
    messageChatId: string;
  };

  type responseEditParams = {
    leaveMessageId: number | string;
    content: string;
  };

  type ResultListMessageChat = {
    code?: number | string;
    msg?: string;
    data?: MessageChat[];
  };

  type ResultListMessageLeave = {
    code?: number | string;
    msg?: string;
    data?: MessageLeave[];
  };

  type ResultNull = {
    code?: number | string;
    msg?: string;
    data?: Null;
  };
}
