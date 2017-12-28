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
    templateUrl: 'button.html'
});
