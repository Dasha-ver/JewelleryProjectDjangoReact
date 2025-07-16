FROM node:20-alpine as build
# Задаем рабочий каталог
WORKDIR /usr/src/app
# Copy both package.json and package-lock.json for reliable installs
ADD package.json package-lock.json ./
# Устанавливаем все пакеты и зависимости указанные в json
RUN npm install

# Добавляем каталоги public и src.
# можно воспользоваться командой COPY . . но если вы синхронизировали node_modules,
# то будете ждать пока зальётся этот каталог целиком.
# да и потом могут возникнуть проблемы.
ADD ./public ./public
ADD ./src ./src