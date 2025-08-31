let currentLang = 'fa';

const items = [
  // نوشیدنی‌های سرد
  {t:'آیس موکاچینو', en:'Iced Mochaccino', c:'cold', p:'45000', img:'images/iced_mochaccino.jpg'},
  {t:'آیس کارامل ماکیاتو', en:'Iced Caramel Macchiato', c:'cold', p:'47000', img:'images/iced_caramel.jpg'},
  {t:'آیس لاته', en:'Iced Latte', c:'cold', p:'45000', img:'images/iced_latte.jpg'},
  {t:'آیس آمریکانو', en:'Iced Americano', c:'cold', p:'43000', img:'images/iced_americano.jpg'},
  {t:'موهیتو', en:'Mojito', c:'cold', p:'35000', img:'images/mojito.jpg'},
  {t:'لیموناد', en:'Lemonade', c:'cold', p:'30000', img:'images/lemonade.jpg'},
  {t:'کک اسپرسو', en:'Coke Espresso', c:'cold', p:'40000', img:'images/coke_espresso.jpg'},
  {t:'آفوگاتو', en:'Affogato', c:'cold', p:'50000', img:'images/affogato.jpg'},

  // شیک
  {t:'شیک بادوم زمینی', en:'Peanut Shake', c:'shake', p:'70000', img:'images/shake_peanut.jpg'},
  {t:'شیک نوتلا', en:'Nutella Shake', c:'shake', p:'72000', img:'images/shake_nutella.jpg'},
  {t:'شیک شکلات', en:'Chocolate Shake', c:'shake', p:'70000', img:'images/shake_chocolate.jpg'},
  {t:'شیک وانیل', en:'Vanilla Shake', c:'shake', p:'68000', img:'images/shake_vanilla.jpg'},
  {t:'شیک نسکافه', en:'Nescafe Shake', c:'shake', p:'70000', img:'images/shake_nescafe.jpg'},

  // قهوه
  {t:'اسپرسو', en:'Espresso', c:'coffee', p:'60000', img:'images/espresso.jpg'},
  {t:'قهوه فرانسه', en:'French Coffee', c:'coffee', p:'70000', img:'images/french_coffee.jpg'},
  {t:'قهوه ترک', en:'Turkish Coffee', c:'coffee', p:'65000', img:'images/turkish_coffee.jpg'},
  {t:'کاپوچینو', en:'Cappuccino', c:'coffee', p:'96000', img:'images/cappuccino.jpg'},
  {t:'آمریکانو', en:'Americano', c:'coffee', p:'64000', img:'images/americano.jpg'},
  {t:'کارامل ماکیاتو', en:'Caramel Macchiato', c:'coffee', p:'110000', img:'images/caramel_macchiato.jpg'},
  {t:'لاته', en:'Latte', c:'coffee', p:'100000', img:'images/latte.jpg'},
  {t:'موکاچینو', en:'Mochaccino', c:'coffee', p:'110000', img:'images/mochaccino.jpg'},
  {t:'نسکافه', en:'Nescafe', c:'coffee', p:'50000', img:'images/nescafe.jpg'},
  {t:'شیرنسکافه', en:'Milk Nescafe', c:'coffee', p:'55000', img:'images/milk_nescafe.jpg'},
  {t:'شکلات داغ', en:'Hot Chocolate', c:'coffee', p:'60000', img:'images/hot_chocolate.jpg'},
  {t:'شیر شکلات', en:'Milk Chocolate', c:'coffee', p:'60000', img:'images/milk_chocolate.jpg'},
  {t:'ماسالا با شیر', en:'Masala Milk', c:'coffee', p:'50000', img:'images/masala_milk.jpg'},
  {t:'دالگونا', en:'Dalgona', c:'coffee', p:'60000', img:'images/dalgona.jpg'},
  {t:'قهوه نیویورکی', en:'New York Coffee', c:'coffee', p:'120000', img:'images/newyork_coffee.jpg'},
  {t:'کوبانو', en:'Cubano', c:'coffee', p:'130000', img:'images/cubano.jpg'},

  // دمنوش و چای
  {t:'لاغری', en:'Slimming Tea', c:'tea', p:'35000', img:'images/slimming_tea.jpg'},
  {t:'بهار نارنج', en:'Orange Blossom Tea', c:'tea', p:'35000', img:'images/orange_blossom.jpg'},
  {t:'آرامبخش', en:'Relaxing Tea', c:'tea', p:'35000', img:'images/relaxing_tea.jpg'},
  {t:'گل گاوزبان', en:'Borage Tea', c:'tea', p:'35000', img:'images/borage_tea.jpg'},
  {t:'تندرستی', en:'Health Tea', c:'tea', p:'35000', img:'images/health_tea.jpg'},
  {t:'نشاط آور', en:'Refreshing Tea', c:'tea', p:'35000', img:'images/refreshing_tea.jpg'},
  {t:'چای سبز', en:'Green Tea', c:'tea', p:'40000', img:'images/green_tea.jpg'},
  {t:'چای سرخ', en:'Red Tea', c:'tea', p:'40000', img:'images/red_tea.jpg'},
  {t:'چای سیاه', en:'Black Tea', c:'tea', p:'36000', img:'images/black_tea.jpg'},
  {t:'چای کرک', en:'Karak Tea', c:'tea', p:'38000', img:'images/karak_tea.jpg'},

  // غذا
  {t:'پاستا مرغ آلفردو', en:'Chicken Alfredo Pasta', c:'food', p:'120000', img:'images/chicken_alfredo.jpg'},
  {t:'اسنک مرغ', en:'Chicken Snack', c:'food', p:'50000', img:'images/chicken_snack.jpg'},
  {t:'اسنک گوشت', en:'Beef Snack', c:'food', p:'55000', img:'images/beef_snack.jpg'},
  {t:'نان سیر', en:'Garlic Bread', c:'food', p:'30000', img:'images/garlic_bread.jpg'},
  {t:'سیب زمینی سرخ کرده', en:'French Fries', c:'food', p:'40000', img:'images/fries.jpg'},
  {t:'سیب زمینی سرخ کرده با پنیر', en:'Cheese Fries', c:'food', p:'50000', img:'images/cheese_fries.jpg'},
  {t:'سیب زمینی سرخ کرده با سس قارچ و خامه', en:'Mushroom Cream Fries', c:'food', p:'60000', img:'images/mushroom_fries.jpg'},

  // صبحانه
  {t:'صبحانه ویژه کافه سان', en:'Special Breakfast', c:'breakfast', p:'130000', img:'images/special_breakfast.jpg'},
  {t:'املت مکزیکی', en:'Mexican Omelette', c:'breakfast', p:'70000', img:'images/mexican_omelette.jpg'},
  {t:'املت', en:'Omelette', c:'breakfast', p:'60000', img:'images/omelette.jpg'},
  {t:'نیمرو', en:'Fried Egg', c:'breakfast', p:'50000', img:'images/fried_egg.jpg'},
  {t:'سوسیس تخم مرغ', en:'Egg Sausage', c:'breakfast', p:'55000', img:'images/egg_sausage.jpg'},
  {t:'خوراک لوبیا', en:'Bean Dish', c:'breakfast', p:'50000', img:'images/bean_dish.jpg'},
  {t:'خوراک عدسی', en:'Lentil Dish', c:'breakfast', p:'50000', img:'images/lentil_dish.jpg'},
  {t:'لوبیا تخم مرغ', en:'Bean & Egg', c:'breakfast', p:'50000', img:'images/bean_egg.jpg'},
  {t:'کره پنیر', en:'Butter & Cheese', c:'breakfast', p:'40000', img:'images/butter_cheese.jpg'},

  // کیک
  {t:'کیک هویج گردو', en:'Carrot Cake', c:'cake', p:'120000', img:'images/carrot_cake.jpg'},
  {t:'کیک شکلاتی', en:'Chocolate Cake', c:'cake', p:'130000', img:'images/chocolate_cake.jpg'}
];

const grid = document.getElementById('grid');
const cats = document.querySelectorAll('.cat');
const searchInput = document.getElementById('search');
const langToggle = document.getElementById('langToggle');

function render(list){
  grid.innerHTML = '';
  list.forEach(it=>{
    const card = document.createElement('article');
    card.className='card';
    card.dataset.cat=it.c;
    const img = document.createElement('img');
    img.className='thumb';
    img.src=it.img;
    img.alt=currentLang==='fa'?it.t:it.en;
    const meta = document.createElement('div');
    meta.className='meta';
    meta.innerHTML=`<div class="title">${currentLang==='fa'?it.t:it.en}</div>
                    <div class="price">${it.p} تومان</div>`;
    card.appendChild(img);
    card.appendChild(meta);
    grid.appendChild(card);
  });
}

function applyFilter(){
  const active = document.querySelector('.cat.active').dataset.cat;
  let filtered = items.filter(it=>(active==='all'||it.c===active));
  const keyword = searchInput.value.toLowerCase();
  if(keyword) filtered = filtered.filter(it=>
    it.t.toLowerCase().includes(keyword) || it.en.toLowerCase().includes(keyword)
  );
  render(filtered);
}

cats.forEach(el=>el.addEventListener('click',()=>{
  cats.forEach(x=>x.classList.remove('active'));
  el.classList.add('active');
  applyFilter();
}));

searchInput.addEventListener('input', applyFilter);

langToggle.addEventListener('click', ()=>{
  currentLang = currentLang==='fa'?'en':'fa';
  cats.forEach(cat=>{
    cat.textContent = currentLang==='fa'?cat.dataset.catFa:cat.dataset.en;
  });
  applyFilter();
});

// initial render
applyFilter();
