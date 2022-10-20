module.exports = {
    // 创建用户参数
    getMyWifeFood: {
        username: {
            type: 'string',
            example: '姓名',
            // maxLength:'10',
            required: true
        },
        food: {
            type: 'string',
            example: '食物',
            // maxLength:'36',
            required: false
        },
        loves: {
            type: 'string',
            example: '喜爱程度',
            // maxLength:'36',
            required: false
        },
        times: {
            type: 'string',
            example: '点餐次数',
            // maxLength:'36',
            required: false
        },
        whichTime: {
            type: 'string',
            example: '早餐',
            // maxLength:'36',
            required: true
        }
    },
    addMyWifeFood: {
        user: {
            type: 'string',
            example: '姓名',
            // maxLength:'10',
            required: true
        },
        food: {
            type: 'string',
            example: '食物',
            // maxLength:'36',
            required: false
        },
        loves: {
            type: 'string',
            example: '喜爱程度',
            // maxLength:'36',
            required: true
        },
        times: {
            type: 'string',
            example: '点餐次数',
            // maxLength:'36',
            required: true
        },
        whichTime: {
            type: 'string',
            example: '早餐',
            // maxLength:'36',
            required: true
        }
    },
    deleteMyWifeFood: {
        id: {
            type: 'string',
            example: 'balabala',
            // maxLength:'36',
            required: true
        },
    },
    updateMyWifeFood: {
        id: {
            type: 'string',
            example: 'balabalabala',
            // maxLength:'10',
            required: true
        },
        food: {
            type: 'string',
            example: '食物',
            // maxLength:'36',
            required: false
        },
        loves: {
            type: 'string',
            example: '喜爱程度',
            // maxLength:'36',
            required: true
        },
        times: {
            type: 'string',
            example: '点餐次数',
            // maxLength:'36',
            required: true
        },
        whichTime: {
            type: 'string',
            example: '早餐',
            // maxLength:'36',
            required: true
        }
    },
    recommendMyWifeFood: {
        user: {
            type: 'string',
            example: '姓名',
            // maxLength:'10',
            required: true
        },
    },
    getRandomFoodList: {
        user: {
            type: 'string',
            example: '姓名',
            // maxLength:'10',
            required: true
        },
    },
    updateRandomFoodList: {
        user: {
            type: 'string',
            example: '姓名',
            // maxLength:'10',
            required: true
        },
        food: {
            type: 'string',
            example: '食物',
            // maxLength:'36',
            required: true
        },
    }
};