import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

const allParts = [
  { id: 1, name: 'Колодки тормозные передние', brand: 'Brembo', car: 'Toyota Camry', price: 4200, cat: 'Тормоза', inStock: true },
  { id: 2, name: 'Фильтр масляный', brand: 'Mann', car: 'BMW 3 Series', price: 850, cat: 'Фильтры', inStock: true },
  { id: 3, name: 'Амортизатор передний', brand: 'KYB', car: 'Hyundai Tucson', price: 6500, cat: 'Подвеска', inStock: true },
  { id: 4, name: 'Свечи зажигания (комплект)', brand: 'NGK', car: 'Volkswagen Tiguan', price: 3200, cat: 'Двигатель', inStock: true },
  { id: 5, name: 'Ремень ГРМ + ролики', brand: 'Gates', car: 'Kia Sportage', price: 8900, cat: 'Двигатель', inStock: false },
  { id: 6, name: 'Радиатор охлаждения', brand: 'Nissens', car: 'Mercedes C-Class', price: 12500, cat: 'Охлаждение', inStock: true },
  { id: 7, name: 'Стойка стабилизатора', brand: 'Lemforder', car: 'Audi A4', price: 2800, cat: 'Подвеска', inStock: true },
  { id: 8, name: 'Комплект сцепления', brand: 'LUK', car: 'Toyota Camry', price: 15000, cat: 'Трансмиссия', inStock: false },
  { id: 9, name: 'Фильтр воздушный', brand: 'Mahle', car: 'BMW 3 Series', price: 1200, cat: 'Фильтры', inStock: true },
]

const categories = ['Все', 'Тормоза', 'Фильтры', 'Подвеска', 'Двигатель', 'Охлаждение', 'Трансмиссия']

function fmt(n) { return new Intl.NumberFormat('ru-RU').format(n) }

export default function AutoPartsDemo() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Все')
  const [cart, setCart] = useState([])

  const filtered = useMemo(() => {
    return allParts.filter(p => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.car.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())
      const matchCat = cat === 'Все' || p.cat === cat
      return matchSearch && matchCat
    })
  }, [search, cat])

  const addToCart = (part) => {
    if (!cart.find(c => c.id === part.id)) {
      setCart([...cart, part])
    }
  }

  const cartTotal = cart.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className="demo-page theme-autoparts">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для магазинов автозапчастей<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="demo-nav">
        <div className="demo-nav-inner">
          <div className="demo-nav-brand">⚙️ АвтоДетали</div>
          <div className="demo-nav-links">
            <a href="#catalog">Каталог</a>
            <a href="#advantages">О нас</a>
            <a href="#contact">Контакты</a>
            <span className="demo-cart-badge">
              🛒 {cart.length} · {fmt(cartTotal)} ₽
            </span>
          </div>
        </div>
      </nav>

      <section className="demo-hero">
        <div className="demo-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80)' }}></div>
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Запчасти для вашего авто</h1>
          <p>Подбор по марке, модели и VIN. Оригинал и качественные аналоги с гарантией. Доставка за 1-2 дня.</p>
          <div className="demo-hero-buttons">
            <a href="#catalog" className="demo-btn demo-btn-primary">Найти запчасть</a>
          </div>
        </div>
      </section>

      <div className="demo-section">
        <div className="demo-stats">
          <div><div className="demo-stat-value">50K+</div><div className="demo-stat-label">Позиций в наличии</div></div>
          <div><div className="demo-stat-value">1-2</div><div className="demo-stat-label">Дня доставка</div></div>
          <div><div className="demo-stat-value">100%</div><div className="demo-stat-label">Гарантия подбора</div></div>
          <div><div className="demo-stat-value">12 мес</div><div className="demo-stat-label">Гарантия возврата</div></div>
        </div>
      </div>

      <section id="catalog" className="demo-section">
        <h2>Каталог запчастей</h2>
        <p>Найдите нужную деталь по названию, марке или авто</p>

        <div className="demo-search">
          <input className="demo-input" placeholder="Поиск: колодки, фильтр, BMW..." value={search} onChange={e => setSearch(e.target.value)} />
          <select className="demo-select" style={{ maxWidth: '200px' }} value={cat} onChange={e => setCat(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="demo-table-wrap">
          <table className="demo-table">
            <thead><tr><th>Деталь</th><th>Бренд</th><th>Авто</th><th>Цена</th><th>Наличие</th><th></th></tr></thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.brand}</td>
                  <td>{p.car}</td>
                  <td className="demo-text-accent">{fmt(p.price)} ₽</td>
                  <td>{p.inStock ? <span className="demo-badge demo-badge-green">В наличии</span> : <span className="demo-badge demo-badge-orange">Под заказ</span>}</td>
                  <td>
                    <button
                      className="demo-btn demo-btn-primary"
                      style={{ padding: '6px 16px', fontSize: '12px' }}
                      onClick={() => addToCart(p)}
                      disabled={cart.find(c => c.id === p.id)}
                    >{cart.find(c => c.id === p.id) ? '✓' : 'В корзину'}</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan={6} className="demo-text-dim" style={{ textAlign: 'center' }}>Ничего не найдено</td></tr>}
            </tbody>
          </table>
        </div>
      </section>

      <section id="advantages" className="demo-section-full demo-section-dark">
        <div className="demo-section-inner">
          <h2>Почему выбирают нас</h2>
          <p>Надёжность и удобство в каждой детали</p>
          <div className="demo-advantages">
            <div className="demo-advantage"><div className="demo-advantage-icon">🔍</div><div><h4>Подбор по VIN</h4><p>100% совместимость — подберём деталь по VIN-номеру вашего авто</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">🚚</div><div><h4>Быстрая доставка</h4><p>Доставка за 1-2 дня по городу, 3-5 дней по России</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">🔄</div><div><h4>Возврат 12 месяцев</h4><p>Не подошла деталь — вернём деньги без вопросов</p></div></div>
            <div className="demo-advantage"><div className="demo-advantage-icon">💰</div><div><h4>Честные цены</h4><p>Работаем напрямую с поставщиками — без лишних наценок</p></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="demo-cta">
        <h2>Не нашли нужную запчасть?</h2>
        <p>Отправьте VIN — подберём за 15 минут</p>
        <div className="demo-cta-form">
          <input placeholder="VIN номер или марка/модель" />
          <button className="demo-btn demo-btn-accent">Подобрать</button>
        </div>
      </section>

      <footer className="demo-footer">
        <p>© 2026 АвтоДетали — Демо-сайт от WEB CAN</p>
      </footer>
    </div>
  )
}
