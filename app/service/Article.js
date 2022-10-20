"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * Test Service
 */
class Article extends egg_1.Service {
    /**
     * 根据ID获取单个项目
     */
    async getProjectById() {
        const { ctx } = this;
        // console.log(app.mongoose.Types);
        try {
            const results = await ctx.model.Article.find({
            // Article为modal/article.js里面命名的名字
            // id: 2,
            // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
            });
            return ctx.helper.json(results);
        }
        catch (err) {
            ctx.body = ctx.helper.json(JSON.stringify(err));
        }
    }
    /**
     * 增加单个项目
     */
    async addProject(values) {
        const { ctx } = this;
        // console.log(app.mongoose.Types);
        try {
            const results = await ctx.model.Article.create({
                name: values === null || values === void 0 ? void 0 : values.name,
                age: values === null || values === void 0 ? void 0 : values.age,
            });
            return ctx.helper.json(results);
        }
        catch (err) {
            ctx.body = ctx.helper.json(JSON.stringify(err));
        }
    }
    /**
     * 删除单个项目
     */
    async deleteProject(values) {
        const { ctx, app } = this;
        // console.log(app.mongoose.Types);
        try {
            const results = await ctx.model.Article.deleteOne({
                _id: app.mongoose.Types.ObjectId(values),
            });
            return ctx.helper.json(results);
        }
        catch (err) {
            ctx.body = ctx.helper.json(JSON.stringify(err));
        }
    }
    /**
     * 修改单个项目
     */
    async updateProject(values) {
        const { ctx, app } = this;
        // console.log(app.mongoose.Types);
        try {
            const results = await ctx.model.Article.updateOne({ _id: app.mongoose.Types.ObjectId(values === null || values === void 0 ? void 0 : values.id) }, {
                age: values === null || values === void 0 ? void 0 : values.age,
                name: values === null || values === void 0 ? void 0 : values.name,
            });
            return ctx.helper.json(results);
        }
        catch (err) {
            ctx.body = ctx.helper.json(JSON.stringify(err));
        }
    }
}
exports.default = Article;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFydGljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFFOUI7O0dBRUc7QUFDSCxNQUFxQixPQUFRLFNBQVEsYUFBTztJQUMxQzs7T0FFRztJQUNJLEtBQUssQ0FBQyxjQUFjO1FBQ3pCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsbUNBQW1DO1FBQ25DLElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMzQyxrQ0FBa0M7WUFDbEMsU0FBUztZQUNULGdFQUFnRTthQUNqRSxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTTtRQUM1QixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1DQUFtQztRQUNuQyxJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLElBQUksRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSTtnQkFDbEIsR0FBRyxFQUFFLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxHQUFHO2FBSWpCLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNO1FBQy9CLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFCLG1DQUFtQztRQUNuQyxJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hELEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ3pDLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNO1FBQy9CLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFCLG1DQUFtQztRQUNuQyxJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQy9DLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsRUFBRSxDQUFDLEVBQUUsRUFDaEQ7Z0JBQ0UsR0FBRyxFQUFFLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxHQUFHO2dCQUNoQixJQUFJLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUk7YUFDbkIsQ0FDRixDQUFDO1lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0NBQ0Y7QUExRUQsMEJBMEVDIn0=