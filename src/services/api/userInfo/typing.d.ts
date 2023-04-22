declare namespace UserInfoAPI {


    interface userInfoData {
        nickname:string|undefined
        birthday?:string|undefined
        avatar:string|undefined
        gender?:string|undefined
        address?:string|undefined
        userLever?:string|undefined
        qq?:string|undefined
        slideVenue:string[]|undefined
        welcomeText:string|undefined
        idiograph:string|undefined
        githubAddr?:string|undefined
        juejinAddr?:string|undefined
        csdnAddr?:string|undefined
        subname?:string|undefined

        loginInformationId?:string|undefined
    }

    interface blogSettingData {
        labels:label[]
        proverbs:proverb[]
        slides:string[]
    }

    interface label{
        title:string
        subTitle:string
        id?:string
    }

    interface proverb{
        context:string
        createPeople?:string
        id?:string
    }
}
