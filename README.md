# 元气萌动 GitHub Pages CMS 包

## 目录说明

- `index.html`：首页
- `products/`：产品系列总页
- `about/`：关于我们
- `_products/`：产品内容集合
- `_data/`：首页、导航、站点与关于页结构化内容
- `.pages.yml`：Pages CMS 配置
- `admin/`：部署后后台入口页

## 当前版本

- 已预设正式域名：`https://www.yuanqimoe.com`
- 已包含 `CNAME` 文件，推送到仓库后可直接用于 GitHub Pages 自定义域名绑定
- `baseurl` 已设为空，适合独立域名访问

## 推送到 GitHub 的方式

1. 将本目录内容直接推送到 GitHub 仓库根目录。
2. 进入仓库 `Settings -> Pages`。
3. 发布源选择 `Deploy from a branch`。
4. 分支选择 `main`，目录选择 `/(root)`。
5. 确认自定义域名为：`www.yuanqimoe.com`。
6. 等待 GitHub Pages 首次部署完成。
7. 访问 `https://www.yuanqimoe.com/admin/` 打开后台入口。

## DNS 提醒

- 如果域名解析平台尚未配置，请为 `www` 添加一条 `CNAME`
- 记录值指向：`你的 GitHub 用户名.github.io`
- 生效后再到 GitHub Pages 页面确认自定义域名和 HTTPS 状态

## Pages CMS

- 站点已包含 `.pages.yml`，Pages CMS 会据此生成可视化编辑表单
- 媒体目录默认是：`assets/images/uploads`
- `/admin/` 在 `github.io` 域名下会自动识别仓库
- 在独立域名下，如果未自动识别仓库，首次登录后手动选择当前仓库即可
- 如果你后续知道准确仓库名，也可以用 `https://www.yuanqimoe.com/admin/?repo=你的用户名/你的仓库名` 直接打开指定仓库

## 内容模型

- 首页：`_data/home.yml`
- 导航与站点设置：`_data/navigation.yml`、`_data/site.yml`
- 关于页：`_data/about.yml`
- 产品：`_products/*.md`
