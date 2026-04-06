import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './detailing.css'

const works = [
  { title: 'BMW X5 — полировка', img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80', tag: 'Полировка' },
  { title: 'Mercedes GLE — керамика', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80', tag: 'Керамика' },
  { title: 'Audi A7 — PPF плёнка', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80', tag: 'Плёнка' },
  { title: 'Porsche 911 — детейлинг', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', tag: 'Детейлинг' },
  { title: 'Toyota Camry — химчистка', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80', tag: 'Химчистка' },
  { title: 'Range Rover — нанокерамика', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80', tag: 'Керамика' },
]

const services = [
  { icon: '✨', title: 'Полировка', desc: 'Восстановительная и защитная полировка кузова. Удаление царапин, голограмм и матовости.' },
  { icon: '🛡️', title: 'Нанокерамика', desc: 'Керамическое покрытие с гидрофобным эффектом. Защита ЛКП до 5 лет.' },
  { icon: '🎞️', title: 'PPF плёнка', desc: 'Антигравийная полиуретановая плёнка. Невидимая защита от сколов и царапин.' },
  { icon: '🧽', title: 'Химчистка', desc: 'Глубокая химчистка салона с обработкой кожи, пластика и текстиля.' },
  { icon: '💧', title: 'Антидождь', desc: 'Обработка стёкол и зеркал нанососотавом для идеальной видимости.' },
  { icon: '🏁', title: 'Предпродажная подготовка', desc: 'Комплексная подготовка автомобиля к продаже: полировка, химчистка, мелкий ремонт.' },
]

const prices = [
  { name: 'Полировка кузова', sedan: 'от 450 BYN', suv: 'от 550 BYN', full: 'от 700 BYN' },
  { name: 'Нанокерамика', sedan: 'от 750 BYN', suv: 'от 900 BYN', full: 'от 1 200 BYN' },
  { name: 'PPF плёнка (перед)', sedan: 'от 1 100 BYN', suv: 'от 1 300 BYN', full: 'от 1 600 BYN' },
  { name: 'Химчистка салона', sedan: 'от 250 BYN', suv: 'от 300 BYN', full: 'от 400 BYN' },
  { name: 'Антидождь', sedan: 'от 90 BYN', suv: 'от 110 BYN', full: 'от 130 BYN' },
  { name: 'Предпродажная подготовка', sedan: 'от 600 BYN', suv: 'от 750 BYN', full: 'от 1 000 BYN' },
]

const tags = ['Все', 'Полировка', 'Керамика', 'Плёнка', 'Детейлинг', 'Химчистка']

export default function DetailingDemo() {
  const [filter, setFilter] = useState('Все')
  const filtered = filter === 'Все' ? works : works.filter(w => w.tag === filter)

  return (
    <div className="dt">
      <Link to="/" className="demo-back">← WEB CAN</Link>

      {/* Nav */}
      <nav className="dt-nav">
        <div className="dt-nav-brand">💎 ProShine Studio</div>
        <ul className="dt-nav-links">
          <li><a href="#portfolio">Портфолио</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#prices">Цены</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
        <a href="#contact"><button className="dt-nav-cta">Записаться</button></a>
      </nav>

      {/* Hero */}
      <section className="dt-hero">
        <div className="dt-hero-content">
          <h1>Премиальный <span>детейлинг</span> вашего автомобиля</h1>
          <p>Профессиональный уход, восстановление и защита кузова. Используем только сертифицированные составы мирового класса.</p>
          <div className="dt-hero-btns">
            <a href="#contact"><button className="dt-btn-gold">Записаться</button></a>
            <a href="#portfolio"><button className="dt-btn-outline">Наши работы</button></a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="dt-stats">
        <div className="dt-stat">
          <div className="dt-stat-val">800+</div>
          <div className="dt-stat-lbl">Авто обработано</div>
        </div>
        <div className="dt-stat">
          <div className="dt-stat-val">5 лет</div>
          <div className="dt-stat-lbl">Опыта работы</div>
        </div>
        <div className="dt-stat">
          <div className="dt-stat-val">4.9</div>
          <div className="dt-stat-lbl">Средний рейтинг</div>
        </div>
        <div className="dt-stat">
          <div className="dt-stat-val">100%</div>
          <div className="dt-stat-lbl">Гарантия качества</div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="dt-section" id="portfolio">
        <h2 className="dt-section-title">Наши работы</h2>
        <p className="dt-section-sub">Результаты, которые говорят сами за себя</p>
        <div className="dt-tabs">
          {tags.map(t => (
            <button key={t} className={`dt-tab${filter === t ? ' active' : ''}`} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
        <div className="dt-gallery">
          {filtered.map((w, i) => (
            <div className="dt-gallery-item" key={i}>
              <img src={w.img} alt={w.title} loading="lazy" />
              <div className="dt-gallery-overlay"><span>{w.title}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="dt-section" id="services" style={{ background: 'var(--dt-bg2)' }}>
        <h2 className="dt-section-title">Наши услуги</h2>
        <p className="dt-section-sub">Полный спектр услуг по уходу за автомобилем</p>
        <div className="dt-services">
          {services.map((s, i) => (
            <div className="dt-service" key={i}>
              <div className="dt-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prices */}
      <section className="dt-section" id="prices">
        <h2 className="dt-section-title">Стоимость услуг</h2>
        <p className="dt-section-sub">Прозрачные цены без скрытых доплат</p>
        <div className="dt-table-wrap">
          <table className="dt-table">
            <thead>
              <tr>
                <th>Услуга</th>
                <th>Седан</th>
                <th>Кроссовер</th>
                <th>Большой SUV</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.sedan}</td>
                  <td>{p.suv}</td>
                  <td>{p.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact */}
      <section className="dt-section" id="contact" style={{ background: 'var(--dt-bg2)' }}>
        <h2 className="dt-section-title">Запись на детейлинг</h2>
        <p className="dt-section-sub">Оставьте заявку — мы свяжемся в течение 30 минут</p>
        <div className="dt-form-wrap">
          <form className="dt-form" onSubmit={e => e.preventDefault()}>
            <input className="dt-input" type="text" placeholder="Ваше имя" required />
            <input className="dt-input" type="tel" placeholder="Телефон" required />
            <select className="dt-select" defaultValue="">
              <option value="" disabled>Выберите услугу</option>
              <option>Полировка</option>
              <option>Нанокерамика</option>
              <option>PPF плёнка</option>
              <option>Химчистка</option>
              <option>Антидождь</option>
              <option>Предпродажная подготовка</option>
            </select>
            <textarea className="dt-textarea" placeholder="Марка и модель авто" />
            <button className="dt-btn-gold" type="submit">Отправить заявку</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="dt-cta">
        <h2>Готовы преобразить ваш автомобиль?</h2>
        <p>Запишитесь на бесплатную консультацию уже сегодня</p>
        <a href="#contact"><button className="dt-cta-btn">Связаться с нами</button></a>
      </section>

      {/* Footer */}
      <footer className="dt-footer">© 2026 ProShine Studio — Демо-сайт от WEB CAN</footer>

      <div className="demo-banner">
        ✨ Это демо-сайт — пример работы WEB CAN для детейлинг-студий
        <Link to="/#niches">Заказать такой же</Link>
      </div>
    </div>
  )
}
