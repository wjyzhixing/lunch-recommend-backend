/* egg_folder/app/contract/format.js */
module.exports = {
    JsonBody: { // 这个名字对应上面 Controller 注释的@response 的 JsonBody。
        result: { type: 'string' }, // 服务器返回的数据。
    },
};