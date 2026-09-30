import { useEffect, useState } from 'react';
import {
  ArrowUpRight, CalendarDays, ChevronRight, Heart, MapPin, Menu, MessageCircle,
  Music2, PawPrint, Phone, Scissors, Sparkles, Stethoscope, X,
} from 'lucide-react';
import { careImage, differentiators, groomingImage, heroImage, homeImage, instagramUrl, mapsUrl, services, specialties, whatsappUrl } from './data';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
  </svg>
);

const LinkButton = ({ children, href, variant = 'primary', icon: Icon = ArrowUpRight, target }) => (
  <a className={`button button-${variant}`} href={href} target={target} rel={target ? 'noreferrer' : undefined}>
    {children}<Icon data-icon="inline-end" aria-hidden="true" />
  </a>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSpecialty, setActiveSpecialty] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [['servicos', 'Serviços'], ['especialidades', 'Especialidades'], ['sobre', 'A clínica'], ['localizacao', 'Onde estamos']];
  const goTo = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Vira Lata Vira Amor — início">
          <img src="/assets/logo-mark.svg" alt="" className="brand-mark" />
          <span className="brand-name"><strong>Vira Lata</strong><em>Vira Amor</em></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
        </button>
        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navItems.map(([id, label]) => <a href={`#${id}`} key={id} onClick={goTo}>{label}</a>)}
          <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-blue">
          <div className="hero-content reveal">
            <p className="eyebrow"><PawPrint aria-hidden="true" /> Cuidado para a vida toda</p>
            <h1>Todo cuidado que seu pet merece, <span>em um só lugar.</span></h1>
            <p className="hero-copy">Atendimento veterinário, especialistas, estética animal e pet shop para cuidar do seu melhor amigo.</p>
            <div className="hero-actions">
              <LinkButton href={whatsappUrl} target="_blank" icon={CalendarDays}>Agendar consulta</LinkButton>
              <LinkButton href={whatsappUrl} target="_blank" variant="ghost" icon={MessageCircle}>Falar no WhatsApp</LinkButton>
            </div>
            <div className="hero-note"><span className="dot" /> Vila da Saúde, São Paulo</div>
          </div>
          <div className="hero-art reveal reveal-delay">
            <div className="hero-photo-wrap"><img src={heroImage} alt="Cão e gato juntos em um momento de cuidado" fetchPriority="high" /></div>
            <div className="hero-sticker"><Heart fill="currentColor" aria-hidden="true" /><span>Seu pet<br /><strong>bem cuidado</strong></span></div>
            <div className="hero-scribble" aria-hidden="true">cuidado que<br />se sente</div>
          </div>
        </section>

        <section className="quick-links" aria-label="Acessos rápidos">
          <a href="#servicos"><span className="quick-number">01</span><span><strong>Conheça nossos serviços</strong><small>Do veterinário ao banho e tosa</small></span><ChevronRight aria-hidden="true" /></a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><span className="quick-number">02</span><span><strong>Converse com a gente</strong><small>Agende pelo WhatsApp</small></span><ChevronRight aria-hidden="true" /></a>
          <a href={mapsUrl} target="_blank" rel="noreferrer"><span className="quick-number">03</span><span><strong>Venha nos visitar</strong><small>R. Itapiru, 719 — Vila da Saúde</small></span><ChevronRight aria-hidden="true" /></a>
        </section>

        <section id="sobre" className="intro section-light">
          <div className="intro-image reveal"><img src={careImage} alt="Veterinária examinando um cão com atenção" loading="lazy" /><span className="image-caption">Cuidado próximo, todos os dias.</span></div>
          <div className="intro-copy reveal reveal-delay">
            <p className="section-kicker">Um lugar para cuidar sem pressa</p>
            <h2>Quando ele precisa, você encontra <span>cuidado de verdade.</span></h2>
            <p>Na Vira Lata Vira Amor, cada atendimento começa pela escuta. Reunimos clínica veterinária, especialistas, estética animal e pet shop para que você resolva o que precisa com mais tranquilidade — e seu pet se sinta seguro em cada visita.</p>
            <p>De cães brincalhões a gatos mais reservados, o nosso jeito de cuidar respeita a personalidade de cada animal.</p>
            <a className="text-link" href="#especialidades">Conheça nossas especialidades <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section id="servicos" className="services section-turquoise">
          <div className="section-heading reveal"><div><p className="section-kicker">Cuidado que acompanha a rotina</p><h2>Para cuidar bem, <span>por inteiro.</span></h2></div><p>Serviços pensados para o dia a dia do seu pet — do cuidado veterinário aos momentos de bem-estar.</p></div>
          <div className="service-list reveal">
            {services.map((service, index) => <article className="service-row" key={service.title}><span className="service-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.detail}</p><ArrowUpRight aria-hidden="true" /></article>)}
          </div>
        </section>

        <section id="especialidades" className="specialties section-light">
          <div className="section-heading reveal"><div><p className="section-kicker">Conhecimento para cada necessidade</p><h2>Especialidades para olhar <span>mais de perto.</span></h2></div><p>Quando o cuidado precisa de uma atenção específica, você encontra orientação especializada para seguir com mais segurança.</p></div>
          <div className="specialty-layout reveal">
            <div className="specialty-feature"><div className="specialty-orbit"><Stethoscope aria-hidden="true" /><span>12 áreas de cuidado</span></div><h3>{specialties[activeSpecialty][0]}</h3><p>{specialties[activeSpecialty][1]} e acompanhamento com atenção aos detalhes.</p></div>
            <div className="specialty-grid" role="list" aria-label="Especialidades veterinárias">
              {specialties.map(([name, tag], index) => <button type="button" className={`specialty-item ${activeSpecialty === index ? 'is-active' : ''}`} key={name} onClick={() => setActiveSpecialty(index)}><span>{name}</span><small>{tag}</small><ChevronRight aria-hidden="true" /></button>)}
            </div>
          </div>
        </section>

        <section className="manifesto section-yellow">
          <div className="manifesto-shape" aria-hidden="true"><PawPrint /><PawPrint /><PawPrint /></div>
          <div className="manifesto-copy reveal"><p className="section-kicker">O jeito Vira Lata Vira Amor</p><h2>O cuidado mora <span>nos detalhes.</span></h2><p>Na forma de receber, de explicar, de esperar o tempo do pet. Em cada escolha, a gente acredita que acolhimento também faz parte do tratamento.</p></div>
          <div className="difference-list reveal reveal-delay">{differentiators.map((item) => <div className="difference-item" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}</div>
        </section>

        <section className="gallery section-blue">
          <div className="gallery-heading reveal"><p className="section-kicker">Cenas de cuidado</p><h2>Um pet feliz muda <span>o dia inteiro.</span></h2><p>Imagens provisórias enquanto chegam as fotos da clínica, da fachada e do nosso espaço. A experiência foi preparada para receber a identidade real da Vira Lata Vira Amor.</p></div>
          <div className="gallery-grid reveal reveal-delay"><figure className="gallery-large"><img src={homeImage} alt="Cão e gato em um momento de afeto" loading="lazy" /><figcaption>Afeto que faz parte da rotina.</figcaption></figure><figure><img src={groomingImage} alt="Cão após banho e tosa" loading="lazy" /><figcaption>Banho e tosa com calma.</figcaption></figure><div className="gallery-note"><Sparkles aria-hidden="true" /><span>Espaço para<br /><strong>suas fotos</strong></span></div></div>
        </section>

        <section className="instagram section-light">
          <div className="instagram-mark"><InstagramIcon aria-hidden="true" /><span>@viralataviraamorpetshop</span></div>
          <div className="instagram-copy"><h2>O cuidado também continua <span>lá no nosso dia a dia.</span></h2><p>Acompanhe novidades, bastidores e momentos fofos da nossa rotina pelo Instagram.</p><LinkButton href={instagramUrl} target="_blank" variant="outline" icon={InstagramIcon}>Ver nosso Instagram</LinkButton></div>
        </section>

        <section id="localizacao" className="location section-turquoise">
          <div className="location-card reveal"><div className="location-icon"><MapPin aria-hidden="true" /></div><p className="section-kicker">Estamos perto de você</p><h2>Vila da Saúde, <span>São Paulo.</span></h2><p>R. Itapiru, 719<br />Vila da Saúde, São Paulo — SP</p><LinkButton href={mapsUrl} target="_blank" variant="dark" icon={MapPin}>Como chegar</LinkButton></div>
          <div className="location-aside reveal reveal-delay"><div className="map-lines" aria-hidden="true"><span /><span /><span /></div><p>Uma visita começa antes de chegar.</p><h3>Fale com a gente, tire suas dúvidas e encontre o melhor cuidado para o seu pet.</h3><div className="location-links"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp</a><a href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon aria-hidden="true" /> Instagram</a></div></div>
        </section>

        <section className="final-cta section-blue"><div className="cta-paw"><PawPrint aria-hidden="true" /></div><div className="reveal"><p className="section-kicker">Seu melhor amigo merece</p><h2>Um lugar para ser <span>bem cuidado.</span></h2><p>Agende uma consulta ou conte para a gente o que o seu pet precisa.</p><LinkButton href={whatsappUrl} target="_blank" icon={MessageCircle}>Falar pelo WhatsApp</LinkButton></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src="/assets/logo-mark.svg" alt="" className="brand-mark" /><div><strong>Vira Lata Vira Amor</strong><span>Clínica Veterinária e Pet Shop</span></div></div><div className="footer-contact"><a href="tel:+5511992901410"><Phone aria-hidden="true" /> (11) 99290-1410</a><span>R. Itapiru, 719 — Vila da Saúde</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Vira Lata Vira Amor</span><a href="#top">Voltar ao início <ArrowUpRight aria-hidden="true" /></a></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle aria-hidden="true" /><span>WhatsApp</span></a>
    </div>
  );
}

export default App;
