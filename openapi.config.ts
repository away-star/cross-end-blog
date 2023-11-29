



const {generateService} = require("@umijs/openapi")

/**
 * 生成接口服务
 * 命令：yarn openapi
 */
generateService({

    // media
    // schemaPath: 'http://localhost:9190/v3/api-docs',
    // serversPath: './services/media',
    // namespace: 'MediaAPI',
    // apiPrefix: 'API_MEDIA_PREFIX',
    // requestImportStatement: `import { request } from 'umi'
    // import {API_MEDIA_PREFIX} from "@/constants";`,

    // content
    schemaPath: 'http://localhost:9113/v3/api-docs',
    serversPath: './services/content',
    namespace: 'ContentAPI',
    apiPrefix: 'API_CONTENT_PREFIX',
    requestImportStatement: `import { request } from 'umi'
    import {API_CONTENT_PREFIX} from "@/constants";`,

    // userSecurity
    // schemaPath: 'http://localhost:9110/v3/api-docs',
    // serversPath: './services/userSecurity',
    // namespace: 'UserSecurityAPI',
    // apiPrefix: 'API_USERSECURITY_PREFIX',
    // requestImportStatement: `import { request } from 'umi';
    // import {API_USERSECURITY_PREFIX} from "@/constants";`,

    // userCenter
    // schemaPath: 'http://localhost:9111/v3/api-docs',
    // serversPath: './services/userCenter',
    // namespace: 'UserCenterAPI',
    // apiPrefix: 'API_USERCENTER_PREFIX',
    // requestImportStatement: `import { request } from 'umi';
    // import {API_USERCENTER_PREFIX} from "@/constants";`,

    // social
    // schemaPath: 'http://localhost:9114/v3/api-docs',
    // serversPath: './services/social',
    // namespace: 'SocialAPI',
    // apiPrefix: 'API_SOCIAL_PREFIX',
    // requestImportStatement: `import { request } from 'umi'
    // import {API_SOCIAL_PREFIX} from "@/constants";`,
})