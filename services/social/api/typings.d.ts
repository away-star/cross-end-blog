declare namespace SocialAPI {
  type chatActionParams = {
    to_user_id: number;
    content: string;
  };

  type chatMessagePageParams = {
    to_user_id: number;
    step: number;
    lastUpdateDate?: string;
  };

  type leaveMessagePageParams = {
    user_id?: number;
    step: number;
    lastUpdateDate?: string;
  };

  type MessageChat = {
    /** id主键 */
    id?: number;
    /** 消息内容 */
    content?: string;
    /** 留言者id */
    authorId?: number;
    /** 留言对象id */
    toUserId?: number;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type MessageLeave = {
    /** id主键 */
    id?: number;
    /** 留言内容 */
    content?: string;
    /** 回复内容内容 */
    response?: string;
    /** 留言者id */
    authorId?: number;
    /** 留言对象id */
    toUserId?: number;
    /** 是否公开 */
    isPublic?: boolean;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type messageLeaveActionParams = {
    to_user_id: number;
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
    leaveMessageId: number;
    content: string;
  };

  type ResultListMessageChat = {
    code?: number;
    msg?: string;
    data?: MessageChat[];
  };

  type ResultListMessageLeave = {
    code?: number;
    msg?: string;
    data?: MessageLeave[];
  };

  type ResultNull = {
    code?: number;
    msg?: string;
    data?: Null;
  };
}
