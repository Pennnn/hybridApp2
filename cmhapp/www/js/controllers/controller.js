angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('floderlistCtrl', function($scope) {
    $scope.floderlist = [
        { name: '收件箱', id: '1' },
        { name: '草稿箱', id: '2' },
        { name: '已发送', id: '3' },
        { name: '已删除', id: '4' },
        { name: '文件夹1', id: '5' },
        { name: '文件夹2', id: '6' },
        { name: '文件夹3', id: '7' },
        { name: '文件夹4', id: '8' },
        { name: '文件夹5', id: '9' },
        { name: '文件夹6', id: '10' },
        { name: '文件夹7', id: '11' },
        { name: '文件夹8', id: '12' },
        { name: '文件夹9', id: '13' },
        { name: '文件夹10', id: '14' },
        { name: '文件夹11', id: '15' },
        { name: '文件夹12', id: '16' },
        { name: '文件夹13', id: '17' },
        { name: '文件夹8', id: '12' },
        { name: '文件夹9', id: '13' },
        { name: '文件夹10', id: '14' },
        { name: '文件夹11', id: '15' },
        { name: '文件夹12', id: '16' },
        { name: '文件夹13', id: '17' },
        { name: '文件夹8', id: '12' },
        { name: '文件夹9', id: '13' },
        { name: '文件夹10', id: '14' },
        { name: '文件夹11', id: '15' },
        { name: '文件夹12', id: '16' },
        { name: '文件夹13', id: '17' },
        { name: '文件夹8', id: '12' },
        { name: '文件夹9', id: '13' },
        { name: '文件夹10', id: '14' },
        { name: '文件夹11', id: '15' },
        { name: '文件夹12', id: '16' },
        { name: '文件夹13', id: '17' }
    ];
    $scope.showDeleteBtn = false;
    $scope.showRecorderBtn = false;

    //下拉刷新
    $scope.doRefresh = function() {
        //获取文件夹的最新消息 
        //Todo
        //最后需要告诉系统刷新完毕，停止读取的animation(转圈圈读取的动画)
        $scope.$broadcast('scroll.refreshComplete');
    }

    //编辑按钮
    $scope.edit = function() {
        $scope.showDeleteBtn =  !$scope.showDeleteBtn ;
        $scope.showRecorderBtn = !$scope.showRecorderBtn;
    }

    //拖拽函数
    $scope.moveItem = function(item, fromIndex, toIndex) {
        //Move the item in the array
        var temp = $scope.floderlist.splice(fromIndex, 1);
        $scope.floderlist.splice(toIndex, 0, temp[0]);
    };

    //删除函数
    $scope.delete = function(index){
        $scope.floderlist.splice(index, 1);
    }
})

.controller('maillistCtrl', function($scope, $state, $ionicLoading, $ionicModal) {
    $scope.maillist = [
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title3", content: 'testtest3', time: "2014-5-11", appended: true },
        { sender: 'xudongwu', title:"Title1", content: 'testtest1', time: "2014-5-13", appended: true },
        { sender: 'xudongwu', title:"Title2", content: 'testtest2', time: "2014-5-12", appended: true },
        { sender: 'xudongwu', title:"Title4", content: 'testtest4', time: "2014-5-10", appended: true }
        ];

    $scope.gohome = function() {
        $state.go("app.floderlist");
    };
     //下拉刷新
    $scope.doRefresh = function() {
        //获取文件夹的最新消息 
        $scope.maillist.unshift({ sender: 'zkp', title:"testInsert", content: 'testtest1', time: "2014-5-13", appended: true });
        //最后需要告诉系统刷新完毕，停止读取的animation(转圈圈读取的动画)
        $scope.$broadcast('scroll.refreshComplete');
    };

    //loading 
    $scope.loading = function() {
        $ionicLoading.show({
            template: 'loading...',
            duration: 1500,
            delay: 500,
            noBackdrop: true
        });
    };
    $scope.hide = function() {
        $ionicLoading.hide();
    };

    //弹出窗口model加载方法
    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope,
        animation: 'slide-in-up',
        focusFirstInput: true
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //当我们用到模型时，清除它！
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });

})

.controller("readmailCtrl", function($scope, $state) {
    $scope.readmail = function(index) {
        console.log(index);
        $state.go("app.readmail");
    }
});

