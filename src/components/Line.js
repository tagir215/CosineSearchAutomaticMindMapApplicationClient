export default class{
    constructor(rectParent,rect){
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.a = rectParent.right +scrollLeft;
        this.b = rectParent.bottom +scrollTop;
        this.c = rect.left +scrollLeft;
        this.d = rect.bottom +scrollTop;
        this.e = rect.right +scrollLeft;

    }
}