import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

const slots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
const busySlots = ['09:00', '12:00', '13:00', '17:00']

export default function TireServiceDemo() {
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [wheelSize, setWheelSize] = useState('R16')
  const [serviceType, setServiceType] = useState('swap')
  const [booked, setBooked] = useState(false)

  const prices = {
    swap: { R14: 1600, R15: 1800, R16: 2000, R17: 2400, R18: 2800, R19: 3200, R20: 3600 },
    balance: { R14: 400, R15: 500, R16: 600, R17: 700, R18: 800, R19: 900, R20: 1000 },
    repair: { R14: 500, R15: 500, R16: 600, R17: 600, R18: 700, R19: 800, R20: 900 },
  }

  const currentPrice = prices[serviceType]?.[wheelSize] || 0

  return (
    <div className="demo-page theme-tireservice">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для шиномонтажей<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="demo-nav">
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">🔩 ШинСервис</div>
          <div className="demo-nav-links">
            <a href="#booking">Запись</a>
            <a href="#prices">Цены</a>
            <a href="#promo">Акции</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Шиномонтаж без очереди</h1>
          <p>Онлайн-запись на удобное время. Сезонная замена, балансировка, ремонт и хранение шин.</p>
          <div className="demo-hero-buttons">
            <a href="#booking" className="demo-btn demo-btn-primary">Записаться</a>
            <a href="#prices" className="demo-btn demo-btn-secondary">Цены</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">50+</div><div className="demo-stat-label">Авто в день</div></div>
          <div><div className="demo-stat-value">20</div><div className="demo-stat-label">Минут — среднее время</div></div>
          <div><div className="demo-stat-value">4.8</div><div className="demo-stat-label">Рейтинг</div></div>
          <div><div className="demo-stat-value">0</div><div className="demo-stat-label">Скрытых доплат</div></div>
        </div>
      </div>

      <section id="booking" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Онлайн-запись</h2>
          <p>Выберите услугу, размер колёс и время</p>

          {booked ? (
            <div className="demo-success-box">
              <div className="demo-success-icon">✅</div>
              <h3>Запись подтверждена!</h3>
              <p className="demo-success-detail">Время: {selectedSlot} · Стоимость: {currentPrice} ₽</p>
            </div>
          ) : (
            <form className="demo-form" onSubmit={e => { e.preventDefault(); if (selectedSlot) { setBooked(true); setTimeout(() => setBooked(false), 4000) } }}>
              <div className="demo-form-row">
                <div>
                  <label className="demo-label">Услуга</label>
                  <select className="demo-select" value={serviceType} onChange={e => setServiceType(e.target.value)}>
                    <option value="swap">Сезонная замена (4 колеса)</option>
                    <option value="balance">Балансировка (4 колеса)</option>
                    <option value="repair">Ремонт прокола</option>
                  </select>
                </div>
                <div>
                  <label className="demo-label">Размер колёс</label>
                  <select className="demo-select" value={wheelSize} onChange={e => setWheelSize(e.target.value)}>
                    {Object.keys(prices.swap).map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="demo-highlight-box">
                <span className="demo-text-muted">Предварительная стоимость: </span>
                <span className="demo-text-accent" style={{ fontSize: '20px' }}>{currentPrice} ₽</span>
              </div>

              <div>
                <p className="demo-text-muted" style={{ marginBottom: '12px' }}>Свободное время:</p>
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

              <div className="demo-form-row">
                <input className="demo-input" placeholder="Имя" required />
                <input className="demo-input" placeholder="Телефон" required />
              </div>
              <button className="demo-btn demo-btn-primary" type="submit" disabled={!selectedSlot}>
                Записаться{selectedSlot ? ` на ${selectedSlot}` : ''}
              </button>
            </form>
          )}
        </div>
      </section>

      <section id="prices" className="demo-section">
        <h2>Полный прайс-лист</h2>
        <p>Цены указаны за комплект (4 колеса)</p>
        <div className="demo-table-wrap">
          <table className="demo-table">
            <thead><tr><th>Размер</th><th>Сезонная замена</th><th>Балансировка</th><th>Ремонт прокола</th></tr></thead>
            <tbody>
              {Object.keys(prices.swap).map(size => (
                <tr key={size}><td>{size}</td><td>{prices.swap[size]} ₽</td><td>{prices.balance[size]} ₽</td><td>{prices.repair[size]} ₽</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="promo" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Акции и бонусы</h2>
          <p>Выгодные предложения для наших клиентов</p>
          <div className="demo-cards">
            <div className="demo-card"><div className="demo-card-icon">🏷️</div><h3>Хранение шин</h3><p>Бесплатное хранение шин на весь сезон при замене у нас. Тёплый склад, маркировка.</p></div>
            <div className="demo-card"><div className="demo-card-icon">👥</div><h3>Приведи друга</h3><p>Скидка 15% вам и другу при первом визите по рекомендации.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🔄</div><h3>Абонемент</h3><p>Абонемент на год — 2 сезонные замены + балансировка со скидкой 25%.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="demo-cta">
        <h2>Не ждите в очереди</h2>
        <p>Запишитесь онлайн и приезжайте к назначенному времени</p>
        <a href="#booking" className="demo-btn demo-btn-accent">Записаться</a>
      </section>

      <footer className="demo-footer">
        <p>© 2026 ШинСервис — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
