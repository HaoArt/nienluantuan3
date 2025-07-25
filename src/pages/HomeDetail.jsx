import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

export default function RoomDetail() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));

  if (!room) return <p>Không tìm thấy phòng.</p>;

  return (
    <div>
      <h1>{room.name}</h1>
      <img src={room.image} alt={room.name} style={{ width: '100%', maxWidth: '600px' }} />
      <p>{room.description}</p>
      <p><strong>Giá:</strong> {room.price.toLocaleString()} VND / đêm</p>
      <Link to="/">← Quay lại danh sách</Link>
    </div>
  );
}
