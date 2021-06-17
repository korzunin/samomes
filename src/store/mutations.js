import Vue from 'vue';

export default {
  DRAWER_SET(state, payload) {
    state.drawer = payload;
  },
  LANG_SET(state, payload) {
    state.lang = payload;
  },
  TANK_ADD(state, payload) {
    state.tanks.push(payload);
  },
  TANK_REMOVE(state, payload) {
    state.tanks.splice(payload, 1);
  },
  TANK_EDIT(state, payload) {
    Vue.set(state.tanks, payload.index, payload.tank);
  },
  TANK_MOVE(state, payload) {
    state.tanks = payload;
  },
  TANKS_REMOVE(state) {
    state.tanks = [];
  },
  RECIPE_ADD(state, payload) {
    state.recipes.push(payload);
  },
  RECIPE_REMOVE(state, payload) {
    state.recipes.splice(payload, 1);
  },
  RECIPE_EDIT(state, payload) {
    Vue.set(state.recipes, payload.index, payload.recipe);
  },
  RECIPE_MOVE(state, payload) {
    state.recipes = payload;
  },
  RECIPES_REMOVE(state) {
    state.recipes = [];
  },
  SCHEDULE_ADD(state, payload) {
    state.schedules.push(payload);
  },
  SCHEDULE_REMOVE(state, payload) {
    state.schedules.splice(payload, 1);
  },
  SCHEDULE_COMPLETE(state, payload) {
    const schedule = state.schedules[payload.indexSchedule];
    const status = schedule.completed[payload.recipeName][payload.indexDay];
    schedule.completed[payload.recipeName][payload.indexDay] = (status + 1) % 3;
    Vue.set(state.schedules, payload.indexSchedule, schedule);
  },
  SCHEDULES_REMOVE(state) {
    state.schedules = [];
    state.progress = {};
  },
  SNACKBAR_SHOW(state, payload) {
    state.snackbarMessage = payload;
    state.isSnackbar = true;
  },
  SNACKBAR_HIDE(state) {
    state.snackbarMessage = '';
    state.isSnackbar = false;
  },
  GUID_CLOSE(state) {
    state.guidIsClosed = true;
  },
};
