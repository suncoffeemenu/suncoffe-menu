const items = [
  {t:'قهوه فرانسه', c:'coffee', p:'70000', img:'images/coffee1.jpg'},
  {t:'اسپرسو تک‌شات', c:'espresso', p:'60000', img:'images/espresso1.jpg'},
  {t:'اسپرسو دبل', c:'espresso', p:'90000', img:'images/espresso2.jpg'},
  {t:'لاته وانیلی', c:'latte', p:'100000', img:'images/latte1.jpg'},
  {t:'کاپوچینو', c:'latte', p:'96000', img:'images/cappuccino.jpg'},
  {t:'آمریکانو', c:'coffee', p:'64000', img:'images/americano.jpg'},
  {t:'قهوه کمکس', c:'coffee', p:'120000', img:'images/chemex.jpg'},
  {t:'پر اوور', c:'coffee', p:'116000', img:'images/pourover.jpg'},
  {t:'موکا', c:'latte', p:'110000', img:'images/mocha.jpg'},
  {t:'چای سیاه', c:'tea', p:'36000', img:'images/tea1.jpg'},
  {t:'چای سبز', c:'tea', p:'40000', img:'images/tea2.jpg'},
  {t:'دمنوش ترکیبی', c:'tea', p:'50000', img:'images/tea3.jpg'},
  {t:'کیک شکلاتی', c:'cake', p:'140000', img:'images/cake1.jpg'},
  {t:'چیزکیک', c:'cake', p:'150000', img:'images/cake2.jpg'},
  {t:'براونی شکلاتی', c:'cake', p:'96000', img:'images/cake3.jpg'},
  {t:'فلت‌وایت', c:'coffee', p:'104000', img:'images/flatwhite.jpg'},
  {t:'ریسترتو', c:'espresso', p:'70000', img:'images/ristretto.jpg'},
  {t:'قهوه سرد', c:'coffee', p:'84000', img:'images/icedcoffee.jpg'},
  {t:'لاته فندق', c:'latte', p:'110000', img:'images/latte2.jpg'},
  {t:'چای ماسالا', c:'tea', p:'44000', img:'images/masala.jpg'},
  {t:'قهوه آیریش', c:'coffee', p:'124000', img:'images/irish.jpg'},
  {t:'تیرامیسو', c:'cake', p:'156000', img:'images/tiramisu.jpg'},
  {t:'پنکیک کاراملی', c:'cake', p:'120000', img:'images/pancake.jpg'},
  {t:'کولد برو', c:'coffee', p:'130000', img:'images/coldbrew.jpg'},
  {t:'ماچا لاته', c:'latte', p:'116000', img:'images/matcha.jpg'},
  {t:'چای لیمویی', c:'tea', p:'40000', img:'images/tea4.jpg'},
  {t:'آفوگاتو', c:'coffee', p:'140000', img:'images/affogato.jpg'},
  {t:'مافین', c:'cake', p:'70000', img:'images/muffin.jpg'},
  {t:'کارامل ماکیاتو', c:'latte', p:'110000', img:'images/latte3.jpg'},
  {t:'هات چاکلت', c:'latte', p:'90000', img:'images/hotchocolate.jpg'}
];

const grid = document.getElementById('grid');
const cats = document.querySelectorAll('.cat');

function render(list){
  grid.innerHTML = '';
  list.forEach(it=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.cat = it.c;
    const img = document.createElement('img');
    img.className = 'thumb';
    img.alt = it.t;
    img.src = it.img;
    const meta = document.createElement('div');
    meta.className='meta';
    meta.innerHTML = `<div class="title">${it.t}</div><div class="price">${it.p} تومان</div>`;
    card.appendChild(img); card.appendChild(meta);
    grid.appendChild(card);
  });
}

function applyFilter(){
  const active = document.querySelector('.cat.active').dataset.cat;
  const filtered = items.filter(it=> (active==='all'||it.c===active));
  render(filtered);
}

cats.forEach(el=>el.addEventListener('click', ()=>{
  cats.forEach(x=>x.classList.remove('active'));
  el.classList.add('active');
  applyFilter();
}));

// initial render
applyFilter();
