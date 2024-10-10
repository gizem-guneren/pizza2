import React from 'react';
import './pizza.css';

function App() {
  
  const [crust, setCrust] = React.useState('');
  const [note, setNote] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  const handleCrustChange = (e) => setCrust(e.target.value);
  const handleNoteChange = (e) => setNote(e.target.value);
  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

 
  const handleExtrasChange = (e) => {
   
  };

  
  const handleSizeChange = (e) => {
   
  };

  return (
    <div>
      <div className="header">
        <div className="header-img">
          <img
            src="https://raw.githubusercontent.com/gizem-guneren/pizza2/5aa65359b38f2359e4ccb649473323fc9cdaeb07/Assets/Iteration-1-assets/logo.svg"
            alt="Pizza Logo"
          />
        </div>
        <div className="choice">
          <img
            src="https://github.com/gizem-guneren/pizza2/blob/main/Assets/Iteration-2-aseets/pictures/form-banner.png?raw=true"
            alt="Form Banner"
          />
          <p>Anasayfa - <strong>Sipariş Oluştur</strong></p>
        </div>
      </div>

      <div className="container">
        <h2 className="pizza-title">Position Absolute Acı Pizza</h2>
        <div className="price-rating-container">
          <p className="price">85.50₺</p>
          <p className="rating">4.9 (200)</p>
        </div>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>

        <div className="selection-container">
          {/* Boyut Seçimi */}
          <div className="dough-group">
            <label>Boyut Seç <span style={{ color: '#CE2829' }}>*</span></label><br />
            <label className="container">S
              <input type="radio" name="size" value="S" onChange={handleSizeChange} />
              <span className="checkmark"></span>
            </label><br />
            <label className="container">M
              <input type="radio" name="size" value="M" onChange={handleSizeChange} />
              <span className="checkmark"></span>
            </label><br />
            <label className="container">L
              <input type="radio" name="size" value="L" onChange={handleSizeChange} />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="pastry-group">
          <label>Hamur Seç <span style={{ color: '#CE2829' }}>*</span></label><br />
          <select name="crust" value={crust} onChange={handleCrustChange}>
            <option value="">Hamur Kalınlığı</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>

        <div className="additional-material-group">
          <div className="material-header">
            <label>Ek Malzemeler</label><br />
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          </div>
          <div className="material-checkboxes">
            <div className="checkbox-group">
              <div>
                <input type="checkbox" value="Pepperoni" onChange={handleExtrasChange} /> Pepperoni
              </div>
              <div>
                <input type="checkbox" value="Sosis" onChange={handleExtrasChange} /> Sosis
              </div>
              <div>
                <input type="checkbox" value="Kanada Jambonu" onChange={handleExtrasChange} /> Kanada Jambonu
              </div>
            </div>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" value="Tavuk Izgara" onChange={handleExtrasChange} /> Tavuk Izgara
              </div>
              <div>
                <input type="checkbox" value="Soğan" onChange={handleExtrasChange} /> Soğan
              </div>
              <div>
                <input type="checkbox" value="Domates" onChange={handleExtrasChange} /> Domates
              </div>
            </div>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" value="Mısır" onChange={handleExtrasChange} /> Mısır
              </div>
              <div>
                <input type="checkbox" value="Sucuk" onChange={handleExtrasChange} /> Sucuk
              </div>
              <div>
                <input type="checkbox" value="Jalepeno" onChange={handleExtrasChange} /> Jalepeno
              </div>
            </div>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" value="Sarımsak" onChange={handleExtrasChange} /> Sarımsak
              </div>
              <div>
                <input type="checkbox" value="Biber" onChange={handleExtrasChange} /> Biber
              </div>
              <div>
                <input type="checkbox" value="Ananas" onChange={handleExtrasChange} /> Ananas
              </div>
            </div>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" value="Kabak" onChange={handleExtrasChange} /> Kabak
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          {/* Sipariş Notu */}
          <label>Sipariş Notu:</label>
          <textarea
            className="note-input"
            value={note}
            onChange={handleNoteChange}
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          />
        </div>

        <div className="section-container">
          {/* Sol kısım: Miktar Kontrolleri */}
          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange("decrease")}>-</button>
            <span className="quantity-box">{quantity}</span>
            <button onClick={() => handleQuantityChange("increase")}>+</button>
          </div>

          {/* Sağ kısım: Sipariş Özeti */}
          <div className="section order-summary">
            <h3>Sipariş Toplamı</h3>
            <p>Seçimler: 25.00₺</p>
            <p className="total">Toplam: 110.50₺</p>
          </div>
        </div>

        <div className="order-button-container">
          <button className="order-button">SİPARİŞ VER</button>
        </div>
      </div>

   
      <footer>
        <div className="footer-content">
          
          <div className="footer-item">
            <img className="footer-logo" src="/Assets/Iteration-2-aseets/footer/logo-footer.svg" alt="Logo" />
            <div>
              <img src="/Assets/Iteration-2-aseets/footer/icons/icon-1.png?raw=true" alt="Address Icon" />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div>
              <img src="/Assets/Iteration-2-aseets/footer/icons/icon-2.png?raw=true" alt="Email Icon" />
              <p><a href="mailto:aciktim@teknolojikyemekler.com">aciktim@teknolojikyemekler.com</a></p>
            </div>
            <div>
              <img src="/Assets/Iteration-2-aseets/footer/icons/icon-3.png?raw=true" alt="Phone Icon" />
              <p><a href="tel:+902161234567">+90 216 123 45 67</a></p>
            </div>
          </div>

          <div className="footer-menu">
            <h4>Hot Menu</h4>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
              <li>Beyaz Console Frosty</li>
            </ul>
          </div>

          <div className="social-media">
            <h4>İnstagram</h4>
            <div className="social-media-img">
              <img src="/Assets/Iteration-2-aseets/footer/insta/li-0.png?raw=true" alt="Instagram" />
              <img src="/Assets/Iteration-2-aseets/footer/insta/li-1.png?raw=true" alt="Instagram" />
              <img src="/Assets/Iteration-2-aseets/footer/insta/li-2.png?raw=true" alt="Instagram" />
              <img src="/Assets/Iteration-2-aseets/footer/insta/li-3.png?raw=true" alt="Instagram" />
              <img src="/Assets/Iteration-2-aseets/footer/insta/li-4.png?raw=true" alt="Instagram" />
              <img src="/Assets/Iteration-2-aseets/footer/insta/li-5.png?raw=true" alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

