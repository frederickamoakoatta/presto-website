export const IMAGES = {
  logo: '/logo/presto_logo.png',
  logoLight: '/logo/presto_logo.png',
  banner: '/assets/img/2440x1578.png',
  shape: '/assets/img/shape.png',
  thumb: '/assets/img/800x600.png',
}

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#capabilities' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export const SIDE_MENU = {
  about:
    'Presto is a cloud-based platform that keeps you in control of your data, your customers, and your profits. One connected system for every order, every branch, and every rider.',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#capabilities' },
    { label: 'How Presto Works', href: '#how-it-works' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const HERO_SLIDES = [
  '/sliders/presto-slider-01.jpg',
  '/sliders/presto-slider-02.jpg',
]

export const HERO = {
  kicker: 'Presto',
  title: ['One platform', 'for every order'],
  text: 'Run table service, ordering, delivery, and payments from one place',
  cta: 'Schedule Your Demo Now',
  ctaHref: '#contact',
}

export const WHY_PRESTO = {
  kicker: 'Why Presto?',
  title: 'One dashboard for the entire order-to-delivery journey',
  intro:
    'A busy restaurant doesn’t need to be weighed down by paper, and disjointed software. Owners cannot see live orders or payments for their branches. At midnight cash drawers, mobile money statements and manual rider logs have to be cross checked manually. To make matters worse every tool that gets disconnected is another subscription fee and another support line.',
  closer:
    'Presto brings the entire order-to-delivery journey onto one dashboard. We get rid of manual reconciliations, stop the financial leaks and give back the margins to your restaurant.',
  reasonsTitle: 'Why Restaurants Choose Presto',
  reasons: [
    {
      title: 'One Unified Platform',
      icon: 'flaticon-dinner-table',
      text: 'Replace four different vendors and four separate bills with a single connected system.',
    },
    {
      title: 'Maximize Your Profits',
      icon: 'flaticon-buffet',
      text: 'Stop paying heavy third-party marketplace commission fees. Presto gives you the direct customer ordering software to handle your own sales.',
    },
    {
      title: 'Mobile-Money Native',
      icon: 'flaticon-champagne-glass',
      text: 'Built explicitly around how local customers actually pay across the region.',
    },
    {
      title: 'Real-Time Everywhere',
      icon: 'flaticon-coffee-cup',
      text: 'Order status updates, payments, and delivery tracking sync instantly across every screen.',
    },
    {
      title: 'Multi-Branch Ready',
      icon: 'flaticon-hamburger',
      text: 'Manage a single café or a national multi-branch franchise from a single login.',
    },
    {
      title: 'Cloud-Powered, Offline-Resilient',
      icon: 'flaticon-moving-truck',
      text: 'The system keeps running and capturing transactions even if your internet connection drops out.',
    },
  ],
}

export const CAPABILITIES = {
  kicker: 'Request Demo Today',
  title: 'Everything You Need to Run Your Restaurant',
  intro:
    'Every capability in this section is built, working, and ready to deploy in your branches right now.',
  groups: [
    {
      title: 'Web POS',
      subtitle: 'Front-of-House Command Centre',
      icon: 'flaticon-dinner-table',
      intro: 'Run the floor, the kitchen queue, and the till from one fluid console.',
      points: [
        {
          title: 'Lightning Checkout',
          text: 'Browse menus by category, search items, build carts, and place dine-in, pickup, or delivery orders in seconds.',
        },
        {
          title: 'Offline-Resilient Core',
          text: 'Keep ringing up bills, seating tables, and printing receipts during an internet outage; the POS automatically syncs to the cloud the moment connectivity returns.',
        },
        {
          title: 'Hardware Flexibility',
          text: 'Run the POS on the hardware you already own (iPads or desktop tills).',
        },
        {
          title: 'Tables & Held Orders',
          text: 'Seat guests at specific tables and park incomplete orders to keep the line moving during peak rushes.',
        },
        {
          title: 'Discounts & Promo Handlers',
          text: 'Apply promotional discounts and redeem promo codes directly at the register with automated tax handling.',
        },
        {
          title: 'Send-Link-to-Pay',
          text: "Cashiers can enter a phone number or email at the register to text a secure, real-time mobile payment link straight to the diner's phone.",
        },
      ],
    },
    {
      title: 'The Diner Experience',
      subtitle: 'Customer App',
      icon: 'flaticon-hamburger',
      intro: 'From craving to secure checkout in a few taps, on the web platform or mobile app.',
      points: [
        {
          title: 'WhatsApp Ordering Bridge',
          text: 'Drop your custom Presto digital menu link directly into your WhatsApp Business bio or auto-replies; customers build their cart, check out, and send the order straight to your kitchen board.',
        },
        {
          title: 'Deep Item Customization',
          text: 'Allow diners to pick sizes, swap variants, and add specific modifiers (like “no onions”) with instant cart price adjustments.',
        },
        {
          title: 'Persistent Carts & Favorites',
          text: 'Saved meals and persistent sessions let recurring diners re-order their favorite dishes in a single tap.',
        },
        {
          title: 'Flexible Dining',
          text: 'Diners choose exactly how they want their meal—dine-in, pickup, or door-to-door delivery.',
        },
      ],
    },
    {
      title: 'The Delivery Experience',
      subtitle: 'Rider App',
      icon: 'flaticon-moving-truck',
      intro: 'Turn delivery into a guided and tracked workflow.',
      points: [
        {
          title: 'Unified Job Dashboard',
          text: 'Give riders a clean view of their assigned, pending, and in-progress deliveries with simple filtering.',
        },
        {
          title: 'Live GPS Navigation',
          text: "In-app turn-by-turn route maps with live ETAs streamed directly back to the restaurant's main POS screen.",
        },
        {
          title: 'One-Tap Customer Calling',
          text: 'Riders can call recipients directly from the map screen to coordinate drop-offs.',
        },
        {
          title: 'Automated Status Flow',
          text: 'Moving from Pending → Start Trip → In Route → Delivered instantly alerts both the cashier and the customer.',
        },
      ],
    },
    {
      title: 'Platform Capabilities & Cash Management',
      subtitle: 'Payments and inventory',
      icon: 'flaticon-champagne-glass',
      intro: 'Take payment and keep catalogs in sync without leaving the platform.',
      points: [
        {
          title: 'Mobile Money Payments',
          text: 'Direct integration with MTN, Vodafone, and AirtelTigo.',
        },
        {
          title: 'Send-Link-to-Pay',
          text: "Cashiers can enter a phone number or email at the register to text a secure, real-time mobile payment link straight to the diner's phone.",
        },
        {
          title: 'Instant POS Confirmation',
          text: "Server-push notifications flip unpaid tickets to 'Paid' on the POS screen the exact microsecond the customer approves the payment on their phone.",
        },
        {
          title: 'Built-in Inventory Control',
          text: 'Manage products, variants, categories, high-resolution food images, and location-specific taxes without leaving the POS system.',
        },
      ],
    },
  ],
}

export const SOFTTRIBE = {
  kicker: 'Top notch reliability',
  title: 'Powered by theSOFTtribe',
  paragraphs: [
    "Presto is engineered and backed by theSOFTtribe, one of Africa's longest-established indigenous software institutions.",
    'Founded in 1991, theSOFTtribe has spent more than three decades building and running mission-critical enterprise architectures across government, education, finance, and large-scale enterprise sectors.',
    'From national-scale payroll networks to core security databases, our platforms are designed for maximum reliability, uptime, and high-velocity processing. Presto brings that exact corporate reliability, strict data isolation, and localized support directly to the high-pressure environment of restaurant operations.',
  ],
}

export const HOW_IT_WORKS = {
  kicker: 'Presto POS',
  title: 'How Presto Works',
  intro: 'Migrating your restaurant operations to Presto follows a straightforward path:',
  steps: [
    {
      number: '01',
      title: 'Subscribe',
      icon: 'cloud',
      text: 'Your restaurant group is assigned its own isolated, secure cloud workspace, instantly accessible by your management teams.',
    },
    {
      number: '02',
      title: 'Menu Migration',
      icon: 'menu',
      text: 'Send us your current menus, modifiers, and branch list. Our dedicated onboarding team configures your digital catalogs.',
    },
    {
      number: '03',
      title: 'Onboard Staff',
      icon: 'users',
      text: 'Create secure, role-based logins for branch managers, cashiers and kitchen teams.',
    },
    {
      number: '04',
      title: 'Go Live',
      icon: 'rocket',
      text: "Open your doors with an offline-resilient POS, launch your direct web ordering channels, and share links to customers' phones for direct payment.",
    },
    {
      number: '05',
      title: 'Optimize Margins',
      icon: 'chart',
      text: 'Monitor real-time performance analytics, revenue mixes, and tax breakdowns across all branches from a single unified management console.',
    },
  ],
}

export const COMING_SOON = {
  kicker: 'Coming Soon',
  title: 'The Advanced Restaurant Suite',
  intro:
    'While Presto’s core ordering, payment, and delivery features are completely live and ready to use, our active roadmap introduces deeper scalability tools for growing brands:',
  items: [
    {
      title: 'Card Payment Infrastructure',
      icon: 'card',
      text: 'Visa and Mastercard processing.',
    },
    {
      title: 'Loyalty, Vouchers & Rewards',
      icon: 'gift',
      text: 'Rewards, point accumulation rules, and targeted offers to drive repeat orders.',
    },
    {
      title: 'Rider Earnings & KYC Suite',
      icon: 'id',
      text: 'Automated in-app payouts and document verification.',
    },
    {
      title: 'Advanced Intelligence & Forecasting',
      icon: 'trend',
      text: 'Monthly dashboards and sales trend forecasting.',
    },
    {
      title: 'High-Volume Scaling Pipelines',
      icon: 'layers',
      text: 'Event-driven async pipelines designed to support hundreds of franchise locations simultaneously.',
    },
  ],
}

export const WHO_ITS_FOR = {
  kicker: 'Audiences',
  title: 'Who Presto Is For',
  personas: [
    {
      title: 'Quick-Service Restaurants (QSR) & Cafés',
      icon: 'coffee',
      text: 'Speed up front-of-house lines with lightning-fast checkouts, handle heavy phone-order volume with payment links, and coordinate quick pickups.',
    },
    {
      title: 'Multi-Branch Restaurant Chains',
      icon: 'store',
      text: 'Monitor multiple kitchens, standardise menus across regions, and isolate regional tax structures from one central master account.',
    },
    {
      title: 'Fine Dining & Casual Restaurants',
      icon: 'dining',
      text: 'Manage floor layouts, seat tables accurately, hold open tabs for guests, and coordinate internal delivery staff cleanly.',
    },
  ],
}

export const FAQS = {
  kicker: 'Support',
  title: 'Frequently Asked Questions',
  items: [
    {
      question: 'What is Presto and how does it save us money?',
      answer:
        'Presto is a unified restaurant management and POS platform. It saves you money by replacing separate subscriptions for point-of-sale systems, online ordering websites, and dispatcher tracking software with a single platform subscription, while enabling you to cut out the high commission fees charged by third-party food delivery aggregates.',
    },
    {
      question: 'What happens if our branch internet goes down?',
      answer:
        'Presto is built with an offline-resilient core. Your staff can continue ringing up bills, processing cash sales, managing tables, and printing physical kitchen receipts. The moment your internet link restabilises, the local transactions automatically push up to your central cloud database.',
    },
    {
      question: 'Do we need to purchase specific hardware or terminals?',
      answer:
        'No. Presto is designed to work on the hardware you already have. The staff POS is accessed securely via standard web browsers on laptops, PCs, or existing tablets, and the consumer and rider applications run natively on standard Android or iOS smartphones.',
    },
    {
      question: 'How secure is our financial and customer data?',
      answer:
        "Presto uses true multi-tenancy software architecture, meaning your restaurant's data is strictly isolated from everyone else. Every request is secured, ensuring only authorized cashiers, managers, and owners can see your financials.",
    },
  ],
}

export const BRANCH_OPTIONS = [
  { value: '1', label: '1 branch' },
  { value: '2-5', label: '2–5 branches' },
  { value: '6-15', label: '6–15 branches' },
  { value: '16+', label: '16+ branches' },
]

export const FINAL_CTA = {
  kicker: 'Get started',
  title: 'Put Your Restaurant on One Platform',
  text: 'Take control of your ordering channels, protect your food margins, and manage every branch from one live screen.',
  primary: 'Request a Strategic Live Demo',
  secondary: 'Speak with our team',
}

export const FOOTER = {
  blurb:
    'One connected platform for every order, every branch, and every rider. Built for modern restaurants and scaling multi-branch chains.',
  links: NAV_ITEMS,
  legal: ['Privacy', 'Terms', 'Support'],
}
