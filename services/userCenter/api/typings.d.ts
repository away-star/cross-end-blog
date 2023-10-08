declare namespace UserCenterAPI {
  type deleteLabelParams = {
    id: number;
  };

  type deleteProverbParams = {
    id: number;
  };

  type getAll1Params = {
    security_info_id?: number;
  };

  type getAllParams = {
    security_info_id?: number;
  };

  type getUserInfosParams = {
    ids: number[];
  };

  type Label = {
    /** 主键 */
    id?: number;
    /** 用户登录信息id */
    securityInfoId?: number;
    /** 标签背景 */
    backgroundImg?: string;
    /** 标题 */
    title?: string;
    /** 说明 */
    subTitle?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type LabelRequest = true;

  type Proverb = {
    /** 箴言 */
    context?: string;
    /** 创作者 */
    createPeople?: string;
    /** 使用人id */
    securityInfoId?: number;
    /** 主键 */
    id?: number;
    /** 状态 */
    isActive?: number;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type ProverbRequest = {
    /** 箴言 */
    context?: string;
    /** 创作者 */
    createPeople?: string;
    /** 主键 */
    id?: number;
    /** 状态 */
    isActive?: number;
  };

  type ResultListLabel = {
    code?: number;
    msg?: string;
    data?: Label[];
  };

  type ResultListProverb = {
    code?: number;
    msg?: string;
    data?: Proverb[];
  };

  type ResultListUserinfo = {
    code?: number;
    msg?: string;
    data?: Userinfo[];
  };

  type ResultString = {
    code?: number;
    msg?: string;
    data?: string;
  };

  type Userinfo = {
    /** 主键 */
    id?: number;
    /** 用户登录信息id */
    securityInfoId?: number;
    /** 网名 */
    nickname?: string;
    /** 生日 */
    birthday?: string;
    /** 头像 */
    avatar?: string;
    /** 性别 */
    gender?: string;
    /** 用户地址 */
    address?: string;
    /** 用户等级 */
    userLever?: boolean;
    /** QQ号 */
    qq?: number;
    /** 首页展示图（不超过五张） */
    slideShow?: string;
    /** 个人签名 */
    idiograph?: string;
    /** 欢迎语 */
    welcomeText?: string;
    /** github地址 */
    githubAddr?: string;
    /** 掘金地址 */
    juejinAddr?: string;
    /** CSDN地址 */
    csdnAddr?: string;
    /** 副昵称（或自拟称号） */
    subname?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
    /** 在线状态 */
    isOnline?: number;
  };
}
