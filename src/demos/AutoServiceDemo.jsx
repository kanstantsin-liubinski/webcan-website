import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

export default function AutoServiceDemo() {
  const [tab, setTab] = useState('diag')

  const servicesTabs = {
    diag: { title: 'Диагностика', items: ['Компьютерная диагностика — 1 500 ₽', 'Диагностика ходовой — 1 000 ₽', 'Проверка перед покупкой — 3 500 ₽', 'Считывание ошибок — 500 ₽'] },
    engine: { title: 'Двигатель', items: ['Замена масла — от 2 000 ₽', 'Замена ремня ГРМ — от 8 000 ₽', 'Ремонт турбины — от 15 000 ₽', 'Замена прокладки ГБЦ — от 12 000 ₽'] },
    suspension: { title: 'Ходовая', items: ['Замена амортизаторов — от 3 000 ₽', 'Замена сайлентблоков — от 2 500 ₽', 'Развал-схождение — 2 000 ₽', 'Замена ступичного подшипника — от 4 000 ₽'] },
    brakes: { title: 'Тормоза', items: ['Замена колодок — от 2 000 ₽', 'Замена дисков — от 4 000 ₽', 'Прокачка тормозов — 1 500 ₽', 'Замена суппорта — от 5 000 ₽'] },
  }

  return (
    <div className="demo-page theme-autoservice">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для автосервисов<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="demo-nav">
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">🔧 АвтоМастер PRO</div>
          <div className="demo-nav-links">
            <a href="#services">Услуги</a>
            <a href="#advantages">Почему мы</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Ремонт, которому доверяют</h1>
          <p>Честный автосервис с прозрачными ценами. Гарантия на все работы. Оригинальные запчасти и сертифицированные мастера.</p>
          <div className="demo-hero-buttons">
            <a href="#contact" className="demo-btn demo-btn-primary">Записаться на ремонт</a>
            <a href="#services" className="demo-btn demo-btn-secondary">Смотреть услуги</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">8</div><div className="demo-stat-label">Лет на рынке</div></div>
          <div><div className="demo-stat-value">15K+</div><div className="demo-stat-label">Авто отремонтировано</div></div>
          <div><div className="demo-stat-value">12</div><div className="demo-stat-label">Мастеров в команде</div></div>
          <div><div className="demo-stat-value">1 год</div><div className="demo-stat-label">Гарантия на работы</div></div>
        </div>
      </div>

      <section id="services" className="demo-section">
        <h2>Услуги и цены</h2>
        <p>Выберите категорию</p>
        <div className="demo-filter-tabs">
          {Object.entries(servicesTabs).map(([key, val]) => (
            <button
              key={key}
              className={`demo-btn ${tab === key ? 'demo-btn-primary' : 'demo-btn-secondary'}`}
              style={{ padding: '10px 24px', fontSize: '14px' }}
              onClick={() => setTab(key)}
            >{val.title}</button>
          ))}
        </div>
        <div className="demo-tab-content">
          <h3>{servicesTabs[tab].title}</h3>
          {servicesTabs[tab].items.map((item, i) => (
            <div key={i} className="demo-tab-item">
              <span>{item.split(' — ')[0]}</span>
              <span className="demo-tab-item-price">{item.split(' — ')[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="advantages" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Почему нам доверяют</h2>
          <p>Каждая деталь работает на ваше спокойствие</p>
          <div className="demo-advantages">
            <div className="demo-advantage"><div className="demo-advantage-icon">📹</div><div><h4>Видеоотчёт</h4><p>Снимаем весь процесс ремонта и отправляем вам в мессенджер</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">📋</div><div><h4>Прозрачные цены</h4><p>Полная смета до начала работ. Без скрытых доплат</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">🛡️</div><div><h4>Гарантия 1 год</h4><p>Письменная гарантия на все выполненные работы</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">🚗</div><div><h4>Подменное авто</h4><p>Бесплатное подменное авто на время ремонта свыше 2 дней</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">⚙️</div><div><h4>Оригинальные запчасти</h4><p>Работаем только с проверенными поставщиками OEM-деталей</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">⏰</div><div><h4>Точные сроки</h4><p>Называем срок — выполняем. При задержке — скидка 10%</p></div></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="demo-section">
        <h2>Отзывы</h2>
        <p>Реальные отзывы наших клиентов</p>
        <div className="demo-reviews">
          <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Менял ГРМ на Audi A4 — ребята сделали за день, всё показали на видео. Цена как договаривались."</p><div className="demo-review-author">— Александр К.</div></div>
          <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Приезжала на диагностику перед покупкой б/у авто. Нашли проблемы, которые продавец скрывал. Спасибо!"</p><div className="demo-review-author">— Екатерина В.</div></div>
          <div className="demo-review"><div className="demo-review-stars">★★★★★</div><p>"Ремонт ходовой — всё чётко, по списку. Дали гарантию, приехал проверить через 3 месяца — всё ок."</p><div className="demo-review-author">— Виктор Д.</div></div>
          <div className="demo-review"><div className="demo-review-stars">★★★★☆</div><p>"Хороший сервис, единственный минус — ожидание записи в пиковые дни."</p><div className="demo-review-author">— Ольга М.</div></div>
        </div>
      </section>

      <section id="contact" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Записаться на ремонт</h2>
          <p>Опишите проблему — предварительно оценим стоимость</p>
          <form className="demo-form" onSubmit={e => e.preventDefault()}>
            <div className="demo-form-row">
              <input className="demo-input" placeholder="Имя" />
              <input className="demo-input" placeholder="Телефон" />
            </div>
            <input className="demo-input" placeholder="Марка и модель авто" />
            <textarea className="demo-input" placeholder="Опишите проблему или нужную услугу" rows={3} style={{ resize: 'vertical' }}></textarea>
            <button className="demo-btn demo-btn-primary" type="submit">Отправить заявку</button>
          </form>
        </div>
      </section>

      <section className="demo-cta">
        <h2>Бесплатная диагностика при ремонте</h2>
        <p>Запишитесь сегодня — диагностика в подарок</p>
        <a href="#contact" className="demo-btn demo-btn-accent">Записаться</a>
      </section>

      <footer className="demo-footer">
        <p>© 2026 АвтоМастер PRO — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
