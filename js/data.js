'use strict';

// КОНСТАНТЫ
(function () {

  var DESCRIPTION_PHOTOS = ['Снято на Кэнон', 'Снято на Никон', 'Снято на Хассель', 'Снято на Роллейфлекс', 'Снято на Зенит', 'Снято на Айфон', 'Снято на Полароид'];
  var COMMENTS_PHOTOS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    'Какое чудное боке!',
    'Сначала научитесь камеру в руках держать!',
    'Отличный ракурс!',
    'Шибко нрра!',
    'Обработка могла быть и лучше!'
  ];
  var NAMES_AUTORS_PHOTOS = ['Артем', 'Кекс', 'Профи', 'Рудольф', 'Кира А.', 'Михаил В.', 'Анна', 'Alexandro778853', 'Тамара61', 'Elvis'];
  var PHOTOS_AMOUNT = 25;
  var AVATAR_AMOUNT = 6;
  var MIN_LIKES = 15;
  var MAX_LIKES = 200;

  // переменные
  var maxBigPicture = 4;

  window.data = {
    DESCRIPTION_PHOTOS: DESCRIPTION_PHOTOS,
    COMMENTS_PHOTOS: COMMENTS_PHOTOS,
    NAMES_AUTORS_PHOTOS: NAMES_AUTORS_PHOTOS,
    PHOTOS_AMOUNT: PHOTOS_AMOUNT,
    AVATAR_AMOUNT: AVATAR_AMOUNT,
    MIN_LIKES: MIN_LIKES,
    MAX_LIKES: MAX_LIKES,
    maxBigPicture: maxBigPicture
  };

})();
