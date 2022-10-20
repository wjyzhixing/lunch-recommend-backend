module.exports = {
    // 创建用户参数
    login: {
        password: {
            type: 'string',
            example: '密码',
            // maxLength:'36',
            required: true
        },
        username: {
            type: 'string',
            example: '姓名',
            // maxLength:'10',
            required: true
        },
    },
    registry: {
        password: {
            type: 'string',
            example: '密码',
            // maxLength:'36',
            required: true
        },
        username: {
            type: 'string',
            example: '姓名',
            // maxLength:'10',
            required: true
        },
        email: {
            type: 'string',
            example: '邮箱地址',
            // maxLength:'10',
            required: true
        },
    }
};