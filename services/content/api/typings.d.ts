declare namespace ContentAPI {
  type actionParams = {
    targetId: string;
  };

  type Authenticator = true;

  type Browser = {
    name?: string;
    pattern?: Record<string, any>;
    mobile?: boolean;
    unknown?: boolean;
  };

  type ChartsDataVo = true;

  type commentPageParams = {
    step: number;
    lastUpdateDate?: string;
    postId: string;
  };

  type CommentRequest = {
    id?: string;
    content?: string;
    authorId?: string;
    postId?: string;
  };

  type CommentVo = {
    /** 评论id主键 */
    id?: string;
    /** 评论内容 */
    content?: string;
    /** 评论人id */
    authorId?: string;
    /** 文章id */
    postId?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
    replies?: Reply[];
    favoriteCount?: number;
  };

  type deleteActionParams = {
    targetId: string;
  };

  type deleteCommentParams = {
    commentId: string;
  };

  type deleteEssayParams = {
    essayId: string;
  };

  type deletePostParams = {
    postId: string;
  };

  type deleteReplyParams = {
    replyId: string;
  };

  type Engine = {
    name?: string;
    pattern?: Record<string, any>;
    unknown?: boolean;
  };

  type essayPageParams = {
    authorId: string;
    step: number;
    lastUpdateDate?: string;
  };

  type EssayRequest = {
    coverUrls?: string[];
    id?: string;
    content?: string;
    mood?: string;
    publicFlag?: boolean;
  };

  type EssayVo = {
    /** 随笔id主键 */
    id?: string;
    /** 随笔内容 */
    content?: string;
    /** 写随笔时候的心情 */
    mood?: string;
    /** 作者id */
    authorId?: string;
    /** 是否公开 */
    publicFlag?: boolean;
    /** 封面图片 */
    coverUrl?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
    urls?: string[];
    favoriteCount?: number;
  };

  type Filter = true;

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
    requestBody?: Record<string, any>;
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
    principal?: HttpPrincipal;
    requestHeaders?: { empty?: boolean };
    httpContext?: HttpContext;
    responseHeaders?: { empty?: boolean };
    responseBody?: Record<string, any>;
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
    params?: { raw?: Record<string, any>; empty?: boolean };
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
      maxAge?: string;
      path?: string;
      portlist?: string;
      secure?: boolean;
      httpOnly?: boolean;
      version?: number;
      discard?: boolean;
    }[];
    userAgentStr?: string;
    cookieMap?: Record<string, any>;
    postMethod?: boolean;
    getMethod?: boolean;
    bodyBytes?: string[];
    bodyStream?: Record<string, any>;
    cookiesStr?: string;
    httpContext?: HttpContext;
  };

  type MultipartFormData = {
    loaded?: boolean;
    paramNames?: string[];
    paramListMap?: { raw?: Record<string, any>; empty?: boolean };
    fileMap?: Record<string, any>;
    fileListValueMap?: { raw?: Record<string, any>; empty?: boolean };
    paramMap?: Record<string, any>;
    fileParamNames?: string[];
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

  type PageCommentVo = {
    records?: CommentVo[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: string;
    countId?: string;
    pages?: string;
  };

  type PageEssayVo = {
    records?: EssayVo[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: string;
    countId?: string;
    pages?: string;
  };

  type PagePostSimpleVo = {
    records?: PostSimpleVo[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: string;
    countId?: string;
    pages?: string;
  };

  type Platform = {
    name?: string;
    pattern?: Record<string, any>;
    android?: boolean;
    mobile?: boolean;
    iphoneOrIPod?: boolean;
    ipad?: boolean;
    ios?: boolean;
    unknown?: boolean;
  };

  type Post = {
    /** 帖子id */
    id?: string;
    /** 帖子标题 */
    title?: string;
    /** 帖子内容 */
    content?: string;
    /** post作者id */
    authorId?: string;
    /** 归属领域 */
    labelId?: string;
    /** 是否公开 */
    publicFlag?: boolean;
    /** 封面图片 */
    coverUrl?: string;
    /** 简介 */
    description?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type postDetailParams = {
    postId: string;
  };

  type PostDetailVo = {
    post?: Post;
    commentVos?: CommentVo[];
    favoriteCount?: number;
  };

  type postPageParams = {
    authorId: string;
    step: number;
    lastUpdateDate?: string;
    labelId?: string;
  };

  type PostRequest = {
    id?: string;
    title?: string;
    content?: string;
    authorId?: string;
    labelId?: string;
    publicFlag?: boolean;
    coverUrl?: string;
    description?: string;
  };

  type PostSimpleVo = {
    /** 帖子id */
    id?: string;
    /** 帖子标题 */
    title?: string;
    /** 帖子内容 */
    content?: string;
    /** post作者id */
    authorId?: string;
    /** 归属领域 */
    labelId?: string;
    /** 是否公开 */
    publicFlag?: boolean;
    /** 封面图片 */
    coverUrl?: string;
    /** 简介 */
    description?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
    favoriteCount?: number;
  };

  type Reply = {
    /** 回复id主键 */
    id?: string;
    /** 回复内容 */
    content?: string;
    /** 回复人id */
    authorId?: string;
    /** 目标id */
    targetId?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type ReplyRequest = {
    id?: string;
    content?: string;
    authorId?: string;
    targetId?: string;
  };

  type ResultChartsDataVo = {
    code?: number;
    msg?: string;
    data?: ChartsDataVo;
  };

  type ResultNull = {
    code?: number;
    msg?: string;
    data?: Null;
  };

  type ResultPageCommentVo = {
    code?: number;
    msg?: string;
    data?: PageCommentVo;
  };

  type ResultPageEssayVo = {
    code?: number;
    msg?: string;
    data?: PageEssayVo;
  };

  type ResultPagePostSimpleVo = {
    code?: number;
    msg?: string;
    data?: PagePostSimpleVo;
  };

  type ResultPostDetailVo = {
    code?: number;
    msg?: string;
    data?: PostDetailVo;
  };

  type ResultString = {
    code?: number;
    msg?: string;
    data?: string;
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
}
