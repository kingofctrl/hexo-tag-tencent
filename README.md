# hexo-tag-tencent

[2016-08-16]： 1） markdown 文档直接将视频分享代码粘贴就可以插入视频，无需使用插件。 2）由于 GitHub Pages 是 https 协议，只有绑定独立域名才能使用 http 协议，所以没有绑定独立域名的站点无法插入分享视频。

## 安装
```
npm install hexo-tag-tencent 
```
将hexo-tag-tencent版本信息添加到你的package.json，否则会报错并且无法使用，添加后你的package.json应类似于
```
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": "3.2.0"
  },
  "dependencies": {
    "hexo": "^3.2.0",
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-feed": "^1.1.0",
    "hexo-generator-index": "^0.2.0",
    "hexo-generator-sitemap": "^1.1.2",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.2.0",
    "hexo-renderer-marked": "^0.2.10",
    "hexo-renderer-stylus": "^0.3.1",
    "hexo-server": "^0.2.0",
    "hexo-tag-tencent": "^0.1.3"
    ...
  }
}
```

## 文档

https://www.hmybmny.com/hexo-tag-tencent/
