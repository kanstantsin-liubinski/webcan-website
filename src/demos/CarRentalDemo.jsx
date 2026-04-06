import { useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './carrental.css'

const fleet = [
  { id: 1, name: 'Kia Rio', cat: 'Эконом', price: 75, seats: 5, transmission: 'АКПП', fuel: 'Бензин', year: 2023 },
  { id: 2, name: 'Hyundai Solaris', cat: 'Эконом', price: 70, seats: 5, transmission: 'МКПП', fuel: 'Бензин', year: 2022 },
  { id: 3, name: 'Toyota Camry', cat: 'Комфорт', price: 135, seats: 5, transmission: 'АКПП', fuel: 'Бензин', year: 2024 },
  { id: 4, name: 'BMW 3 Series', cat: 'Бизнес', price: 210, seats: 5, transmission: 'АКПП', fuel: 'Бензин', year: 2024 },
  { id: 5, name: 'Mercedes V-Class', cat: 'Минивэн', price: 270, seats: 7, transmission: 'АКПП', fuel: 'Дизель', year: 2023 },
  { id: 6, name: 'Toyota RAV4', cat: 'Кроссовер', price: 165, seats: 5, transmission: 'АКПП', fuel: 'Бензин', year: 2024 },
]

const categories = ['Все', 'Эконом', 'Комфорт', 'Бизнес', 'Минивэн', 'Кроссовер']

function fmt(n) { return new Intl.NumberFormat('ru-RU').format(n) }

const carEmojis = {
  'Эконом': '🚗',
  'Комфорт': '🚙',
  'Бизнес': '🏎️',
  'Минивэн': '🚐',
  'Кроссовер': '🚘',
}

export default function CarRentalDemo() {
  const [filter, setFilter] = useState('Все')
  const [selectedCar, setSelectedCar] = useState(null)
  const [days, setDays] = useState(3)
  const bookingRef = useRef(null)
  const fleetRef = useRef(null)

  const filteredFleet = filter === 'Все' ? fleet : fleet.filter(c => c.cat === filter)

  const discount = days >= 14 ? 20 : days >= 7 ? 10 : days >= 3 ? 5 : 0
  const total = selectedCar ? Math.round(selectedCar.price * days * (1 - discount / 100)) : 0

  const handleBook = (car) => {
    setSelectedCar(car)
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFleet = () => {
    fleetRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="cr">
      <Link to="/" className="demo-back">← WEB CAN</Link>

      {/* NAV */}
      <nav className="cr-nav">
        <a href="#" className="cr-nav-brand">🚗 DriveRent</a>
        <div className="cr-nav-links">
          <a onClick={scrollToFleet}>Автопарк</a>
          <a onClick={scrollToBooking}>Условия</a>
          <a onClick={scrollToBooking}>Бронь</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="cr-hero">
        <div className="cr-hero-tag">Аренда автомобилей с доставкой</div>
        <h1>АРЕНДА АВТО —<br />СВОБОДА ДВИЖЕНИЯ</h1>
        <p className="cr-hero-sub">Без залога • Без скрытых платежей • Доставка к вам</p>
        <button className="cr-hero-cta" onClick={scrollToFleet}>Выбрать авто →</button>
      </section>

      {/* STATS */}
      <div className="cr-stats">
        <div className="cr-stat">
          <div className="cr-stat-num">250+</div>
          <div className="cr-stat-label">Довольных клиентов</div>
        </div>
        <div className="cr-stat">
          <div className="cr-stat-num">24/7</div>
          <div className="cr-stat-label">Поддержка</div>
        </div>
        <div className="cr-stat">
          <div className="cr-stat-num">50+</div>
          <div className="cr-stat-label">Авто в парке</div>
        </div>
        <div className="cr-stat">
          <div className="cr-stat-num">0 BYN</div>
          <div className="cr-stat-label">Залог</div>
        </div>
      </div>

      {/* FLEET */}
      <section className="cr-section" ref={fleetRef}>
        <h2 className="cr-section-title">НАШ АВТОПАРК</h2>
        <p className="cr-section-sub">Выберите автомобиль для вашего путешествия</p>

        <div className="cr-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cr-filter-pill${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="cr-fleet">
          {filteredFleet.map(car => (
            <div className="cr-car" key={car.id}>
              <div className="cr-car-img">
                <span className="cr-car-badge">{car.cat}</span>
                <span className="cr-car-year">{car.year}</span>
                {carEmojis[car.cat] || '🚗'}
              </div>
              <div className="cr-car-body">
                <h3 className="cr-car-name">{car.name}</h3>
                <div className="cr-car-specs">
                  <div className="cr-car-spec">
                    <span className="cr-car-spec-icon">👤</span>
                    {car.seats} мест
                  </div>
                  <div className="cr-car-spec">
                    <span className="cr-car-spec-icon">⚙️</span>
                    {car.transmission}
                  </div>
                  <div className="cr-car-spec">
                    <span className="cr-car-spec-icon">⛽</span>
                    {car.fuel}
                  </div>
                </div>
                <div className="cr-car-bottom">
                  <div className="cr-car-price">
                    {fmt(car.price)} BYN <span>/день</span>
                  </div>
                  <button className="cr-car-book" onClick={() => handleBook(car)}>
                    Забронировать →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="cr-booking" ref={bookingRef}>
        <h2 className="cr-section-title">ЗАБРОНИРОВАТЬ</h2>
        <p className="cr-section-sub">Заполните форму — мы свяжемся с вами за 15 минут</p>

        <div className="cr-booking-grid">
          {/* FORM */}
          <div className="cr-booking-form">
            <h3 className="cr-form-title">Оформить бронь</h3>

            <div className="cr-form-group">
              <label>Ваше имя</label>
              <input type="text" placeholder="Иван Иванов" />
            </div>

            <div className="cr-form-group">
              <label>Телефон</label>
              <input type="tel" placeholder="+7 (999) 123-45-67" />
            </div>

            {selectedCar ? (
              <div className="cr-selected-car">
                <div className="cr-selected-car-name">{carEmojis[selectedCar.cat]} {selectedCar.name}</div>
                <div className="cr-selected-car-price">{fmt(selectedCar.price)} BYN/день • {selectedCar.cat}</div>
              </div>
            ) : (
              <div className="cr-no-car">
                ☝️ Выберите автомобиль из каталога выше
              </div>
            )}

            <div className="cr-form-group">
              <div className="cr-days-label">
                <label>Срок аренды</label>
                <span className="cr-days-value">{days} {days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}</span>
              </div>
              <input
                type="range"
                className="cr-slider"
                min="1"
                max="30"
                value={days}
                onChange={e => setDays(Number(e.target.value))}
              />
              <div className="cr-discounts">
                <span className={`cr-discount-pill${days >= 3 ? ' active' : ''}`}>от 3 дней — 5%</span>
                <span className={`cr-discount-pill${days >= 7 ? ' active' : ''}`}>от 7 дней — 10%</span>
                <span className={`cr-discount-pill${days >= 14 ? ' active' : ''}`}>от 14 дней — 20%</span>
              </div>
            </div>

            {selectedCar && (
              <div className="cr-total">
                <div className="cr-total-label">Итого за {days} {days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}{discount > 0 ? ` (скидка ${discount}%)` : ''}</div>
                <div className="cr-total-amount">{fmt(total)} BYN</div>
                {discount > 0 && (
                  <div className="cr-total-detail">Без скидки: {fmt(selectedCar.price * days)} BYN</div>
                )}
              </div>
            )}

            <button className="cr-submit-btn">Отправить заявку</button>
          </div>

          {/* CONDITIONS SIDEBAR */}
          <div className="cr-booking-info">
            <div className="cr-info-card">
              <div className="cr-info-card-icon">📋</div>
              <h4>Документы</h4>
              <p>Паспорт и водительское удостоверение от 2 лет стажа. Для иностранных граждан — загранпаспорт + МВУ.</p>
            </div>
            <div className="cr-info-card">
              <div className="cr-info-card-icon">💳</div>
              <h4>Оплата</h4>
              <p>Банковская карта, наличные или перевод. Полная предоплата или 50% при бронировании.</p>
            </div>
            <div className="cr-info-card">
              <div className="cr-info-card-icon">🚚</div>
              <h4>Доставка</h4>
              <p>Бесплатная доставка в пределах города при аренде от 3 дней. Подача на вокзал или аэропорт.</p>
            </div>
            <div className="cr-info-card">
              <div className="cr-info-card-icon">🛡️</div>
              <h4>Страховка</h4>
              <p>КАСКО и ОСАГО включены. Полная защита на весь срок аренды без доплат.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="cr-section">
        <h2 className="cr-section-title">УСЛОВИЯ АРЕНДЫ</h2>
        <p className="cr-section-sub">Всё просто и прозрачно</p>

        <div className="cr-conditions">
          <div className="cr-condition">
            <div className="cr-condition-icon">📄</div>
            <h3>Документы</h3>
            <p>Паспорт + водительское удостоверение со стажем от 2 лет</p>
          </div>
          <div className="cr-condition">
            <div className="cr-condition-icon">💰</div>
            <h3>Оплата</h3>
            <p>Карта, наличные или банковский перевод — как вам удобно</p>
          </div>
          <div className="cr-condition">
            <div className="cr-condition-icon">🎁</div>
            <h3>Доставка</h3>
            <p>Бесплатная доставка авто при аренде от 3 дней</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cr-cta">
        <h2>ГОТОВЫ К ПОЕЗДКЕ?</h2>
        <p>Забронируйте автомобиль прямо сейчас и отправляйтесь в путь</p>
        <button className="cr-cta-btn" onClick={scrollToFleet}>Выбрать автомобиль →</button>
      </section>

      {/* FOOTER */}
      <footer className="cr-footer">
        © 2026 DriveRent — Демо-сайт от WEB CAN
      </footer>

      {/* DEMO BANNER */}
      <div className="demo-banner" style={{ background: 'linear-gradient(90deg,#b45309,#d97706)' }}>
        ✨ Это демо-сайт — пример работы WEB CAN для автопрокатов
        <Link to="/#niches">Заказать такой же</Link>
      </div>
    </div>
  )
}
