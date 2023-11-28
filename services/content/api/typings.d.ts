declare namespace ContentAPI {
  type actionParams = {
    targetId: number | string;
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
    step: number | string;
    lastUpdateDate?: string;
    postId: string;
  };

  type CommentRequest = {
    id?: number | string;
    content?: string;
    authorId?: number | string;
    postId?: number | string;
  };

  type CommentVo = {
    /** 评论id主键 */
    id?: number | string;
    /** 评论内容 */
    content?: string;
    /** 评论人id */
    authorId?: number | string;
    /** 文章id */
    postId?: number | string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number | string;
    replies?: Reply[];
    favoriteCount?: number | string;
  };

  type deleteActionParams = {
    targetId: number | string;
  };

  type deleteCommentParams = {
    commentId: number | string;
  };

  type deleteEssayParams = {
    essayId: number | string;
  };

  type deletePostParams = {
    postId: number | string;
  };

  type deleteReplyParams = {
    replyId: number | string;
  };

  type Engine = {
    name?: string;
    pattern?: Record<string, any>;
    unknown?: boolean;
  };

  type essayPageParams = {
    authorId: number | string;
    step: number | string;
    lastUpdateDate?: string;
  };

  type EssayRequest = {
    coverUrls?: string[];
    id?: number | string;
    content?: string;
    mood?: string;
    isPublic?: boolean;
  };

  type EssayVo = {
    /** 随笔id主键 */
    id?: number | string;
    /** 随笔内容 */
    content?: string;
    /** 写随笔时候的心情 */
    mood?: string;
    /** 作者id */
    authorId?: number | string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 封面图片 */
    coverUrl?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number | string;
    urls?: string[];
    favoriteCount?: number | string;
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
    responseCode?: number | string;
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
      port?: number | string;
      unresolved?: boolean;
      hostName?: string;
      hostString?: string;
    };
    requestMethod?: string;
    requestURI?: string;
    requestBody?: Record<string, any>;
    principal?: HttpPrincipal;
    responseBody?: Record<string, any>;
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
      port?: number | string;
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
      port?: number | string;
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
    userAgent?: UserAgent;
    charset?: string;
    multipart?: MultipartFormData;
    uri?: string;
    body?: string;
    cookies?: {
      name?: string;
      value?: string;
      comment?: string;
      commentURL?: string;
      domain?: string;
      maxAge?: number | string;
      path?: string;
      portlist?: string;
      secure?: boolean;
      httpOnly?: boolean;
      version?: number | string;
      discard?: boolean;
    }[];
    getMethod?: boolean;
    postMethod?: boolean;
    cookieMap?: Record<string, any>;
    userAgentStr?: string;
    bodyBytes?: string[];
    cookiesStr?: string;
    bodyStream?: Record<string, any>;
    params?: { raw?: Record<string, any>; empty?: boolean };
    headers?: { empty?: boolean };
    contentType?: string;
    httpContext?: HttpContext;
  };

  type MultipartFormData = {
    loaded?: boolean;
    paramNames?: string[];
    fileParamNames?: string[];
    paramMap?: Record<string, any>;
    fileMap?: Record<string, any>;
    paramListMap?: { raw?: Record<string, any>; empty?: boolean };
    fileListValueMap?: { raw?: Record<string, any>; empty?: boolean };
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
    total?: number | string;
    size?: number | string;
    current?: number | string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number | string;
    countId?: string;
    pages?: number | string;
  };

  type PageEssayVo = {
    records?: EssayVo[];
    total?: number | string;
    size?: number | string;
    current?: number | string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number | string;
    countId?: string;
    pages?: number | string;
  };

  type PagePostSimpleVo = {
    records?: PostSimpleVo[];
    total?: number | string;
    size?: number | string;
    current?: number | string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number | string;
    countId?: string;
    pages?: number | string;
  };

  type Platform = {
    name?: string;
    pattern?: Record<string, any>;
    android?: boolean;
    mobile?: boolean;
    ipad?: boolean;
    ios?: boolean;
    iphoneOrIPod?: boolean;
    unknown?: boolean;
  };

  type Post = {
    /** 帖子id */
    id?: number | string;
    /** 帖子标题 */
    title?: string;
    /** 帖子内容 */
    content?: string;
    /** post作者id */
    authorId?: number | string;
    /** 归属领域 */
    category?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 封面图片 */
    coverUrl?: string;
    /** 简介 */
    description?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number | string;
  };

  type postDetailParams = {
    postId: number | string;
  };

  type PostDetailVo = {
    post?: Post;
    commentVos?: CommentVo[];
    favoriteCount?: number | string;
  };

  type postPageParams = {
    authorId: number | string;
    step: number | string;
    lastUpdateDate?: string;
    category?: string;
  };

  type PostRequest = {
    id?: number | string;
    title?: string;
    content?: string;
    authorId?: number | string;
    category?: string;
    isPublic?: boolean;
    coverUrl?: string;
    description?: string;
  };

  type PostSimpleVo = {
    /** 帖子id */
    id?: number | string;
    /** 帖子标题 */
    title?: string;
    /** 帖子内容 */
    content?: string;
    /** post作者id */
    authorId?: number | string;
    /** 归属领域 */
    category?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 封面图片 */
    coverUrl?: string;
    /** 简介 */
    description?: string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number | string;
    favoriteCount?: number | string;
  };

  type Reply = {
    /** 回复id主键 */
    id?: number | string;
    /** 回复内容 */
    content?: string;
    /** 回复人id */
    authorId?: number | string;
    /** 目标id */
    targetId?: number | string;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number | string;
  };

  type ReplyRequest = {
    id?: number | string;
    content?: string;
    authorId?: number | string;
    targetId?: number | string;
  };

  type ResultChartsDataVo = {
    code?: number | string;
    msg?: string;
    data?: ChartsDataVo;
  };

  type ResultNull = {
    code?: number | string;
    msg?: string;
    data?: Null;
  };

  type ResultPageCommentVo = {
    code?: number | string;
    msg?: string;
    data?: PageCommentVo;
  };

  type ResultPageEssayVo = {
    code?: number | string;
    msg?: string;
    data?: PageEssayVo;
  };

  type ResultPagePostSimpleVo = {
    code?: number | string;
    msg?: string;
    data?: PagePostSimpleVo;
  };

  type ResultPostDetailVo = {
    code?: number | string;
    msg?: string;
    data?: PostDetailVo;
  };

  type ResultString = {
    code?: number | string;
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
