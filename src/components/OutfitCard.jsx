function OutfitCard({ outfit, onLihatDetail }) {
  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(harga);
  };

  return (
    <div className="outfit-card">
      <div className="card-icon-container">
        <div className="card-icon-wrapper">
          {outfit.icon}
        </div>
        <span className="card-kategori">{outfit.kategori}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{outfit.namaOutfit}</h3>
        <div className="card-details">
          <span className="card-warna">
            <span className="color-dot" style={{ backgroundColor: getWarnaHex(outfit.warna) }}></span>
            {outfit.warna}
          </span>
          <span className="card-harga">{formatHarga(outfit.harga)}</span>
        </div>
        <p className="card-desc">{outfit.deskripsi}</p>
        <button className="btn-detail" onClick={() => onLihatDetail(outfit)}>
          Lihat Detail
        </button>
      </div>
    </div>
  );
}

function getWarnaHex(warna) {
  const warnaMap = {
    'Skyblue': '#87CEEB',
    'White': '#FFFFFF',
    'Black': '#1a1a1a',
    'Beige': '#F5F5DC'
  };
  return warnaMap[warna] || '#ccc';
}

export default OutfitCard;
