const bxButton = angular.module('bx.button', []);
bxButton.component('connectButton', {
    bindings: {
        text   : '<',
        valid  : '=',
        class  : '<',
        action : '&',
        loading: '=',
        icon   : '<',
        submit : '<'
    },
    template: '<button class="bx-button btn btn-lg btn-block ld-ext-right {{$ctrl.class}} "\n        ng-class="{\'running\' : $ctrl.loading}"\n        ng-click="$ctrl.action()"\n        type="{{$ctrl.submit ? \'submit\': \'button\'}}"\n        ng-disabled="$ctrl.valid || $ctrl.loading">\n    <div class="ld ld-ring ld-spin"></div>\n    <span class="bold">\n           <i class="{{$ctrl.icon}}" ng-if="$ctrl.icon"></i> {{$ctrl.text}}\n             </span>\n</button>'
});
