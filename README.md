# Обзор проекта
Landing page для для компании "Слетать.ру", занимающейся поиском, сравнением цен и бронированием туров.

## Веб страницы

- [Главная](https://vladislav1233.github.io/fly-off/build/main.html "Главная")
- [Калькулятор расчетов](https://vladislav1233.github.io/fly-off/build/calculator.html "Калькулятор расчетов")

## Технологии
- Pug (ex. jade) / HTML5
- SCSS / CSS3
- БЭМ (методология)
- Javascript / Jquery

# Развернуть проект

## Должно быть установлено ##

node.js - https://nodejs.org/ Версию лучше последнюю скачать

**npm**

```bash
$ npm i npm -g —allow-root
```

**bower**

```bash
$ npm i bower -g —allow-root
```

**gulp**

```bash
$ npm i gulp -g —allow-root
```
Версия пакета может не подходить для проекта. 
http://joxi.ru/Vrw8deKIK64dem 
Необходимо установить gulp 4
https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/

*Проверить версию* 
```bash
$ gulp -v
```

*Видим что версию CLI надо обновить*
```bash
CLI version 3.9.1 
Local version 4.0.0-alpha.2 
``` 

*Решается* 
```bash
$ npm install --global gulp-cli
$ gulp -v
```

*И видим*
```bash
CLI version 1.2.2 
Local version 4.0.0-alpha.2 
``` 

## Настройка окружения ###

```bash

$ cd src/js && npm i && cd ../.. 
$ npm i
```

## Собираем проект ###

*для production*
```bash
$ gulp build
```
*для работы*
```bash
$ gulp dev
```

## Основные команды ###

*подключение миксинов инклюдами*
```bash
$ gulp addInc2pug
```
*Создание папки с стилями в bem-blocks*
```bash
$ gulp create-style --name b-block-name
```
*Проверка js*
```bash
$ gulp eslint
```
*Создание переменной с цветов в variables*
```bash
$ gulp color-create --color --ffffff
```

## Создаем шрифт из иконок ##
----------------------------------------------------------------------------------------------------------------------------
в папку добавляем svg файлы.
/src/images/svg_for_icon/

их нужно сохранить определенным образом через illustrator

При сохранении svg следующие настройки

Save your file as SVG with the following settings:

SVG Profiles: SVG 1.1
Fonts Type: SVG
Fonts Subsetting: None
Options Image Location: Embed
Advanced Options
CSS Properties: Presentation Attributes
Decimal Places: 1
Encoding: UTF-8
Output fewer elements: check
Leave the rest unchecked.
----------------------------------------------------------------------------------------------------------------------------