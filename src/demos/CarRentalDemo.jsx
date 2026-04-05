import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

const fleet = [
  { id: 1, name: 'Hyundai Solaris', cat: 'Эконом', price: 2500, img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80', seats: 5, transmission: 'АКПП' },
  { id: 2, name: 'Kia Rio', cat: 'Эконом', price: 2700, img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80', seats: 5, transmission: 'АКПП' },
  { id: 3, name: 'Toyota Camry', cat: 'Комфорт', price: 4500, img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&q=80', seats: 5, transmission: 'АКПП' },
  { id: 4, name: 'Mercedes E-Class', cat: 'Бизнес', price: 8000, img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80', seats: 5, transmission: 'АКПП' },
  { id: 5, name: 'BMW X5', cat: 'Бизнес', price: 9500, img: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=500&q=80', seats: 5, transmission: 'АКПП' },
  { id: 6, name: 'Toyota RAV4', cat: 'Комфорт', price: 5000, img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80', seats: 5, transmission: 'АКПП' },
]

const categories = ['Все', 'Эконом', 'Комфорт', 'Бизнес']

function fmt(n) { return new Intl.NumberFormat('ru-RU').format(n) }

export default function CarRentalDemo() {
  const [cat, setCat] = useState('Все')
  const [days, setDays] = useState(3)
  const [selectedCar, setSelectedCar] = useState(null)
  const [booked, setBooked] = useState(false)

  const filtered = cat === 'Все' ? fleet : fleet.filter(c => c.cat === cat)

  const discount = days >= 14 ? 0.2 : days >= 7 ? 0.1 : days >= 3 ? 0.05 : 0
  const total = selectedCar ? Math.round(selectedCar.price * days * (1 - discount)) : 0

  const handleBook = (e) => {
    e.preventDefault()
    if (selectedCar) {
      setBooked(true)
      setTimeout(() => setBooked(false), 4000)
    }
  }

  return (
    <div className="demo-page">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для сервисов автопроката<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="demo-nav" style={{ background: 'rgba(15,23,42,0.95)' }}>
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">🚗 DriveRent</div>
          <div className="demo-nav-links">
            <a href="#fleet">Автопарк</a>
            <a href="#booking">Бронирование</a>
            <a href="#conditions">Условия</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Аренда авто без залога</h1>
          <p>Автопарк от эконома до бизнес-класса. Бронируйте онлайн, получайте авто за 15 минут. Скидки при аренде от 3 дней.</p>
          <div className="demo-hero-buttons">
            <a href="#fleet" className="demo-btn demo-btn-primary">Выбрать авто</a>
            <a href="#conditions" className="demo-btn demo-btn-secondary">Условия аренды</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">30+</div><div className="demo-stat-label">Авто в парке</div></div>
          <div><div className="demo-stat-value">15</div><div className="demo-stat-label">Минут — выдача авто</div></div>
          <div><div className="demo-stat-value">0 ₽</div><div className="demo-stat-label">Залог</div></div>
          <div><div className="demo-stat-value">24/7</div><div className="demo-stat-label">Поддержка</div></div>
        </div>
      </div>

      <section id="fleet" className="demo-section">
        <h2>Автопарк</h2>
        <p>Выберите класс авто</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} className={`demo-btn ${cat === c ? 'demo-btn-primary' : 'demo-btn-secondary'}`} style={{ padding: '8px 20px', fontSize: '13px' }} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="demo-catalog">
          {filtered.map(car => (
            <div className="demo-catalog-item" key={car.id} onClick={() => { setSelectedCar(car); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ cursor: 'pointer', borderColor: selectedCar?.id === car.id ? '#3b82f6' : undefined }}>
              <img className="demo-catalog-img" src={car.img} alt={car.name} />
              <div className="demo-catalog-info">
                <h4>{car.name}</h4>
                <p>{car.cat} · {car.seats} мест · {car.transmission}</p>
                <div className="demo-catalog-price">{fmt(car.price)} ₽<span style={{ fontSize: '13px', color: '#64748b', fontWeight: 400 }}> / сутки</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Бронирование</h2>
          <p>{selectedCar ? `Вы выбрали: ${selectedCar.name}` : 'Выберите авто из каталога выше'}</p>

          {booked ? (
            <div style={{ padding: '32px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', textAlign: 'center', maxWidth: '500px' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
              <h3>Бронь подтверждена!</h3>
              <p style={{ color: '#94a3b8', marginTop: '8px' }}>{selectedCar?.name} · {days} дней · {fmt(total)} ₽</p>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleBook}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>Количество дней: {days}</label>
                <input type="range" min={1} max={30} value={days} onChange={e => setDays(Number(e.target.value))} style={{ width: '100%', accentColor: '#3b82f6' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b' }}>
                  <span>1 день</span>
                  <span>30 дней</span>
                </div>
              </div>

              {selectedCar && (
                <div style={{ padding: '20px', background: 'rgba(59,130,246,0.1)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <div><span style={{ color: '#94a3b8', fontSize: '13px' }}>Тариф:</span> <span style={{ fontWeight: 700 }}>{fmt(selectedCar.price)} ₽/день</span></div>
                    {discount > 0 && <div><span style={{ color: '#94a3b8', fontSize: '13px' }}>Скидка:</span> <span style={{ fontWeight: 700, color: '#10b981' }}>-{discount * 100}%</span></div>}
                    <div><span style={{ color: '#94a3b8', fontSize: '13px' }}>Итого:</span> <span style={{ fontWeight: 900, color: '#60a5fa', fontSize: '20px' }}>{fmt(total)} ₽</span></div>
                  </div>
                </div>
              )}

              <div className="demo-form-row">
                <input className="demo-input" placeholder="Имя" required />
                <input className="demo-input" placeholder="Телефон" required />
              </div>
              <div className="demo-form-row">
                <input className="demo-input" type="date" required />
                <input className="demo-input" placeholder="Водительское удостоверение" required />
              </div>
              <button className="demo-btn demo-btn-primary" type="submit" disabled={!selectedCar}>
                Забронировать{selectedCar ? ` · ${fmt(total)} ₽` : ''}
              </button>
            </form>
          )}
        </div>
      </section>

      <section id="conditions" className="demo-section">
        <h2>Условия аренды</h2>
        <p>Всё просто и прозрачно</p>
        <div className="demo-advantages">
          <div className="demo-advantage"><div className="demo-advantage-icon">📋</div><div><h4>Минимум документов</h4><p>Паспорт и водительское удостоверение — больше ничего не нужно</p></div></div>
          <div className="demo-advantage"><div className="demo-advantage-icon">💳</div><div><h4>Без залога</h4><p>Не блокируем деньги на карте. Оплата только за аренду</p></div></div>
          <div className="demo-advantage"><div className="demo-advantage-icon">📍</div><div><h4>Доставка авто</h4><p>Привезём авто в аэропорт, отель или по адресу — 500 ₽</p></div></div>
          <div className="demo-advantage"><div className="demo-advantage-icon">🛡️</div><div><h4>Полная страховка</h4><p>КАСКО + ОСАГО включены в стоимость. Ваша безопасность — наш приоритет</p></div></div>
          <div className="demo-advantage"><div className="demo-advantage-icon">⛽</div><div><h4>Полный бак</h4><p>Выдаём авто с полным баком — верните так же</p></div></div>
          <div className="demo-advantage"><div className="demo-advantage-icon">📞</div><div><h4>Поддержка 24/7</h4><p>Поломка, ДТП, вопросы — звоните в любое время</p></div></div>
        </div>

        <div style={{ marginTop: '32px' }}>
          <h3 style={{ marginBottom: '16px' }}>Скидки за длительную аренду</h3>
          <div className="demo-table-wrap">
            <table className="demo-table">
              <thead><tr><th>Период</th><th>Скидка</th></tr></thead>
              <tbody>
                <tr><td>1-2 дня</td><td>Без скидки</td></tr>
                <tr><td>3-6 дней</td><td><span style={{ color: '#10b981', fontWeight: 700 }}>5%</span></td></tr>
                <tr><td>7-13 дней</td><td><span style={{ color: '#10b981', fontWeight: 700 }}>10%</span></td></tr>
                <tr><td>14+ дней</td><td><span style={{ color: '#10b981', fontWeight: 700 }}>20%</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="demo-cta">
        <h2>Нужна машина прямо сейчас?</h2>
        <p>Позвоните или забронируйте онлайн — выдача за 15 минут</p>
        <a href="#fleet" className="demo-btn demo-btn-accent">Выбрать авто</a>
      </section>

      <footer className="demo-footer">
        <p>© 2026 DriveRent — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
