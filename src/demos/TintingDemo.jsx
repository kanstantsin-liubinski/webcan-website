import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

const portfolio = [
  { title: 'BMW X6 — передние стёкла', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80', film: '35%' },
  { title: 'Mercedes GLE — полная', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', film: '15%' },
  { title: 'Toyota Land Cruiser', img: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80', film: '5%' },
  { title: 'Audi Q7 — лобовое', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', film: 'Атермальная' },
  { title: 'Kia K5 — задняя полусфера', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80', film: '20%' },
  { title: 'Porsche Cayenne — PPF+тонировка', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f133c?w=600&q=80', film: '25%' },
]

export default function TintingDemo() {
  const [filmType, setFilmType] = useState('standard')
  const [glassCount, setGlassCount] = useState('full')

  const prices = {
    standard: { front2: 3500, rear: 4000, full: 7000, windshield: 5000 },
    ceramic: { front2: 6000, rear: 7000, full: 12000, windshield: 8000 },
    athermal: { front2: 5000, rear: 5500, full: 9500, windshield: 7000 },
  }

  const currentPrice = prices[filmType]?.[glassCount] || 0
  const filmNames = { standard: 'Стандартная', ceramic: 'Керамическая', athermal: 'Атермальная' }
  const glassNames = { front2: '2 передних стекла', rear: 'Задняя полусфера', full: 'Полная тонировка', windshield: 'Лобовое стекло' }

  return (
    <div className="demo-page">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для студий тонировки<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="demo-nav" style={{ background: 'rgba(15,23,42,0.95)' }}>
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">🖤 DarkGlass</div>
          <div className="demo-nav-links">
            <a href="#portfolio">Работы</a>
            <a href="#prices">Цены</a>
            <a href="#films">Плёнки</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Тонировка с гарантией</h1>
          <p>Профессиональная тонировка автомобилей. Премиальные плёнки, гарантия 5 лет, установка за 2-3 часа.</p>
          <div className="demo-hero-buttons">
            <a href="#prices" className="demo-btn demo-btn-primary">Рассчитать стоимость</a>
            <a href="#portfolio" className="demo-btn demo-btn-secondary">Наши работы</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">3000+</div><div className="demo-stat-label">Авто затонировано</div></div>
          <div><div className="demo-stat-value">5 лет</div><div className="demo-stat-label">Гарантия</div></div>
          <div><div className="demo-stat-value">2-3ч</div><div className="demo-stat-label">Время установки</div></div>
          <div><div className="demo-stat-value">4.9</div><div className="demo-stat-label">Рейтинг</div></div>
        </div>
      </div>

      <section id="portfolio" className="demo-section">
        <h2>Портфолио</h2>
        <p>Примеры наших работ</p>
        <div className="demo-gallery">
          {portfolio.map(w => (
            <div className="demo-gallery-item" key={w.title}>
              <img src={w.img} alt={w.title} />
              <div className="demo-gallery-overlay"><span>{w.title} · {w.film}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="prices" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Калькулятор цен</h2>
          <p>Выберите тип плёнки и зону тонировки</p>

          <div className="demo-calc">
            <h3>💲 Расчёт стоимости</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>Тип плёнки</label>
                <select className="demo-select" value={filmType} onChange={e => setFilmType(e.target.value)}>
                  <option value="standard">Стандартная (металлизированная)</option>
                  <option value="ceramic">Керамическая (премиум)</option>
                  <option value="athermal">Атермальная (хамелеон)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>Зона тонировки</label>
                <select className="demo-select" value={glassCount} onChange={e => setGlassCount(e.target.value)}>
                  <option value="front2">2 передних стекла</option>
                  <option value="rear">Задняя полусфера</option>
                  <option value="full">Полная тонировка (без лобового)</option>
                  <option value="windshield">Лобовое стекло</option>
                </select>
              </div>
            </div>

            <div className="demo-calc-result">
              <div className="demo-calc-result-label">{filmNames[filmType]} · {glassNames[glassCount]}</div>
              <div className="demo-calc-result-value">{new Intl.NumberFormat('ru-RU').format(currentPrice)} ₽</div>
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>Полный прайс-лист</h3>
            <div className="demo-table-wrap">
              <table className="demo-table">
                <thead><tr><th>Зона</th><th>Стандарт</th><th>Керамика</th><th>Атермальная</th></tr></thead>
                <tbody>
                  <tr><td>2 передних стекла</td><td>3 500 ₽</td><td>6 000 ₽</td><td>5 000 ₽</td></tr>
                  <tr><td>Задняя полусфера</td><td>4 000 ₽</td><td>7 000 ₽</td><td>5 500 ₽</td></tr>
                  <tr><td>Полная (без лобового)</td><td>7 000 ₽</td><td>12 000 ₽</td><td>9 500 ₽</td></tr>
                  <tr><td>Лобовое стекло</td><td>5 000 ₽</td><td>8 000 ₽</td><td>7 000 ₽</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="films" className="demo-section">
        <h2>Типы плёнок</h2>
        <p>Какую выбрать — зависит от ваших задач</p>
        <div className="demo-cards">
          <div className="demo-card"><div className="demo-card-icon">🎞️</div><h3>Стандартная</h3><p>Металлизированная плёнка. Хорошая защита от солнца, доступная цена. Гарантия 3 года.</p></div>
          <div className="demo-card"><div className="demo-card-icon">💎</div><h3>Керамическая</h3><p>Премиум-плёнка без металла. Не блокирует GPS/телефон. Максимальная защита от UV и ИК. Гарантия 5 лет.</p></div>
          <div className="demo-card"><div className="demo-card-icon">🌈</div><h3>Атермальная</h3><p>Плёнка «хамелеон» с переливом. Защита от жары при высокой прозрачности. Идеальна для лобового.</p></div>
        </div>
      </section>

      <section id="contact" className="demo-cta">
        <h2>Запишитесь на тонировку</h2>
        <p>Установка за 2-3 часа · Гарантия до 5 лет</p>
        <div className="demo-cta-form">
          <input placeholder="Ваш телефон" />
          <button className="demo-btn demo-btn-accent">Записаться</button>
        </div>
      </section>

      <footer className="demo-footer">
        <p>© 2026 DarkGlass — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
