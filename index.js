
var data = document.querySelectorAll('.item')
var nuttrang = document.querySelectorAll('.nuttrang div')
var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
var wrapnut = document.querySelector('.wrapnut')
var nut = [...nuttrang]
var datas = [...data]
var active = 0;
var kt = true;
var xoa = true;
var leng = datas.length
var t;

setTimeout(() => wrapnut.classList.add('active') , 15000);

function load() {
    if(kt)
    {
        kt = false
    }
    else{
        
        clearTimeout();
        datas.map((da) =>{
            if(da.className.includes('hideitem'))
            {
                da.classList.remove('hideitem')
                return da;
            }
        })
        datas.map((da) =>{
            if(da.className.includes('active'))
            {
                da.classList.remove('active')
                da.classList.add('hideitem')
                if(xoa)
                {
                    t = setTimeout(() => da.classList.remove('hideitem') , 3000);
                }else{
                    da.classList.remove('hideitem')
                }
                return da;
            }
        })
        nut.map((a) => {
            if(a.className.includes('active')){
                a.classList.remove('active');
                return a
            }
        })
    }
    
    setTimeout(() => datas[active].classList.add('active') , 0);
    nut[active].classList.add('active')

}

setTimeout(load , 15000)

next.addEventListener('click' , handelnext);
prev.addEventListener('click' , handelprev);
function handelnext() {
    active = active < leng -1 ? active + 1 : active = 0;
    load();
}
function handelprev() {
    active = active > 0 ? active - 1 : active = leng-1;
    clearTimeout(t)
    load();
}

