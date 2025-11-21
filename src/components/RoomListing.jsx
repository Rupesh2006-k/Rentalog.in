import RoomCard from './RoomCard'; // ✅ fixed import

const RoomListing = ({ onViewDetails }) => {
  const rooms = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1743008019164-2d810a54915e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMHJlbnRhbHxlbnwxfHx8fDE3NjIwNzg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 12000,
      city: 'Mumbai',
      area: 'Andheri West',
      ownerName: 'Priya Sharma',
      verified: true,
      roomType: 'Private Room',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1633505765486-e404bbbec654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwYXBhcnRtZW50fGVufDF8fHx8MTc2MjA3ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 18000,
      city: 'Bangalore',
      area: 'Koramangala',
      ownerName: 'Rahul Mehta',
      verified: true,
      roomType: 'Studio',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MjA3ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 8500,
      city: 'Delhi',
      area: 'Lajpat Nagar',
      ownerName: 'Amit Kumar',
      verified: false,
      roomType: 'Shared Room',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1680187287371-340b4b12745f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXBhcnRtZW50JTIwdmlld3xlbnwxfHx8fDE3NjIwNjI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 15000,
      city: 'Pune',
      area: 'Hinjewadi',
      ownerName: 'Sneha Patel',
      verified: true,
      roomType: 'Private Room',
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1659949294512-95abb6aebf6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcm9vbXxlbnwxfHx8fDE3NjIwNzg1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 22000,
      city: 'Mumbai',
      area: 'Bandra',
      ownerName: 'Karan Singh',
      verified: true,
      roomType: 'Studio',
    },
    {
      id: '6',
      image:
        'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIwNjA5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 10000,
      city: 'Hyderabad',
      area: 'Gachibowli',
      ownerName: 'Neha Reddy',
      verified: true,
      roomType: 'Private Room',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Available Rooms</h2>
          <p className="text-gray-600">
            Discover your next home from our curated listings
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomListing;
