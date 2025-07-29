import { FaHeadphones, FaCreditCard, FaShieldAlt, FaTruck, FaUndo } from 'react-icons/fa';

const InfoFeatures = () => {
  const features = [
    {
      icon: <FaHeadphones className="text-2xl text-green-600" />,
      title: '24/7 SUPPORT',
      desc: 'Support every time',
    },
    {
      icon: <FaCreditCard className="text-2xl text-yellow-600" />,
      title: 'ACCEPT PAYMENT',
      desc: 'Visa, Card, Master',
    },
    {
      icon: <FaTruck className="text-2xl text-green-700" />,
      title: 'FREE SHIPPING',
      desc: 'Order over ₹10000',
    },
    {
      icon: <FaUndo className="text-2xl text-yellow-600" />,
      title: 'Guaranteed',
      desc: 'Guaranteed product',
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {feature.icon}
            <h4 className="text-sm font-bold text-gray-700">{feature.title}</h4>
            <p className="text-xs text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoFeatures;
