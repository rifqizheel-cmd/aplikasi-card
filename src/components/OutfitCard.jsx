import { FaArrowRight } from 'react-icons/fa';

const OutfitCard = ({ outfit }) => {
  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(harga);
  };

  return (
    <div className="outfit-card">
      <div className="card-icon-wrapper">
        <div className="card-icon">
          {outfit.icon}
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <span className="card-kategori">{outfit.kategori}</span>
          <span className="card-warna">{outfit.warna}</span>
        </div>
        
        <h3 className="card-title">{outfit.namaOutfit}</h3>
        <p className="card-deskripsi">{outfit.deskripsi}</p>
        
        <div className="card-footer">
          <span className="card-harga">{formatHarga(outfit.harga)}</span>
          <button className="detail-btn">
            Lihat Detail
            <FaArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;