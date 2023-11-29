declare namespace UserSecurityAPI {
  type Authenticator = true;

  type BlogSettingRequest = {
    labelList?: Label[];
    proverbList?: Proverb[];
    slideVenue?: string[];
  };

  type Browser = {
    name?: string;
    pattern?: Record<string, any>;
    mobile?: boolean;
    unknown?: boolean;
  };

  type codeSendForLoginParams = {
    email: string;
  };

  type codeSendForRecoverParams = {
    email: string;
  };

  type codeSendForRegisterParams = {
    email: string;
  };

  type Engine = {
    name?: string;
    pattern?: Record<string, any>;
    unknown?: boolean;
  };

  type Filter = true;

  type getUserinfoParams = {
    /** 登录信息id */
    securityInfoId?: number |  string;
  };

  type getUsersListParams = {
    securityInfoId?: number |  string;
    size: number;
  };

  type HttpContext = {
    path?: string;
    attributes?: Record<string, any>;
    handler?: HttpHandler;
    authenticator?: Authenticator;
    server?: HttpServer;
    filters?: Filter[];
  };

  type HttpExchange = {
    protocol?: string;
    responseCode?: number;
    requestMethod?: string;
    remoteAddress?: {
      address?: {
        canonicalHostName?: string;
        hostAddress?: string;
        address?: string[];
        hostName?: string;
        linkLocalAddress?: boolean;
        multicastAddress?: boolean;
        anyLocalAddress?: boolean;
        loopbackAddress?: boolean;
        siteLocalAddress?: boolean;
        mcglobal?: boolean;
        mcnodeLocal?: boolean;
        mclinkLocal?: boolean;
        mcsiteLocal?: boolean;
        mcorgLocal?: boolean;
      };
      port?: number;
      unresolved?: boolean;
      hostName?: string;
      hostString?: string;
    };
    requestURI?: string;
    responseBody?: Record<string, any>;
    requestBody?: Record<string, any>;
    principal?: HttpPrincipal;
    requestHeaders?: { empty?: boolean };
    httpContext?: HttpContext;
    responseHeaders?: { empty?: boolean };
    localAddress?: {
      address?: {
        canonicalHostName?: string;
        hostAddress?: string;
        address?: string[];
        hostName?: string;
        linkLocalAddress?: boolean;
        multicastAddress?: boolean;
        anyLocalAddress?: boolean;
        loopbackAddress?: boolean;
        siteLocalAddress?: boolean;
        mcglobal?: boolean;
        mcnodeLocal?: boolean;
        mclinkLocal?: boolean;
        mcsiteLocal?: boolean;
        mcorgLocal?: boolean;
      };
      port?: number;
      unresolved?: boolean;
      hostName?: string;
      hostString?: string;
    };
  };

  type HttpHandler = true;

  type HttpPrincipal = {
    username?: string;
    realm?: string;
    name?: string;
  };

  type HttpServer = {
    address?: {
      address?: {
        canonicalHostName?: string;
        hostAddress?: string;
        address?: string[];
        hostName?: string;
        linkLocalAddress?: boolean;
        multicastAddress?: boolean;
        anyLocalAddress?: boolean;
        loopbackAddress?: boolean;
        siteLocalAddress?: boolean;
        mcglobal?: boolean;
        mcnodeLocal?: boolean;
        mclinkLocal?: boolean;
        mcsiteLocal?: boolean;
        mcorgLocal?: boolean;
      };
      port?: number;
      unresolved?: boolean;
      hostName?: string;
      hostString?: string;
    };
    executor?: Record<string, any>;
  };

  type HttpServerRequest = {
    httpExchange?: HttpExchange;
    method?: string;
    query?: string;
    path?: string;
    contentType?: string;
    headers?: { empty?: boolean };
    charset?: string;
    multipart?: MultipartFormData;
    uri?: string;
    body?: string;
    userAgent?: UserAgent;
    cookies?: {
      name?: string;
      value?: string;
      comment?: string;
      commentURL?: string;
      domain?: string;
      maxAge?: number;
      path?: string;
      portlist?: string;
      secure?: boolean;
      httpOnly?: boolean;
      version?: number;
      discard?: boolean;
    }[];
    getMethod?: boolean;
    postMethod?: boolean;
    bodyBytes?: string[];
    cookiesStr?: string;
    userAgentStr?: string;
    cookieMap?: Record<string, any>;
    bodyStream?: Record<string, any>;
    params?: { raw?: Record<string, any>; empty?: boolean };
    httpContext?: HttpContext;
  };

  type Label = {
    /** 主键 */
    id?: number | string;
    /** 用户登录信息id */
    securityInfoId?: number |  string;
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

  type LoginInfoRequest = {
    captcha?: string;
    authType: string;
    phone?: string;
    account?: string;
    password?: string;
    email?: string;
  };

  type LoginVo = {
    userinfo?: Userinfo;
    securityInfo?: SecurityInfo;
    user2powers?: User2power[];
    labels?: Label[];
    proverbs?: Proverb[];
    token?: string;
  };

  type MultipartFormData = {
    loaded?: boolean;
    paramNames?: string[];
    fileListValueMap?: { raw?: Record<string, any>; empty?: boolean };
    paramMap?: Record<string, any>;
    fileParamNames?: string[];
    paramListMap?: { raw?: Record<string, any>; empty?: boolean };
    fileMap?: Record<string, any>;
  };

  type Null = true;

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type OS = {
    name?: string;
    pattern?: Record<string, any>;
    unknown?: boolean;
  };

  type PageUserInfoDto = {
    records?: UserInfoDto[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type Platform = {
    name?: string;
    pattern?: Record<string, any>;
    android?: boolean;
    mobile?: boolean;
    ipad?: boolean;
    iphoneOrIPod?: boolean;
    ios?: boolean;
    unknown?: boolean;
  };

  type Proverb = {
    /** 箴言 */
    context?: string;
    /** 创作者 */
    createPeople?: string;
    /** 使用人id */
    securityInfoId?: number |  string;
    /** 主键 */
    id?: number | string;
    /** 状态 */
    isActive?: number;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type RecoverRequest = {
    captcha: string;
    authType: string;
    phone?: string;
    password?: string;
    email?: string;
  };

  type RegisterInfoRequest = {
    phone?: string;
    email?: string;
    password?: string;
    captcha: string;
    registerType: string;
  };

  type ResultLoginVo = {
    code?: number;
    msg?: string;
    data?: LoginVo;
  };

  type ResultNull = {
    code?: number;
    msg?: string;
    data?: Null;
  };

  type ResultObject = {
    code?: number;
    msg?: string;
    data?: Record<string, any>;
  };

  type ResultPageUserInfoDto = {
    code?: number;
    msg?: string;
    data?: PageUserInfoDto;
  };

  type ResultString = {
    code?: number;
    msg?: string;
    data?: string;
  };

  type ResultUserInfoDto = {
    code?: number;
    msg?: string;
    data?: UserInfoDto;
  };

  type SecurityInfo = {
    /** 主键 */
    id?: number | string;
    /** 手机号 */
    phone?: string;
    /** 账号 */
    account?: string;
    /** 密码 */
    password?: string;
    /** 注册ip地址 */
    registerIp?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
    email?: string;
  };

  type testParams = {
    request: HttpServerRequest;
  };

  type UploadFile = {
    header?: UploadFileHeader;
    fileName?: string;
    fileInputStream?: Record<string, any>;
    fileContent?: string[];
    inMemory?: boolean;
    uploaded?: boolean;
  };

  type UploadFileHeader = {
    formFieldName?: string;
    formFileName?: string;
    fileName?: string;
    contentType?: string;
    mimeType?: string;
    mimeSubtype?: string;
    contentDisposition?: string;
    file?: boolean;
  };

  type User2power = {
    /** 用户登录信息id */
    securityInfoId?: number |  string;
    /** 权限主键 */
    powerId?: number | string;
    /** 主键 */
    id?: number | string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type UserAgent = {
    mobile?: boolean;
    browser?: Browser;
    version?: string;
    platform?: Platform;
    os?: OS;
    osVersion?: string;
    engine?: Engine;
    engineVersion?: string;
  };

  type Userinfo = {
    /** 主键 */
    id?: number | string;
    /** 用户登录信息id */
    securityInfoId?: number |  string;
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

  type UserInfoDto = {
    userinfo?: Userinfo;
    securityInfo?: SecurityInfo;
    user2powers?: User2power[];
    labels?: Label[];
    proverbs?: Proverb[];
  };

  type UserinfoRequest = {
    nickname?: string;
    birthday?: string;
    avatar?: string;
    gender?: string;
    address?: string;
    qq?: number;
    slideShow?: string;
    idiograph?: string;
    welcomeText?: string;
    githubAddr?: string;
    juejinAddr?: string;
    csdnAddr?: string;
    subname?: string;
  };
}
