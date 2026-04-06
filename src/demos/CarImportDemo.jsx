import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './carimport.css'

const cars = [
  { name: 'Toyota Camry 2024', price: 28000, img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&q=80', engine: '2.5L', status: 'В наличии' },
  { name: 'BMW 3 Series 2024', price: 42000, img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80', engine: '2.0T', status: 'Под заказ' },
  { name: 'Mercedes C-Class 2024', price: 45000, img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80', engine: '2.0T', status: 'Под заказ' },
  { name: 'Hyundai Tucson 2024', price: 32000, img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80', engine: '2.0L', status: 'В наличии' },
  { name: 'Kia Sportage 2024', price: 30000, img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80', engine: '2.0L', status: 'В наличии' },
  { name: 'Volkswagen Tiguan 2024', price: 38000, img: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=500&q=80', engine: '2.0T', status: 'Под заказ' },
]

const engineRates = { '1.0-1.5': 0.015, '1.6-2.0': 0.03, '2.1-3.0': 0.05, '3.1+': 0.07 }
const CUSTOMS_BASE_RATE = 0.12
const DELIVERY_COST = 2500
const SERVICE_FEE = 1500

function fmt(n) { return new Intl.NumberFormat('ru-RU').format(Math.round(n)) }

const steps = [
  { num: 1, title: 'Заявка', desc: 'Вы оставляете заявку — мы связываемся в течение 30 минут' },
  { num: 2, title: 'Подбор', desc: 'Подбираем авто по вашим параметрам и бюджету' },
  { num: 3, title: 'Покупка', desc: 'Выкупаем автомобиль, проверяем состояние и документы' },
  { num: 4, title: 'Доставка', desc: 'Доставляем авто морем или автовозом — 10–14 дней' },
  { num: 5, title: 'Растаможка', desc: 'Полное оформление, растаможка и регистрация' },
  { num: 6, title: 'Передача', desc: 'Передаём авто с полным пакетом документов' },
]

const reviews = [
  { name: 'Алексей К.', initials: 'АК', date: 'Февраль 2026', text: 'Заказывал Kia Sportage из Кореи. Всё прозрачно — от расчёта до получения авто. Доставили за 12 дней, состояние идеальное. Рекомендую AutoBring!' },
  { name: 'Марина С.', initials: 'МС', date: 'Январь 2026', text: 'Долго сомневалась, но ребята всё объяснили и рассчитали. Toyota Camry пригнали точно в срок, никаких скрытых платежей. Очень довольна сервисом!' },
]

export default function CarImportDemo() {
  const [carPrice, setCarPrice] = useState(30000)
  const [engineSize, setEngineSize] = useState('1.6-2.0')
  const [year, setYear] = useState('2024')
  const [phone, setPhone] = useState('')

  const calc = useMemo(() => {
    const price = Number(carPrice) || 0
    const usdRate = 3.25
    const priceRub = price * usdRate
    const ageFactor = year === '2024' ? 1 : year === '2023' ? 0.95 : year === '2022' ? 0.88 : 0.8
    const customs = priceRub * CUSTOMS_BASE_RATE * ageFactor
    const excise = priceRub * (engineRates[engineSize] || 0.03)
    const delivery = DELIVERY_COST * usdRate
    const service = SERVICE_FEE * usdRate
    const total = priceRub + customs + excise + delivery + service
    return { priceRub, customs, excise, delivery, service, total }
  }, [carPrice, engineSize, year])

  return (
    <div className="ci">
      <Link to="/" className="demo-back">← WEB CAN</Link>

      {/* NAV */}
      <nav className="ci-nav">
        <div className="ci-nav-brand">🚘 AutoBring</div>
        <ul className="ci-nav-links">
          <li><a href="#calculator">Калькулятор</a></li>
          <li><a href="#catalog">Каталог</a></li>
          <li><a href="#how">Как мы работаем</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#cta" className="ci-nav-cta">Оставить заявку</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="ci-hero">
        <div className="ci-hero-content">
          <h1>Пригон авто из-за рубежа под ключ</h1>
          <p>Подберём, купим, доставим и растаможим автомобиль вашей мечты. Прозрачные цены, никаких скрытых платежей.</p>
          <div className="ci-hero-btns">
            <a href="#calculator" className="ci-btn ci-btn-primary">Рассчитать стоимость</a>
            <a href="#catalog" className="ci-btn ci-btn-outline">Смотреть каталог</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="ci-stats">
        <div className="ci-stat-card">
          <div className="ci-stat-val">1 200+</div>
          <div className="ci-stat-label">Автомобилей пригнано</div>
        </div>
        <div className="ci-stat-card">
          <div className="ci-stat-val">14 дней</div>
          <div className="ci-stat-label">Средний срок доставки</div>
        </div>
        <div className="ci-stat-card">
          <div className="ci-stat-val">6 лет</div>
          <div className="ci-stat-label">На рынке</div>
        </div>
        <div className="ci-stat-card">
          <div className="ci-stat-val">0</div>
          <div className="ci-stat-label">Скрытых платежей</div>
        </div>
      </div>

      {/* CALCULATOR */}
      <div className="ci-section-alt" id="calculator">
        <div className="ci-calc-wrap">
          <div className="ci-calc">
            <div className="ci-calc-header">
              <h2>📊 Калькулятор стоимости</h2>
              <p>Рассчитайте полную стоимость авто с доставкой и растаможкой</p>
            </div>
            <div className="ci-calc-body">
              <div className="ci-calc-inputs">
                <div className="ci-calc-field">
                  <label>Цена авто (USD)</label>
                  <input
                    type="number"
                    value={carPrice}
                    onChange={e => setCarPrice(e.target.value)}
                    min="5000"
                    max="200000"
                    step="1000"
                  />
                  <input
                    type="range"
                    value={carPrice}
                    onChange={e => setCarPrice(e.target.value)}
                    min="5000"
                    max="200000"
                    step="1000"
                  />
                  <div className="ci-calc-price-display">${fmt(carPrice)}</div>
                </div>
                <div className="ci-calc-field">
                  <label>Объём двигателя</label>
                  <select value={engineSize} onChange={e => setEngineSize(e.target.value)}>
                    <option value="1.0-1.5">1.0 – 1.5 л</option>
                    <option value="1.6-2.0">1.6 – 2.0 л</option>
                    <option value="2.1-3.0">2.1 – 3.0 л</option>
                    <option value="3.1+">3.1+ л</option>
                  </select>
                </div>
                <div className="ci-calc-field">
                  <label>Год выпуска</label>
                  <select value={year} onChange={e => setYear(e.target.value)}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021 и старше</option>
                  </select>
                </div>
              </div>
              <div className="ci-calc-result">
                <h3>Расчёт стоимости</h3>
                <div className="ci-calc-row">
                  <span className="ci-calc-row-label">🚗 Авто</span>
                  <span className="ci-calc-row-val">{fmt(calc.priceRub)} BYN</span>
                </div>
                <div className="ci-calc-row">
                  <span className="ci-calc-row-label">🏛 Таможня</span>
                  <span className="ci-calc-row-val">{fmt(calc.customs)} BYN</span>
                </div>
                <div className="ci-calc-row">
                  <span className="ci-calc-row-label">⛽ Акциз</span>
                  <span className="ci-calc-row-val">{fmt(calc.excise)} BYN</span>
                </div>
                <div className="ci-calc-row">
                  <span className="ci-calc-row-label">🚢 Доставка</span>
                  <span className="ci-calc-row-val">{fmt(calc.delivery)} BYN</span>
                </div>
                <div className="ci-calc-row">
                  <span className="ci-calc-row-label">💼 Наши услуги</span>
                  <span className="ci-calc-row-val">{fmt(calc.service)} BYN</span>
                </div>
                <div className="ci-calc-total">
                  <span className="ci-calc-total-label">Итого</span>
                  <span className="ci-calc-total-val">{fmt(calc.total)} BYN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CATALOG */}
      <section className="ci-section" id="catalog">
        <h2 className="ci-section-title">Популярные автомобили</h2>
        <p className="ci-section-sub">Выберите авто или закажите подбор по вашим параметрам</p>
        <div className="ci-cars-grid">
          {cars.map((car, i) => (
            <div className="ci-car-card" key={i}>
              <div className="ci-car-img">
                <img src={car.img} alt={car.name} loading="lazy" />
                <span className={`ci-car-badge ${car.status === 'В наличии' ? 'ci-badge-green' : 'ci-badge-orange'}`}>
                  {car.status}
                </span>
              </div>
              <div className="ci-car-info">
                <h3 className="ci-car-name">{car.name}</h3>
                <p className="ci-car-engine">Двигатель: {car.engine}</p>
                <div className="ci-car-price">
                  {fmt(car.price * 3.25)} BYN <span>≈ ${fmt(car.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK — TIMELINE */}
      <div className="ci-section-alt" id="how">
        <section className="ci-section">
          <h2 className="ci-section-title">Как мы работаем</h2>
          <p className="ci-section-sub">6 простых шагов от заявки до вашего нового авто</p>
          <div className="ci-timeline">
            {steps.map(s => (
              <div className="ci-step" key={s.num}>
                <div className="ci-step-num">{s.num}</div>
                <div className="ci-step-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* REVIEWS */}
      <section className="ci-section" id="reviews">
        <h2 className="ci-section-title">Отзывы клиентов</h2>
        <p className="ci-section-sub">Нам доверяют сотни довольных владельцев</p>
        <div className="ci-reviews-grid">
          {reviews.map((r, i) => (
            <div className="ci-review-card" key={i}>
              <div className="ci-review-stars">★★★★★</div>
              <p className="ci-review-text">«{r.text}»</p>
              <div className="ci-review-author">
                <div className="ci-review-avatar">{r.initials}</div>
                <div>
                  <div className="ci-review-name">{r.name}</div>
                  <div className="ci-review-date">{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ci-cta" id="cta">
        <h2>Хотите авто из-за рубежа?</h2>
        <p>Оставьте номер — рассчитаем стоимость и подберём лучший вариант</p>
        <div className="ci-cta-form">
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <button type="button">Получить расчёт</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ci-footer">
        © 2026 AutoBring — Демо-сайт от WEB CAN
      </footer>

      <div className="demo-banner">
        ✨ Это демо-сайт — пример работы WEB CAN для компаний по пригону авто
        <Link to="/#niches">Заказать такой же</Link>
      </div>
    </div>
  )
}
