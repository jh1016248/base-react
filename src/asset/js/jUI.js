let jUI = function (){};
let El = function (){};

El.prototype = {
    dom: null,
    getEl: function (dom){
        if(document.querySelector(dom)) {
            this.dom = document.querySelector(dom)
        }
        return this
    },
    checkDom: function (callback){
        if(!this.dom){
            return false
        }
        else{
            callback()
        }
    },
    hasClass: function (name){
        return this.dom.classList.contains(name)
    },
    addClass: function (name){
        this.checkDom(() => {
            this.dom.classList.add(name)
        })
    },
    removeClass: function (name){
        this.checkDom(() => {
            this.dom.classList.remove(name)
        })
    },
    toggleClass: function (name){
        this.checkDom(() => {
            if(!this.hasClass(name)){
                this.addClass(name)
            }
            else{
                this.removeClass(name)
            }
        })
        
    }
}

let $ = function (dom){
    let el = new El();
    return el.getEl(dom)
};

jUI.prototype = {
    showLoading() {
        $(".jui-loading").toggleClass("aa")
        if($(".jui-loading").dom) {
            console.log(1)
        }
        else{
            console.log(2)
        }
    },
    hideLoading() {

    },
    loading(imgList, callback) { 

    },
    confirm(option) {
        option = {
            title: '',
            content: '',
            successText: '',
            success: function (){},
            cancelText: '',
            cancel: function (){}
        }
    },
    alert() {

    },
    showMsg() {

    }
}
export default new jUI();