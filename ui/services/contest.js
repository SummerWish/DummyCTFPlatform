import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Service extends ServiceInjector {
  getCurrentContest() {
    return this.$http.get('/api/contests/current');
  }

  setCurrentContest(id) {
    return this.$http.put('/api/contests/current', { id });
  }

  query() {
    return this.$http.get('/api/contests');
  }

  queryPublic() {
    return this.$http.get('/public/contests');
  }

  create(contest) {
    return this.$http.post('/api/contests', contest);
  }

  get(id) {
    return this.$http.get(`/api/contests/${id}`);
  }

  update(id, contest) {
    return this.$http.put(`/api/contests/${id}`, contest);
  }

  register(id, form) {
    return this.$http.post(`/public/contests/${id}/register`, form);
  }

  getChallenges(id) {
    return this.$http.get(`/api/contests/${id}/challenges`);
  }

  getChallengesPublic() {
    return this.$http.get('/public/challenges');
  }

  getScoreboardPublic() {
    return this.$http.get('/public/challenges/scoreboard');
  }

  submitFlag(ccId, flag) {
    return this.$http.post(`/public/challenges/${ccId}/submit`, { flag });
  }

  addChallenge(id, props) {
    return this.$http.post(`/api/contests/${id}/challenges`, props);
  }

  getChallenge(ccId) {
    return this.$http.get(`/api/contests/contestChallenge/${ccId}`);
  }

  getEvents(id) {
    return this.$http.get(`/api/contests/${id}/events`);
  }

  addEvent(id, props) {
    return this.$http.post(`/api/contests/${id}/events`, props);
  }

  setEventPublishState(evid, published) {
    return this.$http.post(`/api/contests/events/${evid}/publish`, { published });
  }

  updateChallenge(ccId, form) {
    return this.$http.put(`/api/contests/contestChallenge/${ccId}`, form);
  }

  setChallengeVisibility(ccId, visible) {
    return this.$http.post(`/api/contests/contestChallenge/${ccId}/visibility`, { visibility: visible });
  }

  getChallengeSubmissions(ccId) {
    return this.$http.get(`/api/contests/contestChallenge/${ccId}/submissions`);
  }

  getAvailableChallenges(id) {
    return this.$http.get(`/api/contests/${id}/availableChallenges`);
  }

  getAvailableValidators() {
    return this.$http.get('/api/contests/availableValidators');
  }

}

Service.$inject = ['$http'];

angular
  .module('dummyctf.services')
  .service('Contest', Service);
