import React from 'react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>ĐẶT PHÒNG KHÁC SẠN</h1>
        <p>Đây là trang chủ đơn giản được xây dựng bằng React + Vite.</p>
      </header>

      <main style={styles.main}>
        <h2>Giới thiệu</h2>
        <p>
          Trang web này được tạo nhằm mục đích thực hiện đề tài niên luận về
          React. Tôi sử dụng Vite để tăng tốc độ phát triển và tối ưu hiệu suất.
        </p>
      </main>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {rooms.map((room) => (
          <div key={room.id} style={styles.card}>
            <img src={room.image} alt={room.name} style={styles.image} />
            <h3>{room.name}</h3>
            <p>Giá: {room.price.toLocaleString()} VND / đêm</p>
            <Link to={`/room/${room.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
      <footer style={styles.footer}>
        <p>&copy; 2025 - Sinh viên: Hoàng Nhật Hào</p>
      </footer>
    </div>
  );
}

const styles = {
  card: {
    width: '300px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '10px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  main: {
    marginTop: '20px',
    lineHeight: '1.6',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    color: '#777',
    fontSize: '14px',
  },
};
