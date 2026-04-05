import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

const slots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
const busySlots = ['10:00', '14:00', '15:00']

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
    <div className="demo-page theme-carwash">
      <Link to="/" className="demo-back">← WEB CAN</Link>

      <div className="demo-banner">
        ✨ Это демо-сайт — пример работы WEB CAN для автомоек
        <Link to="/#niches">Заказать такой же</Link>
      </div>

      <nav className="demo-nav">
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">🚿 AquaShine</div>
          <div className="demo-nav-links">
            <a href="#services">Услуги</a>
            <a href="#booking">Запись</a>
            <a href="#prices">Цены</a>
            <a href="#reviews">Отзывы</a>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Чистота вашего авто — наша забота</h1>
          <p>Профессиональная автомойка с онлайн-записью. Экспресс-мойка за 15 минут, полная мойка с детейлингом и защитными покрытиями.</p>
          <div className="demo-hero-buttons">
            <a href="#booking" className="demo-btn demo-btn-primary">Записаться онлайн</a>
            <a href="#prices" className="demo-btn demo-btn-secondary">Смотреть цены</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">12K+</div><div className="demo-stat-label">Довольных клиентов</div></div>
          <div><div className="demo-stat-value">15</div><div className="demo-stat-label">Минут экспресс-мойка</div></div>
          <div><div className="demo-stat-value">4.9</div><div className="demo-stat-label">Рейтинг на Google</div></div>
          <div><div className="demo-stat-value">7</div><div className="demo-stat-label">Дней в неделю</div></div>
        </div>
      </div>

      <section id="services" className="demo-section">
        <h2>Наши услуги</h2>
        <p>Широкий спектр услуг по уходу за вашим авто</p>
        <div className="demo-cards">
          <div className="demo-card"><div className="demo-card-icon">💧</div><h3>Экспресс-мойка</h3><p>Быстрая бесконтактная мойка кузова. Идеально для тех, кто спешит — всего 15 минут.</p></div>
          <div className="demo-card"><div className="demo-card-icon">🧽</div><h3>Комплексная мойка</h3><p>Мойка кузова, чернение шин, протирка салона, коврики, стёкла. Полный пакет за 40 минут.</p></div>
          <div className="demo-card"><div className="demo-card-icon">✨</div><h3>Премиум-уход</h3><p>Полный детейлинг: полировка, нанокерамика, химчистка салона, защита кузова.</p></div>
          <div className="demo-card"><div className="demo-card-icon">🛡️</div><h3>Защитные покрытия</h3><p>Жидкое стекло, керамика, антидождь. Защита кузова на 6-12 месяцев.</p></div>
          <div className="demo-card"><div className="demo-card-icon">🧹</div><h3>Химчистка салона</h3><p>Глубокая очистка сидений, потолка, ковров. Удаление пятен и запахов.</p></div>
          <div className="demo-card"><div className="demo-card-icon">🏷️</div><h3>Абонементы</h3><p>Выгодные абонементы на 5, 10 и 20 моек со скидкой до 30%.</p></div>
        </div>
      </section>

      <section id="booking" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Онлайн-запись</h2>
          <p>Выберите удобное время и запишитесь прямо сейчас</p>

          {booked ? (
            <div className="demo-success-box">
              <div className="demo-success-icon">✅</div>
              <h3>Вы записаны!</h3>
              <p className="demo-success-detail">Время: {selectedSlot} · Мы отправим SMS-напоминание</p>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleBook}>
              <div className="demo-form-row">
                <input className="demo-input" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} required />
                <input className="demo-input" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} required />
              </div>
              <select className="demo-select" value={carType} onChange={e => setCarType(e.target.value)}>
                <option value="sedan">Седан / Хэтчбек</option>
                <option value="suv">Кроссовер / SUV</option>
                <option value="minivan">Минивэн / Большой SUV</option>
              </select>
              <div>
                <p className="demo-text-muted" style={{ marginBottom: '12px' }}>Доступное время на сегодня:</p>
                <div className="demo-slots">
                  {slots.map(s => (
                    <div
                      key={s}
                      className={`demo-slot ${busySlots.includes(s) ? 'disabled' : ''} ${selectedSlot === s ? 'active' : ''}`}
                      onClick={() => !busySlots.includes(s) && setSelectedSlot(s)}
                    >{s}</div>
                  ))}
                </div>
              </div>
              <button className="demo-btn demo-btn-primary" type="submit" disabled={!selectedSlot}>
                Записаться{selectedSlot ? ` на ${selectedSlot}` : ''}
              </button>
            </form>
          )}
        </div>
      </section>

      <section id="prices" className="demo-section">
        <h2>Цены</h2>
        <p>Прозрачное ценообразование без скрытых доплат</p>
        <div className="demo-prices">
          <div className="demo-price-card">
            <h3>Экспресс</h3>
            <div className="demo-price-value">500₽<span> / мойка</span></div>
            <ul className="demo-price-features">
              <li>Бесконтактная мойка</li>
              <li>Сушка кузова</li>
              <li>15 минут</li>
            </ul>
            <button className="demo-btn demo-btn-secondary" style={{ width: '100%' }}>Выбрать</button>
          </div>
          <div className="demo-price-card featured">
            <h3>Комплекс</h3>
            <div className="demo-price-value">1200₽<span> / мойка</span></div>
            <ul className="demo-price-features">
              <li>Мойка кузова</li>
              <li>Чернение шин</li>
              <li>Пылесос салона</li>
              <li>Протирка панелей</li>
              <li>40 минут</li>
            </ul>
            <button className="demo-btn demo-btn-primary" style={{ width: '100%' }}>Выбрать</button>
          </div>
          <div className="demo-price-card">
            <h3>Премиум</h3>
            <div className="demo-price-value">3500₽<span> / услуга</span></div>
            <ul className="demo-price-features">
              <li>Полная мойка</li>
              <li>Полировка кузова</li>
              <li>Химчистка салона</li>
              <li>Нанопокрытие</li>
              <li>2-3 часа</li>
            </ul>
            <button className="demo-btn demo-btn-secondary" style={{ width: '100%' }}>Выбрать</button>
          </div>
        </div>
      </section>

      <section id="reviews" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Отзывы клиентов</h2>
          <p>Нам доверяют тысячи автовладельцев</p>
          <div className="demo-reviews">
            <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Моюсь здесь уже год. Записываюсь онлайн — прихожу, машина готова за 15 минут. Супер!"</p><div className="demo-review-author">— Алексей М.</div></div>
            <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Брал абонемент на 10 моек — очень выгодно. Качество всегда на высоте."</p><div className="demo-review-author">— Ирина С.</div></div>
            <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Делали полную химчистку салона — как новая машина! Рекомендую."</p><div className="demo-review-author">— Дмитрий П.</div></div>
            <div className="demo-review"><div className="demo-review-stars">★★★★☆</div><p>"Хорошая мойка, приятный персонал. Единственное — в выходные бывает очередь."</p><div className="demo-review-author">— Марина К.</div></div>
          </div>
        </div>
      </section>

      <section className="demo-cta">
        <h2>Запишитесь на мойку прямо сейчас</h2>
        <p>Первая мойка со скидкой 20% для новых клиентов</p>
        <a href="#booking" className="demo-btn demo-btn-accent">Записаться</a>
      </section>

      <footer className="demo-footer">
        <p>© 2026 AquaShine — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
