import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './carwash.css'

const slots = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']
const busySlots = ['10:00','14:00','15:00']

export default function CarWashDemo() {
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [carType, setCarType] = useState('sedan')
  const [booked, setBooked] = useState(false)

  const handleBook = (e) => {
    e.preventDefault()
    if (selectedSlot && name && phone) {
      setBooked(true)
      setTimeout(() => setBooked(false), 4000)
    }
  }

  return (
    <div className="cw">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для автомоек <Link to="/#niches">Заказать такой же</Link></div>

      <nav className="cw-nav">
        <div className="cw-nav-inner">
          <div className="cw-nav-brand">💧 AquaShine</div>
          <div className="cw-nav-links">
            <a href="#services">Услуги</a>
            <a href="#booking">Запись</a>
            <a href="#prices">Цены</a>
            <a href="#reviews">Отзывы</a>
          </div>
        </div>
      </nav>

      <section className="cw-hero">
        <h1>Чистота вашего авто —<br/>наша забота</h1>
        <p>Профессиональная автомойка с онлайн-записью. Экспресс за 15 минут, комплекс с детейлингом и защитой.</p>
        <div className="cw-hero-btns">
          <a href="#booking" className="cw-btn cw-btn-primary">Записаться онлайн</a>
          <a href="#prices" className="cw-btn cw-btn-outline">Смотреть цены</a>
        </div>
      </section>

      <div className="cw-stats">
        <div className="cw-stat"><div className="cw-stat-val">12K+</div><div className="cw-stat-lbl">Довольных клиентов</div></div>
        <div className="cw-stat"><div className="cw-stat-val">15</div><div className="cw-stat-lbl">Минут экспресс</div></div>
        <div className="cw-stat"><div className="cw-stat-val">4.9</div><div className="cw-stat-lbl">Рейтинг Google</div></div>
        <div className="cw-stat"><div className="cw-stat-val">7/7</div><div className="cw-stat-lbl">Дней в неделю</div></div>
      </div>

      <section id="services" className="cw-section">
        <h2>Наши услуги</h2>
        <p>Широкий спектр услуг по уходу за вашим авто</p>
        <div className="cw-services">
          <div className="cw-service"><div className="cw-service-icon">💧</div><h3>Экспресс-мойка</h3><p>Быстрая бесконтактная мойка кузова. Идеально для тех, кто спешит — всего 15 минут.</p></div>
          <div className="cw-service"><div className="cw-service-icon">🧽</div><h3>Комплексная мойка</h3><p>Мойка кузова, чернение шин, протирка салона, коврики. Полный пакет за 40 минут.</p></div>
          <div className="cw-service"><div className="cw-service-icon">✨</div><h3>Премиум-уход</h3><p>Полный детейлинг: полировка, нанокерамика, химчистка салона, защита кузова.</p></div>
          <div className="cw-service"><div className="cw-service-icon">🛡️</div><h3>Защитные покрытия</h3><p>Жидкое стекло, керамика, антидождь. Защита на 6-12 месяцев.</p></div>
          <div className="cw-service"><div className="cw-service-icon">🧹</div><h3>Химчистка салона</h3><p>Глубокая очистка сидений, потолка, ковров. Удаление пятен и запахов.</p></div>
          <div className="cw-service"><div className="cw-service-icon">🏷️</div><h3>Абонементы</h3><p>Выгодные абонементы на 5, 10 и 20 моек со скидкой до 30%.</p></div>
        </div>
      </section>

      <section id="booking" className="cw-section-alt">
        <div className="cw-s-inner">
          <h2>Онлайн-запись</h2>
          <p>Выберите удобное время и запишитесь прямо сейчас</p>
          <div className="cw-booking">
            {booked ? (
              <div className="cw-success">
                <div className="cw-success-icon">✅</div>
                <h3>Вы записаны!</h3>
                <p>Время: {selectedSlot} · Мы отправим SMS-напоминание</p>
              </div>
            ) : (
              <form className="cw-form" onSubmit={handleBook}>
                <div className="cw-form-row">
                  <input className="cw-input" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} required />
                  <input className="cw-input" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} required />
                </div>
                <select className="cw-select" value={carType} onChange={e => setCarType(e.target.value)}>
                  <option value="sedan">Седан / Хэтчбек</option>
                  <option value="suv">Кроссовер / SUV</option>
                  <option value="minivan">Минивэн / Большой SUV</option>
                </select>
                <div>
                  <p className="cw-slots-label">Доступное время на сегодня:</p>
                  <div className="cw-slots">
                    {slots.map(s => (
                      <div key={s} className={`cw-slot ${busySlots.includes(s)?'disabled':''} ${selectedSlot===s?'active':''}`}
                        onClick={() => !busySlots.includes(s) && setSelectedSlot(s)}>{s}</div>
                    ))}
                  </div>
                </div>
                <button className="cw-btn cw-btn-primary" type="submit" disabled={!selectedSlot} style={{width:'100%'}}>
                  Записаться{selectedSlot ? ` на ${selectedSlot}` : ''}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="prices" className="cw-section">
        <h2>Цены</h2>
        <p>Прозрачное ценообразование без скрытых доплат</p>
        <div className="cw-prices">
          <div className="cw-price">
            <h3>Экспресс</h3>
            <div className="cw-price-val">15 BYN<span> / мойка</span></div>
            <ul><li>Бесконтактная мойка</li><li>Сушка кузова</li><li>15 минут</li></ul>
            <button className="cw-btn cw-btn-outline" style={{width:'100%'}}>Выбрать</button>
          </div>
          <div className="cw-price featured">
            <h3>Комплекс</h3>
            <div className="cw-price-val">35 BYN<span> / мойка</span></div>
            <ul><li>Мойка кузова</li><li>Чернение шин</li><li>Пылесос салона</li><li>Протирка панелей</li><li>40 минут</li></ul>
            <button className="cw-btn cw-btn-primary" style={{width:'100%'}}>Выбрать</button>
          </div>
          <div className="cw-price">
            <h3>Премиум</h3>
            <div className="cw-price-val">100 BYN<span> / услуга</span></div>
            <ul><li>Полная мойка</li><li>Полировка кузова</li><li>Химчистка салона</li><li>Нанопокрытие</li><li>2-3 часа</li></ul>
            <button className="cw-btn cw-btn-outline" style={{width:'100%'}}>Выбрать</button>
          </div>
        </div>
      </section>

      <section id="reviews" className="cw-section-alt">
        <div className="cw-s-inner">
          <h2>Отзывы клиентов</h2>
          <p>Нам доверяют тысячи автовладельцев</p>
          <div className="cw-reviews">
            <div className="cw-review"><div className="cw-review-stars">★★★★★</div><p>"Моюсь здесь уже год. Записываюсь онлайн — прихожу, машина готова за 15 минут. Супер!"</p><div className="cw-review-author">— Алексей М.</div></div>
            <div className="cw-review"><div className="cw-review-stars">★★★★★</div><p>"Брал абонемент на 10 моек — очень выгодно. Качество всегда на высоте."</p><div className="cw-review-author">— Ирина С.</div></div>
            <div className="cw-review"><div className="cw-review-stars">★★★★★</div><p>"Делали полную химчистку салона — как новая машина! Рекомендую."</p><div className="cw-review-author">— Дмитрий П.</div></div>
            <div className="cw-review"><div className="cw-review-stars">★★★★☆</div><p>"Хорошая мойка, приятный персонал. Единственное — в выходные бывает очередь."</p><div className="cw-review-author">— Марина К.</div></div>
          </div>
        </div>
      </section>

      <section className="cw-cta">
        <h2>Запишитесь на мойку прямо сейчас</h2>
        <p>Первая мойка со скидкой 20% для новых клиентов</p>
        <a href="#booking" className="cw-btn cw-btn-white">Записаться</a>
      </section>

      <footer className="cw-footer">
        <p>© 2026 AquaShine — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
