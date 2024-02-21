npm install

npm run docs:build

:: 将生成的文件放入目标文件夹，并覆盖原有的
XCOPY ./docs/.vuepress/dist ./target/

:: 将 target 文件夹上传到指定目录
cd ./target
git add .
git commit -m %1
git push 