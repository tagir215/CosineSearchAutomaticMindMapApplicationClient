export default class{
    constructor(rectParent,rect){
        const scale = 2;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.a = (rectParent.right +scrollLeft) *scale;
        this.b = (rectParent.bottom +scrollTop) *scale;
        this.c = (rect.left +scrollLeft) *scale;
        this.d = (rect.bottom +scrollTop) *scale;
        this.e = (rect.right +scrollLeft) *scale;

    }
}