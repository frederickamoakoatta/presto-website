import { useMemo, useState } from 'react'
import { MENU_FILTERS, MENU_ITEMS } from '../../data/home'
import { SectionHeading } from '../ui/SectionHeading'
import { MenuCard } from './MenuCard'

export function FoodMenu() {
  const [filter, setFilter] = useState('all')

  const items = useMemo(
    () =>
      MENU_ITEMS.filter((item) => filter === 'all' || item.categories.includes(filter)),
    [filter],
  )

  return (
    <div id="menu" className="food-menu-area inc-isotop default-padding">
      <div className="container">
        <div className="row">
          <SectionHeading
            kicker="Discover"
            title="Our Menu"
            text="While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old"
          />
        </div>
        <div className="food-menu-area text-center">
          <div className="row">
            <div className="col-md-12 food-menu-content">
              <div className="mix-item-menu text-center">
                {MENU_FILTERS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={filter === item.id ? 'active' : ''}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="row text-center masonary">
                <div id="portfolio-grid" className="menu-lists text-center col-3">
                  {items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
