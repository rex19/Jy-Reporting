
/**
 * 公用get请求
 * @param loginUrl       登陆请求
 * @param GetWorkOrderUrl       get 工单请求
 * @param PostWorkOrderUrl   post 工单请求
 * @param PostTracebilityUrl   post 追溯请求
 */
// const ip = '192.168.1.252'
// const post = '80'

const ip = '192.168.0.99'
const post = '80'

export const PublicParam = {
    name: 'jy',
    line1Url: `http://${ip}:${post}/JYTrace/Api/ApiGetReport/?LineCode=Line1`,
    line2Url: `http://${ip}:${post}/JYTrace/Api/ApiGetReport/?LineCode=Line2`,
}
