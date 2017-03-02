import {expect} from 'chai'
import {describe, it, beforeEach} from 'mocha'
import Ember from 'ember'
import <%= classifiedModuleName %>Initializer from '<%= dasherizedModulePrefix %>/initializers/<%= dasherizedModuleName %>'
import destroyApp from '../../helpers/destroy-app'

describe('<%= friendlyTestName %>', function () {
  let application

  beforeEach(function () {
    Ember.run(function () {
      application = Ember.Application.create()
      application.deferReadiness()
    })
  })

  afterEach(function() {
    destroyApp(application);
  });

  // Replace this with your real tests.
  it('works', function () {
    <%= classifiedModuleName %>Initializer.initialize(application)

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok
  })
})
