#!/usr/bin/env sh
###
 # @name: 
 # @author: wuxd
 # @Date: 2021-04-15 16:57:02
 # @LastEditTime: 2021-04-25 11:12:33
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init 
git remote add origin git@github.com:Beiysd/Beiysd.github.io.git
git add .
git commit -m 'xxx'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
git push -f git@github.com:Beiysd/Beiysd.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
