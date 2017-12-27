const button = angular.module('bx.button', []);
button.component('connectButton', {
  bindings: {
    text   : '<',
    valid  : '=',
    class  : '<',
    action : '&',
    loading: '=',
    icon   : '<',
    submit : '<'
  },
  template: `
       <button class="btn btn-lg btn-block ld-ext-right {{$ctrl.class}} " ng-class="{'running' : $ctrl.loading}" ng-click="$ctrl.action()" type="{{$ctrl.submit ? 'submit': 'button'}}"
              ng-disabled="$ctrl.valid || $ctrl.loading">
            <div class="ld ld-ring ld-spin"></div>
           <span class="bold">
           <i class="{{$ctrl.icon}}" ng-if="$ctrl.icon"></i> {{$ctrl.text}}
             </span>
       </button>`
});
