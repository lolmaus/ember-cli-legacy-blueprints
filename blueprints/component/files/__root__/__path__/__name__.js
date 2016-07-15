// import {/*A,*/ /*isEmberArray*/} from 'ember-array/utils';
// import {/*log,*/ /*inspect,*/ /*run,*/ /*warn*/} from 'ember-debug';
// import Evented from  'ember-evented';
// import on from  'ember-evented/on';
// import get from 'ember-metal/get';
// import {getProperties} from 'ember-metal/get';
// import observer from 'ember-metal/observer';
// import {/*addObserver,*/ /*removeObserver*/} from 'ember-metal/observer';
// import set from 'ember-metal/set';
// import {/*setProperties,*/ /*trySet*/} from 'ember-metal/set';
// import {/*aliasMethod,*/ /*assert,*/ /*cacheFor,*/ /*copy,*/ /*guidFor*/}
//   from  'ember-metal/utils';
// import {default as EObject} from 'ember-object';
// const O = EObject.create.bind(EObject);
// import run from 'ember-runloop';
// import {/*begin,*/ /*bind,*/ /*cancel,*/ /*debounce,*/ /*end,*/ /*join,*/
//   /*later,*/ /*next,*/ /*once,*/ /*schedule,*/ /*scheduleOnce,*/ /*throttle*/}
//   from 'ember-runloop';
// import service from 'ember-service/inject';
// import {/*camelize,*/ /*capitalize,*/ /*classify,*/ /*dasherize,*/
//   /*decamelize,*/ /*fmt,*/ /*htmlSafe,*/ /*loc,*/ /*underscore,*/ /*w*/}
//   from 'ember-string';
// import {/*isBlank,*/ /*isEmpty,*/ /*isNone,*/ /*isPresent,*/ /*tryInvoke,*/
//   /*typeOf*/} from 'ember-utils';
// import computed from 'ember-computed';
// import {/*alias,*/ /*and,*/ /*bool,*/ /*collect,*/ /*deprecatingAlias,*/
//   /*empty,*/ /*equal,*/ /*filter,*/ /*filterBy,*/ /*filterProperty,*/ /*gt,*/
//   /*gte,*/ /*intersect,*/ /*lt,*/ /*lte,*/ /*map,*/ /*mapBy,*/ /*mapProperty,*/
//   /*match,*/ /*max,*/ /*min,*/ /*none,*/ /*not,*/ /*notEmpty,*/ /*oneWay,*/
//   /*or,*/ /*readOnly,*/ /*reads,*/ /*setDiff,*/ /*sort,*/ /*sum,*/ /*union,*/
//   /*uniq,*/} from 'ember-computed';
// import _ from 'npm:lodash';
// import $ from 'jquery';
// import RSVP from 'rsvp';
// import {task} from 'ember-concurrency';

import Component from 'ember-component';
<%= importTemplate %>


export default Component.extend({

  // ----- Arguments -----



  // ----- Services -----



  // ----- Overridden properties -----
  classNames: ['<%= camelName %>'],
  <%= contents %>


  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
});
