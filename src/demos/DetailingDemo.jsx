import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

const works = [
  { title: 'BMW X5 — полировка', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80', tag: 'Полировка' },
  { title: 'Mercedes GLE — керамика', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', tag: 'Керамика' },
  { title: 'Audi A7 — PPF плёнка', img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80', tag: 'Плёнка' },
  { title: 'Porsche 911 — детейлинг', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f133c?w=600&q=80', tag: 'Детейлинг' },
  { title: 'Toyota Camry — химчистка', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80', tag: 'Химчистка' },
  { title: 'Range Rover — нанокерамика', img: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80', tag: 'Керамика' },
]

const filters = ['Все', 'Полировка', 'Керамика', 'Плёнка', 'Детейлинг', 'Химчистка']

export default function DetailingDemo() {
  const [activeFilter, setActiveFilter] = useState('Все')
  const filtered = activeFilter === 'Все' ? works : works.filter(w => w.tag === activeFilter)

  return (
    <div className="demo-page theme-detailing">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для детейлинг-студий<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="demo-nav">
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">💎 ProShine Studio</div>
          <div className="demo-nav-links">
            <a href="#portfolio">Работы</a>
            <a href="#services">Услуги</a>
            <a href="#prices">Цены</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Детейлинг премиум-класса</h1>
          <p>Полировка, керамика, PPF, химчистка — каждый автомобиль получает индивидуальный подход и result-ориентированный уход.</p>
          <div className="demo-hero-buttons">
            <a href="#portfolio" className="demo-btn demo-btn-primary">Наши работы</a>
            <a href="#prices" className="demo-btn demo-btn-secondary">Прайс-лист</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">800+</div><div className="demo-stat-label">Авто обработано</div></div>
          <div><div className="demo-stat-value">5</div><div className="demo-stat-label">Лет опыта</div></div>
          <div><div className="demo-stat-value">4.9</div><div className="demo-stat-label">Рейтинг</div></div>
          <div><div className="demo-stat-value">100%</div><div className="demo-stat-label">Гарантия качества</div></div>
        </div>
      </div>

      <section id="portfolio" className="demo-section">
        <h2>Портфолио работ</h2>
        <p>Фильтруйте по типу услуги</p>
        <div className="demo-filter-tabs">
          {filters.map(f => (
            <button
              key={f}
              className={`demo-btn ${activeFilter === f ? 'demo-btn-primary' : 'demo-btn-secondary'}`}
              style={{ padding: '8px 20px', fontSize: '13px' }}
              onClick={() => setActiveFilter(f)}
            >{f}</button>
          ))}
        </div>
        <div className="demo-gallery">
          {filtered.map(w => (
            <div className="demo-gallery-item" key={w.title}>
              <img src={w.img} alt={w.title} />
              <div className="demo-gallery-overlay"><span>{w.title}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Услуги</h2>
          <p>Полный спектр детейлинг-услуг</p>
          <div className="demo-cards">
            <div className="demo-card"><div className="demo-card-icon">✨</div><h3>Полировка кузова</h3><p>Удаление царапин, голограмм, восстановление заводского блеска. Одно- и многоэтапная.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🛡️</div><h3>Нанокерамика</h3><p>Защита кузова на 2-5 лет. Гидрофобный эффект, защита от химии и UV-лучей.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🎞️</div><h3>PPF плёнка</h3><p>Антигравийная полиуретановая плёнка — невидимая защита от сколов и царапин.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🧹</div><h3>Химчистка салона</h3><p>Глубокая очистка кожи, ткани, алькантары. Озонирование и удаление запахов.</p></div>
            <div className="demo-card"><div className="demo-card-icon">💧</div><h3>Антидождь</h3><p>Обработка стёкол гидрофобным составом. Улучшение видимости в дождь.</p></div>
            <div className="demo-card"><div className="demo-card-icon">🔧</div><h3>Предпродажная подготовка</h3><p>Комплексная подготовка для продажи: мойка, полировка, химчистка, устранение дефектов.</p></div>
          </div>
        </div>
      </section>

      <section id="prices" className="demo-section">
        <h2>Прайс-лист</h2>
        <p>Цены зависят от класса авто</p>
        <div className="demo-table-wrap">
          <table className="demo-table">
            <thead>
              <tr><th>Услуга</th><th>Седан</th><th>Кроссовер</th><th>Большой SUV</th></tr>
            </thead>
            <tbody>
              <tr><td>Полировка 1-этап</td><td>8 000 ₽</td><td>10 000 ₽</td><td>13 000 ₽</td></tr>
              <tr><td>Полировка 3-этап</td><td>15 000 ₽</td><td>18 000 ₽</td><td>22 000 ₽</td></tr>
              <tr><td>Нанокерамика</td><td>20 000 ₽</td><td>25 000 ₽</td><td>30 000 ₽</td></tr>
              <tr><td>PPF капот + бампер</td><td>25 000 ₽</td><td>30 000 ₽</td><td>35 000 ₽</td></tr>
              <tr><td>PPF полный кузов</td><td>150 000 ₽</td><td>180 000 ₽</td><td>220 000 ₽</td></tr>
              <tr><td>Химчистка салона</td><td>6 000 ₽</td><td>7 500 ₽</td><td>9 000 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contact" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Записаться</h2>
          <p>Оставьте заявку — перезвоним в течение 30 минут</p>
          <form className="demo-form" onSubmit={e => e.preventDefault()}>
            <div className="demo-form-row">
              <input className="demo-input" placeholder="Имя" />
              <input className="demo-input" placeholder="Телефон" />
            </div>
            <select className="demo-select">
              <option>Полировка</option>
              <option>Нанокерамика</option>
              <option>PPF плёнка</option>
              <option>Химчистка</option>
              <option>Другое</option>
            </select>
            <textarea className="demo-input" placeholder="Марка авто и пожелания" rows={3} style={{ resize: 'vertical' }}></textarea>
            <button className="demo-btn demo-btn-primary" type="submit">Отправить заявку</button>
          </form>
        </div>
      </section>

      <section className="demo-cta">
        <h2>Первый визит — скидка 15%</h2>
        <p>Защитите и преобразите свой автомобиль</p>
        <a href="#contact" className="demo-btn demo-btn-accent">Записаться</a>
      </section>

      <footer className="demo-footer">
        <p>© 2026 ProShine Studio — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
