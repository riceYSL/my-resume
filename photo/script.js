function accordion(id,option) {
    var out=document.getElementById('out')
    var defaulters={
        activewidth:300,
        activeheight: 400,
        smallwidth:150,
        smallheight:50
    };

    option = Object.assign({},defaulters,option);
    // console.log(option);
    if(option.col * option.row !== out.children.length)
    {throw "option is error";}
    out.style.width=option.activewidth+option.smallwidth*(option.col-1)+'px';

    var activepic=function (index) {
        var current_x=index % option.col;
        var current_y=Math.floor(index / option.col);
// console.log(current_x,current_y)
        for(var x=0;x<option.col;x++){
            for(var y=0;y<option.row;y++){
                var cindex=y*option.col+x;
                var item=out.children[cindex];
                if(x==current_x && y==current_y){
                    item.style.width=option.activewidth+'px';
                    item.style.height=option.activeheight+'px';
                }else if(x==current_x){
                    item.style.width=option.activewidth+'px';
                    item.style.height=option.smallheight+'px';
                }else if(y==current_y){
                    item.style.width=option.smallwidth+'px';
                    item.style.height=option.activeheight+'px';
                }else {
                    item.style.width=option.smallwidth+'px';
                    item.style.height=option.smallheight+'px';
                }
            }
        }
    };
    activepic(2);
    for(let i=0;i<out.children.length;i++){
        out.children[i].onmouseover=function(){
            activepic(i)
        }

    }

}