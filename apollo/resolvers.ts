import { Config } from 'apollo-server-micro';

const DB = {
  articles: [
    { id: 1, title: 'foo', content: 'foooooooooooooo' },
    { id: 2, title: 'bar', content: 'baaaaaaaaaaaaaa' },
  ],
};

//  ./type-defs.tsに定義したQueryの中身を書く
export const resolvers: Config['resolvers'] = {
  Query: {
    // 　引数・・・(parent, args, context, info)
    getArticle: (_, { id }: { id: number }) => {
      const articles = DB.articles?.filter((a) => a.id === id);

      return articles ? articles[0] : [];
    },
    getArticles: () => DB.articles,
  },
};
