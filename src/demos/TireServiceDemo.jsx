import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './tireservice.css'

const slots = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00']
const busySlots = ['09:00','12:00','13:00','17:00']

const prices = {
  swap:    { R14: 50, R15: 55, R16: 60, R17: 75, R18: 85, R19: 100, R20: 110 },
  balance: { R14: 12, R15: 15, R16: 18, R17: 22, R18: 25, R19: 28, R20: 30 },
  repair:  { R14: 15, R15: 15, R16: 18, R17: 18, R18: 22, R19: 25, R20: 28 },
}

const sizes = ['R14','R15','R16','R17','R18','R19','R20']

export default function TireServiceDemo() {
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [wheelSize, setWheelSize] = useState('R16')
  const [serviceType, setServiceType] = useState('swap')
  const [booked, setBooked] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const currentPrice = prices[serviceType]?.[wheelSize] || 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedSlot && name && phone) {
      setBooked(true)
    }
  }

  return (
    <div className="ts">
      <Link to="/" className="demo-back">← WEB CAN</Link>

      {/* NAV */}
      <nav className="ts-nav">
        <div className="ts-nav-brand">🏎️ ШинСервис</div>
        <div className="ts-nav-links">
          <a href="#booking">Запись</a>
          <a href="#prices">Цены</a>
          <a href="#promos">Акции</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="ts-hero">
        <div className="ts-hero-content">
          <h1>Профессиональный<br /><span>шиномонтаж</span></h1>
          <p>Быстро. Точно. Без очередей. Запишитесь онлайн за 30 секунд.</p>
          <a href="#booking" className="ts-hero-btn">Записаться сейчас</a>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="ts-stats">
        <div className="ts-stat">
          <div className="ts-stat-value">50+</div>
          <div className="ts-stat-label">авто в день</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat-value">20 мин</div>
          <div className="ts-stat-label">среднее время</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat-value">4.8</div>
          <div className="ts-stat-label">рейтинг</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat-value">0</div>
          <div className="ts-stat-label">скрытых доплат</div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="ts-divider" />

      {/* BOOKING */}
      <section className="ts-booking" id="booking">
        <div className="ts-booking-inner">
          <h2 className="ts-section-title">Онлайн-запись</h2>
          <p className="ts-section-subtitle">Выберите услугу, размер и удобное время</p>

          {!booked ? (
            <form onSubmit={handleSubmit}>
              <div className="ts-form-row">
                <div className="ts-form-group">
                  <label>Услуга</label>
                  <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                    <option value="swap">Сезонная замена (4 колеса)</option>
                    <option value="balance">Балансировка (4 колеса)</option>
                    <option value="repair">Ремонт прокола</option>
                  </select>
                </div>
                <div className="ts-form-group">
                  <label>Размер колёс</label>
                  <select value={wheelSize} onChange={(e) => setWheelSize(e.target.value)}>
                    {sizes.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="ts-price-display">
                <span className="ts-price-label">Стоимость:</span>
                <span className="ts-price-value">{currentPrice.toLocaleString()}</span>
                <span className="ts-price-currency">BYN</span>
              </div>

              <div className="ts-slots-title">Выберите время</div>
              <div className="ts-slots-grid">
                {slots.map(slot => {
                  const isBusy = busySlots.includes(slot)
                  const isActive = selectedSlot === slot
                  return (
                    <button
                      type="button"
                      key={slot}
                      className={`ts-slot${isActive ? ' ts-slot--active' : ''}${isBusy ? ' ts-slot--busy' : ''}`}
                      disabled={isBusy}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </button>
                  )
                })}
              </div>

              <div className="ts-form-row">
                <div className="ts-form-group">
                  <label>Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="ts-form-group">
                  <label>Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="ts-submit-btn"
                disabled={!selectedSlot || !name || !phone}
              >
                Записаться — {currentPrice.toLocaleString()} BYN
              </button>
            </form>
          ) : (
            <div className="ts-success">
              <div className="ts-success-icon">🏁</div>
              <h3>Вы записаны!</h3>
              <p>Услуга: <span className="ts-success-highlight">
                {serviceType === 'swap' ? 'Сезонная замена' : serviceType === 'balance' ? 'Балансировка' : 'Ремонт прокола'}
              </span></p>
              <p>Размер: <span className="ts-success-highlight">{wheelSize}</span></p>
              <p>Время: <span className="ts-success-highlight">{selectedSlot}</span></p>
              <p>Стоимость: <span className="ts-success-highlight">{currentPrice.toLocaleString()} BYN</span></p>
            </div>
          )}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="ts-divider" />

      {/* PRICE TABLE */}
      <section className="ts-section" id="prices">
        <h2 className="ts-section-title">Полный прайс</h2>
        <p className="ts-section-subtitle">Цены указаны за комплект из 4 колёс</p>

        <div className="ts-table-wrap">
          <table className="ts-table">
            <thead>
              <tr>
                <th>Размер</th>
                <th>Сезонная замена</th>
                <th>Балансировка</th>
                <th>Ремонт прокола</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map(size => (
                <tr key={size}>
                  <td>{size}</td>
                  <td>{prices.swap[size].toLocaleString()} BYN</td>
                  <td>{prices.balance[size].toLocaleString()} BYN</td>
                  <td>{prices.repair[size].toLocaleString()} BYN</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="ts-divider" />

      {/* PROMOS */}
      <section className="ts-section" id="promos">
        <h2 className="ts-section-title">Акции</h2>
        <p className="ts-section-subtitle">Выгодные предложения для наших клиентов</p>

        <div className="ts-promos">
          <div className="ts-promo">
            <div className="ts-promo-icon">🏠</div>
            <h3>Хранение шин</h3>
            <p>Сезонное хранение комплекта шин в тёплом сухом складе. Бережная маркировка и учёт каждого комплекта.</p>
            <span className="ts-promo-badge">от 60 BYN / сезон</span>
          </div>
          <div className="ts-promo">
            <div className="ts-promo-icon">🤝</div>
            <h3>Приведи друга</h3>
            <p>Приведите друга и получите скидку 15% на следующий визит. Ваш друг тоже получит скидку 10%.</p>
            <span className="ts-promo-badge">–15% вам, –10% другу</span>
          </div>
          <div className="ts-promo">
            <div className="ts-promo-icon">🎫</div>
            <h3>Абонемент</h3>
            <p>Годовой абонемент на 4 визита: две сезонные замены + две балансировки со скидкой 20%.</p>
            <span className="ts-promo-badge">экономия до 70 BYN</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ts-cta">
        <h2>Не ждите в очереди</h2>
        <p>Запишитесь онлайн и приезжайте к назначенному времени</p>
        <a href="#booking" className="ts-cta-btn">Записаться</a>
      </section>

      {/* FOOTER */}
      <footer className="ts-footer">
        © 2026 ШинСервис — Демо-сайт от WEB CAN
      </footer>

      {/* BANNER */}
      <div className="demo-banner">
        ✨ Это демо-сайт — пример работы WEB CAN для шиномонтажей
        <Link to="/#niches">Заказать такой же</Link>
      </div>
    </div>
  )
}
