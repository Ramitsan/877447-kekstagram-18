'use strict';
// константы
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
var ESC_KEYCODE = 27;
// var ENTER_KEYCODE = 13;

// переменные
var templatePicture = document.querySelector('#picture');
var templatePictureItem = templatePicture.content.querySelector('.picture');
var pictureList = document.querySelector('.pictures');
var bigPicture = document.querySelector('.big-picture');
var bigPictureImg = bigPicture.querySelector('.big-picture__img');
var bigPictureLikes = bigPicture.querySelector('.likes-count');
var maxBigPicture = 4;
var bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
var socialComments = bigPicture.querySelector('.social__comments');
var countCommentsAll = 125; // общее количество комментов
var countCommentsShow = 3; // количество комментариев, показанных под фото
var socialCommentCount = bigPicture.querySelector('.social__comment-count');
var commentsLoader = bigPicture.querySelector('.comments-loader');


// генерация случайного числа в заданном интервале, включительно
var getRandomIndex = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// генерируем случайный текст случайного коммента
var getRandomMessage = function (arr) {
  var randomMessage = getRandomIndex(0, arr.length);
  return arr[randomMessage];
};

// генерируем случайное имя
var getRandomName = function (arr) {
  var randomName = getRandomIndex(0, arr.length);
  return arr[randomName];
};

// генерируем случайное описание фото
var getRandomDescription = function (arr) {
  var randomDescription = getRandomIndex(0, arr.length);
  return arr[randomDescription];
};

// функция генерации одного комментария
var createPhotoComment = function (_avatar, _message, _name) {
  var comment = {
    avatar: _avatar,
    message: _message,
    name: _name
  };
  return comment;
};

// функция генерации массива комментариев
var createPhotoComments = function (length) {
  var comments = [];
  for (var i = 0; i < length; i++) {
    var numberAvatar = 'img/avatar-' + getRandomIndex(1, AVATAR_AMOUNT) + '.svg';
    var message = getRandomMessage(COMMENTS_PHOTOS);
    var name = getRandomName(NAMES_AUTORS_PHOTOS);

    comments[i] = createPhotoComment(numberAvatar, message, name);
  }
  return comments;
};

var arrComments = createPhotoComments(PHOTOS_AMOUNT);

// функция генерации случайного комментария из массива комментариев
var getRandomComment = function (arr) {
  var randomComment = getRandomIndex(0, arr.length);
  return arr[randomComment];
};


// функция создания одного объекта с фото
var createPhotoObject = function (_url, _description, _likes, _comments) {
  var photo = {
    url: _url,
    description: _description,
    likes: _likes,
    comment: _comments
  };
  return photo;
};

// функция создания массива объектов с фото
var createPhotoObjects = function (length) {
  var photos = [];
  for (var i = 0; i < length; i++) {
    var photoUrl = 'photos/' + (i + 1) + '.jpg';
    var description = getRandomDescription(DESCRIPTION_PHOTOS);
    var likes = getRandomIndex(MIN_LIKES, MAX_LIKES);
    var comment = getRandomComment(arrComments);

    photos[i] = createPhotoObject(photoUrl, description, likes, comment);
  }
  return photos;
};

// Рендер DOM-элемента на основе объекта
var renderPicture = function (pictureItem) {
  var pictureElement = templatePictureItem.cloneNode(true);
  var pictureElementImg = pictureElement.querySelector('.picture__img');

  pictureElementImg.src = pictureItem.url;
  pictureElement.querySelector('.picture__likes').textContent = pictureItem.likes;
  pictureElement.querySelector('.picture__comments').textContent = pictureItem.comments;

  return pictureElement;
};

// Заполнение DOM-элемента на основе массива
var renderPictureList = function (arrPhotos) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arrPhotos.length; i++) {
    fragment.appendChild(renderPicture(arrPhotos[i]));
  }
  return fragment;
};

// Получаем массив с фотографиями и коментариями
var completedPhotoList = createPhotoObjects(PHOTOS_AMOUNT);

// Отрисовка сгенерированных DOM-элементов
pictureList.appendChild(renderPictureList(completedPhotoList));

// Дополнительное задание
// Показываем большое фото
// bigPicture.classList.remove('hidden');

// Показ случайного большого фото
var generateBigImg = function () {
  var index = getRandomIndex(1, maxBigPicture);
  bigPictureImg.querySelector('img').src = 'img/logo-background-' + index + '.jpg';
};

// генерируем и подставляем лайки
var getRandomLikes = function () {
  bigPictureLikes.textContent = getRandomIndex(MIN_LIKES, MAX_LIKES);
};

// Количество комментариев всего
var setCommentsCount = function (count) {
  bigPictureCommentsCount.textContent = count;
};

// случайное описание фото
var setBigPictureDesc = function () {
  var desc = DESCRIPTION_PHOTOS[getRandomIndex(0, DESCRIPTION_PHOTOS.length)];
  bigPicture.querySelector('.social__caption').textContent = desc;
};

// генерируем комментарий
var generateComment = function (arrComment) {
  var socialComment = socialComments.querySelector('.social__comment').cloneNode(true);
  socialComment.querySelector('.social__picture').src = arrComment.avatar;
  socialComment.querySelector('.social__picture').alt = arrComment.name;
  socialComment.querySelector('.social__text').textContent = arrComment.message;
  return socialComment;
};

var generateComments = function (comments) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < countCommentsShow; i++) {
    var index = getRandomIndex(0, COMMENTS_PHOTOS.length);
    fragment.appendChild(generateComment(comments[index]));
  }
  socialComments.innerHTML = '';
  return socialComments.appendChild(fragment);
};

// Финальная отрисовка большого фото с коммментариями
var bigPictureShow = function () {
  generateBigImg();
  getRandomLikes();
  setCommentsCount(countCommentsAll);
  setBigPictureDesc();
  generateComments(arrComments);
};

bigPictureShow();

// прячем блоки счетчика комментариеа и загрузки новых комментариев
socialCommentCount.classList.add('visually-hidden');
commentsLoader.classList.add('visually-hidden');

// 4. Обработка событий
// Личный проект: подробности

var uploadFile = document.querySelector('#upload-file');
var imgUploadOverlay = document.querySelector('.img-upload__overlay'); // форма редактирования изображения
var uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');


// открытие и закрытие окна редактирования фото
uploadFile.addEventListener('change', function () {
  imgUploadOverlay.classList.remove('hidden');
});

uploadCancel.addEventListener('click', function () {
  imgUploadOverlay.classList.add('hidden');
});

// если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== textHashtagsInput) {
    imgUploadOverlay.classList.add('hidden');
  }
});

// масштабирование
var scaleControlSmaller = document.querySelector('.scale__control--smaller');
var scaleControlBigger = document.querySelector('.scale__control--bigger');
var scaleControlValue = document.querySelector('.scale__control--value'); // инпут
var imgUploadPreview = document.querySelector('.img-upload__preview'); // предварительный просмотр изображения
var stepResize = 25;
var minSize = 25;
var maxSize = 100;
var defoltSize = 100;
var scaleControlValueNumber = defoltSize; // значение масштаба в текущий момент

// показатель масштаба при открытии фотографии
var scaleIndicatorDefault = function () {
  scaleControlValue.value = defoltSize + '%';
};
scaleIndicatorDefault();


// уменьшение масштаба изображения
var controlSmallerHandler = function () {
  if (scaleControlValueNumber <= maxSize && scaleControlValueNumber > minSize) {
    scaleControlValueNumber -= stepResize;
    scaleControlValue.value = scaleControlValueNumber + '%';
  }
};

// увеличение масштаба изображения
var controlBiggerHandler = function () {
  if (scaleControlValueNumber >= minSize && scaleControlValueNumber < maxSize) {
    scaleControlValueNumber += stepResize;
    scaleControlValue.value = scaleControlValueNumber + '%';
  }
};

// показ измененного масштаба изображения
var resize = function () {
  imgUploadPreview.classList.remove('scale-25', 'scale-50', 'scale-75', 'scale-100');
  imgUploadPreview.classList.add('scale-' + scaleControlValueNumber);
};

var photoSmaller = function () {
  controlSmallerHandler();
  resize();
};

var photoBigger = function () {
  controlBiggerHandler();
  resize();
};

scaleControlSmaller.addEventListener('click', photoSmaller);
scaleControlBigger.addEventListener('click', photoBigger);

// применение фильтров
var uploadPhoto = document.querySelector('.img-upload__preview img');
var effectsLabels = document.querySelectorAll('.effects__label');
var effectLevelSlider = document.querySelector('.effect-level');


// функция добавления фильтров на фото
var toggleFilter = function () {
  // добавляем обработчик на клик по фильтру
  for (var i = 0; i < effectsLabels.length; i++) {
    effectsLabels[i].addEventListener('click', function (evt) {
      var filterName = evt.target.parentNode.htmlFor;
      filterRemove();

      if (filterName === 'effect-none') {
        uploadPhoto.classList.add('effects__preview--none');
        effectLevelSlider.classList.add('hidden');
      }
      if (filterName === 'effect-chrome') {
        uploadPhoto.classList.add('effects__preview--chrome');
      }
      if (filterName === 'effect-sepia') {
        uploadPhoto.classList.add('effects__preview--sepia');
      }
      if (filterName === 'effect-marvin') {
        uploadPhoto.classList.add('effects__preview--marvin');
      }
      if (filterName === 'effect-phobos') {
        uploadPhoto.classList.add('effects__preview--phobos');
      }
      if (filterName === 'effect-heat') {
        uploadPhoto.classList.add('effects__preview--heat');
      }
    });
  }
};

// удаление добавленных классов
var filterRemove = function () {
  uploadPhoto.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
  effectLevelSlider.classList.remove('hidden');
};

toggleFilter();


// валидация хэш-тегов
var textHashtagsInput = document.querySelector('.text__hashtags');
var maxHashtags = 5;
var maxLengthHashtag = 20;

var arrHashtags = textHashtagsInput.value.split(' ', maxHashtags);

textHashtagsInput.addEventListener('invalid', function () {
  for (var i = 0; i < arrHashtags.length; i++) {
    if (arrHashtags[i][0] !== '#') {
      textHashtagsInput.setCustomValidity('Хэш-тег должен начинаться с символа # (решётка)');
    }
    if (arrHashtags[i][0] === '#' && arrHashtags[i].length === 1) {
      textHashtagsInput.setCustomValidity('Хештег не может состоять только из одной решётки');
    } else {
      textHashtagsInput.setCustomValidity('');
    }
  }

  if (arrHashtags.length > maxHashtags) {
    textHashtagsInput.setCustomValidity('Количество хэштегов не должно превышать ' + maxHashtags);
  }

  if (arrHashtags[i].length > maxLengthHashtag) {
    textHashtagsInput.setCustomValidity('Хэштег не должен превышать ' + maxLengthHashtag + ' символов');
  } else {
    textHashtagsInput.setCustomValidity('');
  }
});
