import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

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

function fmt(n) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(n))
}

export default function CarImportDemo() {
  const [carPrice, setCarPrice] = useState(30000)
  const [engineSize, setEngineSize] = useState('1.6-2.0')
  const [year, setYear] = useState('2024')

  const calc = useMemo(() => {
    const price = Number(carPrice) || 0
    const usdRate = 92
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
    <div className="demo-page theme-carimport">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для компаний по пригону авто<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="demo-nav">
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">🚘 AutoBring</div>
          <div className="demo-nav-links">
            <a href="#calculator">Калькулятор</a>
            <a href="#catalog">Каталог</a>
            <a href="#how">Как работаем</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Пригон авто из-за рубежа</h1>
          <p>Привезём автомобиль вашей мечты из США, Кореи, Европы. Полное сопровождение: подбор, проверка, доставка, растаможка.</p>
          <div className="demo-hero-buttons">
            <a href="#calculator" className="demo-btn demo-btn-primary">Рассчитать стоимость</a>
            <a href="#catalog" className="demo-btn demo-btn-secondary">Смотреть каталог</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">1200+</div><div className="demo-stat-label">Авто доставлено</div></div>
          <div><div className="demo-stat-value">14</div><div className="demo-stat-label">Дней средняя доставка</div></div>
          <div><div className="demo-stat-value">6</div><div className="demo-stat-label">Лет на рынке</div></div>
          <div><div className="demo-stat-value">0</div><div className="demo-stat-label">Скрытых платежей</div></div>
        </div>
      </div>

      <section id="calculator" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Калькулятор стоимости</h2>
          <p>Рассчитайте полную стоимость авто «под ключ» с доставкой и растаможкой</p>

          <div className="demo-calc">
            <h3>💰 Расчёт стоимости</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="demo-label">Цена авто (USD)</label>
                <input
                  className="demo-input"
                  type="number"
                  value={carPrice}
                  onChange={e => setCarPrice(e.target.value)}
                  min={1000}
                  max={500000}
                  step={500}
                />
                <input
                  type="range"
                  min={5000}
                  max={150000}
                  step={500}
                  value={carPrice}
                  onChange={e => setCarPrice(e.target.value)}
                  style={{ width: '100%', marginTop: '8px', accentColor: 'var(--demo-primary)' }}
                />
              </div>

              <div className="demo-form-row">
                <div>
                  <label className="demo-label">Объём двигателя</label>
                  <select className="demo-select" value={engineSize} onChange={e => setEngineSize(e.target.value)}>
                    <option value="1.0-1.5">1.0 — 1.5 л</option>
                    <option value="1.6-2.0">1.6 — 2.0 л</option>
                    <option value="2.1-3.0">2.1 — 3.0 л</option>
                    <option value="3.1+">3.1+ л</option>
                  </select>
                </div>
                <div>
                  <label className="demo-label">Год выпуска</label>
                  <select className="demo-select" value={year} onChange={e => setYear(e.target.value)}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021 и старше</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="demo-calc-result">
              <div className="demo-calc-result-label">Итого «под ключ»</div>
              <div className="demo-calc-result-value">{fmt(calc.total)} ₽</div>
              <div className="demo-calc-breakdown">
                <div className="demo-calc-breakdown-item"><span>Авто</span><span>{fmt(calc.priceRub)} ₽</span></div>
                <div className="demo-calc-breakdown-item"><span>Таможня</span><span>{fmt(calc.customs)} ₽</span></div>
                <div className="demo-calc-breakdown-item"><span>Акциз</span><span>{fmt(calc.excise)} ₽</span></div>
                <div className="demo-calc-breakdown-item"><span>Доставка</span><span>{fmt(calc.delivery)} ₽</span></div>
                <div className="demo-calc-breakdown-item"><span>Наши услуги</span><span>{fmt(calc.service)} ₽</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="demo-section">
        <h2>Каталог авто</h2>
        <p>Доступные варианты — закажите или выберите из наличия</p>
        <div className="demo-catalog">
          {cars.map(car => (
            <div className="demo-catalog-item" key={car.name}>
              <img className="demo-catalog-img" src={car.img} alt={car.name} />
              <div className="demo-catalog-info">
                <h4>{car.name}</h4>
                <p>{car.engine} · {car.status === 'В наличии' ? <span className="demo-badge demo-badge-green">{car.status}</span> : <span className="demo-badge demo-badge-orange">{car.status}</span>}</p>
                <div className="demo-catalog-price">${fmt(car.price)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Как мы работаем</h2>
          <p>5 простых шагов до авто вашей мечты</p>
          <div className="demo-cards">
            <div className="demo-card"><div className="demo-card-icon">📋</div><h3>1. Заявка</h3><p>Вы оставляете заявку и описываете желаемый автомобиль. Или выбираете из каталога.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🔍</div><h3>2. Подбор</h3><p>Находим лучшие варианты на аукционах, проверяем Carfax/AutoCheck, отправляем отчёт.</p></div>
            <div className="demo-card"><div className="demo-card-icon">💳</div><h3>3. Покупка</h3><p>Выкупаем авто, оформляем все документы, готовим к отправке.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🚢</div><h3>4. Доставка</h3><p>Морская или авиадоставка в Россию. Полное сопровождение на каждом этапе.</p></div>
            <div className="demo-card"><div className="demo-card-icon">📝</div><h3>5. Растаможка</h3><p>Берём на себя все таможенные формальности, оформляем ПТС, ставим на учёт.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🔑</div><h3>6. Передача</h3><p>Передаём вам авто с полным пакетом документов. Готово к езде!</p></div>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>Отзывы</h2>
        <p>Что говорят наши клиенты</p>
        <div className="demo-reviews">
          <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Пригнали Toyota Camry за 3 недели. Всё прозрачно — калькулятор на сайте показал реальную сумму."</p><div className="demo-review-author">— Сергей Т.</div></div>
          <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Заказывал BMW из Кореи. Ребята присылали фото на каждом этапе, вопросов ноль."</p><div className="demo-review-author">— Андрей П.</div></div>
        </div>
      </section>

      <section id="contact" className="demo-cta">
        <h2>Хотите авто из-за рубежа?</h2>
        <p>Оставьте заявку — рассчитаем стоимость за 30 минут</p>
        <div className="demo-cta-form">
          <input placeholder="Ваш телефон" />
          <button className="demo-btn demo-btn-accent">Получить расчёт</button>
        </div>
      </section>

      <footer className="demo-footer">
        <p>© 2026 AutoBring — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
