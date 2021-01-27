import logoSrc from '../../assets/img/logo.png';

export const Logo = () => (
  <a href={'/'} className="logo">
    <img src={logoSrc} alt="" className="logo__img" />
    <span className="logo__text">
      <span className="logo__title">Timra.ru</span>
      <span className="logo__subtitle">Front-end разработка</span>
    </span>
  </a>
);
