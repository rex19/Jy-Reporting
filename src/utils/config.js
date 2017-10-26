
/**
 * 公用get请求
 * @param line1Url       1线
 * @param line2Url       2线
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
