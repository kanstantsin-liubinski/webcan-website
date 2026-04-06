import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './tinting.css'

const prices = {
  economy: { лобовое: 90, передние: 60, задние: 55, заднее: 75, люк: 45 },
  premium: { лобовое: 150, передние: 110, задние: 90, заднее: 120, люк: 75 },
  ceramic: { лобовое: 250, передние: 180, задние: 150, заднее: 210, люк: 120 },
}
const filmNames = { economy: 'Стандарт', premium: 'Премиум', ceramic: 'Керамика' }
const glassNames = {
  лобовое: 'Лобовое стекло',
  передние: 'Передние боковые (2 шт)',
  задние: 'Задние боковые (2 шт)',
  заднее: 'Заднее стекло',
  люк: 'Люк',
}

const portfolio = [
  { id: 1, title: 'BMW X5 — Керамика 95%', desc: 'Полная тонировка керамической плёнкой' },
  { id: 2, title: 'Mercedes S-Class — Премиум', desc: 'Задняя полусфера + лобовое' },
  { id: 3, title: 'Toyota Land Cruiser 300', desc: 'Атермальная тонировка Хамелеон' },
  { id: 4, title: 'Porsche Cayenne — 70% затемнение', desc: 'Премиум плёнка задняя полусфера' },
  { id: 5, title: 'Audi Q7 — Керамика', desc: 'Лобовое + вся задняя часть' },
  { id: 6, title: 'Range Rover Velar', desc: 'Полная оклейка керамикой' },
]

const advantages = [
  { icon: '🛡️', title: '8 лет гарантия', desc: 'Официальная гарантия на все виды плёнок' },
  { icon: '✨', title: 'Без пузырей', desc: 'Идеальная установка без дефектов' },
  { icon: '📜', title: 'Сертифицированные плёнки', desc: 'Только оригинальные материалы от производителей' },
  { icon: '⏱️', title: 'Работа за 2 часа', desc: 'Быстрая установка без потери качества' },
]

const filmCards = [
  { key: 'economy', icon: '🔹', name: 'Стандарт', price: 'от 60 BYN', desc: 'Базовая тонировка, защита от солнца и приватность' },
  { key: 'premium', icon: '💎', name: 'Премиум', price: 'от 110 BYN', desc: 'Улучшенная теплоизоляция, высокая стойкость к царапинам' },
  { key: 'ceramic', icon: '🔮', name: 'Керамика', price: 'от 150 BYN', desc: 'Максимальная защита от тепла и УФ без помех связи' },
]

export default function TintingDemo() {
  const [filmType, setFilmType] = useState('premium')
  const [selectedGlass, setSelectedGlass] = useState(['передние', 'задние', 'заднее'])
  const [phone, setPhone] = useState('')

  const calcTotal = useMemo(() => {
    return selectedGlass.reduce((sum, glass) => sum + (prices[filmType]?.[glass] || 0), 0)
  }, [filmType, selectedGlass])

  const toggleGlass = (glass) => {
    setSelectedGlass(prev =>
      prev.includes(glass) ? prev.filter(g => g !== glass) : [...prev, glass]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="tn">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner" style={{ background: 'linear-gradient(90deg,#581c87,#7c3aed)' }}>
        ✨ Это демо-сайт — пример работы WEB CAN для тонировочных студий
        <Link to="/#niches">Заказать такой же</Link>
      </div>

      {/* NAV */}
      <nav className="tn-nav">
        <div className="tn-brand">🌒 DarkGlass</div>
        <ul className="tn-nav-links">
          <li><a href="#films">Плёнки</a></li>
          <li><a href="#portfolio">Работы</a></li>
          <li><a href="#calc">Расчёт</a></li>
          <li><a href="#advantages">Гарантии</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="tn-hero">
        <h1 className="tn-hero-title">Тонировка<br />нового уровня</h1>
        <p className="tn-hero-sub">
          Премиальная тонировка автомобилей керамическими и атермальными плёнками.
          Защита от жары, ультрафиолета и посторонних глаз.
        </p>
        <a href="#calc" className="tn-btn-glow">Рассчитать стоимость</a>
      </section>

      {/* FILM TYPES */}
      <section className="tn-section" id="films">
        <h2 className="tn-section-title">Типы плёнок</h2>
        <hr className="tn-section-line" />
        <div className="tn-films-grid">
          {filmCards.map(f => (
            <div className="tn-film-card" key={f.key}>
              <div className="tn-film-icon">{f.icon}</div>
              <div className="tn-film-name">{f.name}</div>
              <div className="tn-film-price">{f.price}</div>
              <p className="tn-film-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="tn-section" id="portfolio">
        <h2 className="tn-section-title">Наши работы</h2>
        <hr className="tn-section-line" />
        <div className="tn-portfolio-grid">
          {portfolio.map(p => (
            <div className="tn-portfolio-card" key={p.id}>
              <div className="tn-portfolio-thumb">🚗</div>
              <div className="tn-portfolio-info">
                <div className="tn-portfolio-title">{p.title}</div>
                <p className="tn-portfolio-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="tn-calc" id="calc">
        <div className="tn-calc-inner">
          <h2 className="tn-section-title">Рассчитайте стоимость</h2>
          <hr className="tn-section-line" />

          <div className="tn-calc-label">Тип плёнки</div>
          <div className="tn-calc-tabs">
            {Object.entries(filmNames).map(([key, name]) => (
              <button
                key={key}
                className={`tn-calc-tab${filmType === key ? ' tn-active' : ''}`}
                onClick={() => setFilmType(key)}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="tn-calc-label">Зоны остекления</div>
          <div className="tn-glass-zones">
            {Object.entries(glassNames).map(([key, name]) => (
              <button
                key={key}
                className={`tn-glass-chip${selectedGlass.includes(key) ? ' tn-selected' : ''}`}
                onClick={() => toggleGlass(key)}
              >
                {name}
              </button>
            ))}
          </div>

          {selectedGlass.length > 0 && (
            <div className="tn-calc-breakdown">
              {selectedGlass.map(glass => (
                <div className="tn-calc-row" key={glass}>
                  <span className="tn-calc-row-name">{glassNames[glass]}</span>
                  <span className="tn-calc-row-price">
                    {(prices[filmType]?.[glass] || 0).toLocaleString('ru-RU')} BYN
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="tn-calc-total">
            <div className="tn-calc-total-label">Итого</div>
            <div className="tn-calc-total-value">
              {calcTotal.toLocaleString('ru-RU')} <span className="tn-calc-total-curr">BYN</span>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="tn-section" id="advantages">
        <h2 className="tn-section-title">Почему мы</h2>
        <hr className="tn-section-line" />
        <div className="tn-advantages-grid">
          {advantages.map((a, i) => (
            <div className="tn-advantage-card" key={i}>
              <div className="tn-advantage-icon">{a.icon}</div>
              <div className="tn-advantage-title">{a.title}</div>
              <p className="tn-advantage-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tn-cta" id="contact">
        <div className="tn-cta-form">
          <h2 className="tn-cta-title">Запишитесь на тонировку</h2>
          <p className="tn-cta-sub">Оставьте номер — мы перезвоним и подберём лучший вариант</p>
          <form onSubmit={handleSubmit}>
            <input
              className="tn-input"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <button type="submit" className="tn-btn-glow">Отправить заявку</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tn-footer">
        © 2026 DarkGlass — Демо-сайт от WEB CAN
      </footer>
    </div>
  )
}
