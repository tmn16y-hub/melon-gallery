const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
}

const photos = [
  {src:"1.jpeg", user:"Админ", time:"07.10 00:43"},
  {src:"2.jpeg", user:"Админ", time:"07.10 00:35"},
  {src:"3.jpeg", user:"Админ", time:"06.10 23:58"},
];

const feed = document.getElementById("feed");

function render(){
  if(!photos.length){
    feed.innerHTML = '<div class="empty">Пока фотографий нет</div>';
    return;
  }
  feed.innerHTML = photos.map((p,i)=>`
    <article class="card">
      <div class="photo-wrap">
        <img class="photo" src="${p.src}" alt="" loading="${i===0?'eager':'lazy'}"
             onclick="openPhoto('${p.src}')">
      </div>
      <div class="meta">
        <span class="user">${p.user}</span>
        <span class="time">${p.time}</span>
      </div>
    </article>
  `).join("");
}

function openPhoto(src){
  // Просто открываем изображение на весь экран в отдельной вкладке WebView.
  // Позже сюда можно добавить красивый fullscreen viewer.
  window.open(src, "_blank");
}

render();
