"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class Article extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        // const query = {
        //   limit: ctx.helper.parseInt(ctx.query.limit),
        //   offset: ctx.helper.parseInt(ctx.query.offset),
        // };
        // console.log(query);
        const res = await ctx.service.article.getProjectById();
        ctx.body = res; // 返回值显示
    }
    // 添加
    async addProject() {
        var _a, _b;
        const { ctx } = this;
        const query = {
            age: (_a = ctx.request.body) === null || _a === void 0 ? void 0 : _a.age,
            name: (_b = ctx.request.body) === null || _b === void 0 ? void 0 : _b.name,
        };
        console.log(query);
        const res = await ctx.service.article.addProject(query);
        ctx.body = res; // 返回值显示
    }
    // 删除
    async deleteProject() {
        var _a;
        const { ctx } = this;
        const query = {
            id: (_a = ctx.request.body) === null || _a === void 0 ? void 0 : _a.id,
        };
        console.log(query);
        const res = await ctx.service.article.deleteProject(query.id);
        ctx.body = res; // 返回值显示
    }
    // 修改
    async updateProject() {
        var _a, _b, _c;
        const { ctx } = this;
        const query = {
            id: (_a = ctx.request.body) === null || _a === void 0 ? void 0 : _a.id,
            age: (_b = ctx.request.body) === null || _b === void 0 ? void 0 : _b.age,
            name: (_c = ctx.request.body) === null || _c === void 0 ? void 0 : _c.name,
        };
        console.log(query);
        const res = await ctx.service.article.updateProject(query);
        ctx.body = res; // 返回值显示
    }
}
exports.default = Article;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFydGljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBaUM7QUFFakMsTUFBcUIsT0FBUSxTQUFRLGdCQUFVO0lBQ3RDLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsa0JBQWtCO1FBQ2xCLGlEQUFpRDtRQUNqRCxtREFBbUQ7UUFDbkQsS0FBSztRQUNMLHNCQUFzQjtRQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUTtJQUMxQixDQUFDO0lBRUQsS0FBSztJQUNFLEtBQUssQ0FBQyxVQUFVOztRQUNyQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxRQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSwwQ0FBRSxHQUFHO1lBQzFCLElBQUksUUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksMENBQUUsSUFBSTtTQUM3QixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVE7SUFDMUIsQ0FBQztJQUVELEtBQUs7SUFDRSxLQUFLLENBQUMsYUFBYTs7UUFDeEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLEtBQUssR0FBRztZQUNaLEVBQUUsUUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksMENBQUUsRUFBRTtTQUN6QixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRO0lBQzFCLENBQUM7SUFFRCxLQUFLO0lBQ0UsS0FBSyxDQUFDLGFBQWE7O1FBQ3hCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsTUFBTSxLQUFLLEdBQUc7WUFDWixFQUFFLFFBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLDBDQUFFLEVBQUU7WUFDeEIsR0FBRyxRQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSwwQ0FBRSxHQUFHO1lBQzFCLElBQUksUUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksMENBQUUsSUFBSTtTQUM3QixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVE7SUFDMUIsQ0FBQztDQUNGO0FBL0NELDBCQStDQyJ9