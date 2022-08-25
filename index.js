
var data = document.querySelectorAll('.item')
var nuttrang = document.querySelectorAll('.nuttrang div')
var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
var nut = [...nuttrang]
var datas = [...data]
var active = 0;
var kt = true;
var leng = datas.length

function load() {
    if(kt)
    {
        kt = false
    }
    else{
        // datas.map((da) =>{
        //     if(da.className.includes('hideitem'))
        //     {
        //         da.classList.remove('hideitem')
        //         return da;
        //     }
        // })
        datas.map((da) =>{
            if(da.className.includes('active'))
            {
                da.classList.remove('active')
                // da.classList.add('hideitem')
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
    
    datas[active].classList.add('active');
    nut[active].classList.add('active')

}

setTimeout(load , 15000)

next.addEventListener('click' , handelnext);
prev.addEventListener('click' , handelprev);
function handelnext() {
    active = active < leng -1 ? active + 1 : active = 0;
    console.log(active)
    load();
}
function handelprev() {
    active = active > 0 ? active - 1 : active = leng-1;
    console.log(active)
    load();
}