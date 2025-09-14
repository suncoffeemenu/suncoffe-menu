let currentLang = 'fa';

const items = [
  // نوشیدنی‌های سرد
  {t:'آیس موکاچینو', en:'Iced Mochaccino', c:'cold', p:'190,000', img:'images/1.jpg'},
  {t:'آیس کارامل ماکیاتو', en:'Iced Caramel Macchiato', c:'cold', p:'250,000', img:'images/1.jpg'},
  {t:'آیس لاته', en:'Iced Latte', c:'cold', p:'130,000', img:'images/1.jpg'},
  {t:'آیس آمریکانو', en:'Iced Americano', c:'cold', p:'95,000', img:'images/1.jpg'},
  {t:'موهیتو', en:'Mojito', c:'cold', p:'220,000', img:'images/mojito.jpg'},
  {t:'لیموناد', en:'Lemonade', c:'cold', p:'180,000', img:'images/lemonade.jpg'},
  {t:'کک اسپرسو', en:'Coke Espresso', c:'cold', p:'120,000', img:'images/1.jpg'},
  {t:'آفوگاتو', en:'Affogato', c:'cold', p:'180,000', img:'images/1.jpg'},

  // شیک
  {t:'شیک بادوم زمینی', en:'Peanut Shake', c:'shake', p:'240,000', img:'images/1.jpg'},
  {t:'شیک نوتلا', en:'Nutella Shake', c:'shake', p:'250,000', img:'images/1.jpg'},
  {t:'شیک شکلات', en:'Chocolate Shake', c:'shake', p:'230,000', img:'images/1.jpg'},
  {t:'شیک وانیل', en:'Vanilla Shake', c:'shake', p:'170,000', img:'images/1.jpg'},
  {t:'شیک نسکافه', en:'Nescafe Shake', c:'shake', p:'340,000', img:'images/1.jpg'},

  // قهوه
  {t:'اسپرسو', en:'Espresso', c:'coffee', p:'35,000', img:'images/espresso.jpg'},
  {t:'قهوه فرانسه', en:'French Coffee', c:'coffee', p:'90,000', img:'images/1.jpg'},
  {t:'قهوه ترک', en:'Turkish Coffee', c:'coffee', p:'80,000', img:'images/turkish_coffee.jpg'},
  {t:'کاپوچینو', en:'Cappuccino', c:'coffee', p:'110,000', img:'images/cappuccino.jpg'},
  {t:'آمریکانو', en:'Americano', c:'coffee', p:'85,000', img:'images/1.jpg'},
  {t:'کارامل ماکیاتو', en:'Caramel Macchiato', c:'coffee', p:'190,000', img:'images/1.jpg'},
  {t:'لاته', en:'Latte', c:'coffee', p:'95,000', img:'images/1.jpg'},
  {t:'موکاچینو', en:'Mochaccino', c:'coffee', p:'170,000', img:'images/1.jpg'},
  {t:'نسکافه', en:'Nescafe', c:'coffee', p:'90,000', img:'images/1.jpg'},
  {t:'شیرنسکافه', en:'Milk Nescafe', c:'coffee', p:'140,000', img:'images/1.jpg'},
  {t:'شکلات داغ', en:'Hot Chocolate', c:'coffee', p:'90,000', img:'images/1.jpg'},
  {t:'شیر شکلات', en:'Milk Chocolate', c:'coffee', p:'140,000', img:'images/1.jpg'},
  {t:'ماسالا با شیر', en:'Masala Milk', c:'coffee', p:'140,000', img:'images/1.jpg'},
  {t:'دالگونا', en:'Dalgona', c:'coffee', p:'330,000', img:'images/1.jpg'},
  {t:'قهوه نیویورکی', en:'New York Coffee', c:'coffee', p:'290,000', img:'images/1.jpg'},
  {t:'کوبانو', en:'Cubano', c:'coffee', p:'170,000', img:'images/1.jpg'},

  // دمنوش و چای
  {t:'لاغری', en:'Slimming Tea', c:'tea', p:'100,000', img:'images/1.jpg'},
  {t:'بهار نارنج', en:'Orange Blossom Tea', c:'tea', p:'90,000', img:'images/1.jpg'},
  {t:'آرامبخش', en:'Relaxing Tea', c:'tea', p:'220,000', img:'images/1.jpg'},
  {t:'گل گاوزبان', en:'Borage Tea', c:'tea', p:'90,000', img:'images/1.jpg'},
  {t:'تندرستی', en:'Health Tea', c:'tea', p:'150,000', img:'images/1.jpg'},
  {t:'نشاط آور', en:'Refreshing Tea', c:'tea', p:'210,000', img:'images/1.jpg'},
  {t:'چای سبز', en:'Green Tea', c:'tea', p:'50,000', img:'images/1.jpg'},
  {t:'چای سرخ', en:'Red Tea', c:'tea', p:'50,000', img:'images/1.jpg'},
  {t:'چای سیاه', en:'Black Tea', c:'tea', p:'50,000', img:'images/1.jpg'},
  {t:'چای کرک', en:'Karak Tea', c:'tea', p:'140,000', img:'images/1.jpg'},

  // غذا
  {t:'پاستا مرغ آلفردو', en:'Chicken Alfredo Pasta', c:'food', p:'340,000', img:'images/chicken_alfredo.jpg'},
  {t:'اسنک مرغ', en:'Chicken Snack', c:'food', p:'150,000', img:'images/chicken_snack.jpg'},
  {t:'اسنک گوشت', en:'Beef Snack', c:'food', p:'180,000', img:'images/1.jpg'},
  {t:'نان سیر', en:'Garlic Bread', c:'food', p:'90,000', img:'images/1.jpg'},
  {t:'سیب زمینی سرخ کرده', en:'French Fries', c:'food', p:'140,000', img:'images/1.jpg'},
  {t:'سیب زمینی سرخ کرده با پنیر', en:'Cheese Fries', c:'food', p:'180,000', img:'images/cheese_fries.jpg'},
  {t:'سیب زمینی سرخ کرده با سس قارچ و خامه', en:'Mushroom Cream Fries', c:'food', p:'250,000', img:'images/1.jpg'},

  // صبحانه
  {t:'صبحانه ویژه کافه سان', en:'Special Breakfast', c:'breakfast', p:'330,000', img:'images/1.jpg'},
  {t:'املت مکزیکی', en:'Mexican Omelette', c:'breakfast', p:'270,000', img:'images/1.jpg'},
  {t:'املت', en:'Omelette', c:'breakfast', p:'110,000', img:'images/1.jpg'},
  {t:'نیمرو', en:'Fried Egg', c:'breakfast', p:'70,000', img:'images/1.jpg'},
  {t:'سوسیس تخم مرغ', en:'Egg Sausage', c:'breakfast', p:'160,000', img:'images/1.jpg'},
  {t:'خوراک لوبیا', en:'Bean Dish', c:'breakfast', p:'150,000', img:'images/1.jpg'},
  {t:'خوراک عدسی', en:'Lentil Dish', c:'breakfast', p:'140,000', img:'images/1.jpg'},
  {t:'لوبیا تخم مرغ', en:'Bean & Egg', c:'breakfast', p:'230,000', img:'images/1.jpg'},
  {t:'کره پنیر', en:'Butter & Cheese', c:'breakfast', p:'90,000', img:'images/1.jpg'},

  // کیک
  {t:'کیک هویج گردو', en:'Carrot Cake', c:'cake', p:'80,000', img:'images/1.jpg'},
  {t:'کیک شکلاتی', en:'Chocolate Cake', c:'cake', p:'90,000', img:'images/1.jpg'}
];

const catLogos = {
  all: 'images/logo-all.png',
  cold: 'images/logo-cold.png',
  shake: 'images/logo-shake.png',
  coffee: 'images/logo-coffee.png',
  tea: 'images/logo-tea.png',
  food: 'images/logo-food.png',
  breakfast: 'images/logo-breakfast.png',
  cake: 'images/logo-cake.png'
};

const grid = document.getElementById('grid');
const cats = document.querySelectorAll('.cat');
const searchInput = document.getElementById('search');
const langToggle = document.getElementById('langToggle');

// اضافه کردن لوگو فقط یک بار
cats.forEach(cat => {
  if (!cat.querySelector('img')) {
    const catName = cat.dataset.cat;
    const logo = document.createElement('img');
    logo.src = catLogos[catName];
    logo.alt = 'Logo';
    logo.style.width = '40px';
    logo.style.height = '40px';
    logo.style.objectFit = 'contain';
    logo.style.marginBottom = '6px';
    cat.prepend(logo);
  }
});

// نمایش کارت‌ها
function render(list){
  grid.innerHTML = '';
  list.forEach((it, index)=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.cat = it.c;

    const img = document.createElement('img');
    img.className = 'thumb';
    img.src = it.img;
    img.alt = currentLang==='fa'?it.t:it.en;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<div class="title">${currentLang==='fa'?it.t:it.en}</div>
                      <div class="price">${it.p} T</div>`;

    card.appendChild(img);
    card.appendChild(meta);
    grid.appendChild(card);

    // hover
    card.addEventListener('mouseenter', ()=> card.classList.add('hovered'));
    card.addEventListener('mouseleave', ()=> card.classList.remove('hovered'));

    // animation ظاهر شدن با delay ساده
    setTimeout(() => card.classList.add('show'), index * 50);
  });
}


// اعمال فیلتر
function applyFilter(){
  const active = document.querySelector('.cat.active').dataset.cat;
  let filtered = items.filter(it=>(active==='all' || it.c === active));
  const keyword = searchInput.value.toLowerCase();
  if(keyword) {
    filtered = filtered.filter(it =>
      it.t.toLowerCase().includes(keyword) || it.en.toLowerCase().includes(keyword)
    );
  }
  render(filtered);
}

// تغییر دسته فعال
cats.forEach(el=>{
  el.addEventListener('click', ()=>{
    cats.forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    applyFilter();
  });
});

// جستجو
searchInput.addEventListener('input', applyFilter);

// تغییر زبان بدون تکرار لوگو
langToggle.addEventListener('click', ()=>{
  currentLang = currentLang==='fa' ? 'en' : 'fa';
  cats.forEach(cat=>{
    const text = cat.querySelector('.cat-text');
    text.textContent = currentLang==='fa' ? cat.dataset.catFa : cat.dataset.en;
  });
  applyFilter();
});

// رندر اولیه
applyFilter();
