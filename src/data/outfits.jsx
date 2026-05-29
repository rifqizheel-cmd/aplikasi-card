import { FaTshirt } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import { PiPantsFill } from 'react-icons/pi';
import { FaHatCowboy } from 'react-icons/fa';
import { GiSleevelessJacket } from 'react-icons/gi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FaGlasses } from 'react-icons/fa';

const outfits = [
  {
    id: 1,
    namaOutfit: 'Casual White Tee',
    kategori: 'Atasan',
    warna: 'Putih',
    harga: 250000,
    icon: <FaTshirt />,
    deskripsi: 'Kaos cotton premium dengan desain minimalist, cocok untuk gaya casual sehari-hari.'
  },
  {
    id: 2,
    namaOutfit: 'Running Shoes Pro',
    kategori: 'Sepatu',
    warna: 'Hitam',
    harga: 850000,
    icon: <GiRunningShoe />,
    deskripsi: 'Sepatu lari dengan teknologi cushioning advanced untuk kenyamanan maksimal.'
  },
  {
    id: 3,
    namaOutfit: 'Classic Denim Jeans',
    kategori: 'Bawahan',
    warna: 'Biru',
    harga: 450000,
    icon: <PiPantsFill />,
    deskripsi: 'Celana jeans denim dengan cutting klasik yang timeless dan nyaman dipakai.'
  },
  {
    id: 4,
    namaOutfit: 'Western Cowboy Hat',
    kategori: 'Aksesoris',
    warna: 'Coklat',
    harga: 350000,
    icon: <FaHatCowboy />,
    deskripsi: 'Topi cowboy authentic dengan material berkualitas tinggi dan desain klasik.'
  },
  {
    id: 5,
    namaOutfit: 'Urban Sleeveless Jacket',
    kategori: 'Atasan',
    warna: 'Hitam',
    harga: 550000,
    icon: <GiSleevelessJacket />,
    deskripsi: 'Jaket tanpa lengan dengan desain urban yang stylish dan cocok untuk layering.'
  },
  {
    id: 6,
    namaOutfit: 'Silk Pocket Square',
    kategori: 'Aksesoris',
    warna: 'Merah',
    harga: 180000,
    icon: <FaHandHoldingHeart />,
    deskripsi: 'Syal sutra halus dengan motif elegant untuk tampilan formal yang berkelas.'
  },
  {
    id: 7,
    namaOutfit: 'Leather Crossbody Bag',
    kategori: 'Tas',
    warna: 'Coklat',
    harga: 750000,
    icon: <HiOutlineShoppingBag />,
    deskripsi: 'Tas selempang kulit genuine dengan desain modern dan ruang penyimpanan luas.'
  },
  {
    id: 8,
    namaOutfit: 'Classic Aviator Glasses',
    kategori: 'Aksesoris',
    warna: 'Gold',
    harga: 420000,
    icon: <FaGlasses />,
    deskripsi: 'Kacamata aviator dengan frame metal gold dan lensa UV protection.'
  }
];

export default outfits;