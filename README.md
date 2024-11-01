# README

## Overview

Это приложение разработано с использованием Next.js и TypeScript, с app routing, Material UI для компонентов, styled-components для создания стилей CSS-in-JS, Axios для выполнения запроса к серверу, framer-motion для создания анимаций и react-youtube для отображения видео с YouTube.

## Хостинг

- Сервер: [Render](https://cad-exchanger-server.onrender.com/api/contact)
- Фронтенд: [Vercel](https://cad-exchanger-client-kotofeus-projects.vercel.app/)

### Важно!

Сервер, размещенный на Render, имеет бесплатный тариф и может впадать в спящий режим. Поэтому первый запрос может занять больше времени, чем обычно. Пожалуйста, имейте это в виду при использовании приложения.

## Инициализация и запуск проекта локально

1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).
2. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Kotofeu/cad-exchanger-client.git
   ```
3. Перейдите в директорию проекта:
   ```bash
   cd cad-exchanger-client
   ```
4. Установите зависимости:
   ```bash
   npm install
   ```
5. Запустите приложение в режиме разработки:
   ```bash
   npm run dev
   ```
6. Откройте браузер и перейдите по адресу [http://localhost:3000](http://localhost:3000).

## О сервере

Серверное приложение написано на Node.js и обеспечивает обработку запроса. Для запуска сервера используйте команду:
Bash

npm run start

Исходный код сервера доступен по следующей ссылке: [GitHub - cad-exchanger-server](https://github.com/Kotofeu/cad-exchanger-server).

## Используемые технологии

- **Next.js**: Фреймворк для серверного рендеринга и статической генерации React-приложений.
- **TypeScript**: Надмножество JavaScript, которое добавляет статическую типизацию.
- **Material UI**: Библиотека компонентов для React, основанная на принципах Material Design.
- **styled-components**: Библиотека для создания стилизованных компонентов с использованием CSS-in-JS.
- **Axios**: Библиотека для выполнения HTTP-запросов.
- **framer-motion**: Библиотека для создания анимаций в React-приложениях. Я активно использую framer-motion для анимации различных компонентов, что делает интерфейс более интерактивным и привлекательным. Подробности о его использовании можно найти в [документации](https://www.framer.com/docs/).
- **react-youtube**: Компонент для удобного встраивания видео с YouTube.

## Установка и настройка

Для успешного запуска приложения убедитесь, что все зависимости установлены, а сервер и фронтенд правильно настроены и развернуты. Обращайтесь к документации используемых технологий для дополнительной информации.

### Улучшение SEO сайта и добавление необходимых элементов

В рамках работы над проектом я провел ряд усовершенствований, которые способствуют повышению видимости сайта в поисковых системах и улучшению пользовательского опыта. Ниже перечислены ключевые изменения:

1. **Оптимизация SEO метаданных**:
   Я обновил метаданные, включая заголовки, описания и ключевые слова. Это помогает поисковым системам лучше индексировать сайт и повышает его рейтинг. Вот пример добавленных метаданных для главной страницы:

   ```typescript
   export const metadata: Metadata = {
     title: 'Главная страница',
     description: "Это приложение создано с использованием Next.js в качестве тестового задания для CAD Exchanger.",
     keywords: "Next.js, React, тестовое задание, CAD Exchanger",
     authors: {
       name: 'Данил Петров',
       url: 'https://t.me/daniiilp'
     },
     openGraph: {
       title: "Тестовое задание CAD Exchanger",
       description: "Это приложение создано с использованием Next.js в качестве тестового задания для CAD Exchanger.",
       url: "https://cad-exchanger-client-kotofeus-projects.vercel.app/",
       siteName: "Тестовое задание CAD Exchanger",
       locale: "ru_RU",
       type: "website",
       images: [{
         url: 'https://fost.ws/soft/wp-content/uploads/2023/03/cad-exchanger-3-17-0-build-16601-crack-2023_6414a3a5bc95d.jpeg',
         alt: 'Тестовое задание CAD Exchanger'
       }]
     },
     twitter: {
       card: "summary_large_image",
       site: "@elonmusk",
       title: "Тестовое задание CAD Exchanger",
       description: "Это приложение создано с использованием Next.js в качестве тестового задания для CAD Exchanger.",
       images: [{
         url: 'https://fost.ws/soft/wp-content/uploads/2023/03/cad-exchanger-3-17-0-build-16601-crack-2023_6414a3a5bc95d.jpeg',
         alt: 'Тестовое задание CAD Exchanger'
       }]
     }
   };
   ```

2. **Создание карты сайта**:
   Я добавил файл карты сайта, который помогает поисковым системам быстро находить и индексировать страницы сайта. Вот пример карты сайта:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">
     <url>
       <loc>https://cad-exchanger-client-kotofeus-projects.vercel.app/</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://cad-exchanger-client-kotofeus-projects.vercel.app/contact</loc>
       <priority>0.9</priority>
     </url>
   </urlset>
   ```

3. **Добавление манифеста PWA**:
   Я добавил файл манифеста, который улучшает взаимодействие пользователя с приложением, позволяя устанавливать его на мобильные устройства. Вот пример файла манифеста:

   ```json
   {
       "name": "Тестовое задание CAD Exchanger",
       "short_name": "Тестовое задание",
       "start_url": "/",
       "display": "standalone",
       "background_color": "#ffffff",
       "theme_color": "#000000",
       "icons": [
           {
               "src": "/icon-192x192.png",
               "sizes": "192x192",
               "type": "image/png"
           },
           {
               "src": "/icon-512x512.png",
               "sizes": "512x512",
               "type": "image/png"
           }
       ]
   }
   ```

4. **Добавление иконок**:
   Я также добавил все необходимые иконки, которые улучшат визуальное восприятие приложения на разных устройствах и платформах.

Эти изменения помогут улучшить как видимость сайта в поисковых системах, так и общий пользовательский опыт, сделав интернет-приложение более доступным и простым в использовании.

### На сайте существует кастомная страница 404 для улучшения пользовательского опыта