declare namespace ContentAPI {
  type actionParams = {
    targetId: number;
  };

  type Authenticator = true;

  type Browser = {
    name?: string;
    pattern?: Record<string, any>;
    mobile?: boolean;
    unknown?: boolean;
  };

  type commentPageParams = {
    step: number;
    lastUpdateDate?: string;
    postId: string;
  };

  type CommentRequest = {
    id?: number;
    content?: string;
    authorId?: number;
    postId?: number;
  };

  type CommentVo = {
    /** 评论id主键 */
    id?: number;
    /** 评论内容 */
    content?: string;
    /** 评论人id */
    authorId?: number;
    /** 文章id */
    postId?: number;
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
    targetId: number;
  };

  type deleteCommentParams = {
    commentId: number;
  };

  type deleteEssayParams = {
    essayId: number;
  };

  type deletePostParams = {
    postId: number;
  };

  type deleteReplyParams = {
    replyId: number;
  };

  type Engine = {
    name?: string;
    pattern?: Record<string, any>;
    unknown?: boolean;
  };

  type essayPageParams = {
    authorId: number;
    step: number;
    lastUpdateDate?: string;
  };

  type EssayRequest = {
    coverUrls?: string[];
    id?: number;
    content?: string;
    mood?: string;
    isPublic?: boolean;
  };

  type EssayVo = {
    /** 随笔id主键 */
    id?: number;
    /** 随笔内容 */
    content?: string;
    /** 写随笔时候的心情 */
    mood?: string;
    /** 作者id */
    authorId?: number;
    /** 是否公开 */
    isPublic?: boolean;
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
    requestHeaders?: { empty?: boolean };
    requestBody?: Record<string, any>;
    principal?: HttpPrincipal;
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
    cookieMap?: Record<string, any>;
    userAgentStr?: string;
    bodyStream?: Record<string, any>;
    bodyBytes?: string[];
    cookiesStr?: string;
    httpContext?: HttpContext;
  };

  type MultipartFormData = {
    loaded?: boolean;
    paramNames?: string[];
    paramListMap?: { raw?: Record<string, any>; empty?: boolean };
    fileListValueMap?: { raw?: Record<string, any>; empty?: boolean };
    fileMap?: Record<string, any>;
    fileParamNames?: string[];
    paramMap?: Record<string, any>;
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

  type PageEssayVo = {
    records?: EssayVo[];
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

  type PagePostSimpleVo = {
    records?: PostSimpleVo[];
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
    ios?: boolean;
    ipad?: boolean;
    iphoneOrIPod?: boolean;
    unknown?: boolean;
  };

  type Post = {
    /** 帖子id */
    id?: number;
    /** 帖子标题 */
    title?: string;
    /** 帖子内容 */
    content?: string;
    /** post作者id */
    authorId?: number;
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
    deleteFlag?: number;
  };

  type postDetailParams = {
    postId: number;
  };

  type PostDetailVo = {
    post?: Post;
    commentVos?: CommentVo[];
    favoriteCount?: number;
  };

  type postPageParams = {
    authorId: number;
    step: number;
    lastUpdateDate?: string;
    category?: string;
  };

  type PostRequest = {
    id?: number;
    title?: string;
    content?: string;
    authorId?: number;
    category?: string;
    isPublic?: boolean;
    coverUrl?: string;
    description?: string;
  };

  type PostSimpleVo = {
    /** 帖子id */
    id?: number;
    /** 帖子标题 */
    title?: string;
    /** 帖子内容 */
    content?: string;
    /** post作者id */
    authorId?: number;
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
    deleteFlag?: number;
    favoriteCount?: number;
  };

  type Reply = {
    /** 回复id主键 */
    id?: number;
    /** 回复内容 */
    content?: string;
    /** 回复人id */
    authorId?: number;
    /** 目标id */
    targetId?: number;
    /** 该记录创建时间 */
    createTime?: string;
    /** 该记录最后一次修改时间 */
    updateTime?: string;
    /** 逻辑删除 */
    deleteFlag?: number;
  };

  type ReplyRequest = {
    id?: number;
    content?: string;
    authorId?: number;
    targetId?: number;
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
