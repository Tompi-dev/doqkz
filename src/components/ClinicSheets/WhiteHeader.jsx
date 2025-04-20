import './WhiteHeader.css';


const WhiteHeader = () => {
  return (
    <div>
    <div className="white-header">
      <div className="breadcrumb">
        <a href="/">Главная</a> / <span>Акушеры-гинекологи</span>
      </div>

      <div className="title-block">
        <h1>Акушер-гинекологи, Алматы (161)</h1>
        <p className="short-description">
          <strong>Акушер-гинеколог</strong> — врач, который контролирует состояние женщины во&nbsp;время беременности, родов и&nbsp;в&nbsp;послеродовом периоде.&nbsp;
          <a href="#">Читать далее</a>
        </p>
      </div>

      <div className="filters">
        <button className="filter-btn">По умолчанию ▼</button>
        <button className="filter-btn">Рядом</button>
        <button className="filter-btn">Дата приёма</button>
      </div>

      
    </div>
    <div className="gradient">
        <h3>Удобная запись без оплаты</h3>
      </div>

     

      
    </div>
  );
};

export default WhiteHeader;
