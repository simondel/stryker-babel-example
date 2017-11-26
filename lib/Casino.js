import http from 'http';

export default class Casino {
  isOldEnough(user) {
    return user.age >= 18;
  }
}