/*
 * LICENCE : CloudUnit is available under the Affero Gnu Public License GPL V3 : https://www.gnu.org/licenses/agpl-3.0.html
 *     but CloudUnit is licensed too under a standard commercial license.
 *     Please contact our sales team if you would like to discuss the specifics of our Enterprise license.
 *     If you are not sure whether the GPL is right for you,
 *     you can always test our software under the GPL and inspect the source code before you contact us
 *     about purchasing a commercial license.
 *
 *     LEGAL TERMS : "CloudUnit" is a registered trademark of Treeptik and can't be used to endorse
 *     or promote products derived from this project without prior written permission from Treeptik.
 *     Products or services derived from this software may not be called "CloudUnit"
 *     nor may "Treeptik" or similar confusing terms appear in their names without prior written permission.
 *     For any questions, contact us : contact@treeptik.fr
 */

(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name webuiApp.controller:AuthCtrl
   * @description # AuthCtrl Controller of the webuiApp
   */
  angular
    .module('webuiApp.login')
    .directive('login', Login);

  function Login(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/components/login/login.html',
      scope: {
        cuEnv: '='
      },
      controller: [
        '$scope',
        'UserService',
        'ErrorService',
        LoginCtrl
      ],
      controllerAs: 'login',
      bindToController: true
    };
  }

  function LoginCtrl($scope, UserService, ErrorService) {

    var vm = this;
    vm.user = {
      username: '',
      password: ''
    };

    vm.check = check;

    function reset() {
      vm.user = {
        username: '',
        password: ''
      };
    }

    function check(username, password) {

      return UserService.check(username, password)
        .then(success)
        .catch(error);

      function success() {
        UserService.createLocalSession();
        reset();
        $scope.$emit(':loginSuccess');
      }

      function error(response) {
        ErrorService.handle(response);
      }
    }
  }
}());





